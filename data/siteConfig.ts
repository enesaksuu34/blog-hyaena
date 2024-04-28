import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/hlogo.png",
  siteUrl: "https://blog.hyaena.co.uk",
  siteName: "Hyaena Blog",
  siteDescription:
    "Empowering Your Digital Journey with Expert Insights and Solutions",
  siteThumbnail: "/hlogo.png",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
    { label: "Hyaena Digital", href: "https://hyaena.co.uk/" },
  ],
  social: {
    github: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
};
export default siteConfig;
