import logo from '../assets/youtube-logo.png';
import menu from '../assets/menu.png';
import search from '../assets/search.png';
import user from '../assets/user.png';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { sidebarToggle } from '../utils/redux/HeaderSlice'
import { Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Header = () => {
    const dispatch = useDispatch();
    const [seachQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            getSearchSuggestions();
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [seachQuery])

    const getSearchSuggestions = async () => {
        // const data = await fetch('https://thingproxy-760k.onrender.com/fetch/' + YOUTUBE_SEARCH_API + seachQuery);
        // const data = await fetch('https://cors-anywhere.herokuapp.com/' + YOUTUBE_SEARCH_API + seachQuery);
        // const json = await data.json();
        // console.log(json);

        const url = `https://cors-anywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${seachQuery}`;

        fetch(url)
            .then(response => {
                console.log(response);  // Log the raw response
                return response.text(); // Read as text to inspect the full content
            })
            .then(data => {
                console.log(data);  // Log data to see what's being returned
            })
            .catch(error => console.error('Error:', error));
    }


    return (
        <div className='flex justify-between items-center px-8 shadow-lg select-none'>
            {/* Hamburger Menu + Logo */}
            <div className='flex items-center' >
                <span className='p-3 cursor-pointer rounded-full mr-2 ease-in duration-75 hover:bg-gray-200'
                    onClick={() => dispatch(sidebarToggle())}
                >
                    <img className="w-4" alt="menu" src={menu} />
                </span>
                <Link to={'/'}><img className="w-28 cursor-pointer" alt="logo" src={logo} /></Link>
            </div>

            {/* Input + Search Button */}
            <div className='w-1/2 flex justify-center'>
                <input
                    className="w-[550px] border border-gray-400 p-4 h-8 rounded-l-full focus:outline-none focus:border-blue-400 shadow-inner"
                    type="text"
                    placeholder='Search'
                    onKeyUp={(e) => setSearchQuery(e.target.value)}
                />
                <button className='w-12 border border-gray-400 bg-gray-200 hover:bg-gray-300 px-2 rounded-r-full'>
                    <img className=' w-4' src={search} alt="search" />
                </button>
            </div>

            {/* User */}
            <div>
                <img className='w-8 mr-8' src={user} alt="user" />
            </div>
        </div>
    )
}

export default Header