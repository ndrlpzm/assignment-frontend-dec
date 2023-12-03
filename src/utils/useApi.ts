import { itemListMock } from "../data/objects/Item";

export const useApiFetch = (path: string) => {
  //   const response = fetch(path)
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         return result;
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   return response;
};
export const useApiMock = (path: string) => {
  console.log("mock " + path);
  return itemListMock;
};
