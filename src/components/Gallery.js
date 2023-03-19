//import (useState) from 'react'
import {useContext} from 'react'
import {DataContext} from './GalleryItem'
import GalleryItem from './GalleryItem';
//import {useContext, useState} from 'react'

export function Gallery() {
  const data = useContext(DataContext)
        
  const display = data.map((item, index) => {
          return (
            <GalleryItem item ={item} key={index}/>
          )
        })

        return (
          <div>
            {display}
          </div>
        )
   
}




//not showing up in git resporitory