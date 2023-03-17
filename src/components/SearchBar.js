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
                <form onSubmit= {handleSubmit}>
                    <input type= "text" value={query} onChange = {handleChange}/>
                    <input type= "submit"/>
                </form>
            )
        }

export default SearchBar;

//not showing up in github