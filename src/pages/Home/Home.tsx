import React from "react";
import { useGlobalContext } from "../../context";
import { articles, stories, features } from "./data";
import Article from "../../components/Article/Article";
import Story from "../../components/Story/Story";
import Feature from "../../components/Feature/Feature";

const Home: React.FC = (): JSX.Element => {
  const { isMobile, isTablet } = useGlobalContext()!;

  const renderedArticles = articles.map((article, index) => (
    <Article
      key={index}
      img={{
        src: isMobile
          ? article.img.src.mobile!
          : isTablet
          ? article.img.src.tablet!
          : article.img.src.desktop!,
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

  const renderedFeatures = features.map((feature, index) => (
    <Feature
      key={index}
      icon={{
        src: feature.icon.src,
        alt: feature.icon.alt,
      }}
      title={feature.title}
      description={feature.description}
    />
  ));

  return (
    <div className="home-page">
      <section className="articles">{renderedArticles}</section>
      <section className="stories">{renderedStories}</section>
      <section className="features">{renderedFeatures}</section>
    </div>
  );
};

export default Home;
