import { createContext, useContext, useState } from 'react';
import { AppContextProps, AppState, User } from './types';

const AppContext = createContext<AppState | undefined>(undefined);

export const AppContextProvider = ({ children }: AppContextProps) => {
    const [user, setUser] = useState<User | undefined>(undefined);

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }

    return context;
};