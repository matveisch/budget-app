import React, {useState} from 'react';

import './App.css';

import TransactionsList from "./components/TransactionsList/TransactionsList";
import {TransactionsContext} from "./data/TransactionsContext";
import {ListOfTransactions} from "./interface/types/Types";
import InputPopup from "./components/InputPopup/InputPopup";

function App() {
    const [transactions, setTransactions] = useState<ListOfTransactions["arrayOfObjects"]>([
        {
            amount: 20,
            note: 'bread from local store',
            category: 'food',
            date: '2022-02-22'
        }
    ]);

    return (
        <TransactionsContext.Provider value={{transactions, setTransactions}} >
            <div className="App">
                <header>
                    <h1>Budget App</h1>
                </header>
                <main>
                    <TransactionsList transactions={transactions}/>
                    <button>+</button>
                    <InputPopup />
                </main>
            </div>
        </TransactionsContext.Provider>
    );
}

export default App;
