import React, {createContext, Dispatch, SetStateAction} from "react";

import {ListOfTransactions} from "../interface/types/Types";

interface TransactionsContextType {
    transactions: ListOfTransactions["arrayOfObjects"];
    setTransactions: Dispatch<SetStateAction<ListOfTransactions["arrayOfObjects"]>>;
}

export const TransactionsContext = createContext<TransactionsContextType | null>(null);