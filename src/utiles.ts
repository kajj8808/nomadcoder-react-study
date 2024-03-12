import { ICountryList } from "./atom";
import { Category } from "./types";

interface IIsCountryDuplicated {
  countryList: ICountryList;
  newCountry: string;
}

/** Country List 에서 중복을 검사하는 함수입니다. */
export function isCountryDuplicated({
  countryList,
  newCountry,
}: IIsCountryDuplicated) {
  for (const category of Object.keys(countryList) as Category[]) {
    for (const countryItem of countryList[category]) {
      if (countryItem.value === newCountry) {
        return true;
      }
      continue;
    }
  }

  return false;
}
