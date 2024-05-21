import { User, UserCredential } from "firebase/auth";
import React from "react";

export interface AppContextProps {
    children: React.ReactNode;
}

export interface AppState {
    user: User | null;
    setUser: (user: User | null) => void;
    signUp: (email: string, password: string) => Promise<UserCredential>;
    signIn: (email: string, password: string) => Promise<UserCredential>;
    logOut: () => Promise<void>;
    loadingContext: boolean;
}