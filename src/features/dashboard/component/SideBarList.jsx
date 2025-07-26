import { NavLink } from "react-router";
import BrandColorIcons from "../../../shared/components/Icons/BrandColorIcon";
import { useState } from "react";

function SideBarList({ icon, title, navigateTo }) {
    const [isActive, setIsActive] = useState(false);
    return <li className={` group px-4.5 text-3xl flex justify-center items-center border-b-2 border-b-brand-default dark:border-b-brand-dark-default rounded-b-2xl mb-1.5
    hover:shadow-brand-light/90 hover:cursor-pointer shadow-xl transition-all duration-300
    ${isActive && 'shadow-brand-light/90'}`}>
        <NavLink
            to={navigateTo}
            className={({ isActive }) => {
                setIsActive(isActive);
                return ` 
        w-full flex justify-between 
        hover:text-brand-default active:text-brand-active dark:hover:text-brand-dark-default dark:active:text-brand-dark-active
        transition-colors duration-300
        ${isActive ? 'text-brand-default dark:text-brand-dark-default' : 'text-neutral-text-dark dark:text-neutral-text-light'}`
            }}
        >
            <BrandColorIcons className={`group-hover:rotate-z-5 group-hover:scale-110 
                ${isActive && 'rotate-z-5 scale-110'}
                transition-all duration-300 ms-1`} Icon={icon} />
            {title}
        </NavLink>
    </li>
}

export default SideBarList;