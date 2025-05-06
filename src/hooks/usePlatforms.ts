import platforms from "@/data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// Use static parent platform data from `platforms.ts`
const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
