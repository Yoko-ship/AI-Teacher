import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><NavLink to="/" end>Главное меню</NavLink></li>
            <li><NavLink to="themes">Темы</NavLink></li>
            <li><NavLink to="FAQ">About</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
