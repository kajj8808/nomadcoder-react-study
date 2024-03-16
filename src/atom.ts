import { atom } from "recoil";

export const workingAtom = atom<boolean>({
  key: "warking",
  default: false,
});

export const roundAtom = atom<number>({
  key: "round",
  default: 0,
});

export const goalAtom = atom<number>({
  key: "goal",
  default: 0,
});
