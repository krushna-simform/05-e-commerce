import { useState } from "react";
import { Link } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

import type { User } from "@/types/user.type";
import { supabase } from "@/supabase-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const SignInForm = () => {
  const [authError, setAuthError] = useState<string | null>(null);

  const loginUser = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik<Pick<User, "email" | "password">>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginUser,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      setAuthError(null);

      try {
        const { error } = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        });

        if (error) {
          if (error.message.includes("Invalid login credentials")) {
            setAuthError("Invalid email or password");
          } else if (error.message.includes("Email not confirmed")) {
            setAuthError("Please verify your email first");
          } else {
            setAuthError("An error occurred during login");
          }
          return;
        }
      } catch (error) {
        setAuthError("An unexpected error occurred");
        console.error(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-100 gap-6">
          <p className="text-4xl font-medium my-8" role="heading">
            Login to your account
          </p>

          {authError && (
            <div className="text-red-600 text-sm p-2 bg-red-50 rounded-md">
              {authError}
            </div>
          )}

          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-gray-700">
                Email
              </Label>
              <Input
                name="email"
                placeholder="Enter your email"
                id="email"
                className="h-10"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-600 text-sm">{formik.errors.email}</p>
              )}
            </div>
            <div className="space-y-3">
              <Label htmlFor="password" className="text-gray-700">
                Password
              </Label>
              <Input
                name="password"
                placeholder="Enter your Password"
                type="password"
                id="password"
                className="h-10"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-600 text-sm">{formik.errors.password}</p>
              )}
            </div>
          </div>
          <div>
            <Button
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[16px] w-full py-5 cursor-pointer hover:bg-blue-800/80"
            >
              Login Now
            </Button>
          </div>
          <div>
            <p>
              Don't Have An Account?{" "}
              <Link to="/sign-up">
                <span className="text-blue-600 ml-1.5">Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};
