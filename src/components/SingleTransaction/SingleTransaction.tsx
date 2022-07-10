import React, {useContext, useState} from 'react';
import {Transaction, TransactionsContextType} from "../../interface/types/Types";
import {TransactionsContext} from "../../data/TransactionsContext";

const SingleTransaction = (item: Transaction, index: number) => {
    const { transactions, setTransactions } = useContext(TransactionsContext) as TransactionsContextType;
    const [editMode, setEditMode] = useState(false);

    const handleEdit = () => {
        setEditMode(!editMode);
    }

    const updateValues = () => {

    }

    const deleteTransaction = (id: number) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    }

    return (
        <tr key={index} id={String(item.id)}>
            <td>{`${new Date(item.date).getDate()} ${new Date(item.date).getMonth() + 1} ${new Date(item.date).getFullYear()}`}</td>
            <td>{editMode ? <input type="text" value={item.note}/> : item.note}</td>
            <td>{item.category}</td>
            <td>{item.amount}</td>
            <td><button onClick={handleEdit}>{editMode ? 'save' : 'edit'}</button></td>
            <td><button onClick={() => deleteTransaction(item.id)}>delete</button></td>
        </tr>
    );
};

export default SingleTransaction;