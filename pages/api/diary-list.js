import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export default async function handler(req, res) {
  const { data } = await octokit.rest.repos.getContent({
    owner: "pongdang",
    repo: "pongdang-diary-storage",
    path: "/diary",
  });
  const list = data.map((diary) => ({ name: diary.name, path: diary.path }));

  res.status(200).json({ list });
}
