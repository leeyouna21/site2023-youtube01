import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import Loader from './Loader';

const VideoConts = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        )
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setVideoDetail(result.items[0]);
            })
            .catch(error => console.log(error));
    }, [id]);

    if (!videoDetail?.snippet) return <Loader />;

    const {
        snippet: { title, channelId, channelTitle, description },
        statistics: { viewCount, likeCount },
    } = videoDetail;

    return (
        <section className="videoConts">
            <div className="container">
                <div className="video__sub">
                    <div className="left">
                        <div className="play">
                            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
                        </div>
                        <h3>{title}</h3>
                        <div className="channel">
                            <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
                            <span>
                                <span className="watch">조회수 {viewCount}</span>
                                <span className="like">좋아요 {likeCount}개</span>
                            </span>
                        </div>
                        <div className="desc">{description.slice(0, 1000)}</div>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        </section>
    );
};
export default VideoConts;
