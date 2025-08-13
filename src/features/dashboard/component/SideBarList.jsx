import { NavLink } from "react-router";
import BrandColorIcons from "../../../shared/components/Icons/BrandColorIcon";
import { useState } from "react";
import ProfileImg from "../../../shared/components/ImgFrames/ProfileImg";

function SideBarList({ icon, title, navigateTo, profileImg, profileImgPlaceholder , profileImgWidth = 'w-1/7 bottom-1.5 left-1.5'}) {
    const [isActive, setIsActive] = useState(false);
    return <li className={` align-text-bottom relative group px-4.5 text-3xl flex justify-center items-center border-b-2 border-b-brand-default dark:border-b-brand-dark-default rounded-b-2xl mb-1.5
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
            <div className=" flex justify-end">
                <p className=" self-end w-full text-start">{title}</p>
            </div>
            {profileImg ? <ProfileImg profileImg={profileImg} profileImgStyle={profileImgWidth}/>
                :
                <BrandColorIcons className={`group-hover:rotate-z-5 group-hover:scale-110 
                ${isActive && 'rotate-z-5 scale-120'}
                transition-all duration-300 ms-1`} Icon={icon} />
            }
        </NavLink>
    </li>
}

export default SideBarList;