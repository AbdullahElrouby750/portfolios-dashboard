import React from 'react'

function PageInfo({info = [], infoKeyName = [], title = '', totalCount = 0}) {
    return (
        <div className=' w-full grow mb-2 p-3.5 rounded-2xl text-neutral-text-dark dark:text-neutral-dark-text-light
                        flex flex-col justify-around items-center
        '>
            <div className=' w-1/3 flex flex-col justify-center items-center border-b-brand-default border-b-4 rounded-2xl pb-4 mb-4'>
                <p className=' text-center text-4xl text-brand-default dark:text-brand-dark-default'>{title.toUpperCase()}</p>
                <p className=' text-center text-2xl text-neutral-text-dark dark:text-neutral-dark-text-light'>
                    {`${title} count : ${totalCount}`}
                </p>
            </div>

            <div className=' w-full flex flex-wrap gap-1 justify-around items-center'>
                {(info && infoKeyName && info.length === infoKeyName.length !== 0) && info.map(i => <div className=' w-1/4 flex flex-col justify-center items-start' key={i[infoKeyName[0]]}>
                    {infoKeyName.map((key) => <p className=' text-start text-xl'>{`${key} : ${i[key]}`}</p>)}
                </div>)}
            </div>
        </div>
    )
}

export default PageInfo