import a from "../data/MockData.json";
import { ItemAlt, ItemData } from "../data/objects/Item";

export async function callApiFetch(path: string) {
  //const res = await fetch(path);
  //return await res.json();
  return Object.keys(a).map((key) => a[key as keyof typeof a]);
}
export const useApiMock = (path: string) => {
  console.log("mock " + path);
  return a;
};
