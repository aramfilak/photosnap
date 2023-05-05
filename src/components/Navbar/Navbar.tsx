import "./Navbar.scss"
import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../../assets/shared/desktop/logo.svg"
import close from "../../assets/shared/mobile/close.svg"
import menu from "../../assets/shared/mobile/menu.svg"
import Button from "../Button/Button"
import { useNavigate } from "react-router-dom"

interface link {
  name: string
  href: string
}

const links: link[] = [
  { name: "stories", href: "./stories" },
  { name: "features", href: "./features" },
  { name: "pricing", href: "./pricing" },
]

const Navbar: React.FC = (): JSX.Element => {
  const [isClosed, setIsClosed] = useState<boolean>(true)
  const navigate = useNavigate()

  const renderedLinks = links.map((link) => (
    <li key={link.name}>
      <NavLink className="link" to={link.href}>
        {link.name}
      </NavLink>
    </li>
  ))

  return (
    <nav className="nav-bar">
      <div className="menu">
        <img className="logo" src={logo} alt="Page logo" />
        <button onClick={() => setIsClosed((prv) => !prv)}>
          <img className="menu-icon" src={isClosed ? menu : close} alt="menu icon" />
        </button>
      </div>
      <ul className="links">{renderedLinks}</ul>
      <Button onClick={() => navigate("/pricing")} primary dark>
        get an invite
      </Button>
    </nav>
  )
}

export default Navbar
