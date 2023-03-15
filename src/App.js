import  {useEffect, useState } from 'react';
import Gallery from './components/Gallery.js';
import SearchBar from './components/SearchBar.js';

function App() {
  let [search, setSearch] = useState ('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])

  useEffect (() => {
    fetch ('https://itunes.apple.com/search?term=the%20grateful%20dead')
      .then(response => response.json())
      .then(({ resultCount, results}) => {
        const successMessage = `Successfully fetched ${resultCount} resultCount(s)!`
        const errorMessage = "Not Found"
        setMessage(resultCount ? successMessage : errorMessage)
        setData(results)
        console.log(results)
      })
  }, [])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div> 
      <SearchBar/> 
      {message}
      <Gallery data = {data}/>
    </div>
  )
}

export default App;

