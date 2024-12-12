import { Link } from "react-router-dom";
import ErrorMessage from "../../components/shared/ui/ErrorMessage";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ErrorMessage message="404 Page not found">
        <Link
          to="/"
          className=" m-1.5 p-2 px-4 transition duration-300 rounded-lg bg-blue-500 text-white hover:bg-blue-600 dark:bg-BtnColor dark:text-whiteFont-500 dark:hover:bg-BtnColor-400"
        >
          Go back to homepage
        </Link>
      </ErrorMessage>
    </div>
  );
};

export default PageNotFound;
