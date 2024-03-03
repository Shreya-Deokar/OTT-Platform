import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail';
import Login from './components/Login';
import{
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
    <Router>
      <Header/>
      <Routes>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
