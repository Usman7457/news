import './App.css';

import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

const App = ()=> {
  const pageSize = 6;

const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
        <Route path="/news" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />
        <Route path="/news/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business" />} />
        <Route path="/news/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
        <Route path="/news/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />
        <Route path="/news/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health" />} />
        <Route path="/news/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science" />} />
        <Route path="/news/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports" />} />
        <Route path="/news/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology" />} />
      </Routes>
        </Router>
      </div>
    )
}

export default App;