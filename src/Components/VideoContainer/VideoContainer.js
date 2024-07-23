import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../../utils/constants';
import VideoCard from './VideoCard';

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
                    data.map(item => (
                        <VideoCard videoData={item} />
                    ))
                }
            </div>
            : "Loading..."
    )
}

export default VideoContainer