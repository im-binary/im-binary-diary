import { Octokit } from "@octokit/rest";
import Cache from "lru-cache";

const detailCache = new Cache({
  // how long to live in ms
  ttl: 1000 * 60 * 60 * 24 * 30,
});

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export default async function handler(req, res) {
  const path = req.query.path;

  if (path == null) {
    return res.status(500).json({ error: "path가 올바르지 않습니다." });
  }

  if (detailCache.has(`/${path}`)) {
    return res.status(200).json({ content: detailCache.get(`/${path}`) });
  }

  const { data } = await octokit.rest.repos.getContent({
    owner: "pongdang",
    repo: "pongdang-diary-storage",
    path: `/${path}`,
  });

  const content = Buffer.from(data.content, "base64").toString();

  detailCache.set(`/${path}`, content);

  res.status(200).json({ content: content });
}
