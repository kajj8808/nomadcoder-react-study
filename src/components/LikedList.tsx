import { useRecoilValue } from "recoil";
import { countryListAtom } from "../atom";
import CountryItem from "./CountryItem";

function LikedList() {
  const countryList = useRecoilValue(countryListAtom);

  return (
    <ul>
      {countryList.liked.map((item) => (
        <CountryItem
          id={item.key}
          key={item.key}
          countryName={item.value}
          fristIcon="👎"
          category="liked"
        />
      ))}
    </ul>
  );
}

export default LikedList;
