import Genre from "@/entities/Genre";
import Platform from "@/entities/Platform";
import Publisher from "@/entities/Publisher";

// Game object interface
export default interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  publishers: Publisher[];
  metacritic: number;
  rating_top: number;
  ratings_count: number;
  description_raw: string;
}
