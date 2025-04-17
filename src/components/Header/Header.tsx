import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../Bars/Bars";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpened(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = (
    <ul className="header-menu">
      {["Home", "Programs", "Why us", "Plans", "Testimonials"].map((item) => (
        <li key={item} onClick={() => isMobile && setMenuOpened(false)}>
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="header">
      {!isMobile && <img className="logo" src={Logo} alt="logo" />}

      {isMobile ? (
        !menuOpened ? (
          <div onClick={() => setMenuOpened(true)}>
            <Bars />
          </div>
        ) : (
          <div className="mobile-menu-wrapper">{menuItems}</div>
        )
      ) : (
        menuItems
      )}
    </div>
  );
};

export default Header;
