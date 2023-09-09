import { ReactNode, createContext } from "react";

export interface AuthValue {
  admin: Record<string, unknown> | null;
  agent: Record<string, unknown> | null;
}

export const AuthContext = createContext<AuthValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthContext.Provider value={{ admin: {}, agent: null }}>{children}</AuthContext.Provider>;
}
