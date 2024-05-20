import React from "react";

export interface AppContextProps {
    children: React.ReactNode;
}

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface AppState {
    user: User | undefined;
    setUser: (user: User | undefined) => void;
}