import axios from "axios";
import { PhotoDto } from "./types";

const loadPhotos = async (page = 0, limit = 5): Promise<PhotoDto[]> => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`
  );

  return res.data;
};

export { loadPhotos };
