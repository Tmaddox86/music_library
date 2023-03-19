//import (useState) from 'react'
import {useContext} from 'react'
import {DataContext} from '../GalleryItem'
import GalleryItem from './GalleryItem';
//import {useContext, useState} from 'react'

function Gallery({data}) {

        const data = useContext(DataContext)
        let data = useContext(DataContext)
        const songs = data.filter((result) => result.kind === "song")
        let [Bool, setBool] = useState(true);

        return (
            <div isBool= {Bool}> 
              {songs.map((song) => <GalleryItem song = {song} key = {song.trackId}/>)}
            </div>
        )
}

/*[a, b, c, d, e]
 0, 1, 2, 3, 4
[c, b, a, d, e]
 0, 1, 2, 3, 4*/

export default Gallery;
//not showing up in git resporitory