import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export default async function handler(req, res) {
  const path = req.query.path;

  if (path == null) {
    return res.status(500).json({ error: "path가 올바르지 않습니다." });
  }

  const { data } = await octokit.rest.repos.getContent({
    owner: "pongdang",
    repo: "pongdang-diary-storage",
    path: `/${path}`,
  });

  const { content } = data;

  res.status(200).json({ content: Buffer.from(content, "base64").toString() });
}
