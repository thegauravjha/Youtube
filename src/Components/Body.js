import React from 'react'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Body = () => {
    const showSidebar = useSelector((state) => state.HeaderSlice.isSidebarVisible);

    return (
        <div className="flex">
            {
                showSidebar &&
                <Sidebar />
            }
            <Outlet />
        </div>
    )
}

export default Body