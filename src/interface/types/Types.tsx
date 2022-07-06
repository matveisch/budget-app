export interface Transaction {
    name: string;
    amount: number;
    note: string;
    category: string;
    date: Date;
}

export interface ListOfTransactions {
    arrayOfObjects: Transaction[];
}