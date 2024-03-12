import { useSetRecoilState } from "recoil";
import { Category } from "../types";
import { countryListAtom } from "../atom";

interface ICountryItem {
  key: number;
  countryName: string;
  fristIcon: string;
  secondIcon?: string;
  category: Category;
  id: number;
}
interface IHandleCountryChange {
  id: number;
  prev: Category;
  next: Category;
}
interface IHandleCountryDelete {
  id: number;
  category: Category;
}
function CountryItem({
  countryName,
  fristIcon,
  secondIcon,
  category,
  id,
}: ICountryItem) {
  const setCountryList = useSetRecoilState(countryListAtom);

  const handleCountryChange = ({ id, prev, next }: IHandleCountryChange) => {
    setCountryList((currentCountryList) => ({
      ...currentCountryList,
      [prev]: currentCountryList[prev].filter((item) => item.key != id),
      [next]: [{ key: id, value: countryName }, ...currentCountryList[next]],
    }));
  };

  const handleCountryDelete = ({ id, category }: IHandleCountryDelete) => {
    setCountryList((currentCountryList) => ({
      ...currentCountryList,
      [category]: currentCountryList[category].filter((item) => item.key != id),
    }));
  };

  const onFirstIconClick = () => {
    switch (category) {
      case "wantToVisit":
        handleCountryChange({ id, prev: "wantToVisit", next: "visited" });
        break;
      case "visited":
        handleCountryChange({ id, prev: "visited", next: "liked" });
        break;
      case "liked":
        handleCountryChange({ id, prev: "liked", next: "visited" });
        break;
    }
  };

  const onSecondIconClick = () => {
    handleCountryDelete({ id, category });
  };

  return (
    <li>
      <h4>{countryName}</h4>
      <button onClick={onFirstIconClick}> {fristIcon} </button>
      {secondIcon ? (
        <button onClick={onSecondIconClick}> {secondIcon} </button>
      ) : null}
    </li>
  );
}

export default CountryItem;
