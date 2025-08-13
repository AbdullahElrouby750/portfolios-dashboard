import React from 'react'
import TableHead from './TableHead';
import PreventClickLayer from './PreventClickLayer';

function TableDisplayLayout({ children, tableHeadValuesArr = [], tableHeadSpaceingArr = [], sensativeData = false }) {
    if (tableHeadSpaceingArr.length !== tableHeadValuesArr.length) throw new Error('Error: table values do nott match table spacing');
    return (
        <div className=' w-full h-120 p-3.5 rounded-xl overflow-y-scroll
            dark:shadow-neutral-borders shadow-neutral-dark-borders shadow-2xl 
            flex flex-col justify-stretch items-center relative
            
            '>
            <TableHead tableHeadSpaceingArr={tableHeadSpaceingArr} tableHeadValuesArr={tableHeadValuesArr} />
            <div className={` w-full h-full flex flex-col justify-stretch items-center relative ${sensativeData ? 'blur-sm' : ''}`}>

                {sensativeData && <PreventClickLayer />}
                {children}
            </div>
        </div>
    )
}

export default TableDisplayLayout