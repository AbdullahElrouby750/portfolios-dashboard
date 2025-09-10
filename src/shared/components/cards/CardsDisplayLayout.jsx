import LoadingScrean from '../state-screens/LoadingScreen'
import PreventClickLayer from '../PreventClickLayer'
import SearchBar from '../inputs/SearchBar'

function CardsDisplayLayout({ children, isLoading, searchVal, setSearchVal, queryKey }) {

  return (
    <div className=' w-full h-110 p-2.5 rounded-xl overflow-y-scroll
            dark:shadow-neutral-borders shadow-neutral-dark-borders shadow-2xl 
            flex flex-col justify-stretch items-center relative
            '>

      <SearchBar queryKey={queryKey} searchVal={searchVal} setSearchVal={setSearchVal} />
      <div className=' flex w-full grow flex-wrap justify-around items-stretch gap-5.5'>
        {(isLoading && searchVal) ?
          <>
            <LoadingScrean loadingText={'Searching'} />
            <PreventClickLayer />
          </>
          :
          <>
            {children}
          </>
        }
      </div>
    </div>
  )
}

export default CardsDisplayLayout