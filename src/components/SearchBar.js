import {useState} from 'react'

function SearchBar(setSearch) {

    const [query, setQuery] = useState('')
          
    const handleChange = (e) => {
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
                    <input ref={term} type="text" placeholder="Search Here"></input>
                    <button onclick = {(e) => handleSearch(e, term)}> Submit </button>
                  
                  
                </form>
            )
        }

export default SearchBar

//not showing up in github