import React from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

const Body = ({ isSidebarCollapsed }) => {
    return (
        <div className="flex">
            {
                isSidebarCollapsed &&
                <Sidebar />
            }
            <MainContent />
        </div>
    )
}

export default Body