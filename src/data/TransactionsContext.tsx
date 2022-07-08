import React, {createContext} from "react";

import {TransactionsContextType} from "../interface/types/Types";

export const TransactionsContext = createContext<TransactionsContextType | null>(null);