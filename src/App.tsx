import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FloatingContactBar from './components/FloatingContactBar';
//import SectionSidebar from './components/SectionSidebar';

import './i18n/i18n';

function App() {
  return (
    <div className="App">
      <Router>
        {/*<SectionSidebar />*/}
        <FloatingContactBar />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </Router>
    </div >
  );
}

export default App;
