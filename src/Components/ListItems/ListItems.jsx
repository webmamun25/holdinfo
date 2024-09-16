import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaRupeeSign } from "react-icons/fa";
const ListItems = ({ lists }) => {
  const {isDarkMode,setIsDarkMode}=useContext(AuthContext)
  return (
    <div className='oswald-400'>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-spacing-y-[5px]"> {/* Creates 5px gap between rows */}
          <thead className=" text-[#83858b] oswald-400  text-lg ">
            <tr>
              <th scope="col" className="px-6 py-3">#</th>
              <th scope="col" className="px-6 py-3">Platform</th>
              <th scope="col" className="px-6 py-3">Last Traded Price</th>
              <th scope="col" className="px-6 py-3">Buy/Sell Price</th>
              <th scope="col" className="px-6 py-3">Difference</th>
              <th scope="col" className="px-6 py-3">Savings</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(lists).map((keyName, i) => (
              <tr
                key={i}
                className="bg-[#2e3241] text-white rounded-lg text-xl dark:border-[#191d28]"
                style={{'borderBottom':'8px solid #191d28'}} // Apply background color here
              >
                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                  {i+1}
                </th>
                <td className="px-6 py-4">{keyName}</td>
                <td className="px-6 py-4"><FaRupeeSign className='inline-block text-2xl' />{lists[keyName].last}</td>
                <td className="px-6 py-4"><FaRupeeSign  className='inline-block text-2xl' />{lists[keyName].buy} / {lists[keyName].sell}</td>
                <td className="px-6 py-4 text-red-500">{lists[keyName].high - lists[keyName].low}%</td>
                <td className="px-6 py-4 text-[#3dc6c1] ">{(lists[keyName].high - lists[keyName].low) * lists[keyName].volume}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListItems;
