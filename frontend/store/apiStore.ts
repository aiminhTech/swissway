import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { GroupedTitle } from "@/models/model";

import {
  fetchCategories,
  fetchChecklists,
  fetchEssentialInfo,
  fetchInfoContents,
  fetchInfoTitles,
  fetchLocale,
  fetchQuizList,
} from "@/services/api";
import {
  ApiError,
  Locales,
  ApiLocales,
  ApiCategories,
  ApiInfoTitles,
  ApiInfoContents,
  ApiChecklists,
  ApiQuizLists,
} from "@/models/api-model";
import { Either } from "effect";

type ApiStore = {
  language: Locales;
  setLanguage: (lang: Locales) => void;

  localeState: {
    locales?: ApiLocales;
    error?: ApiError;
  };
  fetchLocales: () => Promise<void>;

  categoryState: {
    categories?: ApiCategories;
    error?: ApiError;
  };
  fetchCategories: (code: string) => Promise<void>;

  infoTitleState: {
    titles?: ApiInfoTitles;
    error?: ApiError;
  };
  fetchInfoTitles: (code: string, cat: string) => Promise<void>;

  infoEssentialTitleState: {
    titles?: ApiInfoTitles;
    error?: ApiError;
  };
  fetchInfoEssentialTitles: (code: string) => Promise<void>;

  infoContentState: {
    contents?: ApiInfoContents;
    error?: ApiError;
  };
  fetchInfoContents: (code: string, title: string) => Promise<void>;

  checklistState: {
    checklists?: ApiChecklists;
    error?: ApiError;
  };
  fetchChecklist: (code: string) => Promise<void>;

  quizState: {
    quizzes: Record<string, ApiQuizLists>;
    error: Record<string, ApiError | undefined>;
  };
  fetchQuizzes: (cat: string) => Promise<void>;

  lastSeenTopics: GroupedTitle[] | undefined;
  setLastSeenTopics: (groupedTitle: GroupedTitle) => void;

  checkedChecklist: Record<string, string[]>;
  toggleChecklistItem: (title: string, item: string) => void;
};

export const useApiStore = create<ApiStore>()(
  persist(
    (set, get) => ({
      language: Locales.EN,
      setLanguage: (lang) => set({ language: lang }),

      // localeState
      localeState: { locales: undefined, error: undefined },
      fetchLocales: async () => {
        const res = await fetchLocale();

        if (Either.isLeft(res)) {
          set({ localeState: { locales: undefined, error: res.left } });
        } else {
          set({ localeState: { locales: res.right, error: undefined } });
        }
      },

      // categoryState
      categoryState: { categories: undefined, error: undefined },
      fetchCategories: async (code) => {
        const res = await fetchCategories(code);
        console.log(res);

        if (Either.isLeft(res)) {
          set({ categoryState: { categories: undefined, error: res.left } });
        } else {
          set({ categoryState: { categories: res.right, error: undefined } });
        }
      },

      // infoTitleState
      infoTitleState: { titles: undefined, error: undefined },
      fetchInfoTitles: async (code, cat) => {
        const res = await fetchInfoTitles(code, cat);

        ApiInfoTitles;
        if (Either.isLeft(res)) {
          set({ infoTitleState: { titles: undefined, error: res.left } });
        } else {
          set({ infoTitleState: { titles: res.right, error: undefined } });
        }
      },

      // infoEssentialTitleState
      infoEssentialTitleState: { titles: undefined, error: undefined },
      fetchInfoEssentialTitles: async (code) => {
        const res = await fetchEssentialInfo(code);

        if (Either.isLeft(res)) {
          set({
            infoEssentialTitleState: { titles: undefined, error: res.left },
          });
        } else {
          set({
            infoEssentialTitleState: { titles: res.right, error: undefined },
          });
        }
      },

      // infoContentState
      infoContentState: { contents: undefined, error: undefined },
      fetchInfoContents: async (code, title) => {
        const res = await fetchInfoContents(code, title);

        if (Either.isLeft(res)) {
          set({ infoContentState: { contents: undefined, error: res.left } });
        } else {
          set({ infoContentState: { contents: res.right, error: undefined } });
        }
      },

      // checklistState
      checklistState: { checklists: undefined, error: undefined },
      fetchChecklist: async (code) => {
        const res = await fetchChecklists(code);
        if (Either.isLeft(res)) {
          set({ checklistState: { checklists: undefined, error: res.left } });
        } else {
          set({ checklistState: { checklists: res.right, error: undefined } });
        }
      },

      // quizState
      quizState: { quizzes: {}, error: {} },
      fetchQuizzes: async (cat) => {
        const res = await fetchQuizList(cat);
        if (Either.isLeft(res)) {
          set((state) => ({
            quizState: {
              quizzes: { ...state.quizState.quizzes },
              error: { ...state.quizState.error, [cat]: res.left },
            },
          }));
        } else {
          set((state) => ({
            quizState: {
              quizzes: { ...state.quizState.quizzes, [cat]: res.right },
              error: { ...state.quizState.error, [cat]: undefined },
            },
          }));
        }
      },

      // lastSeenTopics and setter
      lastSeenTopics: undefined,
      setLastSeenTopics: (groupedTitle) =>
        set((state) => ({
          lastSeenTopics: [
            ...(state.lastSeenTopics || []).filter(
              (t) => t.base !== groupedTitle.base
            ),
            groupedTitle,
          ],
        })),

      // checkedChecklist and toggle
      checkedChecklist: {},
      toggleChecklistItem: (title, item) =>
        set((state) => {
          const current = state.checkedChecklist[title] || [];
          const exists = current.includes(item);
          const updated = exists
            ? current.filter((i) => i !== item)
            : [...current, item];
          return {
            checkedChecklist: {
              ...state.checkedChecklist,
              [title]: updated,
            },
          };
        }),
    }),
    {
      name: "api-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        language: state.language,
        checklistState: state.checklistState,
        //quizState: state.quizState,
        checkedChecklist: state.checkedChecklist,
        lastSeenTopics: state.lastSeenTopics,
      }),
    }
  )
);
