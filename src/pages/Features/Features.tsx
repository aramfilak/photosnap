import React from "react";
import { useGlobalContext } from "../../context";
import Feature from "../../components/Feature/Feature";
import { features } from "./data";
import Article from "../../components/Article/Article";
import features_01_de from "../../assets/features/desktop/hero.jpg";
import features_01_tb from "../../assets/features/tablet/hero.jpg";
import features_01_mb from "../../assets/features/mobile/hero.jpg";

const Features: React.FC = () => {
  const { isMobile, isTablet } = useGlobalContext()!;
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
    <div className="features-page">
      <Article
        img={{
          src: isMobile ? features_01_mb : isTablet ? features_01_tb : features_01_de,
          alt: "hero image",
        }}
        title="Features"
        text="We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories."
        dark
        rtl
      />
      <section className="features">{renderedFeatures}</section>
    </div>
  );
};

export default Features;
