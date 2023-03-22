import  {useEffect, useState, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Gallery from './components/Gallery.js';
import SearchBar from './components/SearchBar.js';
import {DataContext} from './Context/DataContext.js';
import {SearchContext} from './Context/SearchContext.js'
import AlbumView from './components/AlbumView.js'
import ArtistView from './components/ArtistView.js'

function App() {
  
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  let [numberRef] = useRef(1);
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

    <div>
      {message}
        <Router>
          <Routes>
            <Route path="/" element={
              <Fragment>
                <SearchBar handleSearch = {handleSearch}/>
                <Gallery data={data}/>
              </Fragment>
            }>
            </Route>
              <Route path="/album/:id" element={<AlbumView/>}/>
              <Route path="/artist/:id" element={<ArtistView/>}/>
          </Routes>
        </Router>
    </div>
   /* <div className ='App'>
      <SearchContext.Provider value={{
        term: searchInput, handleSearch: handleSearch
      }}> 
      <SearchBar handleSearch={handleSearch}/> 
      </SearchContext.Provider>
      <DataContext.Provider value = {[data]}>
      <AlbumView/>
      <ArtistView/>
      </DataContext.Provider>
    </div>*/
  )
}

export default App;