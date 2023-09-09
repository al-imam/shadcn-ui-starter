import { useAuth } from "@hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  to: string;
  page: "admin" | "agent";
}

export function Public({ to, page = "admin" }: Props) {
  const { admin, agent } = useAuth();

  if (page === "agent") {
    return agent === null ? <Outlet /> : <Navigate to={to} replace={true} />;
  }

  return admin === null ? <Outlet /> : <Navigate to={to} replace={true} />;
}
