import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogCreate from './components/BlogCreate';
import Home from './components/Home';
import Blogs from './components/Blogs';
import ProfilePg from './components/ProfilePg';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="blogcreate" element={<BlogCreate />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="profile" element={<ProfilePg />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;