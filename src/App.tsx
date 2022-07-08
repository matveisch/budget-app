import React, {useState} from 'react';

import './App.css';

import TransactionsList from "./components/TransactionsList/TransactionsList";
import {TransactionsContext} from "./data/TransactionsContext";
import {ListOfTransactions, Transaction} from "./interface/types/Types";
import InputPopup from "./components/InputPopup/InputPopup";
import {CategoriesContext} from "./data/CategoriesContext";
import DaysSum from "./components/DaysSum/DaysSum";

function App() {
    const [transactions, setTransactions] = useState<ListOfTransactions["arrayOfObjects"]>([
        {
            id: 1,
            amount: 20,
            note: 'bread from local store',
            category: 'food',
            date: '2022-02-22'
        }
    ]);

    const [categories, setCategories] = useState(['food', 'shopping', 'groceries'])

    return (
        <TransactionsContext.Provider value={{transactions, setTransactions}} >
            <CategoriesContext.Provider value={{categories, setCategories}} >
                <div className="App">
                    <header>
                        <h1>Budget App</h1>
                    </header>
                    <main>
                        <TransactionsList transactions={transactions}/>
                        <button>+</button>
                        <InputPopup />
                        <DaysSum />
                    </main>
                </div>
            </CategoriesContext.Provider>
        </TransactionsContext.Provider>
    );
}

export default App;
