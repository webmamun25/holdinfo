import React, { useState } from 'react'

const ListItems = ({lists}) => {
       
    
  return (
    <div>
        

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    #
                </th>
                <th scope="col" class="px-6 py-3">
                    Platform
                </th>
                <th scope="col" class="px-6 py-3">
                    Last Traded Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Buy/Sell Price
                </th>
                <th scope="col" class="px-6 py-3">
                   Volume
                </th>
                <th scope="col" class="px-6 py-3">
                   Base Units
                </th>
            </tr>
        </thead>
        <tbody>
        {
        Object.keys(lists).map((keyName, i) => (


            <tr key={i} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {i+1}
            </th>
            <td class="px-6 py-4">
            {keyName}
            </td>
            <td class="px-6 py-4">
            ${lists[keyName].last}
            </td>
            <td class="px-6 py-4">
            ${lists[keyName].buy}/ ${lists[keyName].sell}
            </td>
            <td class="px-6 py-4">
            {lists[keyName].volume}
            </td>
            <td class="px-6 py-4">
            {lists[keyName].base_unit}
            </td>
        </tr>
  
))}{

           }
           
           
           
         
         
           
        </tbody>
    </table>
</div>

    </div>
  )
}

export default ListItems