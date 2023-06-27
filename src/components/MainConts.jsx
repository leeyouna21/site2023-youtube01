import React, { useEffect, useState } from 'react';
import { Category, Videos } from './';

const MainConts = () => {
    const [selectCategory, setSelectCategory] = useState('기몽초');
    const [videos, setvideos] = useState([]);

    useEffect(() => {
        fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=%EB%89%B4%EC%A7%84%EC%8A%A4&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        )
            .then(response => response.json())
            .then(result => setvideos(result.items))
            .catch(error => console.log(error));
    }, []);

    return (
        <main id="main">
            <aside id="aside">
                <h2 className="cate">카테고리</h2>
                <Category selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
            </aside>
            <section id="contents">
                <h2>{selectCategory}</h2>
                <Videos videos={videos} />
            </section>
        </main>
    );
};

export default MainConts;
