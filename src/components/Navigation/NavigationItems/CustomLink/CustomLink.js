import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import classes from "./CustomLink.module.css";

const CustomLink = ({ children, to, activeStyle, ...props }) => {
   const resolved = useResolvedPath(to);
   const match = useMatch({ path: resolved.pathname, end: true });

   return (
      <Link className={match && activeStyle} to={to} {...props}>
         {children}
      </Link>
   );
};

export default CustomLink;
