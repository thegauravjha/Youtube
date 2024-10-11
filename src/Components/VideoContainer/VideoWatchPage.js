import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'


const VideoWatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log("params => ", searchParams.get("v"));
  return (
    <div className='px-5'>
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoWatchPage