import "./Feature.scss";
import React from "react";

interface FeatureProps {
  icon: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
}
const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <article className="feature">
      <img src={icon.src} alt={icon.alt} />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </article>
  );
};

export default Feature;
