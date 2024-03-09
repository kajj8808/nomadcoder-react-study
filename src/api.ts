const BASE_URL = "https://disney_api.nomadcoders.workers.dev";

export interface ICharcter {
  id: number;
  name: string;
  imageUrl: string;
}
export function fetchCharacters() {
  return fetch(`${BASE_URL}/characters`).then((res) => res.json());
}

export interface ICharcter {
  id: number;
  name: string;
  imageUrl: string;
}
export function fetchCharacterDetail(id: string) {
  return fetch(`${BASE_URL}/characters/${id}`).then((res) => res.json());
}
