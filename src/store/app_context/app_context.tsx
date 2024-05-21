import { createContext, useContext, useEffect, useState } from 'react';
import { AppContextProps, AppState } from './types';
import { User, UserCredential, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import httpInstance from '../../services/httpInstance';

const AppContext = createContext<AppState | undefined>(undefined);

export const AppContextProvider = ({ children }: AppContextProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loadingContext, setLoadingContext] = useState<boolean>(true);

    const signUp = (email: string, password: string): Promise<UserCredential> => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email: string, password: string): Promise<UserCredential> => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = (): Promise<void> => {
        return signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth,
            user => {
                setUser(user);
                setLoadingContext(false);
                httpInstance.interceptors.request.use(
                    async config => {
                        if (user) {
                            const token = await user.getIdToken();
                            config.headers.Authorization = `Bearer ${token}`;
                        }
                        return config;
                    },
                    error => Promise.reject(error)
                )
            });
    }, []);

    return (
        <AppContext.Provider value={{ user, setUser, signIn, logOut, signUp, loadingContext }}>
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