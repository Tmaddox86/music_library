import {useState} from 'react';

function SearchBar(props) {

<<<<<<< HEAD
    const {term, handleSearch} = useContext(SearchContext);

            return (
                <form>
                    <input ref={term} type="text" placeholder="Search Here"></input>
                    <button onclick = {(e) => handleSearch(e, data.current.value)}> Submit </button> 
=======
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
>>>>>>> with_router
                </form>
            )
        }

export default SearchBar

