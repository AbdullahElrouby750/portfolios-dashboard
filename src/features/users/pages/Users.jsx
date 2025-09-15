import React, { useMemo, useState } from 'react'
import UserBar from '../component/UserBar'
import TableDisplayLayout from '../../../shared/components/tables/TableDisplayLayout'
import PageInfo from '../../../shared/components/PageInfo'
import { useApiDelete, useApiGet, useApiPost, useApiPut } from '../../../shared/hooks/APIs hooks/useApi'
import LoadingScrean from '../../../shared/components/state-screens/LoadingScreen'
import useAuth from '../../../shared/hooks/conetext-hooks/useAuth'
import BrandColorBTN from '../../../shared/components/BTNs/BrandColorBTN'
import { Outlet, useLocation, useNavigate } from 'react-router'
import PreventClickLayer from '../../../shared/components/PreventClickLayer'
import UsersToolBar from '../component/UsersToolBar'

const tableHeadValuesArr = ['Profile', 'Name', 'email', 'Role', 'Join Date', 'Options']
const tableHeadSpaceingArr = ['w-1/12', 'w-1/4', 'w-1/4', 'w-1/12', 'w-1/6', 'w-1/6']

//Todo: Need to handle editing and navigating to user profile page (Need to craft the profile page first)

function Users() {
    const { user: loggedinUser } = useAuth()
    const [totlalUsersCount, setTotlalUsersCount] = useState(null);
    const sensativeData = loggedinUser.role === 'user';
    const [search, setSearch] = useState(null)

    // gettting users
    const queryKey = ['usersList', 'getAll']
    const { data: groupedUsers, isLoading: gettingUsersLoading, error: gettingUsersError, isFetching } = useApiGet('/account/getAll', { groupBy: 'role', sortBy: 'joinDate', sort: 1, search: search }, queryKey);
    const users = useMemo(() => {
        if (!groupedUsers) return []
        // groupedUsers.sort((a, b) => a._id.localeCompare(b._id));
        setTotlalUsersCount(groupedUsers?.reduce((acc, current) => acc + current.count, 0));
        return groupedUsers.flatMap(group => group.list)
    }, [groupedUsers])

    const rolesCount = groupedUsers && groupedUsers?.map(group => {
        return {
            role: group._id,
            count: group.count,
            permissions: (group._id === 'rouby' ? 'Full permission' : group._id === 'admin' ? 'View external list' : 'No permissions')
        }
    });

    // deleteing users
    const location = useLocation();
    const navigator = useNavigate();
    const onSuccessFn = (response) => {
        if (loggedinUser._id === response.id) {
            navigator('/login')
        }
    }
    const { mutate: deleteUser, isPending: deleteing, error: deletionErr } = useApiDelete(queryKey, () => { });
    const { mutate: updateUser, isPending: updating, error: updateingErr } = useApiPut(queryKey);
    const { mutate: addUser, isPending: adding, error: addingErr} = useApiPost(queryKey, () => {});


    if (gettingUsersLoading || deleteing || updating || adding) return <LoadingScrean loadingText={gettingUsersLoading ? 'Getting users' : deleteing ? 'Deleting' : updating ? 'Updating' : adding ? 'Adding' : ''} />

    return (
        <div className=' grow h-full flex flex-col justify-between items-center p-4.5 relative'>
            {(location.pathname.includes('users/update') || location.pathname.includes('users/add')) && <PreventClickLayer className={' bg-secondary-dark-default'} />}
            <UsersToolBar navigate={navigator} location={location} addFn={addUser} userAccess={loggedinUser.accessAllowed} userRole={loggedinUser.role}/>
            {totlalUsersCount && <PageInfo title='users' info={rolesCount} infoKeyName={['role', 'count', 'permissions']} totalCount={totlalUsersCount} />}
            <TableDisplayLayout tableHeadValuesArr={tableHeadValuesArr} tableHeadSpaceingArr={tableHeadSpaceingArr} sensativeData={sensativeData} queryKey={queryKey} setSearch={setSearch} isLoading={isFetching} searchVal={search}>
                {(!!users && !gettingUsersError) && users.map(user => <UserBar key={user._id} userData={user} loggedInUserId={loggedinUser._id} loggedInUseRole={loggedinUser.role} haveAccess={loggedinUser.accessAllowed} deleteFn={deleteUser} editFn={updateUser} location={location} navigate={navigator} />)}
            </TableDisplayLayout>
            {sensativeData && <div className=' absolute top-1/2 w-full flex justify-center items-center text-2xl'>
                <BrandColorBTN className=' w-1/6'>Request Access</BrandColorBTN>
            </div>}
            <Outlet />
        </div>
    )
}

export default Users