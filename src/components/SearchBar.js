import {useContext, useEffect, useState} from 'react'
import {SearchContext} from "../Context/SearchContext";

function SearchBar(props) {

    const [query, setQuery] = useState('')
    const setSearch = useContext(SearchContext);
    const handleSearch = (e) => {
        setQuery(e.target.value)
    }
    
    /*useEffect(() => {
        setSearch(query)

    }, [query])*/

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(query)
    }

            return (
                <form>
                    <input onSubmit = {handleSubmit} ref={data} type="ref" placeholder="Search Here"></input>
                    <button onclick = {(e) => handleSearch(e, data.current.value)}> Submit </button> 
                </form>
            )
        }

export default SearchBar

//not showing up in github