import { team } from "./team.js";

export const posts = [
  {
    id: 1,
    title: "10 tips to choosing a contractor",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl: "/images/houses/ri_0/ri_0_1x.webp",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Residential Lifting", href: "#" },
    author: {
      name: team[0].name,
      role: team[0].role,
      href: "#",
      imageUrl: team[0].imageUrl,
    },
  },
  {
    id: 2,
    title: "My cat hates me",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl: "/images/houses/ri_1/ri_1_1x.webp",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Housing Insurance", href: "#" },
    author: {
      name: team[1].name,
      role: team[1].role,
      href: "#",
      imageUrl: team[1].imageUrl,
    },
  },
];
