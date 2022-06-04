import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchDiaryList } from "../services/diary";

export default function DiaryList() {
  const [diaryList, setDiaryList] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await fetchDiaryList();
      setDiaryList(data.list);
    })();
  }, []);
  return (
    <div>
      {diaryList.map((diary) => (
        <ul key={diary.path}>
          <Link href={`/diary/${diary.path}`}>{diary.name}</Link>
        </ul>
      ))}
    </div>
  );
}
