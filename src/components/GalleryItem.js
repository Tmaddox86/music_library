//not showing up in github

import {useState} from 'react'

export function GalleryItem({song}) {

    const [isExpanded, setIsExpanded] = useState(false);
    const {trackName} = {song};
    
    const handleClick = () => {
        setIsExpanded(!isExpanded);
    }

    const simpleStyles = {display : 'inline-block'}
    const expandedStyles = {};

    return (
        <div onClick = {handleClick} style={isExpanded ? expandedStyles : simpleStyles}>
            <p>{trackName}</p> 
        </div>
    )
    
   /*const simpleView = () => {
        return (
            <div>
                <h3>{song.item.trackName}</h3>
                <h4>{song.item.collectionName}</h4>
            </div>
        )
    }*/
}

export default GalleryItem