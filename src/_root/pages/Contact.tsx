import { ErrorMessage } from "@hookform/error-message";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "../../library/types";
import { useState } from "react";
import LoaderSmall from "../../components/shared/ui/LoaderSmall";
import H2 from "../../components/shared/Typography/H2";
import P from "../../components/shared/Typography/P";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log(data);
      setFormData(data);
      setIsLoading(false);
      setIsSubmitted(true);
      reset();
    }, 1000);
  };

  return (
    <div className="container mx-auto p-8 max-w-lg bg-white dark:bg-customBgDark-600 rounded-lg shadow-lg my-5">
      {isSubmitted ? (
        <div className="text-center">
          <H2 className="text-xl font-semibold">Form sent</H2>
          <P className="mt-4 text-sm">Here is the data you submitted:</P>
          <div className="mt-4">
            <P>
              <strong>Full Name:</strong> {formData?.fullname}
            </P>
            <P>
              <strong>Email:</strong> {formData?.email}
            </P>
            <P>
              <strong>Subject:</strong> {formData?.subject}
            </P>
            <P>
              <strong>Description:</strong> {formData?.bodyText}
            </P>
          </div>
        </div>
      ) : (
        <div className="container mx-auto max-w-lg  rounded-lg my-2">
          <H2 className="text-xl font-semibold ps-0 mb-6">Contact Us</H2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700 dark:text-whiteFont-200"
            >
              Full Name
            </label>
            <input
              {...register("fullname", {
                required: "Full name is required.",
                minLength: {
                  value: 3,
                  message: "Minimum length is 3 characters."
                },
                maxLength: {
                  value: 50,
                  message: "Maximum length is 50 characters."
                }
              })}
              placeholder="Your full name"
              className="w-full mt-1 p-2 border dark:bg-customBgDark-500 border-gray-300 dark:border-customBgDark-600 dark:text-whiteFont-600 dark:focus:text-whiteFont rounded-md dark:autofill:bg-customBgDark-500 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
            <ErrorMessage
              errors={errors}
              name="fullname"
              render={({ message }) => (
                <p className="text-red-500 text-sm">{message}</p>
              )}
            />

            {/* Email */}
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-whiteFont-200"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address."
                }
              })}
              placeholder="Your email"
              className="w-full mt-1 p-2 border  dark:bg-customBgDark-500 border-gray-300 dark:border-customBgDark-600 dark:text-whiteFont-600  dark:focus:text-whiteFont rounded-md dark:autofill:bg-customBgDark-500 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="text-red-500 text-sm">{message}</p>
              )}
            />

            {/* Subject */}
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-whiteFont-200"
            >
              Subject
            </label>
            <input
              {...register("subject", {
                required: "Subject is required.",
                minLength: {
                  value: 3,
                  message: "Minimum length is 3 characters."
                },
                maxLength: {
                  value: 100,
                  message: "Maximum length is 100 characters."
                }
              })}
              placeholder="Subject"
              className="w-full mt-1 p-2 border  dark:bg-customBgDark-500 border-gray-300 dark:border-customBgDark-600 dark:text-whiteFont-600 dark:focus:bg-customBgDark-500  dark:focus:text-whiteFont dark:autofill:bg-customBgDark-500 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
            <ErrorMessage
              errors={errors}
              name="subject"
              render={({ message }) => (
                <p className="text-red-500 text-sm">{message}</p>
              )}
            />

            {/* Body Text */}
            <label
              htmlFor="bodyText"
              className="block text-sm font-medium text-gray-700 dark:text-whiteFont-200"
            >
              Description
            </label>
            <textarea
              {...register("bodyText", {
                required: "Description is required.",
                minLength: {
                  value: 3,
                  message: "Minimum length is 3 characters."
                },
                maxLength: {
                  value: 1000,
                  message: "Maximum length is 2000 characters."
                }
              })}
              placeholder="Description"
              className="w-full mt-1 p-2 border  dark:bg-customBgDark-500 border-gray-300 dark:border-customBgDark-600 dark:text-whiteFont-600  rounded-md focus:ring-blue-500 dark:focus:text-whiteFont dark:focus:bg-customBgDark-500 focus:border-blue-500 shadow-sm"
            />
            <ErrorMessage
              errors={errors}
              name="bodyText"
              render={({ message }) => (
                <p className="text-red-500 text-sm">{message}</p>
              )}
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              {isLoading ? <LoaderSmall className="mx-auto" /> : "Submit"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Contact;
