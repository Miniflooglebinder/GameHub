import { Platform } from "@/entities/Platform";

// Game object interface
export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  ratings_count: number;
  description_raw: string;
}
