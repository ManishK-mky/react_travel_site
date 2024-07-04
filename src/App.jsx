import React from 'react';
import {Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Places from './pages/Places';
import Blog from './pages/Blog';
import About from './pages/About';
import SingleBlog from './pages/SingleBlog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/places" element={<Places/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/blog/:name' element={<SingleBlog/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
  );
}

export default App;
