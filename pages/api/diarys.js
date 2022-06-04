import { Octokit } from "@octokit/rest";
import Cache from "lru-cache";

const listCache = new Cache({
  // how long to live in ms
  ttl: 1000 * 60 * 60 * 24 * 30,
});

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export default async function handler(req, res) {
  const category = req.query.category;

  if (listCache.has(`/${category}`)) {
    return res.status(200).json({ list: listCache.get(`/${category}`) });
  }

  const { data } = await octokit.rest.repos.getContent({
    owner: "pongdang",
    repo: "pongdang-diary-storage",
    path: `/${category}`,
  });

  const list = data.map((diary) => ({ name: diary.name, path: diary.path }));

  listCache.set(`/${category}`, list);

  res.status(200).json({ list });
}
