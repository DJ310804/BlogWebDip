import { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogCreate from './components/BlogCreate';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="BlogCreate" element={<BlogCreate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;