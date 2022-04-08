import React, { useState } from "react";
import { Link } from "react-router-dom";
import navStyle from "./NavBar.module.css";
import logo from "../../assets/images/Vecto-Pixel-Logo.png";
import CustomLink from "./CustomLink/CustomLink";

export default function NavBar() {
   const [toggleControl, setToggleControl] = useState({ display: "" });

   const handleToggleButtonClick = () => {
      toggleControl.display === "none"
         ? setToggleControl({ display: "flex" })
         : setToggleControl({ display: "none" });
   };

   return (
      <nav className={navStyle.navbar}>
         <div className={navStyle.logo}>
            <Link className={navStyle.linkItem} to="/">
               <img alt="logo" src={logo} />
            </Link>
         </div>
         <a
            href="#toggleButton"
            onClick={handleToggleButtonClick}
            className={navStyle.toggleButton}
         >
            <span className={navStyle.bar}></span>
            <span className={navStyle.bar}></span>
            <span className={navStyle.bar}></span>
         </a>
         <div className={navStyle.navbarLinks} style={toggleControl}>
            <ul>
               <li>
                  <CustomLink
                     activeStyle={navStyle.linkItem}
                     to="/"
                  >
                     Home
                  </CustomLink>
               </li>
               <li>
                  <CustomLink
                     activeStyle={navStyle.linkItem}
                     to="/about"
                  >
                     About
                  </CustomLink>
               </li>
               <li>
                  <CustomLink
                     activeStyle={navStyle.linkItem}
                     to="/services"
                  >
                     Services
                  </CustomLink>
               </li>
               <li>
                  <CustomLink
                     activeStyle={navStyle.linkItem}
                     to="/portfolio"
                  >
                     Portfolio
                  </CustomLink>
               </li>
               <li>
                  <CustomLink
                     activeStyle={navStyle.linkItem}
                     to="/contact"
                  >
                     Contact
                  </CustomLink>
               </li>
            </ul>
         </div>
      </nav>
   );
}
