import React, {useContext} from 'react';
import {Transaction, TransactionsContextType} from "../../interface/types/Types";
import {TransactionsContext} from "../../data/TransactionsContext";

const DaysSum = () => {
    const { transactions, setTransactions } = useContext(TransactionsContext) as TransactionsContextType;

    // console.log(transactions.filter(transaction => new Date(transaction.date).getDate() === 8));
    //
    const countSum = (arr: Transaction[]) => arr.reduce((sum, {amount}) => sum + amount * 1, 0);
    //
    // console.log(countSum(transactions.filter(transaction => new Date(transaction.date).getDate() === 8)))

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month, 0).getDate();
    }

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    console.log(currentMonth, currentYear);

    console.log(getDaysInMonth(currentYear, currentMonth));

    const monthLongTable = () => {
        let arrayOfTr = [];

        for (let i = 0; i < getDaysInMonth(currentYear, currentMonth); i++) {
            arrayOfTr.push(
                <tr>
                    <td>{`${i + 1}.${currentMonth}.${currentYear}`}</td>
                    <td>{countSum(transactions.filter(transaction => new Date(transaction.date).getDate() === i + 1))}</td>
                </tr>
            )
        }

        return arrayOfTr;
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {monthLongTable()}
                {/*{props.transactions.map((item, index) => {*/}
                {/*    return (*/}
                {/*        <tr key={index}>*/}
                {/*            <td>{`${new Date(item.date).getDate()} ${new Date(item.date).getMonth() + 1} ${new Date(item.date).getFullYear()}`}</td>*/}
                {/*            <td>{item.note}</td>*/}
                {/*            <td>{item.category}</td>*/}
                {/*            <td>{item.amount}</td>*/}
                {/*        </tr>*/}
                {/*    )*/}
                {/*})}*/}
                </tbody>
            </table>
        </div>
    );
};

export default DaysSum;