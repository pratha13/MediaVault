
import { Route,Routes } from 'react-router-dom'
//import SearchBar from './components/SearchBar'
//import Tabs from './components/Tabs'
import Navbar from './components/Navbar'
import HomePage from './Pages/HomePage'
import CollectionPage from './Pages/CollectionPage'
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <div className = 'min-h-screen w-full bg-gray-950'>
      <Navbar />
      <Routes>
        <Route path = '/' element={<HomePage />} />
        <Route path = '/collection' element={<CollectionPage />} />
      </Routes>

      <ToastContainer/>
      
    </div>
  )
}

export default App