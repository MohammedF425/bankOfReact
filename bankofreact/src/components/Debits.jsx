import React, { useState, useEffect } from "react";

const Debits = ({ updateBalance, arrDescription1, addDescription1 }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [currentTime, setCurrentTime] = useState()

const addDescription = async () => {
    const time = new Date();
    const time2 = time.toISOString()

        const currentTimeString = time2.substring(0, 10) + ' , Time: ' + time2.substring(11,19);
  setCurrentTime(currentTimeString);
  await addDescription1({ description, amount, currentTime: currentTimeString });
  updateBalance(-parseFloat(amount));
};

    return (
        <div class="form-control form-control-lg" >
            <h1 class="text-center">Debits</h1>

            <h2 class="text-center">Add a debit</h2>
            <form class="text-center">
                <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></input>
                <input type="number" placeholder="######" onChange={(e) => setAmount(e.target.value)}></input>
                <button type="button" onClick={addDescription}>Add</button>
            </form>

            <ul>
                {arrDescription1 && arrDescription1.map((item, index) => (
                    <li key={index}>
                        Description: {item.description}, Amount: {item.amount}, Date: {item.currentTime}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Debits;