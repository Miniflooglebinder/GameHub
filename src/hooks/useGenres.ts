import genres from "@/data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Use the static data in `genres.ts`
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
