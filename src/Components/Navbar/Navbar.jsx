import React, { useContext, useEffect, useState } from 'react'
import { SiMinutemailer } from "react-icons/si";
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Navbar = () => {
    const [value, setValue] = useState(60);
    const [percentage, setPercentage] = useState(100);
    const [name, setName] = useState("BTC");
    const {isDarkMode,setIsDarkMode}=useContext(AuthContext)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue === 1) {
          return 60;
        } else {
          return prevValue - 1;
        }
      });
    }, 1000); 

    return () => clearInterval(intervalId);
    
   
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((prevValue) => {
        if (prevValue === 1) {
          return 100;
        } else {
          return prevValue - 1;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
    
   
  }, []);
   

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Apply dark mode class to body
  };

    return (
        <div className={!isDarkMode?"bg-white navbar oswald-400":"navbar oswald-400 bg-[#191d28]"}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        <li>
                            <a>INR</a>
                            <ul className="p-2 ">
                                <li><a>INR</a></li>
                                
                            </ul>
                        </li>
                        <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

                    <li className={isDarkMode?'text-white':'text-black'}><a>BUY {name}</a></li>
                    </ul>
                </div>
                <h1 className="text-4xl  font-extrabold text-[#3dc6c1]">HOLDINFO</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    <li className={isDarkMode?'text-white':'text-black'}>
                        <details>
                            <summary>INR</summary>
                            <ul className="p-2">
                            <li><button className={!isDarkMode?'text-white':'text-black'} >INR</button></li>
                                
                            </ul>
                        </details>
                    </li>

                   

                    <li className={isDarkMode?'text-black':'text-black'}>
                        <details>
                            <summary  className={isDarkMode?'text-white':'text-black'} >BTC</summary>
                            <ul className="dropdown-content menu  rounded-box z-[1] w-52 p-2 shadow">
                                <li><button className={isDarkMode?'text-black':'text-black'} onClick={(e)=>setName(e.target.innerText)}>BTC</button></li>
                                <li><button className={isDarkMode?'text-black':'text-black'} onClick={(e)=>setName(e.target.innerText)}>ETH</button></li>
                                <li><button className={isDarkMode?'text-black':'text-black'} onClick={(e)=>setName(e.target.innerText)}>USDT</button></li>
                                <li><button className={isDarkMode?'text-black':'text-black'} onClick={(e)=>setName(e.target.innerText)}>XRP</button></li>
                                <li><button className={isDarkMode?'text-black':'text-black'} onClick={(e)=>setName(e.target.innerText)}>TRX</button></li>
                                <li><button className={isDarkMode?'text-black':'text-black'} onClick={(e)=>setName(e.target.innerText)}>DASH</button></li>
                                <li><button className={isDarkMode?'text-black':'text-black'} onClick={(e)=>setName(e.target.innerText)}>ZEC</button></li>
                                <li><button className={isDarkMode?'text-black':'text-black'} onClick={(e)=>setName(e.target.innerText)}>XEM</button></li>
                                <li><button className={isDarkMode?'text-black':'text-black'} onClick={(e)=>setName(e.target.innerText)}>IOST</button></li>
                                <li><button className={isDarkMode?'text-black':'text-black'} onClick={(e)=>setName(e.target.innerText)}>WIN</button></li>
                                <li><button className={isDarkMode?'text-black':'text-black'} onClick={(e)=>setName(e.target.innerText)}>BIT</button></li>
                                <li><button className={isDarkMode?'text-black':'text-black'} onClick={(e)=>setName(e.target.innerText)}>WRX</button></li>
                            </ul>
                        </details>
                    </li>
                    <li className={isDarkMode?'text-white':'text-black'}><a>BUY {name}</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex justify-center items-center space-x-4'>
                <div className="radial-progress   shadow-lg" style={{ "--value": percentage, "--size": "50px", "--thickness": "5px",'color':'#3dc6c1' }} role="progressbar">{value}</div>
                    <button className="btn btn-accent text-white">
                    <SiMinutemailer className='text-3xl' />
                        Connect Telegram
                    </button>

                    <label className="toggle-container">
            <input type="checkbox" className="toggle border-[#2e3241] bg-accent [--tglbg:#2e3241] hover:bg-accent" defaultChecked={isDarkMode} onChange={toggleDarkMode} />
            <span className="slider"></span>
          </label>


                </div>

            </div>
        </div>
    )
}

export default Navbar