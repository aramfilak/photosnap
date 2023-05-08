import icon_01 from "../../assets/features/desktop/responsive.svg";
import icon_02 from "../../assets/features/desktop/no-limit.svg";
import icon_03 from "../../assets/features/desktop/embed.svg";
import icon_04 from "../../assets/features/desktop/custom-domain.svg";
import icon_05 from "../../assets/features/desktop/boost-exposure.svg";
import icon_06 from "../../assets/features/desktop/drag-drop.svg";

interface Feature {
  icon: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: { src: icon_01, alt: "Responsive Icon" },
    title: "100% Responsive",
    description:
      "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    icon: { src: icon_02, alt: "No Limit Icon" },
    title: "No Photo Upload Limit",
    description:
      "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    icon: { src: icon_03, alt: "Available to Embed Icon" },
    title: "Available to Embed",
    description:
      "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
  },
  {
    icon: { src: icon_04, alt: "Custom Domain Icon" },
    title: "Custom Domain",
    description:
      "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
  },
  {
    icon: { src: icon_05, alt: "Boost Your Exposure Icon" },
    title: "Boost Your Exposure",
    description:
      "Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailing list.",
  },
  {
    icon: { src: icon_06, alt: "Drag & Drop Image Icon" },
    title: "Drag & Drop Image",
    description:
      "Easily drag and drop your image and get beautiful shots every time. No over the top tooling to add friction to creating stories.",
  },
];
export { features };
