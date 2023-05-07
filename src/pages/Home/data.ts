import home_ar_01_de from "../../assets/home/desktop/beautiful-stories.jpg";
import home_ar_01_tb from "../../assets/home/tablet/beautiful-stories.jpg";
import home_ar_01_mb from "../../assets/home/mobile/beautiful-stories.jpg";
import home_ar_02_de from "../../assets/home/desktop/create-and-share.jpg";
import home_ar_02_tb from "../../assets/home/tablet/create-and-share.jpg";
import home_ar_02_mb from "../../assets/home/mobile/create-and-share.jpg";
import home_ar_03_de from "../../assets/home/desktop/designed-for-everyone.jpg";
import home_ar_03_tb from "../../assets/home/tablet/designed-for-everyone.jpg";
import home_ar_03_mb from "../../assets/home/mobile/designed-for-everyone.jpg";

interface Articles {
  src: { desktop?: string; tablet?: string; mobile?: string };
  alt: string;
  title: string;
  text: string;
  link?: {
    href: string;
    text: string;
  };
  dark?: boolean;
  rtl?: boolean;
}

const articles: Articles[] = [
  {
    src: {
      desktop: home_ar_01_de,
      tablet: home_ar_01_tb,
      mobile: home_ar_01_mb,
    },
    alt: "A man standing in front of a sea with his camera.",
    title: "Create and share your photo stories.",
    text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others. ",
    link: { href: "#", text: "get an invite" },
    dark: true,
    rtl: false,
  },
  {
    src: {
      desktop: home_ar_02_de,
      tablet: home_ar_02_tb,
      mobile: home_ar_02_mb,
    },
    alt: "A aptop on the table",
    title: "Beautiful stories every time",
    text: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    dark: false,
    rtl: true,
    link: { href: "#", text: "view the stories" },
  },
  {
    src: {
      desktop: home_ar_03_de,
      tablet: home_ar_03_tb,
      mobile: home_ar_03_mb,
    },
    alt: "A man with  a camera in hand",
    title: "Designed for everyone",
    text: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
    rtl: false,
    dark: false,
    link: { href: "#", text: "view the stories" },
  },
];

export { articles };
