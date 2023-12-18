import { Metadata } from "next";

export const seoKeywords = [
  "Full-Stack Web Developer",
  "Full-Stack Engineer",
  "Surat Software Engineer",
  "Web Development Portfolio",
  "JavaScript Technologies",
  "Portfolio Website",
  "Professional Journey",
  "Diverse Skill Set",
  "Web Development Projects",
  "Web Application Development",
  "User-Friendly Design",
  "Scalable Solutions",
  "Freelancer",
  "CardTrika Digital Visiting Card",
  "Project Portfolio",
  "Surat Web Developer",
  "Gujarat Web Development",
  "Web Development Surat",
  "Surat Tech Professional",
  "Gujarat IT Industry",
];

const description =
  "Explore the professional journey and diverse skill set of Prashant Patel, a dedicated Full-Stack Engineer. From expertise in JavaScript technologies to a rich portfolio of web development projects, discover the passion and proficiency behind every line of code.";

export const seoMetadata: Metadata = {
  metadataBase: new URL("https://prashaant.in"),
  applicationName: "prashaant.in",
  title: "PRASHANT PATEL | Full-Stack Engineer",
  description,
  keywords: seoKeywords,
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Prashant Patel", url: "https://www.prashaant.in" },
    {
      name: "Prashant Patel",
      url: "https://app.cardtrika.com/657b53e1a0a0549c7546d4a5",
    },
  ],
  openGraph: {
    title: "PRASHANT PATEL",
    description,
    type: "website",
    images: ["/assets/og-image.jpg"],
  },
  category: "Software Engineering",
};
