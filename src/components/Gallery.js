//import (useState) from 'react'
import {useContext} from 'react'
import {DataContext} from './GalleryItem'
import GalleryItem from './GalleryItem';
//import {useContext, useState} from 'react'

function Gallery() {

        //let data = useContext(DataContext)
        const data = props.data.result.read()
        const display = data.map((item, index) => {
          return (
            <GalleryItem item = {item} key={index}/>
          )})

        return (
            <div> 
              {display}
            </div>
        )
   
}




//not showing up in git resporitory
