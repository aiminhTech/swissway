import {
  CategoryType,
  FetchError,
  InfoContentType,
  InfoTitleType,
} from "@/models/models";

const baseUrl = "http://localhost:3000/api";

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
      message: `Failed to fetch categories. Please try again`,
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
      message: `Failed to fetch categories. Please try again`,
    } as FetchError;
  }

  return res.json() as Promise<InfoContentType[]>;
}
