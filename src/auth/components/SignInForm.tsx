import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const SignInForm = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col w-100 gap-6">
        <p className="text-4xl text-center font-medium my-8" role="heading">
          Login to your account
        </p>
        <div className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="email" className="text-gray-700">
              Email
            </Label>
            <Input placeholder="Enter your email" id="email" className="h-10" />
          </div>
          <div className="space-y-3">
            <Label htmlFor="password" className="text-gray-700">
              Password
            </Label>
            <Input
              placeholder="Enter your Password"
              id="password"
              className="h-10"
            />
          </div>
        </div>
        <div>
          <Button className="bg-blue-800 text-[16px] w-full py-5 cursor-pointer hover:bg-blue-800/80">
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
  );
};
