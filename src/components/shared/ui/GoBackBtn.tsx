import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const GoBackBtn = () => {
  return (
    <Button
      onClick={() => window.history.back()}
      className="inline-flex items-center text-sm font-medium p-[0.3rem] pe-3 border-none hover:border-none dark:text-gray-400 dark:hover:text-white"
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
