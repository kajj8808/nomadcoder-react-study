import { useRecoilValue } from "recoil";
import { countryListAtom } from "../atom";
import CountryItem from "./CountryItem";

function VisitedList() {
  const countryList = useRecoilValue(countryListAtom);

  return (
    <ul>
      {countryList.visited.map((item) => (
        <CountryItem
          id={item.key}
          key={item.key}
          countryName={item.value}
          fristIcon="👍"
          secondIcon="❌"
          category="visited"
        />
      ))}
    </ul>
  );
}
export default VisitedList;
