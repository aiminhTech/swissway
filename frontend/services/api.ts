import {
  ApiCategories,
  ApiChecklists,
  ApiError,
  ApiInfoContents,
  ApiInfoTitles,
  ApiLocales,
  ApiQuiz,
  ApiQuizLists,
} from "@/models/api-model";
import {
  HttpClient,
  HttpClientRequest,
  HttpClientResponse,
} from "@effect/platform";
import { Effect, pipe, Schema } from "effect";
import { runPromise } from "./runtime";

//const baseUrl = "https://swissway.onrender.com/api";
const baseUrl = "http://localhost:3000/api";

function fetchData<A, I>(url: string | URL, schema: Schema.Schema<A, I>) {
  return runPromise(
    Effect.gen(function* () {
      const client = yield* HttpClient.HttpClient;
      const res = yield* pipe(HttpClientRequest.get(url), client.execute);
      console.log(res);

      if (res.status !== 200) {
        console.log("error");

        const error = yield* HttpClientResponse.schemaBodyJson(ApiError)(res);
        return yield* Effect.fail(error);
      }

      return yield* HttpClientResponse.schemaBodyJson(schema)(res);
    }).pipe(
      Effect.mapError((e) => ApiError.make({ message: e.message })),
      Effect.either
    )
  );
}

export async function fetchLocale() {
  return await fetchData(baseUrl + "/locale", ApiLocales);
}

export async function fetchCategories(code: string) {
  const fetchUrl = new URL(baseUrl + "/category");
  fetchUrl.searchParams.append("code", code);

  return await fetchData(fetchUrl, ApiCategories);
}

export async function fetchInfoTitles(code: string, cat: string) {
  const fetchUrl = new URL(baseUrl + "/info");
  fetchUrl.searchParams.append("code", code);
  fetchUrl.searchParams.append("cat", cat);

  return await fetchData(fetchUrl, ApiInfoTitles);
}

export async function fetchEssentialInfo(code: string) {
  const fetchUrl = new URL(baseUrl + "/info/essential");
  fetchUrl.searchParams.append("code", code);
  fetchUrl.searchParams.append("essential", "true");

  return await fetchData(fetchUrl, ApiInfoTitles);
}

export async function fetchInfoContents(code: string, title: string) {
  const fetchUrl = new URL(baseUrl + "/info/content");
  fetchUrl.searchParams.append("code", code);
  fetchUrl.searchParams.append("title", title);

  return await fetchData(fetchUrl, ApiInfoContents);
}

export async function fetchQuizList(cat: string) {
  const fetchUrl = new URL(baseUrl + "/quiz");
  fetchUrl.searchParams.append("cat", cat);

  return await fetchData(fetchUrl, ApiQuizLists);
}

export async function fetchQuizById(id: string) {
  const fetchUrl = `${baseUrl}/quiz/${id}`;

  return await fetchData(fetchUrl, ApiQuiz);
}

export async function fetchChecklists(code: string) {
  const fetchUrl = new URL(baseUrl + "/checklist");
  fetchUrl.searchParams.append("code", code);

  return await fetchData(fetchUrl, ApiChecklists);
}
