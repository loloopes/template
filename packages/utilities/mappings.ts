import { LooseObject } from "./types/types";

const mapObjectKeys = (obj: LooseObject, mapMethod: LooseObject) => {
  const aux: LooseObject = {};
  for (const key in obj) aux[mapMethod[key]] = obj[key];
  return aux;
};

export const mapDataKeys = (input: Array<LooseObject>, mapMethod: LooseObject) => {
  const aux: Array<LooseObject> = [];
  for (let i = 0; i < input.length; i++) {
    aux.push(mapObjectKeys(input[i], mapMethod));
  }
  return aux;
};
