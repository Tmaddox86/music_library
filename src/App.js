import  {useEffect, useState, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Gallery from './components/Gallery.js';
import SearchBar from './components/SearchBar.js';
import {DataContext} from './Context/DataContext.js';
import {SearchContext} from './Context/SearchContext.js'
import AlbumView from './components/AlbumView.js';
import ArtistView from './components/ArtistView.js';

function App() {
  //let [search, setSearch] = useState ('the greatful dead')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
 // let [numberRef] = useRef(1);
  let searchInput = useRef('')

  const API_URL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
			document.title = `${term} Music`
			const response = await fetch(API_URL + term)
			const resData = await response.json()
			if (resData.results.length > 0) {
				// Set State and Context value
				return setData(resData.results)
			} else {
				return setMessage('Not Found')
			}
		}
		fetchData()
	}

  return (
    <div className ='App'>
      <SearchContext.Provider value={{
        term: searchInput, handleSearch: handleSearch
      }}>
      <SearchBar handleSearch={handleSearch}/> 
      <SearchBar/> 
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value = {(data)}>
      <Gallery/>
      </DataContext.Provider>
    </div>
  )
}

export default App;