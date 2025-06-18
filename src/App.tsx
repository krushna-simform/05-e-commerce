import { useEffect, useState } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

import SignIn from "@/auth/pages/SignIn";
import SignUp from "@/auth/pages/SignUp";
import PrivateRoute from "@/auth/components/PrivateRoute";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import PageNotFound from "@/pages/NotFound";
import Product from "@/pages/Product";
import { SortProvider } from "@/context/SortContext";
import { SearchProvider } from "@/context/SearchContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { checkAuth } from "@/utils/authValidation";
import { useSession } from "@/hooks/useSession";

function App() {
  const [loading, setLoading] = useState(true);
  const { session, setSession } = useSession();

  useEffect(() => {
    async function validate() {
      const token = await checkAuth();
      setSession(token);
      setLoading(false);
    }
    validate();
  }, [setSession]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRoute session={session} loading={loading}>
          <ErrorBoundary>
            <Layout />
          </ErrorBoundary>
        </PrivateRoute>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/product/:productId", element: <Product /> },
      ],
    },
    {
      path: "/sign-in",
      element: !session ? (
        <ErrorBoundary>
          <SignIn />
        </ErrorBoundary>
      ) : (
        <Navigate to="/" />
      ),
    },
    {
      path: "/sign-up",
      element: !session ? (
        <ErrorBoundary>
          <SignUp />
        </ErrorBoundary>
      ) : (
        <Navigate to="/" />
      ),
    },
    { path: "*", element: <PageNotFound /> },
  ]);

  return (
    <SortProvider>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </SortProvider>
  );
}

export default App;
