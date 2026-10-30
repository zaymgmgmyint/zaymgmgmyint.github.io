import { getCollection } from "astro:content";
import { posts } from "../data/writing.js";
import { nav } from "../data/site.js";

// Built once at build time; the command palette fetches it on first open.
export async function GET() {
  const work = await getCollection("work");
  const wiki = await getCollection("wiki");

  const index = [
    ...nav.map((n) => ({ title: n.label, kind: "Page", url: n.href, text: "" })),
    ...work.map((e) => ({
      title: e.data.title,
      kind: "Work",
      url: `/work/${e.id}`,
      text: [e.data.type, e.data.summary, ...e.data.stack].join(" "),
    })),
    ...wiki.map((e) => ({
      title: e.data.title,
      kind: e.data.type === "snippet" ? "Snippet" : "Glossary",
      url: `/wiki#${e.id}`,
      text: [...e.data.tags, e.body ?? ""].join(" "),
    })),
    ...posts.map((p) => ({
      title: p.title,
      kind: "Writing",
      url: p.url,
      external: true,
      text: p.platform,
    })),
  ];

  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json" },
  });
}
