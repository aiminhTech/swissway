import {
  CategoryType,
  ChecklistType,
  FetchError,
  InfoContentType,
  InfoTitleType,
  LocaleType,
  QuizListType,
  QuizType,
} from "@/models/models";

const baseUrl = "https://swissway.onrender.com/api";

export async function fetchLocale() {
  try {
    const res = await fetch(`${baseUrl}/locale`);

    if (!res.ok) {
      return {
        message: `Failed to fetch locales. Please try again`,
      } as FetchError;
    }

    return res.json() as Promise<LocaleType[]>;
  } catch (e) {
    return {
      message: `Unexpected error: ${e}. Please try again`,
    } as FetchError;
  }
}

export async function fetchCategories(code: string) {
  const res = await fetch(`${baseUrl}/category?code=${code}`);

  if (!res.ok) {
    return {
      message: `Failed to fetch categories. Please try again`,
    } as FetchError;
  }

  return res.json() as Promise<CategoryType[]>;
}

export async function fetchInfoTitles(code: string, cat: string) {
  const res = await fetch(`${baseUrl}/info?code=${code}&cat=${cat}`);

  if (!res.ok) {
    return {
      message: `Failed to fetch info titles. Please try again`,
    } as FetchError;
  }

  return res.json() as Promise<InfoTitleType[]>;
}

export async function fetchInfoContents(code: string, title: string) {
  const res = await fetch(
    `${baseUrl}/info/content?code=${code}&infoTitle=${title}`
  );

  if (!res.ok) {
    return {
      message: `Failed to fetch info contents. Please try again`,
    } as FetchError;
  }

  return res.json() as Promise<InfoContentType[]>;
}

export async function fetchQuizzes(catName: string) {
  const res = await fetch(`${baseUrl}/quiz?cat=${catName}`);

  if (!res.ok) {
    return {
      message: `Failed to fetch quizzes. Please try again`,
    } as FetchError;
  }

  return res.json() as Promise<QuizListType[]>;
}

export async function fetchQuizById(id: string) {
  try {
    const res = await fetch(`${baseUrl}/quiz/${id}`);

    if (!res.ok) {
      return {
        message: `Failed to fetch quizzes. Please try again`,
      } as FetchError;
    }

    return res.json() as Promise<QuizType>;
  } catch (e) {
    return {
      message: `Unexpected error: ${e}. Please try again`,
    } as FetchError;
  }
}

export async function fetchChecklists(code: string) {
  try {
    const res = await fetch(`${baseUrl}/checklist?code=${code}`);

    if (!res.ok) {
      return {
        message: `Failed to fetch checklists. Please try again`,
      } as FetchError;
    }

    return res.json() as Promise<ChecklistType[]>;
  } catch (e) {
    return {
      message: `Unexpected error: ${e}. Please try again`,
    } as FetchError;
  }
}
