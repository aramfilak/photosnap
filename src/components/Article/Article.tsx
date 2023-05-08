import "./Article.scss";
import React from "react";
import classNames from "classnames";
import Button from "../Button/Button";

interface ArticleProps {
  img?: {
    src: string;
    alt: string;
  };
  title: string;
  text: string;
  link?: {
    href: string;
    text: string;
  };
  dark?: boolean;
  rtl?: boolean;
}

const Article: React.FC<ArticleProps> = ({ img, dark, link, title, text, rtl }): JSX.Element => {
  const className = classNames("article", {
    dark,
    rtl,
  });

  return (
    <article className={className}>
      {img && <img src={img.src} alt={img.alt} loading="lazy" />}

      <div className="content">
        <div className="wrapper">
          <h1 className="title">{title}</h1>
          <p className="text">{text}</p>
          {link && (
            <Button secondary dark={dark}>
              <a target="_blank" rel="noreferrer" href={link.href}>
                {link.text}
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default Article;
