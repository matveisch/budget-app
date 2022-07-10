import React, {useContext, useState} from 'react';
import {Transaction, TransactionsContextType} from "../../interface/types/Types";
import {TransactionsContext} from "../../data/TransactionsContext";

const SingleTransaction = (item: Transaction, index: number) => {
    const { transactions, setTransactions } = useContext(TransactionsContext) as TransactionsContextType;
    const [editMode, setEditMode] = useState(false);

    const [itemValues, setItemValues] = useState<Transaction>({
        id: item.id,
        amount: item.amount,
        note: item.note,
        category: item.category,
        date: item.date,
    });

    const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setItemValues(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleEdit = () => {
        updateValues();
        setEditMode(!editMode);
    }

    const updateValues = () => {
        const newTransactions = transactions.map(item => {
            if (item.id === itemValues.id) {
                return {
                    id: itemValues.id,
                    amount: itemValues.amount,
                    note: itemValues.note,
                    category: itemValues.category,
                    date: itemValues.date,
                }
            }
            return item;
        })

        setTransactions(newTransactions);
    }

    const deleteTransaction = (id: number) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    }

    return (
        <tr key={index} id={String(item.id)}>
            <td>{editMode ? <input type="date" value={itemValues.date} id="date" onChange={handleDataChange}/> : `${new Date(item.date).getDate()} ${new Date(item.date).getMonth() + 1} ${new Date(item.date).getFullYear()}`}</td>
            <td>{editMode ? <input type="text" value={itemValues.note} id="note" onChange={handleDataChange}/> : item.note}</td>
            <td>{item.category}</td>
            <td>{editMode ? <input type="number" value={itemValues.amount} id="amount" onChange={handleDataChange}/> : item.amount}</td>
            <td><button onClick={handleEdit}>{editMode ? 'save' : 'edit'}</button></td>
            <td><button onClick={() => deleteTransaction(item.id)}>delete</button></td>
        </tr>
    );
};

export default SingleTransaction;