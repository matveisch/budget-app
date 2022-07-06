import React, {useContext} from 'react';
import {useFormik} from "formik";

import {TransactionsContext} from "../../data/TransactionsContext";
import {Transaction, TransactionsContextType} from "../../interface/types/Types";

const InputPopup = () => {
    const { transactions, setTransactions } = useContext(TransactionsContext) as TransactionsContextType;

    const formik = useFormik({
        initialValues: {
            amount: 0,
            note: '',
            category: '',
            date: ''
        },
        onSubmit: values => {
            saveData(values);
        },
    });

    const saveData = (values: Transaction) => {
        const transactionsCopy = [...transactions];
        transactionsCopy.push(values);
        setTransactions(transactionsCopy);
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" onChange={formik.handleChange} value={formik.values.date}/>
                <label htmlFor="note">Description:</label>
                <input type="text" id="note" onChange={formik.handleChange} value={formik.values.note}/>
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" onChange={formik.handleChange} value={formik.values.amount}/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default InputPopup;