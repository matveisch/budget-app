import React, {Dispatch, SetStateAction, useContext, useEffect, useState} from 'react';

import './InputPopup.css';

import {TransactionsContext} from "../../data/TransactionsContext";
import {CategoriesContextType, Transaction, TransactionsContextType} from "../../interface/types/Types";
import Dropdown from "../../ui/Dropdown/Dropdown";
import {CategoriesContext} from "../../data/CategoriesContext";

interface InputPopupProps {
    toggleInputPopup: boolean;
    setToggleInputPopup: Dispatch<SetStateAction<boolean>>;
}

const InputPopup = (props: InputPopupProps) => {
    const { transactions, setTransactions } = useContext(TransactionsContext) as TransactionsContextType;
    const { categories, setCategories } = useContext(CategoriesContext) as CategoriesContextType;
    const [currentCategory, setCurrentCategory] = useState('');

    const [initialValues, setInitialValues] = useState({
        id: transactions.length + 1,
        amount: 0,
        note: '',
        category: '',
        date: '',
    })

    const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setInitialValues(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    // updating transaction id
    useEffect(() => {
        setInitialValues({...initialValues, ['id']: (transactions.length + 1)});
    }, [transactions.length])

    // updating transaction category
    useEffect(() => {
        setInitialValues({...initialValues, ['category']: currentCategory});
    }, [currentCategory]);

    const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
        const saveData = (values: Transaction) => {
            setTransactions(current => [...current, values]);
        };

        e.preventDefault();

        // check if user filled all the inputs
        if (initialValues.amount > 0 && initialValues.note.length > 0 && initialValues.date.length > 0 && initialValues.category.length > 0) {
            saveData(initialValues);
            props.setToggleInputPopup(false);
        } else {
            console.log('fill all the inputs');
        }
    };

    return (
        <div id="input-popup" style={props.toggleInputPopup ? {display: 'block', position: 'absolute'} : {display: 'none'}}>
            <form id="input-popup__form">
                <div className="option-container">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" onChange={handleDataChange} value={initialValues.date}/>
                </div>
                <div className="option-container">
                    <label htmlFor="note">Description:</label>
                    <input type="text" id="note" onChange={handleDataChange} value={initialValues.note}/>
                </div>
                <Dropdown placeholder={'Categories'}
                          options={categories}
                          currentCategory={currentCategory}
                          setCurrentCategory={setCurrentCategory}/>
                <div className="option-container">
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" id="amount" onChange={handleDataChange} value={initialValues.amount}/>
                </div>
                <div className="buttons">
                    <button type="submit" onClick={handleSave}>Save</button>
                    <button onClick={(e) => {e.preventDefault(); props.setToggleInputPopup(false);}}>Close</button>
                </div>
            </form>
        </div>
    );
};

export default InputPopup;