import { ReactNode, createContext } from "react";

export interface AuthValue {
  currentUser: Record<string, unknown> | null;
}

export const AuthContext = createContext<AuthValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthContext.Provider value={{ currentUser: {} }}>{children}</AuthContext.Provider>;
}
