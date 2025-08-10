import React from 'react'

function TableHead({ tableHeadValuesArr = [], tableHeadSpaceingArr = [] }) {
    return (
        <div className=' w-full h-1/11 min-h-1/10 max-h-1/12 flex flex-row justify-around items-center bg-amber-700'>
            {tableHeadSpaceingArr && tableHeadValuesArr.map((val, index) => <div key={index} className={` flex justify-center items-baseline ${val}`}>
                <p className=' text-brand-dark dark:text-brand-dark-dark text-center'>
                    {tableHeadValuesArr[index]}
                </p>
            </div>)}
        </div>
    )
}

export default TableHead