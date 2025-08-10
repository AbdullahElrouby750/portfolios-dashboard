import React from 'react'
import UserBar from '../component/UserBar'
import TableDisplayLayout from '../../../shared/components/tables/TableDisplayLayout'
import PageInfo from '../component/PageInfo'

const tableHeadValuesArr = ['Profile', 'Name', 'email', 'Role', 'Join Date', 'Options']
const tableHeadSpaceingArr = [' columns-1', ' columns-2', ' columns-3', 'columns-1', ' columns-2', ' columns-3']

function Users() {
    return (
        <div className=' w-full h-full flex flex-col justify-between items-center p-4.5'>
            <PageInfo />
            <TableDisplayLayout tableHeadValuesArr={tableHeadValuesArr} tableHeadSpaceingArr={tableHeadSpaceingArr}>

                <UserBar />
                <UserBar />
                <UserBar />
                <UserBar />
                <UserBar />
                <UserBar />
                <UserBar />
                <UserBar />
                <UserBar />
                <UserBar />
                <UserBar />
            </TableDisplayLayout>
        </div>
    )
}

export default Users