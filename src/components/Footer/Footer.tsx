import "./Footer.scss";
import React from "react";
import { links } from "../../data/shared_data";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { Logo, Facebook, Instagram, Pinterest, Youtube, Twitter } from "../../assets/Icons";

interface SocialLink {
  icon: any;
  href: string;
}
const socialLinks: SocialLink[] = [
  { icon: <Facebook />, href: "#" },
  { icon: <Youtube />, href: "#" },
  { icon: <Twitter />, href: "#" },
  { icon: <Pinterest />, href: "#" },
  { icon: <Instagram />, href: "#" },
];

const Footer: React.FC = () => {
  const renderedSocialLinks = socialLinks.map((socialLink, index) => (
    <li key={index}>
      <a href={socialLink.href}>{socialLink.icon}</a>
    </li>
  ));

  const renderedLinks = links.map((link) => (
    <li key={link.name}>
      <NavLink className="link" to={link.href}>
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <footer className="footer">
      <Link to={"/"}>
        <Logo />
      </Link>
      <ul className="social-links">{renderedSocialLinks}</ul>
      <ul className="links"> {renderedLinks}</ul>
      <Button secondary dark>
        <a target="_blank" rel="noreferrer" href={"/#"}>
          get an invite
        </a>
      </Button>
      <p className="copyright">
        &copy; Copyright {`${new Date().getFullYear()}`}. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
