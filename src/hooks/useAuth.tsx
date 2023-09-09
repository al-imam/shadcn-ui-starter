import { AuthContext } from "@context/auth-context";
import { useContext } from "react";

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === null) throw new Error("useAuth must be used within a AuthProvider");
  return context;
}
