// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MonthPage from './pages/MonthPage'; // We'll create this later
import MarchPage from './pages/MarchPage'; // <-- import
import AprilPage from './pages/AprilPage'; // <-- import
import MayPage from './pages/MayPage'; // <-- import
import JunePage from './pages/JunePage'; // <-- import
import JulyPage from './pages/JulyPage'; // <-- import
import AugustPage from './pages/AugustPage'; // <-- import
import SeptemberPage from './pages/SeptemberPage'; // <-- import
import OctoberPage from './pages/OctoberPage'; // <-- import
import NovemberPage from './pages/NovemberPage'; // <-- import
import DecemberPage from './pages/DecemberPage'; // <-- import
import JanuaryPage from './pages/JanuaryPage'; // <-- import
import FebruaryPage from './pages/FebruaryPage'; // <-- import



function App() {
  return (
    <Router>
      <Routes>
        {/* Index page (home) */}
        <Route path="/" element={<Home />} />
        <Route path="/march" element={<MarchPage />} />
        <Route path="/april" element={<AprilPage />} />
        <Route path="/may" element={<MayPage />} />
        <Route path="/june" element={<JunePage />} />
        <Route path="/july" element={<JulyPage />} />
        <Route path="/august" element={<AugustPage />} />
        <Route path="/september" element={<SeptemberPage />} />
        <Route path="/october" element={<OctoberPage />} />
        <Route path="/november" element={<NovemberPage />} />
        <Route path="/december" element={<DecemberPage />} />
       <Route path="/january" element={<JanuaryPage />} />
       <Route path="/february" element={<FebruaryPage />} />

        {/* This route will match something like /january, /february, etc. */}
        <Route path="/:monthName" element={<MonthPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
