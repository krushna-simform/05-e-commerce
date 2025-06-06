import { AuthImgShowcase } from "../components/AuthImgShowcase";
import { SignUpForm } from "../components/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex h-[100vh]">
      <div>
        <AuthImgShowcase />
      </div>
      <div className="flex-1">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
