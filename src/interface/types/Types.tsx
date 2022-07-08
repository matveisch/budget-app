import {Dispatch, SetStateAction} from "react";

export interface Transaction {
    id: number;
    amount: number;
    note: string;
    category: string;
    date: string;
}

export interface ListOfTransactions {
    arrayOfObjects: Transaction[];
}

export interface TransactionsContextType {
    transactions: ListOfTransactions["arrayOfObjects"];
    setTransactions: Dispatch<SetStateAction<ListOfTransactions["arrayOfObjects"]>>;
}

export interface CategoriesContextType {
    categories: string[];
    setCategories: Dispatch<SetStateAction<string[]>>;
}