import React, { useState, useEffect } from "react";
import Article from "../../components/Article/Article";
import { articles, stories } from "./data";
import Story from "../../components/Storie/Story";

const Home: React.FC = (): JSX.Element => {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.matchMedia("(min-width:80em)").matches
  );
  const [isTablet, setIsTablet] = useState<boolean>(window.matchMedia("(min-width: 48em)").matches);
  const [isMobile, setIsMobile] = useState<boolean>(
    window.matchMedia("(max-width: 47.99em)").matches
  );
  //track the screen size,
  //to change articles image based on screen size (mobile, tablet, desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.matchMedia("(min-width: 80em)").matches);
      setIsTablet(window.matchMedia("(min-width: 48em)").matches);
      setIsMobile(window.matchMedia("(max-width: 47.99em)").matches);
    };
    window.addEventListener("resize", handleResize);
    //clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderedArticles = articles.map((article, index) => (
    <Article
      key={index}
      img={{
        src: isDesktop
          ? article.img.src.desktop!
          : isTablet
          ? article.img.src.tablet!
          : article.img.src.mobile!,
        alt: article.img.alt,
      }}
      title={article.title}
      text={article.text}
      dark={article.dark}
      rtl={article.rtl}
      link={article.link}
    />
  ));

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
    />
  ));

  return (
    <div className="home">
      <section className="articles">{renderedArticles}</section>
      <section className="stories">{renderedStories}</section>
    </div>
  );
};

export default Home;
