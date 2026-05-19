import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './Home.jsx'
import Test from './Test.jsx';
import Oblivion from './Oblivion.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="*" element={<Oblivion />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)