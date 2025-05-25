interface User {
    alias: string;
    email: string;
    token: string;
    role: string;
}

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

export interface AuthState {
    status: AuthStatus;
    user: Partial<User>;
    err?: string;
    onChecking: () => void;
    onLogin: (payload: Record<string, unknown>) => void;
    onLogout: (payload?: string) => void;
    clearErrorMessage: () => void;
}