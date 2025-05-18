import { CategoryType, InfoContentType, InfoTitleType } from "@/models/models";

const baseUrl = "http://localhost:3000/api";

export async function fetchCategories(code: string) {
  const res = await fetch(`${baseUrl}/category?code=${code}`);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json() as Promise<CategoryType[]>;
}

export async function fetchInfoTitles(code: string, cat: string) {
  const res = await fetch(`${baseUrl}/info?code=${code}&cat=${cat}`);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json() as Promise<InfoTitleType[]>;
}

export async function fetchInfoContents(title: string) {
  const res = await fetch(`${baseUrl}/info/content?title=${title}`);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json() as Promise<InfoContentType[]>;
}
