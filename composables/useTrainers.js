import { useFetch } from "#app";
import { VITE_SERVER_ORIGIN } from "~/utils/env";

export default async() => {
  //  console.log(VITE_SERVER_ORIGIN);
   const response = await useFetch(`${VITE_SERVER_ORIGIN}/api/trainers`);
  // const response = await useFetch(`http://localhost:3000/api/trainers`);
  return response;
};
