import React, {useState} from 'react';

import './App.css';

import TransactionsList from "./components/TransactionsList/TransactionsList";
import {TransactionsContext} from "./data/TransactionsContext";
import {ListOfTransactions} from "./interface/types/Types";

function App() {
    const [transactions, setTransactions] = useState<ListOfTransactions["arrayOfObjects"]>([
        {
            name: 'bread',
            amount: 20,
            note: 'bread from local store',
            category: 'food',
            date: new Date()
        }
    ]);

    return (
        <TransactionsContext.Provider value={{transactions, setTransactions}} >
            <div className="App">
                <header>
                    <h1>Budget App</h1>
                    <TransactionsList transactions={transactions}/>
                </header>

            </div>
        </TransactionsContext.Provider>
    );
}

export default App;
