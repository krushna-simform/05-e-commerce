import { Navigate } from "react-router";
import type { SupabaseSession } from "@/types/supabase.type";
import { Loader } from "@/components/ui/Loader";

const PrivateRoute = ({
  session,
  loading,
  children,
}: {
  session: SupabaseSession;
  loading: boolean;
  children: React.ReactNode;
}) => {
  if (loading) {
    return <Loader />;
  }

  if (!session) {
    return <Navigate to="/sign-in" replace />;
  }
  return children;
};

export default PrivateRoute;
