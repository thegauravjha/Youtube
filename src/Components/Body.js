import React from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import { useSelector } from 'react-redux'

const Body = () => {
    const showSidebar = useSelector((state) => state.HeaderSlice.isSidebarVisible);

    return (
        <div className="flex">
            {
                showSidebar &&
                <Sidebar />
            }
            <MainContent />
        </div>
    )
}

export default Body