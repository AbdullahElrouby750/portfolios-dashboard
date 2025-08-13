import React from 'react'
import BrandColorBTN from '../../../shared/components/BTNs/BrandColorBTN'

function QuickAuthBtn({ btnText, goToLink, ThisBrandIcon }) {
    return (
        <div className=' w-full'>
            <a href={goToLink} className=' w-full flex justify-center'>
                <BrandColorBTN className=' w-9/10 h-10 flex justify-center items-center text-xl' lightBg={true}>
                    <ThisBrandIcon className=' w-8 h-8 me-1.5' />
                    {btnText}
                </BrandColorBTN></a>
        </div>
    )
}

export default QuickAuthBtn