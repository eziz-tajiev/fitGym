import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../Bars/Bars";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpened, setMenuOpened] = useState(false);
  const menuLinks = [
    { id: "Home", label: "Home" },
    { id: "Prog", label: "Programs" },
    { id: "WhyUs", label: "Why us" },
    { id: "Pl", label: "Plans" },
    { id: "Testimonials", label: "Testimonials" },
  ];

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
      {menuLinks.map(({ id, label }) => (
        <li key={id}>
          <Link
            to={id}
            spy={true}
            smooth={true}
            onClick={() => isMobile && setMenuOpened(false)}
          >
            {label}
          </Link>
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
