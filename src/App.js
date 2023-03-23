/*import  {useEffect, useState, Suspense } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Gallery from './components/Gallery.js';
import SearchBar from './components/SearchBar.js';
import {DataContext} from './Context/DataContext.js';
import {SearchContext} from './Context/SearchContext.js'
import AlbumView from './components/AlbumView.js';
import ArtistView from './components/ArtistView.js';
import { createResource as fetchData } from './helper'*/


import React, { Suspense } from 'react';
import './App.css'; 

  


function App() {

const AboutUs = React.lazy(() => import('./AboutUs'))
const Packages = React.lazy(() => import('./Packages'))
  
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([null])
  let [numberRef] = useRef(1);
  let searchInput = useRef('')

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if (searchTerm) {
        setData(fetchData(searchTerm))
    }
}, [searchTerm])


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


}

const renderGallery =() => {
  if (data) {
  return (
    <div className="App">
      <h1>Lonzo's Travel Agency</h1>
      <h2>Make your travel dreams come true</h2>
      <div className="contents">
      <Suspense fallback={<h1><Spinner/></h1>}>
        <Gallery data={data}/>
      </Suspense>
    </div>
    </div>
  )
  }
return (
 <div className="App">
  <SearchBar handleSearch={handleSearch}/>
  {message}
  {renderGallery()}
</div>
)

}

export default App;