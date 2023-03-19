//not showing up in github

import {useState} from 'react'
//import {DataContext} from './Context/Datacontext'

function GalleryItem(props) {

    let [view, setView] = useState(false);
    
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
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>{props.item.trackName}</h2>
                <h3>{props.item.collectionName}</h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    
    }

    return (
        <div onClick ={() => setView(!view)} 
         style={{'display' : 'inline-block'}}>
         {view ? detailView() : simpleView()}
         <p>One Gallery Item</p>
        </div>
    )
}
    /*const handleClick = () => {
        setIsExpanded(!isExpanded);
    }*/


export default GalleryItem