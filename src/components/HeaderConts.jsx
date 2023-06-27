import React from 'react';
import { Link } from 'react-router-dom';

import { AiFillYoutube } from 'react-icons/ai';
const HeaderCont = () => {
    return (
        <header id="header">
            <h1 className="logo">
                <Link to="/">
                    <AiFillYoutube className="icon" />
                    Yunatube
                </Link>
            </h1>
            <div className="search">
                <label className="glass" htmlFor="searchInput"></label>
                <input
                    type="text"
                    id="searchInput"
                    className="input__search"
                    placeholder="원하시는 책을 입력하세요."
                    title="검색"
                />
                <button type="submit">검색하기 📚</button>
            </div>
        </header>
    );
};

export default HeaderCont;
