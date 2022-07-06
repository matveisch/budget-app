import React from 'react';

import {ListOfTransactions} from "../../interface/types/Types";

interface TransactionsProps {
    transactions: ListOfTransactions["arrayOfObjects"];
}

const TransactionsList = (props: TransactionsProps) => {
    return (
        <table>
            <thead>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </thead>
            <tbody>
                {props.transactions.map(item => {
                    return (
                        <tr>
                            <td>{`${item.date.getDate()} ${item.date.getMonth() + 1} ${item.date.getFullYear()}`}</td>
                            <td>{item.note}</td>
                            <td>{item.category}</td>
                            <td>{item.amount}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default TransactionsList;