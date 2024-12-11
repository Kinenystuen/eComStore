import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const GoBackBtn = () => {
  return (
    <Button
      onClick={() => window.history.back()}
      className="inline-flex items-center text-sm font-medium p-[0.3rem] border-none hover:border-none bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent text-customBgDark-500 hover:text-customBgDark-900 dark:text-whiteFont-600 dark:hover:text-white"
    >
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="w-3 h-3 me-2 m-0.5"
        aria-hidden="true"
      />
      Go back
    </Button>
  );
};

export default GoBackBtn;
