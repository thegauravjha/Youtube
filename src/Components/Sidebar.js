import React from 'react'

const Sidebar = () => {
    return (
        <div className='w-48 shadow-md mt-5'>
            <ul className='px-3'>
                <li className='p-2 hover:bg-gray-100 rounded-lg cursor-pointer'>Home</li>
                <li className='p-2 hover:bg-gray-100 rounded-lg cursor-pointer'>Shorts</li>
                <li className='p-2 hover:bg-gray-100 rounded-lg cursor-pointer'>Subscriptions</li>
                <li className='p-2 hover:bg-gray-100 rounded-lg cursor-pointer'>Youtube Music</li>
            </ul>
            <h2 className='px-3 p-2 pl-5 mt-5 font-bold border-t-2 border-t-grey-400'>You ></h2>
            <ul className='px-3'>
                <li className='p-2 hover:bg-gray-100 rounded-lg cursor-pointer'>Your Channel</li>
                <li className='p-2 hover:bg-gray-100 rounded-lg cursor-pointer'>History</li>
                <li className='p-2 hover:bg-gray-100 rounded-lg cursor-pointer'>Playlists</li>
                <li className='p-2 hover:bg-gray-100 rounded-lg cursor-pointer'>Your videos</li>
                <li className='p-2 hover:bg-gray-100 rounded-lg cursor-pointer'>Watch later</li>
                <li className='p-2 hover:bg-gray-100 rounded-lg cursor-pointer'>Liked videos</li>
                <li className='p-2 hover:bg-gray-100 rounded-lg cursor-pointer'>Downloads</li>
            </ul>
        </div>
    )
}

export default Sidebar