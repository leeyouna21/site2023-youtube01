import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderConts, MainConts, VideoConts, ChannelConts, SearchConts } from './components';

const App = () => {
    return (
        <BrowserRouter>
            <HeaderConts />
            <Routes>
                <Route path="/" element={<MainConts />}></Route>
                <Route path="/video" element={<VideoConts />}></Route>
                <Route path="/channel" element={<ChannelConts />}></Route>
                <Route path="/search" element={<SearchConts />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
