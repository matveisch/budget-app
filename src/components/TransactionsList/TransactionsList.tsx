import React from 'react';

import {ListOfTransactions} from "../../interface/types/Types";

interface TransactionsProps {
    transactions: ListOfTransactions["arrayOfObjects"];
}

const TransactionsList = (props: TransactionsProps) => {
    return (
        <table>
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
                        <tr key={index}>
                            <td>{`${new Date(item.date).getDate()} ${new Date(item.date).getMonth() + 1} ${new Date(item.date).getFullYear()}`}</td>
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