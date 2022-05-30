import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import { Navbar } from './components/Navbar';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import "./daniel.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Router>
        {/* <Header/> */}
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/' element={<Login />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path='/watched' element={<Watched />} />

        </Routes>
      </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
