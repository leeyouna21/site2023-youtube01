import React, { useState } from 'react';
import { Category, Videos } from './';

const MainConts = () => {
    const [selectCategory, setSelectCategory] = useState('기몽초');
    return (
        <main id="main">
            <aside id="aside">
                <h2 className="cate">카테고리</h2>
                <Category selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
            </aside>
            <section id="contents">
                <h2>{selectCategory}</h2>
                <Videos />
            </section>
        </main>
    );
};

export default MainConts;
