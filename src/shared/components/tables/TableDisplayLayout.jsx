import React from 'react'
import TableHead from './TableHead';

function TableDisplayLayout({ children, tableHeadValuesArr = [], tableHeadSpaceingArr = [] }) {
    if(tableHeadSpaceingArr.length !== tableHeadValuesArr.length) throw new Error('Error: table values do nott match table spacing');
    return (
        <div className=' w-full h-130 p-3.5 rounded-xl overflow-y-scroll
            dark:shadow-neutral-borders shadow-neutral-dark-borders shadow-2xl 
            flex flex-col justify-stretch items-center relative'>
                <TableHead tableHeadSpaceingArr={tableHeadSpaceingArr} tableHeadValuesArr={tableHeadValuesArr}/>
            {children}
        </div>
    )
}

export default TableDisplayLayout