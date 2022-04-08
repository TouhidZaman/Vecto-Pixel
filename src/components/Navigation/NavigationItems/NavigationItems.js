import React from "react";
import CustomLink from "./CustomLink/CustomLink";
import classes from "./NavigationItems.module.css";

const NavigationItems = () => {
   const redirects = [
      { id: 1, path: "/", name: "Home" },
      { id: 2, path: "/services", name: "Service" },
      { id: 3, path: "/portfolio", name: "portfolio" },
      { id: 4, path: "/about", name: "About" },
      { id: 5, path: "/contact", name: "contact" },
   ];

   return (
      <ul className={classes.NavigationItems}>
         {redirects.map((redirect) => (
            <li className={classes.NavigationItem} key={redirect.id}>
               <CustomLink to={redirect.path} activeStyle={classes.activeStyle}>
                  {redirect.name}
               </CustomLink>
            </li>
         ))}
      </ul>
   );
};

export default NavigationItems;
