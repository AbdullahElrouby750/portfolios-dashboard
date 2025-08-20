import React, { useState } from 'react'
import Inputs from '../inputs/Inputs'
import BrandColorIcons from '../Icons/BrandColorIcon';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ searchVal, setSearchVal, queryClient, queryKey }) {
    const [val, setval] = useState('');
    const [err, setErr] = useState(false);
    const customOnChange = (e) => {
        setval(e.target.value)
        if (e.target.value)
            setErr(false);
        if( !e.target.value && searchVal) {
            setErr(false);
            setSearchVal(null);
            queryClient.invalidateQueries({ queryKey });
        }
    }

    const handleClick = async () => {
        if (val) {
            await setSearchVal(val);
            queryClient.invalidateQueries({ queryKey });
            setErr(false);
        } else {
            setErr(true);
        }
    }

    const onEnterKeyPressed = (e) => {
        console.log('event:: ', e.key)
        e.key === 'Enter' && handleClick()
    }

    return (
        <div className=' w-full relative'>
            <Inputs className={'w-full'}
                value={val}
                setValue={setval}
                error={err}
                setError={setErr}
                errMsg={'You need to enter a value first before searching!'}
                placeholder={'search here by name...'}
                customOnChange={customOnChange}
                customOnBlur={customOnChange}
                onKeyPress={onEnterKeyPressed}
            />
            <BrandColorIcons Icon={FaSearch} className={' absolute right-1/20 top-1/3 text-xl'} onClick={handleClick} />
        </div>
    )
}

export default SearchBar