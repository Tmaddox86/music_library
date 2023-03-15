import GalleryItem from './GalleryItem';
import {useContext, useState} from 'react'

export function Gallery({data}) {

        const songs = data.filter((result) => result.kind === "song")

        return (
            <div> 
              {songs.map((song) => <GalleryItem song = {song} key = {song.trackId}/>)}
            </div>
        )
}

export default Gallery;
//not showing up in git resporitory