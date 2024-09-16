import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'

const Banner = () => {
    const {isDarkMode,setIsDarkMode}=useContext(AuthContext)
  return (
    <div className='px-14 oswald-400'>
        <h1 className='text-center text-[#686b72] oswald-400  text-3xl '>Best Price to Trade</h1>
        <section className="flex justify-between align-items-center py-5 space-x-3">
            <div>
                <h3 className='text-center text-[#3dc6c1] oswald-400  text-2xl ' >0.1%</h3>
                <p className='text-[#686b72] oswald-400  text-lg '>5 Mins</p>
            </div>
            <div>
                <h3 className='text-center text-[#3dc6c1] oswald-400  text-2xl '>0.96%</h3>
                <p className='text-[#686b72] oswald-400  text-lg '>1 Hour</p>
            </div>
            <div>
                <h3 className={isDarkMode?'text-center text-white oswald-400  text-6xl ':'text-center text-black oswald-400  text-6xl '}>26,56,110</h3>
                <p className='text-[#686b72] oswald-400  text-lg mt-4 '>Average BTC/INR net price including commission</p>
            </div>
            <div>
                <h3 className='text-center text-[#3dc6c1] oswald-400   text-2xl '>2.73%</h3>
                <p className='text-[#686b72] oswald-400  text-lg '>1 Day</p>
            </div>
            <div>
                <h3 className='text-center text-[#3dc6c1] oswald-400   text-2xl '>7.51%</h3>
                <p className='text-[#686b72] oswald-400  text-lg '>7 Days</p>
            </div>
            
        </section>
    </div>
  )
}

export default Banner