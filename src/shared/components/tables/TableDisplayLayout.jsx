import React from 'react'
import TableHead from './TableHead';
import PreventClickLayer from './PreventClickLayer';
import SearchBar from './SearchBar';
import { useQueryClient } from '@tanstack/react-query'
import LoadingScrean from '../state-screens/LoadingScreen';

function TableDisplayLayout({ children, tableHeadValuesArr = [], tableHeadSpaceingArr = [], sensativeData = false, queryKey, setSearch, searchVal, isLoading }) {
    const queryClient = useQueryClient()
    if (tableHeadSpaceingArr.length !== tableHeadValuesArr.length) throw new Error('Error: table values do nott match table spacing');
    return (
        <div className=' w-full h-120 p-3.5 rounded-xl overflow-y-scroll
            dark:shadow-neutral-borders shadow-neutral-dark-borders shadow-2xl 
            flex flex-col justify-stretch items-center relative
            
            '>
            <SearchBar queryClient={queryClient} queryKey={queryKey} setSearchVal={setSearch} searchVal={searchVal}/>
            <TableHead tableHeadSpaceingArr={tableHeadSpaceingArr} tableHeadValuesArr={tableHeadValuesArr} />
            <div className={` w-full h-full flex flex-col justify-stretch items-center relative ${sensativeData ? 'blur-sm' : ''}`}>
                {(isLoading && searchVal) ?
                    <>
                        <LoadingScrean loadingText={'Searching'} />
                    </>
                    :
                    <>
                        {sensativeData && <PreventClickLayer />}
                        {children}
                    </>
                }
            </div>
        </div>
    )
}

export default TableDisplayLayout