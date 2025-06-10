import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const PageNotFound = () => {
  return (
    <div className="m-auto h-full flex flex-col items-center pt-90">
      <p className="text-9xl">404</p>
      <p className="text-2xl">Page not found</p>
      <Link to="/" className="mt-6">
        <Button className=" cursor-pointer text-lg py-5 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white">
          Go to Home
        </Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
