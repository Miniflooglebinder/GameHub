import { create } from "zustand";

// Follow the "query pattern" and store query info in one spot
interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface QueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number | undefined) => void;
  setPlatformId: (platformId: number | undefined) => void;
  setSortOrder: (sortOrder: string | undefined) => void;
  setSearchText: (searchText: string | undefined) => void;
}

const useGameQueryStore = create<QueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId: platformId } })),
  setSortOrder: (sortOrder) => set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
}));

export default useGameQueryStore;
