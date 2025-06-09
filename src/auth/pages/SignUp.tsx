import { SignUpForm } from "@/auth/components/SignUpForm";
import clickCartIcon from "/icons/logo.png";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <div className="flex items-center gap-3">
        <img src={clickCartIcon} alt="ClickCart" className="h-20 w-20" />
        <span className="text-5xl font-medium bg-gradient-to-r from-[#0792dd] to-indigo-600 bg-clip-text text-transparent">
          ClickCart
        </span>
      </div>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
