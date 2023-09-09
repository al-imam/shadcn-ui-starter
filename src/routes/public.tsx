import { useAuth } from "@hooks/useAuth";
import { Navigate } from "react-router-dom";

interface Props {
  to: string;
  children: React.ReactNode;
}

export function Public({ children, to }: Props) {
  const { currentUser } = useAuth();
  return currentUser === null ? children : <Navigate to={to} replace={true} />;
}
