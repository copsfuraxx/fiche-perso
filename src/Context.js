import { createContext } from 'react';

export const PersoDataContext = createContext({
    persoData: {},
    setPersoData: () => {},
    bonus: {},
    setBonus: () => {},
});