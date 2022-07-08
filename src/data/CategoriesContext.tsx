import React, {createContext} from "react";

import {CategoriesContextType} from "../interface/types/Types";

export const CategoriesContext = createContext<CategoriesContextType | null>(null);