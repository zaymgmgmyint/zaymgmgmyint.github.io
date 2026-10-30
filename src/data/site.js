// Single source for site-wide facts, migrated from the old portfolio.js.
export const site = {
  name: "Zay Maung Maung Myint",
  title: "Lead Software Engineer",
  tagline: "8+ years building reliable, production-grade software.",
  intro:
    "I lead the Dev and DevOps teams at 8 Identity Software, building multi-tenant platforms and IoT integrations on Java, Spring Boot, PostgreSQL and Docker.",
  description:
    "Zay Maung Maung Myint, Lead Software Engineer with 8+ years of experience. Leads Dev and DevOps teams in Bangkok, Thailand.",
  bio: "Lead Software Engineer with 8+ years of experience shipping production software across e-commerce, fintech, healthcare, and enterprise domains. Focused on backend systems, technical leadership, and delivering reliable solutions that meet real organizational needs.",
  location: "Bangkok, Thailand",
  email: "zaymaungmaungmyint.info@gmail.com",
  github: "https://github.com/zaymgmgmyint",
  // linkedin and resume: add the URLs here once confirmed, then show them in Hero and Contact
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Writing", href: "/writing" },
  { label: "Wiki", href: "/wiki" },
  { label: "Uses", href: "/uses" },
  { label: "About", href: "/about" },
];

export const experience = [
  {
    period: "2023 – Present",
    company: "8 Identity Software Co., Ltd",
    role: "Lead Software Engineer",
    note: "Lead both the Dev and DevOps teams.",
  },
  {
    period: "2019 – 2022",
    company: "AdventSoft Software Co., Ltd",
    role: "Senior Java Developer",
  },
  {
    period: "2017 – 2019",
    company: "FPT Software Myanmar Co., Ltd",
    role: "Java Developer",
  },
  {
    period: "2016 – 2017",
    company: "SOLT Engineering Co., Ltd",
    role: "Java Developer (OJT)",
  },
];

// Shown on About (step 4). Vague items removed, current stack added,
// older tools moved to `alsoUsed`.
export const skills = [
  { category: "Languages", items: ["Java", "JavaScript", "TypeScript", "Python", "C#"] },
  { category: "Frameworks", items: ["Spring Boot", "Spring MVC", "Java EE", "Hibernate", "JPA", "Node.js", "Express.js"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { category: "Infrastructure", items: ["Docker", "Nginx", "Zabbix"] },
  { category: "Messaging and IoT", items: ["MQTT", "EMQX", "RabbitMQ"] },
  { category: "Tools", items: ["Jasper Report", "2C2P Payment"] },
];
export const alsoUsed = ["jQuery", "Bootstrap", "Oracle 12C"];

export const education = [
  { year: "In progress", institution: "NCC Education", degree: "Level 5 Diploma in Computing (with Data Science)" },
  { year: "October 2019", institution: "Yangon University", degree: "Post Graduate Diploma in Computer Application" },
  { year: "December 2013", institution: "Dagon University", degree: "Bachelor of Science (Physics)" },
];

export const certifications = ["Web Development", "Android Basic", "Java SE", "Java EE", "Spring Framework"];
