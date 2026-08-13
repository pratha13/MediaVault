
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
    }

  return (
    <div>
      <form onSubmit={submitHandler}
      className=' flex justify-center w-full p-10 gap-10'>
        <input
        required
        value = {text}
        onChange = {(e)=>{
            setText(e.target.value)
        }}
          className='hover:bg-gray-700 text-white bg-gray-800 border-2 px-4 py-2 text-xl rounded outline-none'
          type='text'
          placeholder='Search Anything...'
        />
        <button className='active:scale-95 hover:bg-gray-700 cursor-pointer text-white bg-gray-800 border-2 px-4 py-2 text-xl rounded outline-none'>Search</button>
        
      </form>
    </div>
  )
}

export default SearchBar
