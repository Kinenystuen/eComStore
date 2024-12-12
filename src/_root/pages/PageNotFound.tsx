import { Link } from "react-router-dom";
import ErrorMessage from "../../components/shared/ui/ErrorMessage";
import MetaTags from "../../components/shared/metaTags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faCircleExclamation,
  faE
} from "@fortawesome/free-solid-svg-icons";

const img = (
  <div className="mb-4 rounded-full bg-gray-100 dark:bg-customBgDark-500 w-[8rem] h-[8rem] flex justify-center items-center mx-auto">
    <FontAwesomeIcon
      icon={faCircleExclamation}
      style={{
        fontSize: "6rem"
      }}
      className="m-4 sm:text-sm md:text-lg lg:text-2xl text-green-500 dark:text-green-600"
    />
  </div>
);

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <MetaTags
        title={`Page not found - eComStore`}
        keywords="eComStore, products, details, shop online, checkout"
        description="eComStore 404 page! Page not found."
      />

      <ErrorMessage message="404 Page not found" icon={img}>
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
