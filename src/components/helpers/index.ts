import { GITHUB_LINK, LINKEDIN_LINK, TWITTER_LINK } from "@/utils/constants";

export const programmingSkills = [
  {
    id: 0,
    name: "Javascript",
    image: "/assets/skills/javascript.svg",
  },
  {
    id: 1,
    name: "Typescript",
    image: "/assets/skills/typescript.svg",
  },
  {
    id: 2,
    name: "React.js",
    image: "/assets/skills/reactjs.svg",
  },
  {
    id: 3,
    name: "Next.js",
    image: "/assets/skills/nextjs.svg",
  },
  {
    id: 4,
    name: "Node.js",
    image: "/assets/skills/nodejs.svg",
  },
  {
    id: 5,
    name: "Express.js",
    image: "/assets/skills/expressjs.svg",
  },
  {
    id: 6,
    name: "Nest.js",
    image: "/assets/skills/nestjs.svg",
  },
  {
    id: 7,
    name: "HTML",
    image: "/assets/skills/html.svg",
  },
  {
    id: 8,
    name: "CSS",
    image: "/assets/skills/css.svg",
  },
];

export const developmentTools = [
  {
    id: 0,
    name: "MongoDB",
    image: "/assets/skills/mongodb.svg",
  },
  {
    id: 1,
    name: "Firebase",
    image: "/assets/skills/firebase.svg",
  },
  {
    id: 2,
    name: "PostgreSQL",
    image: "/assets/skills/postgresql.svg",
  },
  {
    id: 3,
    name: "GIT",
    image: "/assets/skills/git.svg",
  },
  {
    id: 4,
    name: "Github",
    image: "/assets/skills/github.svg",
  },
  {
    id: 5,
    name: "Docker",
    image: "/assets/skills/docker.svg",
  },
  {
    id: 6,
    name: "Github Actions",
    image: "/assets/skills/github-actions.svg",
  },
];

export const myJourney = [
  {
    id: 0,
    image: "/assets/journey/developer-team.svg",
    period: "Jul'21 - Continue",
    designation: "Full-Stack Web Developer at Daydreamsoft LLP",
    description:
      "With a focus on providing a seamless user experience, I am currently working collaboratively with clients and in-house agency teams to deliver rapid and robust web development solutions. My commitment to delivering high-quality results has been recognized and praised, making me a sought-after web developer.",
  },
  {
    id: 1,
    image: "/assets/journey/developer.svg",
    period: "Jun'20 - Jul'21",
    designation: "Freelancer Web Developer",
    description:
      "Starting out as a freelancer, I connected with local businesses and provided them with the resources they needed to establish an online presence. My work included creating custom web applications that were tailored to meet the unique needs of each business.",
  },
  {
    id: 2,
    image: "/assets/journey/learning.svg",
    period: "Jan'20 - Jun'21",
    designation: "Learner",
    description:
      "However, my passion for computers led me to explore the world of web development. Through self-learning and exploration, I developed a strong understanding of the technologies and tools used in web development.",
  },
  {
    id: 3,
    image: "/assets/journey/construction.svg",
    period: "Sep'14 - Jan'20",
    designation: "Civil Engineer",
    description:
      "After obtaining my Bachelor's degree in Civil Engineering, I have spent nearly 6 years honing my skills in the field.",
  },
];

export const socialAccounts = [
  {
    id: 0,
    name: "Linkedin",
    link: LINKEDIN_LINK,
  },
  {
    id: 1,
    name: "Twitter",
    link: TWITTER_LINK,
  },
  {
    id: 2,
    name: "Github",
    link: GITHUB_LINK,
  },
];

export const projects = [
  {
    id: 0,
    name: "Yashcan",
    description: "Website for Import/Export business",
    techStack: ["Next.js"],
    image: "/assets/projects/yashcan.png",
    link: "https://yashcan.com/",
    status: "Completed",
    themeColor: "#2e3b95",
  },
  // {
  //   id: 1,
  //   name: "Hriday Sur",
  //   description: "Portfolio website for Hriday Sur",
  //   techStack: ["HTML", "CSS"],
  //   image: "/assets/projects/hriday.png",
  //   link: "https://hridaysur.github.io/",
  //   status: "Completed",
  //   themeColor: "#5bcb8b",
  // },
  {
    id: 2,
    name: "Songire",
    description: "Website for an SEO firm",
    techStack: ["Next.js"],
    image: "/assets/projects/songire.png",
    link: "https://songire.vercel.app/",
    status: "In Progress",
    themeColor: "#ef4c1c",
  },
  {
    id: 3,
    name: "preme.in",
    description: "Portfolio website for Prem Dave",
    techStack: ["Next.js", "Typescript", "Tailwind CSS"],
    image: "/assets/projects/preme.png",
    link: "https://www.preme.in/",
    status: "Completed",
    themeColor: "#facc15",
  },
  {
    id: 4,
    name: "Card Trika",
    description: "A digitla visiting card application",
    techStack: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Nest.js",
      "MongoDB",
      "Stripe",
    ],
    image: "/assets/projects/cardtrika.png",
    link: "https://cardtrika-landing-page.vercel.app/",
    status: "In Progress",
    themeColor: "#050b5e",
  },
];
