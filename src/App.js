import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/webpages/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AllCustomers from './components/webpages/AllCustomers';
import CreateUser from './components/webpages/CreateUser';
import Transfer from './components/webpages/Transfer';
import Transactions from './components/webpages/Transactions';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/allOurCustomers' element={<AllCustomers/>} />
          <Route exact path="/create-user" element={<CreateUser/>} />
          <Route exact path="/transfer" element={<Transfer/>} />
          <Route exact path="/transactions" element={<Transactions/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;