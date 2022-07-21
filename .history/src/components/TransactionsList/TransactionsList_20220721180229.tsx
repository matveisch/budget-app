import React, {Dispatch, SetStateAction} from 'react';

import './TransactionsList.css';

import {ListOfTransactions, Transaction} from "../../interface/types/Types";
import SingleTransaction from "../SingleTransaction/SingleTransaction";

interface TransactionsProps {
    transactions: ListOfTransactions["arrayOfObjects"];
    setToggleInputPopup: Dispatch<SetStateAction<boolean>>;
}

const TransactionsList = (props: TransactionsProps) => {
    return (
        <table id="transactions-list" className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th className='py-3 px-6'>Date</th>
                    <th className='py-3 px-6'>Description</th>
                    <th className='py-3 px-6'>Category</th>
                    <th className='py-3 px-6'>Amount</th>
                    <th className='py-3 px-6'></th>
                    <th className='py-3 px-6'></th>
                </tr>
            </thead>
            <tbody>
                {props.transactions.filter(transaction => new Date(transaction.date).getMonth() === new Date().getMonth()).map((item: Transaction, index: number) => {
                    return (
                        <SingleTransaction id={item.id} amount={item.amount} note={item.note} category={item.category} date={item.date} key={index}/>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td><button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={() => props.setToggleInputPopup(true)}>New transaction</button></td>
                </tr>
            </tfoot>
        </table>
    );
};

export default TransactionsList;