import React from 'react'

function TableHead({ tableHeadValuesArr = [], tableHeadSpaceingArr = [] }) {
    return (
        <div className=' w-full h-1/11 min-h-1/10 max-h-1/12 flex flex-wrap items-center  px-2.5 py-1.5'>
            {tableHeadSpaceingArr && tableHeadSpaceingArr.map((val, index) => <div key={index} className={` flex justify-center items-baseline ${val}`}>
                <p className=' text-brand-default dark:text-brand-dark-default text-center w-full font-bold text-xl'>
                    {tableHeadValuesArr[index]}
                </p>
            </div>)}
        </div>
    )
}

export default TableHead