import React, {createContext, Dispatch, SetStateAction} from "react";

import {ListOfTransactions, TransactionsContextType} from "../interface/types/Types";

export const TransactionsContext = createContext<TransactionsContextType | null>(null);