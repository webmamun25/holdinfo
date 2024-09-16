
import { useEffect, useState } from 'react'
import './App.css'
import ListItems from './Components/ListItems/ListItems'

function App() {
 
  const [found,setFound]=useState({})
  const {_id,...data}=found
  
 
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
    <>
      
      <h1 className='text-4xl bg-red-300'>Vite + React</h1>
   
      <ListItems lists={slicedData} ></ListItems>
    </>
  )
}

export default App
