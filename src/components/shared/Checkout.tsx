import { useState } from "react";
import { FormShippingData } from "../../library/types";
import { SubmitHandler, useForm } from "react-hook-form";
import LoaderSmall from "../../components/shared/ui/LoaderSmall";
import { ErrorMessage } from "@hookform/error-message";
import H2 from "../../components/shared/Typography/H2";
import { useNavigate } from "react-router-dom";
import P from "./Typography/P";

const CheckoutForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<FormShippingData>();

  const onSubmit: SubmitHandler<FormShippingData> = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
      navigate("/checkout-success");
      reset();
    }, 1000);
  };

  return (
    <div className="bg-gray-300 dark:bg-customBgDark-400 py-6 my-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl rounded-lg my-2">
        <P className="text-sm dark:text-BtnColor-100">Checkout</P>
        <H2 className="text-xl font-semibold ps-0 mb-6">Shipping Details</H2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="checkoutForm"
          className="space-y-4"
        >
          <div className="sm:flex flex-wrap gap-4">
            <div className="sm:flex-1">
              {/* Full Name */}
              <div className="m-2">
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700 dark:text-whiteFont-200"
                >
                  Full Name
                </label>
                <input
                  id="fullname"
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
              </div>

              <div className="m-2">
                {/* Email */}
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-whiteFont-200"
                >
                  Email
                </label>
                <input
                  id="email"
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
              </div>
              <div className="m-2">
                {/* Street */}
                <label
                  htmlFor="street"
                  className="block text-sm font-medium text-gray-700 dark:text-whiteFont-200"
                >
                  Street
                </label>
                <input
                  id="street"
                  {...register("street", {
                    minLength: {
                      value: 3,
                      message: "Minimum length is 3 characters."
                    },
                    maxLength: {
                      value: 50,
                      message: "Maximum length is 50 characters."
                    }
                  })}
                  placeholder="Your street"
                  className="w-full mt-1 p-2 border dark:bg-customBgDark-500 border-gray-300 dark:border-customBgDark-600 dark:text-whiteFont-600 dark:focus:text-whiteFont rounded-md dark:autofill:bg-customBgDark-500 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
                <ErrorMessage
                  errors={errors}
                  name="street"
                  render={({ message }) => (
                    <p className="text-red-500 text-sm">{message}</p>
                  )}
                />
              </div>
              <div className="m-2">
                {/* City */}
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 dark:text-whiteFont-200"
                >
                  City
                </label>
                <input
                  id="city"
                  {...register("city", {
                    minLength: {
                      value: 3,
                      message: "Minimum length is 3 characters."
                    },
                    maxLength: {
                      value: 50,
                      message: "Maximum length is 50 characters."
                    }
                  })}
                  placeholder="Your city"
                  className="w-full mt-1 p-2 border dark:bg-customBgDark-500 border-gray-300 dark:border-customBgDark-600 dark:text-whiteFont-600 dark:focus:text-whiteFont rounded-md dark:autofill:bg-customBgDark-500 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
                <ErrorMessage
                  errors={errors}
                  name="city"
                  render={({ message }) => (
                    <p className="text-red-500 text-sm">{message}</p>
                  )}
                />
              </div>
              <div className="m-2">
                {/* Postal Code */}
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium text-gray-700 dark:text-whiteFont-200"
                >
                  Postal Code
                </label>
                <input
                  id="postalCode"
                  {...register("postalCode", {
                    minLength: {
                      value: 3,
                      message: "Minimum length is 3 characters."
                    },
                    maxLength: {
                      value: 50,
                      message: "Maximum length is 50 characters."
                    }
                  })}
                  placeholder="Your postal code"
                  className="w-full mt-1 p-2 border dark:bg-customBgDark-500 border-gray-300 dark:border-customBgDark-600 dark:text-whiteFont-600 dark:focus:text-whiteFont rounded-md dark:autofill:bg-customBgDark-500 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
                <ErrorMessage
                  errors={errors}
                  name="postalCode"
                  render={({ message }) => (
                    <p className="text-red-500 text-sm">{message}</p>
                  )}
                />
              </div>
              <div className="m-2">
                {/* Phone */}
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-whiteFont-200"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  {...register("phone", {
                    minLength: {
                      value: 3,
                      message: "Minimum length is 3 characters."
                    },
                    maxLength: {
                      value: 50,
                      message: "Maximum length is 50 characters."
                    }
                  })}
                  placeholder="Your phone"
                  className="w-full mt-1 p-2 border dark:bg-customBgDark-500 border-gray-300 dark:border-customBgDark-600 dark:text-whiteFont-600 dark:focus:text-whiteFont rounded-md dark:autofill:bg-customBgDark-500 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
                <ErrorMessage
                  errors={errors}
                  name="phone"
                  render={({ message }) => (
                    <p className="text-red-500 text-sm">{message}</p>
                  )}
                />
              </div>
            </div>
            <div className="sm:flex-1 mt-8 sm:mt-0">
              {/* Credit Card */}
              <div className="m-2">
                <label
                  htmlFor="creditCard"
                  className="block text-sm font-medium text-gray-700 dark:text-whiteFont-200"
                >
                  Credit Card
                </label>
                <input
                  id="creditCard"
                  {...register("creditCard", {
                    minLength: {
                      value: 3,
                      message: "Minimum length is 3 characters."
                    },
                    maxLength: {
                      value: 50,
                      message: "Maximum length is 50 characters."
                    }
                  })}
                  placeholder="Your credit card"
                  className="w-full mt-1 p-2 border dark:bg-customBgDark-500 border-gray-300 dark:border-customBgDark-600 dark:text-whiteFont-600 dark:focus:text-whiteFont rounded-md dark:autofill:bg-customBgDark-500 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
                <ErrorMessage
                  errors={errors}
                  name="creditCard"
                  render={({ message }) => (
                    <p className="text-red-500 text-sm">{message}</p>
                  )}
                />
              </div>

              {/* Expiry Date */}
              <div className="m-2">
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium text-gray-700 dark:text-whiteFont-200"
                >
                  Expiry Date
                </label>
                <input
                  id="expiryDate"
                  {...register("expiryDate", {
                    minLength: {
                      value: 3,
                      message: "Minimum length is 3 characters."
                    },
                    maxLength: {
                      value: 50,
                      message: "Maximum length is 50 characters."
                    }
                  })}
                  placeholder="Your expiry date"
                  className="w-full mt-1 p-2 border dark:bg-customBgDark-500 border-gray-300 dark:border-customBgDark-600 dark:text-whiteFont-600 dark:focus:text-whiteFont rounded-md dark:autofill:bg-customBgDark-500 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
                <ErrorMessage
                  errors={errors}
                  name="expiryDate"
                  render={({ message }) => (
                    <p className="text-red-500 text-sm">{message}</p>
                  )}
                />
              </div>

              {/* CVV */}
              <div className="m-2">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700 dark:text-whiteFont-200"
                >
                  CVV
                </label>
                <input
                  id="cvv"
                  {...register("cvv", {
                    minLength: {
                      value: 3,
                      message: "Minimum length is 3 characters."
                    },
                    maxLength: {
                      value: 50,
                      message: "Maximum length is 50 characters."
                    }
                  })}
                  placeholder="Your cvv"
                  className="w-full mt-1 p-2 border dark:bg-customBgDark-500 border-gray-300 dark:border-customBgDark-600 dark:text-whiteFont-600 dark:focus:text-whiteFont rounded-md dark:autofill:bg-customBgDark-500 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
                <ErrorMessage
                  errors={errors}
                  name="cvv"
                  render={({ message }) => (
                    <p className="text-red-500 text-sm">{message}</p>
                  )}
                />
              </div>

              {/* Submit */}
              <div className="m-2 mt-6 flex justify-center">
                <button
                  type="submit"
                  className="w-[10rem] bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  {isLoading ? <LoaderSmall className="mx-auto" /> : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
