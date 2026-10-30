import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Case studies. Only title, type and summary are required; the story fields
// (problem, role, outcome, stack) render only when they are filled in.
const work = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    summary: z.string(),
    order: z.number(),
    apps: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    role: z.string().optional(),
    problem: z.string().optional(),
    outcome: z.string().optional(),
  }),
});

// Wiki entries. `snippet` = tagged code with a copy button (code lives in frontmatter
// so the copy button gets the raw text). `term` = glossary definition (body is the definition).
const wiki = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/wiki" }),
  schema: z.object({
    type: z.enum(["snippet", "term"]),
    title: z.string(),
    tags: z.array(z.string()).default([]),
    language: z.string().optional(),
    code: z.string().optional(),
  }),
});

export const collections = { work, wiki };
