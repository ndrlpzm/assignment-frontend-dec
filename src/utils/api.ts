import mock from "../data/MockData.json";

export async function callApiFetch(path: string) {
  //const res = await fetch(path);
  //return await res.json();
  return Object.keys(mock).map((key) => mock[key as keyof typeof mock]);
}
