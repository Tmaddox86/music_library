import {useState} from 'react'

export function SearchBar(props) {

    const [query, setQuery] = useState('')
          
    const handleChange = (e) => {

    }

    const handleSubmit = (e) => {
        e.preventDefault()
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