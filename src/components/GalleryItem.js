//not showing up in github

import {useState} from 'react'

function GalleryItem({song}) {

    let [isExpanded, setIsExpanded] = useState(false);
    let [darkMode, setDarkMode] = useState(DataContext)
    const {trackName} = {song};
    
    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${song.item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }
    

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{song.item.trackName}</h3>
                <h4>{song.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>{song.item.trackName}</h2>
                <h3>{song.item.collectionName}</h3>
                <h4>{song.item.primaryGenreName}</h4>
                <h4>{song.item.releaseDate}</h4>
            </div>
        )
        return isExpanded ? detailView : simpleView
    }
}
    /*return (
        <div onClick ={() => setIsExpanded(!isExpanded)} 
         style={{'display' : 'inline-block'}}>
         {isExpanded ? detailView : simpleView}
        </div>
    )
    const handleClick = () => {
        setIsExpanded(!isExpanded);
    }*/


export default GalleryItem