import { useEffect, useState } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

import type { SupabaseSession } from "@/types/supabase.type";
import { supabase } from "@/supabase-client";
import { SortProvider } from "@/context/SortContext";
import SignIn from "@/auth/pages/SignIn";
import SignUp from "@/auth/pages/SignUp";
import PrivateRoute from "@/auth/components/PrivateRoute";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import PageNotFound from "@/pages/NotFound";

function App() {
  const [session, setSession] = useState<SupabaseSession>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };

    fetchSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRoute session={session}>
          <Layout />
        </PrivateRoute>
      ),
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: "/sign-in",
      element: !session ? <SignIn /> : <Navigate to="/" />,
    },
    {
      path: "/sign-up",
      element: !session ? <SignUp /> : <Navigate to="/" />,
    },
    { path: "*", element: <PageNotFound /> },
  ]);

  return (
    <SortProvider>
      <RouterProvider router={router} />;
    </SortProvider>
  );
}

export default App;
