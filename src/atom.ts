import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Country } from "./types";

export interface ICountryList {
  wantToVisit: Country[];
  visited: Country[];
  liked: Country[];
}

const { persistAtom } = recoilPersist();

export const countryListAtom = atom<ICountryList>({
  key: "countryList",
  default: {
    wantToVisit: [],
    visited: [],
    liked: [],
  },
  effects_UNSTABLE: [persistAtom],
});
