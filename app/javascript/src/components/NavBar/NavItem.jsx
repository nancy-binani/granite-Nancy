import React from "react";

import { Link } from "react-router-dom";

const NavItem = ({ iconClass, name, path }) => (
  <Link
    className="leading-5text-indigo-500 mr-3 inline-flex items-center px-1 pt-1 text-sm font-semibold hover:text-indigo-500"
    to={path}
  >
    {iconClass && <i className={`${iconClass} text-bb-purple`} />}
    {name}
  </Link>
);

export default NavItem;
