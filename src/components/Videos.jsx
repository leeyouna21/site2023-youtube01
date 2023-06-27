import React from 'react';
import { VideoCard } from './index';

const Videos = ({ videos }) => {
    return (
        <div className="videos__inner">
            <ul>
                {videos.map((video, idx) => (
                    <VideoCard key={idx} video={video} />
                ))}
            </ul>
        </div>
    );
};

export default Videos;
