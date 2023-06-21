import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccountBalance = ({ accountBalance, updateBalance }) => {
  const [debits, setDebits] = useState([]);
  const [credits, setCredits] = useState([]);
  const [balance, setBalance] = useState(accountBalance);

  useEffect(() => {
    const deb = async () => {
     setDebits((await axios.get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits')).data);
    }
    deb();


    const cred = async() => { 
      setCredits((await axios.get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits')).data)
    }
    cred();



  },[]);

  return (
    <div>
      <h2 class="text-center">Account Balance: {(Math.round((accountBalance+credits-debits)*100) / 100)}</h2>
    </div>
  );
};

export default AccountBalance;
