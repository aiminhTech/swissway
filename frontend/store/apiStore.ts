import { create } from "zustand";
import { CategoryType, InfoContentType, InfoTitleType } from "@/models/models"; // Adjust path
import {
  fetchCategories,
  fetchInfoContents,
  fetchInfoTitles,
} from "@/services/api";

type ApiStore = {
  categories: CategoryType[] | null;
  infoTitles: InfoTitleType[] | null;
  infoContents: InfoContentType[] | null;
  fetchCategories: (code: string) => Promise<void>;
  fetchInfoTitles: (code: string, cat: string) => Promise<void>;
  fetchInfoContents: (code: string) => Promise<void>;
};

export const useApiStore = create<ApiStore>((set) => ({
  categories: null,
  infoTitles: null,
  infoContents: null,

  fetchCategories: async (code: string) => {
    try {
      const data = await fetchCategories(code);
      set({ categories: data });
    } catch (err) {}
  },
  fetchInfoTitles: async (code: string, cat: string) => {
    try {
      const data = await fetchInfoTitles(code, cat);
      set({ infoTitles: data });
    } catch (err) {}
  },
  fetchInfoContents: async (title: string) => {
    try {
      const data = await fetchInfoContents(title);
      set({ infoContents: data });
    } catch (err) {}
  },
}));
