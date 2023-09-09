import { useAuth } from "@hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  to: string;
  page: "admin" | "agent";
}

export function Private({ to, page = "admin" }: Props) {
  const { admin, agent } = useAuth();

  if (page === "agent") {
    return agent === null ? <Navigate to={to} replace={true} /> : <Outlet />;
  }

  return admin === null ? <Navigate to={to} replace={true} /> : <Outlet />;
}
