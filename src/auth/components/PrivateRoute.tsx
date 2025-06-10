import { Navigate } from "react-router";
import type { SupabaseSession } from "@/types/supabase.type";

const PrivateRoute = ({
  session,
  children,
}: {
  session: SupabaseSession;
  children: React.ReactNode;
}) => {
  if (!session) {
    return <Navigate to="/sign-in" replace />;
  }
  return children;
};

export default PrivateRoute;
