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
        <Route exact path="/howitWorks" element={<HowWorks />} />
        <Route exact path="/whoweAre" element={<WhoWe />} />
        <Route exact path="/contactUs" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
