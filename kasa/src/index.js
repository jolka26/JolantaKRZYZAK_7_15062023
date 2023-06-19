import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { data } from '../src/data/data'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Error from './components/Error'
import Footer from './components/Footer'
 
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)