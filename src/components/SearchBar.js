import {useState} from 'react';

function SearchBar(props) {

    const [searchTerm, setSearchTerm] = useState('')
    /*const handleSearch = (e) => {
        setQuery(e.target.value)
    }
    
    useEffect(() => {
        setSearch(query)

    }, [query])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(query)
    }*/

            return (
                <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                    <input type="text" placeholder="Search Here" onChange={
                        (e) => setSearchTerm(e.target.value)
                        }>
                    </input>
                    <input type="submit">Submit</input> 
                </form>
            )
        }

export default SearchBar

//not showing up in github