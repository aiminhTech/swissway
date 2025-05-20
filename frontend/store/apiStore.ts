import { create } from "zustand";
import {
  CategoryType,
  InfoContentType,
  InfoTitleType,
  LanguageEnum,
} from "@/models/models";
import {
  fetchCategories,
  fetchInfoContents,
  fetchInfoTitles,
} from "@/services/api";

type ApiStore = {
  language: LanguageEnum;
  categories: CategoryType[] | null;
  infoTitles: InfoTitleType[] | null;
  infoContents: InfoContentType[] | null;
  fetchCategories: (code: string) => Promise<void>;
  fetchInfoTitles: (code: string, cat: string) => Promise<void>;
  fetchInfoContents: (code: string, title: string) => Promise<void>;
};

export const useApiStore = create<ApiStore>((set) => ({
  language: LanguageEnum.EN,
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
  fetchInfoContents: async (code: string, title: string) => {
    try {
      const data = await fetchInfoContents(code, title);
      set({ infoContents: data });
    } catch (err) {}
  },
}));
