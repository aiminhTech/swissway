import { CategoryType, InfoTitleType } from "@/models/models";

export async function fetchCategories(code: string) {
  const res = await fetch(`http://localhost:3000/api/category?code=${code}`);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json() as Promise<CategoryType[]>;
}

export async function fetchInfoTitles(code: string) {
  const res = await fetch(
    `http://localhost:3000/api/info?code=${code}&cat=Arbeiten`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json() as Promise<InfoTitleType[]>;
}
