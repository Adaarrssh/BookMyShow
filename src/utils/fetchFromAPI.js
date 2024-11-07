import axios from "axios";

export const BASE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=16a4259";
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);

  return data;
};
