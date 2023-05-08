import "./Stories.scss";
import React from "react";
import { useGlobalContext } from "../../context";
import { stories } from "./data";
import Story from "../../components/Story/Story";
import Article from "../../components/Article/Article";

const Stories: React.FC = () => {
  const { isMobile } = useGlobalContext()!;

  const renderedStories = stories.map((story, index) => (
    <Story
      key={index}
      img={{
        src: isMobile ? story.img.src.mobile! : story.img.src.desktop!,
        alt: story.img.alt,
      }}
      title={story.title}
      createdBy={story.createdBy}
      storyHref={story.storyHref}
      createdAt={story.createdAt}
    />
  ));

  return (
    <div className="stories-page">
      <div className="landing">
        <Article
          title="HAZY FULL MOON OF APPALACHIA"
          text={
            "The dissected plateau area, while not actually made up of geological mountains, is popularly called, especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."
          }
          link={{ href: "#", text: "read the story" }}
          rtl
          dark
        />
      </div>
      <section className="stories">{renderedStories}</section>
    </div>
  );
};

export default Stories;
