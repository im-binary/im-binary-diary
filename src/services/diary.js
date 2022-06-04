import { get } from "./api";

export async function fetchDiaryList(category = "daily") {
  return await get("/api/diary-list", { category });
}

export async function fetchDiaryDetail(path) {
  return await get("/api/diary-detail", { path });
}
