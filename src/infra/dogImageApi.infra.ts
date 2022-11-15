import useSWR from "swr";
import axios from "axios";

// https://stackoverflow.com/questions/63453491/how-to-export-axios-create-in-typescript
const client = axios.create({
    baseURL: "https://dog.ceo/api/breeds/image/random",
    headers: {'Content-Type': 'application/json'},
  });

  /** 画像取得 */
export type GetDogImageRes = {
  status?: string;
  message?: string;
};
const getDogImage = async () => {
  const { data } = await client.get<GetDogImageRes>("", {});

  return data;
};
export const useDogImage = () => {
  // const res = useSWR('/dog/image', () => getDogImage(req));
  const res = useSWR('/dog/image', getDogImage);

  return {
    status: res.data?.status,
    dogImageURL: res.data?.message,
  };
};

