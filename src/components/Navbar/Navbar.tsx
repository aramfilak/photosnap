import "./Navbar.scss";
import React, { useState } from "react";
import logo from "../../assets/shared/desktop/logo.svg";
import close from "../../assets/shared/mobile/close.svg";
import menu from "../../assets/shared/mobile/menu.svg";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";

interface link {
  name: string;
  href: string;
}

const links: link[] = [
  { name: "stories", href: "./stories" },
  { name: "features", href: "./features" },
  { name: "pricing", href: "./pricing" },
];

const Navbar: React.FC = () => {
  const [closed, setClosed] = useState<boolean>(true);

  const className = classNames("navbar", {
    closed,
  });

  const renderedLinks = links.map((link) => (
    <li key={link.name}>
      <NavLink className="link" to={link.href}>
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className={className}>
      <div className="logo-and-toggle">
        <Link to={"/"}>
          <img className="logo" src={logo} alt="Page logo" />
        </Link>
        <button className="toggle-btn" onClick={() => setClosed((prv) => !prv)}>
          <img className="menu-icon" src={closed ? menu : close} alt="menu icon" />
        </button>
      </div>
      <ul className="links">{renderedLinks}</ul>
      <Button primary dark>
        <a href={"/#"}>get an invite</a>
      </Button>
    </nav>
  );
};

export default Navbar;
