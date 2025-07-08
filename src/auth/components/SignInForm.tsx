import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

import type { User } from "@/types/user.type";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSigninUser } from "@/hooks/useSigninUser";

export const SignInForm = () => {
  const [authError, setAuthError] = useState<string | null>(null);
  const { mutate: signInUser, error, isError, isPending } = useSigninUser();

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
    onSubmit: (values) => {
      setAuthError(null);
      signInUser(values);
    },
  });

  useEffect(() => {
    if (isError && error) {
      setAuthError(error.message);
    }
  }, [isError, error]);

  if (isPending) {
    return (
      <div className="flex flex-col items-center min-h-[80vh] justify-center">
        <div className="mb-8 relative">
          <div
            className="w-10 h-10 border-4 border-t-[#] border-r-[#0792dd]/30 border-b-[#0792dd]/10 border-l-[#0792dd]/70 rounded-full animate-spin relative z-10"
            role="status"
            aria-label="Loading"
          />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-4 bg-gradient-to-t from-transparent to-[rgba(219,68,68,0.1)] blur-sm"></div>
        </div>
        <p className="text-xl text-gray-600 mt-4 font-medium">Signin...</p>
      </div>
    );
  }

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
