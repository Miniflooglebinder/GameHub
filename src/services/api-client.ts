import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

// The API Key is hidden from GitHub
const apiKey = import.meta.env.VITE_API_KEY;

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});
