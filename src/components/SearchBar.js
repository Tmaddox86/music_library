import {useContext, useEffect, useState} from 'react'
import {SearchContext} from "../Context/SearchContext";

function SearchBar(props) {

    const {term, handleSearch} = useContext(SearchContext);
  
    
    /*useEffect(() => {
        setSearch(query)

    }, [query])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(query)
    }*/

            return (
                <form>
                    <input ref={term} type="text" placeholder="Search Here"></input>
                    <button onclick = {(e) => handleSearch(e, data.current.value)}> Submit </button> 
                </form>
            )
        }

export default SearchBar

//not showing up in github