import  {useEffect, useState, useRef } from 'react';
import Gallery from './components/Gallery.js';
import SearchBar from './components/SearchBar.js';
import {DataContext} from './Context/DataContext.js';
import {SearchContext} from './context/SearchContext'

function App() {
  let [search, setSearch] = useState ('the greatful dead')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  let [darkMode, setDarkMode] = useState(true)
  let searchInput = useRef('')

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
    fetch ('https://itunes.apple.com/search?term=the%20grateful%20dead')
      .then(response => response.json())
      .then(({ resultCount, results}) => {
        const successMessage = `Successfully fetched ${resultCount} resultCount(s)!`
        const errorMessage = "Not Found"
    console.log(handleSearch)
  }, [])

  return (
    <div className ='App'>
      <SearchContext.Provider value={{
      term: searchInput, handleSearch: handleSearch
    }}> 
      <SearchBar handleSearch={setSearch}/> 
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value = {[darkMode, setDarkMode]}>
      <Gallery data = {data}/>
      </DataContext.Provider>
    </div>
  )
}}

export default App;