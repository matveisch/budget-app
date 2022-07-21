import React, {useContext, useState} from 'react';
import {CategoriesContextType, Transaction, TransactionsContextType} from "../../interface/types/Types";
import {TransactionsContext} from "../../data/TransactionsContext";
import Dropdown from "../../ui/Dropdown/Dropdown";
import {CategoriesContext} from "../../data/CategoriesContext";

const SingleTransaction = (item: Transaction, index: number) => {
    const { transactions, setTransactions } = useContext(TransactionsContext) as TransactionsContextType;
    const { categories } = useContext(CategoriesContext) as CategoriesContextType;
    const [currentCategory, setCurrentCategory] = useState('');
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
                    category: currentCategory,
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
        <tr key={index} id={String(item.id)} className='bg-white dark:bg-gray-800 dark:border-gray-700'>
            <td className='py-4 px-6'>{editMode ? <input type="date" value={itemValues.date} id="date" onChange={handleDataChange}/> : `${new Date(item.date).getDate()} ${new Date(item.date).getMonth() + 1} ${new Date(item.date).getFullYear()}`}</td>
            <td className='py-4 px-6'>{editMode ? <input type="text" value={itemValues.note} id="note" onChange={handleDataChange}/> : item.note}</td>
            <td className='py-4 px-6'>{editMode ? <Dropdown placeholder={'Categories'} options={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/> : item.category}</td>
            <td className='py-4 px-6'>{editMode ? <input type="number" value={itemValues.amount} id="amount" onChange={handleDataChange}/> : item.amount}</td>
            <td className='py-4 px-6'><button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={handleEdit}>{editMode ? 'save' : 'edit'}</button></td>
            <td className='py-4 px-6'><button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={() => deleteTransaction(item.id)}>delete</button></td>
        </tr>
    );
};

export default SingleTransaction;