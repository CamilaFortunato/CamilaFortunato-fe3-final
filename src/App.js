import './App.css';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextGlobal } from './Components/utils/global.context';
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';

function App() {

  const {state} = useContext(ContextGlobal)

  const themeC = state.theme === "light" ? "light" : "dark";

  return (
    <Router>
      <div className={themeC}>
        <div className="appContainer">
        {<Navbar/>}
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/dentist/:id" element={<Detail/>} />
          <Route path="/favs" element={<Favs/>} />
        </Routes>
        </div>
        {<Footer/>}
      </div>
    </Router>
  );
}

export default App;
