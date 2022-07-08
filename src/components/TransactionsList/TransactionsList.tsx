import React, {useContext} from 'react';

import './TransactionsList.css';

import {ListOfTransactions, TransactionsContextType} from "../../interface/types/Types";
import {TransactionsContext} from "../../data/TransactionsContext";

interface TransactionsProps {
    transactions: ListOfTransactions["arrayOfObjects"];
}

const TransactionsList = (props: TransactionsProps) => {
    const { transactions, setTransactions } = useContext(TransactionsContext) as TransactionsContextType;

    const deleteTransaction = (id: number) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    }

    return (
        <table id="transactions-list">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {props.transactions.map((item, index) => {
                    return (
                        <tr key={index} id={String(item.id)}>
                            <td>{`${new Date(item.date).getDate()} ${new Date(item.date).getMonth() + 1} ${new Date(item.date).getFullYear()}`}</td>
                            <td>{item.note}</td>
                            <td>{item.category}</td>
                            <td>{item.amount}</td>
                            <td><button>edit</button></td>
                            <td><button onClick={() => deleteTransaction(item.id)}>delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default TransactionsList;