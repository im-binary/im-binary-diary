import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchDiaryDetail } from "../services/diary";

export default function DiaryDetail() {
  const router = useRouter();
  const [path, setPath] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (router.query.path == null) {
      return;
    }

    const path = router.query.path.join("/");
    setPath(path);
  }, [router.query]);

  useEffect(() => {
    if (path == null) {
      return;
    }

    (async () => {
      const { data } = await fetchDiaryDetail(path);
      setContent(data.content);
    })();
  }, [path]);

  return <div>{content}</div>;
}
