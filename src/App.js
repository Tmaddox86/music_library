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
  let searchInput = useRef('')
console.log(typeof numberRef)

const API_URL = 'https://itunes.apple.com/search?term='

  useEffect (() => {
    if (search) {
    
    }
  }, [search])
  

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch()
    const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch(API_URL + search)
      const resData = await response.json()
      if (resData.results.length > 0) {
        setData(resData.results)
      } else {
        setMessage('Not Found')
      }
    }
    fetchData()
  } 

  return (
    <div className ='App'>
      <SearchContext.Provider value={{
        ref: searchInput, handleSearch: handleSearch
      }}> 
      <SearchBar handleSearch={handleSearch}/> 
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value = {[data]}>
      <Gallery/>
      </DataContext.Provider>
    </div>
  )
}

export default App;