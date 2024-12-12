import { Link } from "react-router-dom";
import P from "./Typography/P";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMedia } from "../../library/constants";

const FooterBar = () => {
  return (
    <footer className="bg-neutral-300 dark:bg-neutral-900 p-14 flex flex-col  md:flex-row gap-1 justify-center">
      {/* Copy Right Section */}
      <div className="flex-1 justify-start content-center">
        <p className="text-center md:text-start p-2 mb-4 text-sm text-neutral-700 dark:text-whiteFont-500">
          © 2024 eCom store. All rights reserved.
        </p>
      </div>
      {/* Logo Section - links */}
      <div className="flex-grow">
        {/* Logo Section */}
        <div className="flex justify-center content-center">
          <Link to="/" className="m-1 p-2">
            <P className="font-header text-xl font-bold text-black dark:text-whiteFont ">
              eCom store
            </P>
          </Link>
        </div>
        {/* Links */}
        <div className="flex justify-center gap-3 mt-4 flex-wrap">
          <Link to="/contact">
            <Button
              buttonType="transparent"
              className="rounded-none px-[0.5rem] inline-block font-bold border-customBgDark-200"
            >
              Contact Us
            </Button>
          </Link>
          <Link to="#">
            <Button
              buttonType="transparent"
              className="rounded-none px-[0.5rem] inline-block font-bold  border-customBgDark-200"
            >
              About us
            </Button>
          </Link>
          <Link to="#">
            <Button
              buttonType="transparent"
              className="rounded-none px-[0.5rem] inline-block font-bold  border-customBgDark-200"
            >
              FAQs
            </Button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="#">
            <Button
              buttonType="transparent"
              className="rounded-none px-[0.5rem] inline-block text-sm  border-customBgDark-200"
            >
              Privacy Policy
            </Button>
          </Link>
          <Link to="#">
            <Button
              buttonType="transparent"
              className="rounded-none px-[0.5rem] inline-block text-sm  border-customBgDark-200"
            >
              Terms of Use
            </Button>
          </Link>
          <Link to="#">
            <Button
              buttonType="transparent"
              className="rounded-none px-[0.5rem] inline-block text-sm  border-customBgDark-200"
            >
              Cookie Policy
            </Button>
          </Link>
        </div>
      </div>
      {/* Social Media Icons */}
      <div className="flex-1 justify-center content-center mt-8 md:m-0">
        <div className="flex justify-center md:justify-end space-x-4">
          {socialMedia.map((media) => (
            <a
              key={media.id}
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-customBgDark-900 dark:text-whiteFont-500 dark:hover:text-white transition"
              aria-label={`Visit our ${media.platform}`}
            >
              <FontAwesomeIcon icon={media.icon} size="2x" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
