import PropTypes from "prop-types";
import { createElement } from "react";
import * as Lucide from "react-icons/lu";
import { NavLink } from "react-router-dom";

const SideBarMenuItem = ({ menu }) => {
    const { name, icon, path } = menu;
    return (
        <li className="py-0.5">
            <NavLink
                to={path}
                className={({ isActive }) =>
                    isActive ? "sideLinkActive" : "sideLink"
                }
            >
                {createElement(Lucide[icon])}
                {name}
            </NavLink>
        </li>
    );
};

SideBarMenuItem.propTypes = {
    menu: PropTypes.object,
    subMenu: PropTypes.array,
};

export default SideBarMenuItem;
