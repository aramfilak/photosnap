import "./Article.scss";
import React from "react";
import classNames from "classnames";
import Button from "../Button/Button";

export interface ArticleProps {
  src: string;
  alt: string;
  title: string;
  text: string;
  link?: {
    href: string;
    text: string;
  };
  dark?: boolean;
  light?: boolean;
  rtl?: boolean;
}

const Article: React.FC<ArticleProps> = ({
  src,
  alt,
  dark,
  light,
  link,
  title,
  text,
  rtl,
}): JSX.Element => {
  if (dark && light) {
    throw Error(
      "You can only pass either 'light' or 'dark', but not both at the same time."
    );
  }
  const className = classNames("article", {
    dark,
    light,
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
