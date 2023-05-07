import React, { useState, useEffect } from "react";
import Article from "../../components/Article/Article";
import { articles } from "./data";

const Home: React.FC = (): JSX.Element => {
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia("(min-width:80em)").matches
  );
  const [isTablet, setIsTablet] = useState(
    window.matchMedia("(min-width: 48em)").matches
  );

  //track the screen size,
  //to change articles image based on screen size (mobile, tablet, desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.matchMedia("(min-width: 80em)").matches);
      setIsTablet(window.matchMedia("(min-width: 48em)").matches);
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
      src={
        isDesktop
          ? article.src.desktop!
          : isTablet
          ? article.src.tablet!
          : article.src.mobile!
      }
      alt={article.alt}
      title={article.title}
      text={article.text}
      dark={article.dark}
      light={article.light}
      rtl={article.rtl}
      link={article.link}
    />
  ));

  return (
    <div className="home">
      <section className="articles">{renderedArticles}</section>
    </div>
  );
};

export default Home;
