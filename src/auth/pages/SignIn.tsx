import { AuthImgShowcase } from "../components/AuthImgShowcase";
import { SignInForm } from "../components/SignInForm";

const SignIn = () => {
  return (
    <div className="flex h-[100vh]">
      <div>
        <AuthImgShowcase />
      </div>
      <div className="flex-1">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
