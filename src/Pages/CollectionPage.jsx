//import React from 'react'
import { useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"


const CollectionPage = () => {
    const collection = useSelector(state => state.collection.items)
    
  return (
      <div  className='flex flex-wrap justify-center gap-3 overflow-auto px-10 py-6'>
         {collection.map((item,idx)=>{
          return <div key={idx}>
              <CollectionCard item={item} />
          </div>
         })}
      </div>

  )
}

export default CollectionPage

