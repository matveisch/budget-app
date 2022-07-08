import React, {useContext} from 'react';

import './DaysSum.css';

import {Transaction, TransactionsContextType} from "../../interface/types/Types";
import {TransactionsContext} from "../../data/TransactionsContext";

const DaysSum = () => {
    const { transactions, setTransactions } = useContext(TransactionsContext) as TransactionsContextType;

    // count sum of all transactions made on the exact day
    const countSum = (arr: Transaction[]) => arr.reduce((sum, {amount}) => sum + amount * 1, 0);

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month, 0).getDate();
    }

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const monthLongTable = () => {
        let arrayOfTr = [];

        for (let i = 0; i < getDaysInMonth(currentYear, currentMonth); i++) {
            arrayOfTr.push(
                <tr key={i}>
                    <td>{`${i + 1 > 9 ? i + 1 : `0${i + 1}`}.${currentMonth + 1 > 9 ? currentMonth + 1 : `0${currentMonth + 1}`}.${currentYear}`}</td>
                    <td>{countSum(transactions.filter(transaction => new Date(transaction.date).getDate() === i + 1 && new Date(transaction.date).getMonth() === currentMonth))}</td>
                </tr>
            )
        }

        return arrayOfTr;
    }

    return (
        <table id="days-sum">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {monthLongTable()}
            </tbody>
        </table>
    );
};

export default DaysSum;