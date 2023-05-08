import "./Stories.scss";
import React, { useState, useEffect } from "react";
import { stories } from "./data";
import Story from "../../components/Story/Story";
import Article from "../../components/Article/Article";
const Stories: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.matchMedia("(max-width: 47.99em)").matches
  );

  //track the screen size,
  //to change articles image based on screen size (mobile, tablet, desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 47.99em)").matches);
    };
    window.addEventListener("resize", handleResize);
    //clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
