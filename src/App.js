import { useState } from 'react';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';

function App() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

    const handleSidebarCollapse = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed)
    }
    return (
        <>
            <Header handleSidebarCollapse={handleSidebarCollapse} />
            <Body isSidebarCollapsed={isSidebarCollapsed} />
        </>
    );
}

export default App;
