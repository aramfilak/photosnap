import "./Story.scss";
import React from "react";
import Button from "../Button/Button";

interface StoryProps {
  img: {
    src: string;
    alt: string;
  };
  storyHref: string;
  title: string;
  createdBy: string;
  createdAt?: string;
  description?: string;
}
const Story: React.FC<StoryProps> = ({
  img,
  storyHref,
  title,
  createdBy,
  createdAt,
  description,
}) => {
  return (
    <article className="stroy">
      <img src={img.src} alt={img.alt} />
      <div className="content">
        {createdAt && <div className="created-at">{createdAt}</div>}
        <h3 className="title">{title}</h3>
        <div className="created-by">{`by ${createdBy}`}</div>
        {description && <p className="description">{description}</p>}
        <Button secondary dark>
          <a href={storyHref}> read story </a>
        </Button>
      </div>
    </article>
  );
};

export default Story;
