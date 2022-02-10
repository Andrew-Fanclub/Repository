import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './main';
import HowWorks from './routes/howWorks';
import WhoWe from './routes/whoWe';
import Contact from './routes/contact';


function App() {
  return (
    // Routes for website
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/routes/howWorks" element={<HowWorks />} />
        <Route exact path="/routes/whoWe" element={<WhoWe />} />
        <Route exact path="/routes/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
