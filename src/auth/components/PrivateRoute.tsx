// src/auth/components/PrivateRoute.tsx
import type { JSX } from "react";
import { Navigate } from "react-router";
import type { SupabaseSession } from "@/types/supabase.type";

const PrivateRoute = ({
  session,
  children,
}: {
  session: SupabaseSession;
  children: JSX.Element;
}) => {
  if (!session) {
    return <Navigate to="/sign-in" replace />;
  }
  return children;
};

export default PrivateRoute;
