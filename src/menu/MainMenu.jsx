import Logo from "./../images/logo/logo.png";
import "./styles/main-menu-styles/main-menu.css";
import BurgerBtn from "./BurgerBtn";
import { Link } from "react-router-dom";
import { useState } from "react";

import UserMenu from "./userMenu";

const MainMenu = () => {
  const navigation = ["home", "products", "about"];
  const [active, setActive] = useState(false);

  function handleShow() {
    setActive((prevState) => !prevState);
  }

  return (
    <nav className={!active ? "MainNav" : "MainNav MainNav--active"}>
      <ul className="MainNav__list">
        {navigation.map((item) => (
          <li key={item} className="MainNav__listItem">
            <Link
              className="MainNav__link"
              to={item !== "home" ? `/${item}` : "/"}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <BurgerBtn handleShow={handleShow} />
      <div className="MainNav__logo">
        <img className="MainNav__img" src={Logo} alt="#" />
        <span className="MainNav__name">
          Lorem<span className="MainNav__bold">Bikes</span>
        </span>
      </div>

      <UserMenu />
    </nav>
  );
};

export default MainMenu;
