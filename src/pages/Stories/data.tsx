import stories_01_de from "../../assets/stories/desktop/mountains.jpg";
import stories_01_mb from "../../assets/stories/mobile/mountains.jpg";
import stories_02_de from "../../assets/stories/desktop/cityscapes.jpg";
import stories_02_mb from "../../assets/stories/mobile/cityscapes.jpg";
import stories_03_de from "../../assets/stories/desktop/18-days-voyage.jpg";
import stories_03_mb from "../../assets/stories/mobile/18-days-voyage.jpg";
import stories_04_de from "../../assets/stories/desktop/architecturals.jpg";
import stories_04_mb from "../../assets/stories/mobile/architecturals.jpg";
import stories_05_de from "../../assets/stories/desktop/world-tour.jpg";
import stories_05_mb from "../../assets/stories/mobile/world-tour.jpg";
import stories_06_de from "../../assets/stories/desktop/unforeseen-corners.jpg";
import stories_06_mb from "../../assets/stories/mobile/unforeseen-corners.jpg";
import stories_07_de from "../../assets/stories/desktop/king-on-africa.jpg";
import stories_07_mb from "../../assets/stories/mobile/king-on-africa.jpg";
import stories_08_de from "../../assets/stories/desktop/trip-to-nowhere.jpg";
import stories_08_mb from "../../assets/stories/mobile/trip-to-nowhere.jpg";
import stories_09_de from "../../assets/stories/desktop/rage-of-the-sea.jpg";
import stories_09_mb from "../../assets/stories/mobile/rage-of-the-sea.jpg";
import stories_10_de from "../../assets/stories/desktop/running-free.jpg";
import stories_10_mb from "../../assets/stories/mobile/running-free.jpg";
import stories_11_de from "../../assets/stories/desktop/behind-the-waves.jpg";
import stories_11_mb from "../../assets/stories/mobile/behind-the-waves.jpg";
import stories_12_de from "../../assets/stories/desktop/calm-waters.jpg";
import stories_12_mb from "../../assets/stories/mobile/calm-waters.jpg";
import stories_13_de from "../../assets/stories/desktop/milky-way.jpg";
import stories_13_mb from "../../assets/stories/mobile/milky-way.jpg";
import stories_14_de from "../../assets/stories/desktop/dark-forest.jpg";
import stories_14_mb from "../../assets/stories/mobile/dark-forest.jpg";
import stories_15_de from "../../assets/stories/desktop/somwarpet.jpg";
import stories_15_mb from "../../assets/stories/mobile/somwarpet.jpg";
import stories_16_de from "../../assets/stories/desktop/land-of-dreams.jpg";
import stories_16_mb from "../../assets/stories/mobile/land-of-dreams.jpg";

interface Story {
  img: {
    src: { desktop?: string; mobile?: string };
    alt: string;
  };
  storyHref: string;
  title: string;
  createdBy: string;
  createdAt?: string;
}
const stories: Story[] = [
  {
    img: {
      src: { desktop: stories_01_de, mobile: stories_01_mb },
      alt: "The Mountains",
    },
    storyHref: "#",
    title: "The Mountains",
    createdBy: "John Appleseed",
    createdAt: "April 16th 2020",
  },
  {
    img: {
      src: { desktop: stories_02_de, mobile: stories_02_mb },
      alt: "Sunset Cityscapes",
    },
    storyHref: "#",
    title: "Sunset Cityscapes",
    createdBy: "Benjamin Cruz",
    createdAt: "April 14th 2020",
  },
  {
    img: {
      src: { desktop: stories_03_de, mobile: stories_03_mb },
      alt: "18 Days Voyage",
    },
    storyHref: "#",
    title: "18 Days Voyage",
    createdBy: "Alexei Borodin",
    createdAt: "April 11th 2020",
  },
  {
    img: {
      src: { desktop: stories_04_de, mobile: stories_04_mb },
      alt: "Architecturals",
    },
    storyHref: "#",
    title: "Architecturals",
    createdBy: "Samantha Brooke",
    createdAt: "April 9th 2020",
  },
  {
    img: {
      src: { desktop: stories_05_de, mobile: stories_05_mb },
      alt: "World Tour 2019",
    },
    storyHref: "#",
    title: "World Tour 2019",
    createdBy: "Timothy Wagner",
    createdAt: "April 7th 2020",
  },
  {
    img: {
      src: { desktop: stories_06_de, mobile: stories_06_mb },
      alt: "World Tour 2019",
    },
    storyHref: "#",
    title: "Unforeseen Corners",
    createdBy: "William Malcolm",
    createdAt: "April 3rd 2020",
  },
  {
    img: {
      src: { desktop: stories_07_de, mobile: stories_07_mb },
      alt: "King on Africa: Part II",
    },
    storyHref: "#",
    title: "King on Africa: Part II",
    createdBy: "Tim Hillenburg",
    createdAt: "March 29th 2020",
  },
  {
    img: {
      src: { desktop: stories_08_de, mobile: stories_08_mb },
      alt: "The Trip to Nowhere",
    },
    storyHref: "#",
    title: "The Trip to Nowhere",
    createdBy: "Felicia Rourke",
    createdAt: "March 21st 2020",
  },
  {
    img: {
      src: { desktop: stories_09_de, mobile: stories_09_mb },
      alt: "Rage of The Sea",
    },
    storyHref: "#",
    title: "Rage of The Sea",
    createdBy: "Mohammed Abdul",
    createdAt: "March 19th 2020",
  },
  {
    img: {
      src: { desktop: stories_10_de, mobile: stories_10_mb },
      alt: "Running Free",
    },
    storyHref: "#",
    title: "Running Free",
    createdBy: "Michelle",
    createdAt: "March 16th 2020",
  },
  {
    img: {
      src: { desktop: stories_11_de, mobile: stories_11_mb },
      alt: "Calm Waters",
    },
    storyHref: "#",
    title: "Calm Waters",
    createdBy: "Samantha Brooke",
    createdAt: "March 9th 2020",
  },
  {
    img: {
      src: { desktop: stories_12_de, mobile: stories_12_mb },
      alt: "Behind the Waves",
    },
    storyHref: "#",
    title: "Calm Waters",
    createdBy: "Samantha Brooke",
    createdAt: "March 9th 2020",
  },
  {
    img: {
      src: { desktop: stories_13_de, mobile: stories_13_mb },
      alt: "The Milky Way",
    },
    storyHref: "#",
    title: "The Milky Way",
    createdBy: "Benjamin Cruz",
    createdAt: "March 5th 2020",
  },
  {
    img: {
      src: { desktop: stories_14_de, mobile: stories_14_mb },
      alt: "Night at The Dark Forest",
    },
    storyHref: "#",
    title: "Night at The Dark Forest",
    createdBy: "Mohammed Abdul",
    createdAt: "March 4th 2020",
  },
  {
    img: {
      src: { desktop: stories_15_de, mobile: stories_15_mb },
      alt: "Somwarpet’s Beauty",
    },
    storyHref: "#",
    title: "Somwarpet’s Beauty",
    createdBy: "Michelle",
    createdAt: "March 1st 2020",
  },
  {
    img: {
      src: { desktop: stories_16_de, mobile: stories_16_mb },
      alt: "Land of Dreams",
    },
    storyHref: "#",
    title: "Land of Dreams",
    createdBy: "William Malcolm",
    createdAt: "February 25th 2020",
  },
];

export { stories };
