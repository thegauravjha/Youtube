import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../../utils/constants';
import VideoCard from './VideoCard';
import Shrimmer from '../../utils/Shrimmer';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetchVideos();
    }, [])

    const fetchVideos = async () => {
        const response = await fetch(YOUTUBE_API + process.env.REACT_APP_YOUTUBE_API_KEY);
        const jsonData = await response.json();
        setData(jsonData.items)
    }

    return (
        data ?
            <div className='flex mt-4 flex-wrap'>
                {
                    data.map(video => (
                        <Link to={"/watch?v=" + video.id} >
                        <VideoCard key={video.id} videoData={video} />
                        </Link>
                    ))
                }
            </div>
            : <Shrimmer />
    )
}

export default VideoContainer