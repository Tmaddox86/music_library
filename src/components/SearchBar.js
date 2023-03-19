import {useContext, useEffect, useState} from 'react'
import {SearchContext} from "../Context/SearchContext";

function SearchBar(props) {

    const {term, handleSearch} = useContext(SearchContext);

            return (
                <form>
                    <input ref={term} type="text" placeholder="Search Here"></input>
                    <button onclick = {(e) => handleSearch(e, data.current.value)}> Submit </button> 
                </form>
            )
        }

export default SearchBar

