import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

const Navbar = () => {
  return (
        <div className='text-center flex justify-between items-center px-10 py-6 bg-blue-950'>
            <h2 className=' text-blue-50 text-lg font-[helvetica neue] flex justify-center gap-2 font-semibold'><Search />Media Search</h2>
            <div className='flex gap-5 items-center text-xl'>
            <Link className='text-base text-medium hover:bg-blue-900 hover:text-blue-100 active:scale-95 bg-blue-200 px-3 gap-5 text-blue-950 rounded' to='/'>Search</Link>
            <Link className='text-base text-medium hover:bg-blue-900 hover:text-blue-100 active:scale-95 bg-blue-200 px-3 text-blue-950 rounded' to='/collection'>Collections</Link>
            </div>
            
        </div>
  )
}

export default Navbar