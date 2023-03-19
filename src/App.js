import  {useEffect, useState, useRef } from 'react';
import Gallery from './components/Gallery.js';
import SearchBar from './components/SearchBar.js';
import {DataContext} from './Context/DataContext.js';
import {SearchContext} from './Context/SearchContext.js'

function App() {
  let [search, setSearch] = useState ('the greatful dead')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  let [numberRef] = useRef(1);
  //let [darkMode, setDarkMode] = useState(true)
  let searchInput = useRef('')
console.log(typeof numberRef)

  useEffect (() => {
    if (search) {

    }
  }, [search])
  

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch()
    fetch ('https://itunes.apple.com/search?term=the%20grateful%20dead')
      .then(response => response.json())
      .then(({ resultCount }) => {
        const successMessage = `Successfully fetched ${resultCount} resultCount(s)!`
        const errorMessage = "Not Found"
        setMessage(resultCount ? successMessage : errorMessage)
        setData(song)
        console.log('The number of calls that we have made is' + numberRef.current++)
  }, fetch() )

  return (
    <div className ='App'>
      <SearchContext.Provider value={{
        ref: searchInput, handleSearch: handleSearch
      }}> 
      <SearchBar handleSearch={setSearch}/> 
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value = {[data]}>
      <Gallery data = {data}/>
      </DataContext.Provider>
    </div>
  )
}}

export default App;