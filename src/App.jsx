
import { useContext, useEffect, useState } from 'react'
import './App.css'
import ListItems from './Components/ListItems/ListItems'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import { AuthContext } from './AuthProvider/AuthProvider'

function App() {
 
  const [found,setFound]=useState({})
  const {_id,...data}=found
  
  
  const {isDarkMode,setIsDarkMode}=useContext(AuthContext)
  
  useEffect(()=>{
    fetch('http://localhost:5000/')
    .then(res=>res.json())
    .then(data=>setFound(data[0]))
  },[])

  const entries = Object.entries(data);

// Slice the first 3 elements from the array
const slicedEntries = entries.slice(0, 10);

// Convert the sliced array back to an object
const slicedData = Object.fromEntries(slicedEntries);







  

 
  return (
    <div className='flex flex-col space-y-8'>
      <div>
      <Navbar></Navbar>
      </div>
      <div>
      <Banner></Banner>
      </div>
      <div>
      <ListItems lists={slicedData} ></ListItems>
      </div>
      
      
        
     
    </div>
  )
}

export default App
