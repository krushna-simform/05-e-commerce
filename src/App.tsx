import { createBrowserRouter, RouterProvider } from "react-router";

import SignIn from "@/auth/pages/SignIn";
import SignUp from "./auth/pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
