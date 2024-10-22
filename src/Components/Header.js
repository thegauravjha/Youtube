import logo from '../assets/youtube-logo.png';
import menu from '../assets/menu.png';
import search from '../assets/search.png';
import user from '../assets/user.png';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { sidebarToggle } from '../utils/redux/HeaderSlice';
import { updateCachedResults } from '../utils/redux/SearchSlice';
import { Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import useDebounce from '../utils/Custom Hooks/useDebounce';

const Header = () => {
    const dispatch = useDispatch();
    const [seachQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const debouncedSearchQuery = useDebounce(seachQuery, 300);
    const cachedSuggestions = useSelector((state) => state.SearchSlice);

    useEffect(() => {
        if (debouncedSearchQuery.length) {
            if (cachedSuggestions[debouncedSearchQuery]) {
                setSuggestions(cachedSuggestions[debouncedSearchQuery][0]);
            } else {
                getSearchSuggestions(debouncedSearchQuery);
            }
        }
    }, [debouncedSearchQuery])

    const getSearchSuggestions = async (query) => {
        try {
            const data = await fetch(YOUTUBE_SEARCH_API + query);
            const json = await data.json();
            if (json[1]) {
                setSuggestions(json[1])
                dispatch(updateCachedResults({
                    [query]: [json[1]]
                }))
            }
        } catch (error) {
            console.log("ERROR FETCHING getSearchSuggestions API : ", error);
        }
    }

    function handleSuggestionClicked(e) {
        console.log("clicked", e.target.innerText);
    }

    return (
        <div className='flex justify-between items-center px-8 shadow-lg select-none'>
            {/* Hamburger Menu + Logo */}
            <div className='flex items-center' >
                <span className='p-3 cursor-pointer rounded-full mr-2 h-10 ease-in duration-75 hover:bg-gray-200'
                    onClick={() => dispatch(sidebarToggle())}
                >
                    <img className="w-4" alt="menu" src={menu} />
                </span>
                <Link to={'/'}><img className="w-28 cursor-pointer" alt="logo" src={logo} /></Link>
            </div>

            {/* Input + Search Button + Search Suggestions*/}
            <div className='w-1/2 flex justify-center'>
                <div>
                    <div className='flex items-center'>
                        <input
                            className="w-[550px] border border-gray-400 p-4 h-8 rounded-l-full focus:outline-none focus:border-blue-400 shadow-inner"
                            type="text"
                            placeholder='Search'
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setShowSuggestions(true)}
                            onBlur={() => setShowSuggestions(false)}
                        />
                        <button className='w-12 border border-gray-400 bg-gray-200 hover:bg-gray-300 px-2 h-[34px] rounded-r-full'>
                            <img className=' w-4' src={search} alt="search" />
                        </button>

                    </div>
                    {
                        suggestions.length > 0 && showSuggestions &&
                        <div className='absolute bg-white mt-2 rounded-lg w-[550px] shadow-lg border border-gray-200'>
                            <ul>
                                {
                                    suggestions.map((suggestion, index) => (
                                        <li
                                            key={index}
                                            className='py-1 px-5 cursor-pointer hover:bg-gray-300'
                                            onClick={(e) => handleSuggestionClicked(e)}
                                        >
                                            {suggestion}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    }
                </div>

            </div>

            {/* User */}
            <div>
                <img className='w-8 mr-8' src={user} alt="user" />
            </div>
        </div>
    )
}

export default Header