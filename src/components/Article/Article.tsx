import "./Article.scss";
import React from "react";
import classNames from "classnames";
import Button from "../Button/Button";

interface ArticleProps {
  src: string;
  alt: string;
  title: string;
  text: string;
  link?: {
    href: string;
    text: string;
  };
  dark?: boolean;
  rtl?: boolean;
}

const Article: React.FC<ArticleProps> = ({
  src,
  alt,
  dark,
  link,
  title,
  text,
  rtl,
}): JSX.Element => {
  const className = classNames("article", {
    dark,
    rtl,
  });

  return (
    <article className={className}>
      <img src={src} alt={alt} loading="lazy" />

      <div className="content">
        <div className="wrapper">
          <h1 className="title">{title}</h1>
          <p className="text">{text}</p>
          {link && (
            <Button secondary dark={dark}>
              {link.text}
              <a href={link.href}> </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default Article;
