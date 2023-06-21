import React, { useState } from "react";

const Credits = ({ updateBalance, arrDescription2, addDescription2 }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [currentTime, setCurrentTime] = useState()

    const addDescription = async () => {
        const time = new Date();
        const time2 = time.toISOString()

        const currentTimeString = time2.substring(0, 10) + ' , Time: ' + time2.substring(11,19);
        setCurrentTime(currentTimeString);
        await addDescription2({ description, amount,  currentTime: currentTimeString });
        updateBalance(parseFloat(amount))
    };

    return (
        <div class="form-control form-control-lg" >
            <h1 class="text-center">Credits</h1>

            <h2 class="text-center">Add a credit</h2>
            <form class="text-center">
                <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></input>
                <input type="number" placeholder="######" onChange={(e) => setAmount(e.target.value)}></input>
                <button type="button" onClick={addDescription}>Add</button>
            </form>

            <ul>
                {arrDescription2 && arrDescription2.map((item, index) => (
                    <li key={index}>
                        Description: {item.description}, Amount: {item.amount}, Date: {item.currentTime}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Credits;