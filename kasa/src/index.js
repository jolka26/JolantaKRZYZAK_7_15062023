import React from 'react'
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Apartment from './pages/Apartment'
import Error from './components/Error'
import Footer from './components/Footer'
import './styles/GlobalStyle.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
      <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartment/:id" element={<Apartment />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
    </Router>
   </React.StrictMode>
);


// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//     <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//       <Footer />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// )