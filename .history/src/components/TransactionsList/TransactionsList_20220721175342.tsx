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
        <table id="transactions-list" className='overflow-x-auto relative'>
            <thead>
                <tr>
                    <th className='border border-slate-600'>Date</th>
                    <th className='border border-slate-600'>Description</th>
                    <th className='border border-slate-600'>Category</th>
                    <th className='border border-slate-600'>Amount</th>
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
                    <td><button onClick={() => props.setToggleInputPopup(true)}>New transaction</button></td>
                </tr>
            </tfoot>
        </table>
    );
};

export default TransactionsList;