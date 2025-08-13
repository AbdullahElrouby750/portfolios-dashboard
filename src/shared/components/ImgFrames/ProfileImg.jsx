import React from 'react'
import profileImgPlaceholder from '../../../assets/profileIgmPlaceholder.png'

function ProfileImg({ profileImgStyle, profileImg }) {
    return (
        <div className={` ${profileImgStyle} h-full rounded-4xl flex justify-center items-baseline relative `}>
            <img src={profileImg ?? profileImgPlaceholder} alt="user profile img" className=" text-neutral-text-light text-sm w-full h-full rounded-4xl" onError={(e) => {
                e.target.src = profileImgPlaceholder;
                e.target.alt = "defulte Profile PlaceHolder"
            }} />
        </div>
    )
}

export default ProfileImg