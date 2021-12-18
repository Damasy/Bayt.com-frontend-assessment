import { types } from "../models/enums";
import { fetchData } from "./Data-fetch";


const handleDataSrc = (src: any[] | string) => {
  if(typeof src === "string") {
    return fetchData(src);
  }
  return src;
};

const handleTitle = (type: number) => {
  const typeEnum = types;
  let title = typeEnum[type];
  title = title.split('-').join(' ');
  return title;
};