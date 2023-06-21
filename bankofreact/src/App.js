import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Debits from './components/Debits';
import AccountBalance from './components/AccountBalance';
import Credits from './components/Credits';


const App = () => {
  const [accountBalance, setAccountBalance] = useState(14568.27);
  const [currentUser] = useState({
    userName: 'bob_loblaw',
    memberSince: '08/23/99',
  });
  const [arrDescription1, setArrDescription1] = useState([]);
  const [arrDescription2, setArrDescription2] = useState([]);

  const updateBalance = (num) => {
    let num2 = (accountBalance+num)*100
    setAccountBalance(Math.floor(num2)/100);
  }
  const addDescription1 = async (description) => {
    await setArrDescription1([description, ...arrDescription1]);
  }
  const addDescription2 = async (description) => {
    await setArrDescription2([description, ...arrDescription2]);
  }
  
  return (
    <div className='centered-page'>
      <Router>
        <div className="App">
          {/* Navigation */}
          <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd", paddingLeft: "15%" }}>
            <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
            <Link to="/userProfile" style={{ marginRight: '10px' }}>User Profile</Link>
            <Link to="/Debits" style={{ marginRight: '10px' }}>Debits Page</Link>
            <Link to="/Credits" style={{ marginRight: '10px' }}>Credits Page</Link>
            <br></br>
          </nav>
          <img style={{ display: "block", margin: "0 auto" }} src="https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" srcSet="https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1 1x, https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2 2x" alt="Free Buildings With Glass Windows Stock Photo" className="spacing_noMargin__Q_PsJ PhotoZoom_image__iR_Ia" width="500" height="270" ></img>
            <h1 class="text-center" >Bank of React</h1>
            <AccountBalance accountBalance={accountBalance} updateBalance={updateBalance} />
        </div>
        <div className='centered-page'>
          <Routes>
            <Route path="/" element={<Home accountBalance={accountBalance} />} />
            <Route path="/UserProfile" element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince} />} />
            <Route path="/Debits" element={<Debits updateBalance={updateBalance} arrDescription1={arrDescription1} addDescription1={addDescription1} />} />
            <Route path="/Credits" element={<Credits updateBalance={updateBalance} arrDescription2={arrDescription2} addDescription2= {addDescription2}/>} />

          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
