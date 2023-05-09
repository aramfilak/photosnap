import React from "react";
import { useGlobalContext } from "../../context";
import Beta from "../../components/Beta/Beta";
import Article from "../../components/Article/Article";
import pricing_01_de from "../../assets/pricing/desktop/hero.jpg";
import pricing_01_tb from "../../assets/pricing/tablet/hero.jpg";
import pricing_01_mb from "../../assets/pricing/mobile/hero.jpg";
import Compare from "../../components/Compare/Compare";
const Pricing: React.FC = () => {
  const { isMobile, isTablet } = useGlobalContext()!;
  return (
    <div className="pricing-page">
      <Article
        img={{
          src: isMobile ? pricing_01_mb : isTablet ? pricing_01_tb : pricing_01_de,
          alt: "hero image",
        }}
        title="Pricing"
        text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        dark
        rtl
      />
      <Compare />
      <Beta />
    </div>
  );
};

export default Pricing;
