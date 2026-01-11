export type Work = {
  slug: string;
  title: string;
};

const GITHUB_USER = "aobacreate";
const GITHUB_BRANCH = "main";

export const githubUrl = (slug: string) =>
  `https://github.com/${GITHUB_USER}/${slug}`;

export const readmeRawUrl = (slug: string) =>
  `https://raw.githubusercontent.com/${GITHUB_USER}/${slug}/${GITHUB_BRANCH}/README.md`;


export const works: Work[] = [
  {
    slug: "kyoto-restaurant-mobile",
    title: "Kyoto Restaurant Web モバイル版",
  },
  {
    slug: "kyoto-restaurant-responsive",
    title: "Kyoto Restaurant Responsive",
  },
  {
    slug: "hackernews-mobile",
    title: "Hacker News モバイル版",
  }, 
  {
    slug: "github-portfolio-mobile",
    title: "Github Portfolio Mobile",
  },
  {
    slug: "alohagoodies",
    title: "Aloha Goodies",
  } 
];

