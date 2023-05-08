import "./Navbar.scss";
import React, { useState } from "react";
import { Logo } from "../../assets/Icons";
import close from "../../assets/shared/mobile/close.svg";
import menu from "../../assets/shared/mobile/menu.svg";
import Button from "../Button/Button";
import { links } from "../../data/shared_data";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";

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
          <Logo />
        </Link>
        <button className="toggle-btn" onClick={() => setClosed((prv) => !prv)}>
          <img className="menu-icon" src={closed ? menu : close} alt="menu icon" />
        </button>
      </div>
      <ul className="links">{renderedLinks}</ul>
      <Button primary dark>
        <a target="_blank" rel="noreferrer" href={"/#"}>
          get an invite
        </a>
      </Button>
    </nav>
  );
};

export default Navbar;
