import React from 'react'
import { calculateHowOldVideoIs, convertViews } from '../../utils/utils';

const VideoCard = ({ videoData }) => {
    // console.log("videoData", videoData);
    const { snippet, statistics } = videoData;
    const { channelTitle, title, thumbnails, publishedAt } = snippet;

    return (
        <div className='w-96 m-4'>
            <img src={thumbnails?.high.url} alt="thumbnail" className='h-56 w-96 rounded-xl' />
            <div className='font-bold mt-2'>
                {(title.length > 90) ? title.slice(0, 90) + "..." : title}
            </div>
            <div>
                {channelTitle}
            </div>
            <div className='text-gray-600'>
                <span>{convertViews(statistics.viewCount)}</span>&nbsp;•&nbsp;
                <span>{calculateHowOldVideoIs(publishedAt)}</span>
            </div>
        </div>
    )
}

export default VideoCard