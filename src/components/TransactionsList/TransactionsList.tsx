import React, {Dispatch, SetStateAction, useContext, useState} from 'react';

import './TransactionsList.css';

import {ListOfTransactions, Transaction, TransactionsContextType} from "../../interface/types/Types";
import {TransactionsContext} from "../../data/TransactionsContext";
import SingleTransaction from "../SingleTransaction/SingleTransaction";

interface TransactionsProps {
    transactions: ListOfTransactions["arrayOfObjects"];
    setToggleInputPopup: Dispatch<SetStateAction<boolean>>;
}

const TransactionsList = (props: TransactionsProps) => {
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