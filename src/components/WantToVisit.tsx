import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { countryListAtom } from "../atom";
import { isCountryDuplicated } from "../utiles";
import CountryItem from "./CountryItem";
import { Country } from "../types";

interface IFrom {
  countryName: string;
}

function WantToVisit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFrom>();
  const [countryList, setCountryList] = useRecoilState(countryListAtom);

  const onValid = (event: IFrom) => {
    if (
      isCountryDuplicated({
        countryList: countryList,
        newCountry: event.countryName,
      })
    ) {
      setError("countryName", { message: "😓 duplicated!" });
      return;
    }

    const newCountryItem: Country = {
      key: new Date().getTime(),
      value: event.countryName,
    };

    setCountryList((currentCountryList) => ({
      ...currentCountryList,
      wantToVisit: [...currentCountryList.wantToVisit, newCountryItem],
    }));
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          {...register("countryName", { required: "😠 required!" })}
          placeholder="이름"
        />
        <span style={{ color: "tomato" }}> {errors.countryName?.message} </span>
        <button>가자!</button>
      </form>
      <ul>
        {countryList.wantToVisit.map((item) => (
          <CountryItem
            id={item.key}
            key={item.key}
            countryName={item.value}
            fristIcon="✅"
            secondIcon="🗑️"
            category="wantToVisit"
          />
        ))}
      </ul>
    </section>
  );
}

export default WantToVisit;
