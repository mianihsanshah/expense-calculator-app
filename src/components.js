import React, { useContext, useState } from 'react';
import { TransactionContext } from './transContext';

function Components() {

    let { transactions, addTransaction, deleteTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);


    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Please enter correct value");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });

        setDesc('');
        setAmount('')
    }
    const handleDeletion = (index) => {
        deleteTransaction(index)
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>            

            <h3 className="text-center">Your Balance PKR {getIncome() + getExpense()}</h3>

            <div className="expense-container">
                <h3 className='income'>INCOME <br /> PKR {getIncome()}</h3>
                <h3 className='expense'>EXPENSES <br /> PKR {getExpense()}</h3>
            </div>

            <h3>History</h3>
            <hr />

            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return (<>
                    <button className='del' onClick={ () => handleDeletion(ind) }>X</button>
                    <li key={ind} className={transObj.amount < 0 ? 'expense' : 'income'}>
                        <span>{transObj.desc}</span>
                        <span>${transObj.amount}</span>
                    </li>
                    </>
                    )
                })}

            </ul>

            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Description <br />
                    <input type="text"
                        value={newDesc}
                        placeholder="Enter Description..."
                        onChange={(ev) => setDesc(ev.target.value)}
                        required />
                </label>

                <br />
                <label>
                    Amount <br />
                    <input type="number"
                        value={newAmount}
                        placeholder="Enter Amount..."
                        onChange={(ev) => setAmount(ev.target.value)}
                        required />
                </label>
                <br />
                <input className='submitButton' type="submit" value="Add Transaction" />
            </form>
            <hr />
            <center><footer><a href="https://github.com/mianihsanshah/">Designed by Ihsan Shah</a></footer></center>
        </div>
    );
}

export default Components;
