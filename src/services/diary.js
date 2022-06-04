import { get } from "./api";

export async function fetchDiaryList() {
  return await get("/api/diary-list");
}

export async function fetchDiaryDetail(path) {
  return await get("/api/diary-detail", { path });
}
