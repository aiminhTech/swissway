import { create } from "zustand";
import {
  CategoryType,
  FetchError,
  InfoContentType,
  InfoTitleType,
  LanguageEnum,
  LocaleType,
  QuizListType,
} from "@/models/models";
import {
  fetchCategories,
  fetchInfoContents,
  fetchInfoTitles,
  fetchLocale,
  fetchQuizzes,
} from "@/services/api";

type ApiStore = {
  language: LanguageEnum;
  setLanguage: (lang: LanguageEnum) => void;
  languages: LocaleType[] | undefined;
  categories: CategoryType[] | undefined;
  infoTitles: InfoTitleType[] | undefined;
  infoContents: InfoContentType[] | undefined;
  quizzes: Record<string, QuizListType[]>;
  fetchLanguages: () => Promise<void>;
  fetchCategories: (code: string) => Promise<void>;
  fetchInfoTitles: (code: string, cat: string) => Promise<void>;
  fetchInfoContents: (code: string, title: string) => Promise<void>;
  fetchQuizzes: (cat: string) => Promise<void>;
  languagesError: FetchError | undefined;
  categoriesError: FetchError | undefined;
  infoTitlesError: FetchError | undefined;
  contentsError: FetchError | undefined;
  quizzesError: Record<string, FetchError | undefined>;
};

function isFetchError(data: any): data is FetchError {
  return data && typeof data === "object" && "message" in data;
}
const noDataErr = { message: "No contents found." };

export const useApiStore = create<ApiStore>((set) => ({
  language: LanguageEnum.EN,
  setLanguage: (lang: LanguageEnum) => set({ language: lang }),

  languages: undefined,
  languagesError: undefined,
  categories: undefined,
  categoriesError: undefined,
  infoTitles: undefined,
  infoContents: undefined,
  infoTitlesError: undefined,
  contentsError: undefined,
  quizzes: {},
  quizzesError: {},

  fetchLanguages: async () => {
    try {
      const res = await fetchLocale();

      if (isFetchError(res)) {
        set({ languages: undefined, languagesError: res });
        return;
      }

      if (!res || res.length === 0) {
        set({ language: undefined, languagesError: noDataErr });
        return;
      }

      set({ languages: res, languagesError: undefined });
    } catch (err: any) {
      set({
        languages: undefined,
        languagesError: { message: err?.message || "Unknown error" },
      });
    }
  },

  fetchCategories: async (code: string) => {
    try {
      const res = await fetchCategories(code);

      if (isFetchError(res)) {
        set({ categories: undefined, categoriesError: res });
        return;
      }

      if (!res || res.length === 0) {
        set({ categories: undefined, categoriesError: noDataErr });
        return;
      }

      set({ categories: res, categoriesError: undefined });
    } catch (err: any) {
      set({
        categories: undefined,
        categoriesError: { message: err?.message || "Unknown error" },
      });
    }
  },
  fetchInfoTitles: async (code: string, cat: string) => {
    try {
      const res = await fetchInfoTitles(code, cat);

      if (isFetchError(res)) {
        set({ infoTitles: undefined, infoTitlesError: res });

        return;
      }

      if (!res || res.length === 0) {
        set({ infoTitles: undefined, infoTitlesError: noDataErr });
        return;
      }

      set({ infoTitles: res, infoTitlesError: undefined });
    } catch (err: any) {
      set({
        infoTitles: undefined,
        infoTitlesError: { message: err?.message || "Unknown error" },
      });
    }
  },

  fetchInfoContents: async (code: string, title: string) => {
    try {
      const res = await fetchInfoContents(code, title);

      if (isFetchError(res)) {
        set({ infoContents: undefined, contentsError: res });
        return;
      }

      if (!res || res.length === 0) {
        set({ infoContents: undefined, contentsError: noDataErr });

        return;
      }

      set({ infoContents: res, contentsError: undefined });
    } catch (err: any) {
      set({
        infoContents: undefined,
        contentsError: { message: err?.message || "Unknown error" },
      });
    }
  },
  fetchQuizzes: async (cat: string) => {
    try {
      const res = await fetchQuizzes(cat);

      if (isFetchError(res)) {
        set((state) => ({
          quizzes: { ...state.quizzes, [cat]: [] },
          quizzesError: { ...state.quizzesError, [cat]: res },
        }));
        return;
      }

      if (!res || res.length === 0) {
        set((state) => ({
          quizzes: { ...state.quizzes, [cat]: [] },
          quizzesError: { ...state.quizzesError, [cat]: noDataErr },
        }));
        return;
      }

      set((state) => ({
        quizzes: { ...state.quizzes, [cat]: res },
        quizzesError: { ...state.quizzesError, [cat]: undefined },
      }));
    } catch (err: any) {
      set((state) => ({
        quizzes: { ...state.quizzes, [cat]: [] },
        quizzesError: {
          ...state.quizzesError,
          [cat]: { message: err?.message || "Unknown error" },
        },
      }));
    }
  },
}));
