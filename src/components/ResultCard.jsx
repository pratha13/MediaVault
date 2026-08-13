//import React from 'react'
import { Bookmark } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({item}) => {
    const dispatch = useDispatch()
    const addToCollection=(item)=>{
        dispatch(addCollection(item))
        dispatch(addedToast())
    }
  return (
    <div className='w-[22vw] relative h-[36vh] bg-white rounded'>
    <a target='_blank' className='h-full' href={item.url}>
        {item.type == 'photo'?<img className="h-full w-full object-cover object-center" src={item.src} alt="" />:''}
        {item.type == 'video'?<video className="h-full w-full object-cover object-center" autoPlay loop muted src={item.src} />:''}
    </a>
    <div className='h-[35%] flex justify-between items-center w-full p-4 text-white absolute bottom-0'>
        <h2 className=' text-sm contain-content capitalize'>{item.title}</h2>
        <button onClick={()=>{
            addToCollection(item)
        }}
        
        className='bg-red-800 text-md cursor-pointer text-white flex justify-center active:scale-95 hover:bg-red-600 rounded px-3 py-2 '     
        ><Bookmark /> Save</button>
    </div>
    </div>
  )
}

export default ResultCard
