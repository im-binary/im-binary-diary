import { get } from "./api";

export async function fetchDiaryList(category = "daily") {
  return await get("/api/diarys", { category });
}

export async function fetchDiaryDetail(path) {
  return await get("/api/diary", { path });
}
