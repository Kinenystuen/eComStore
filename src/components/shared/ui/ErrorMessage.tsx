import React from "react";
import H1 from "../Typography/H1";

interface ErrorMessageProps {
  message: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  children,
  icon
}) => {
  return (
    <section className="container w-full mb-10 flex justify-center items-center flex-col min-h-[60vh]">
      {icon}
      <div className="my-10 text-center">
        <H1 className="uppercase font-bold">{message}</H1>
      </div>
      {children}
    </section>
  );
};

export default ErrorMessage;
