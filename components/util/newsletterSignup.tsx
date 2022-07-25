import Link from "next/link";
import { useState } from "react";
import { signup } from "../../util/campaignSignup";
import ReactGA from "react-ga4";
import { RegisterGAOnce } from "./registerGAOnce";

export const NewsletterSignup = ({ buttonText }) => {
  const [showThankYou, setShowThankYou] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setShowThankYou(true);

    if (name.length < 4 || email.length < 4) {
      return;
    }

    setName("");
    setEmail("");
    signup("newsletter-10", email, name);
  };

  return (
    <div className="relative">
      <div className="absolute -z-1 top-0 bottom-0 lg:top-[10%] lg:bottom-[10%] -left-full -right-full bg-parlourDark" />
      <div className="flex flex-col lg:flex-row items-center my-12 py-12 bg-parlourDark lg:my-0 lg:py-0 lg:bg-transparent">
        <div className="w-full lg:w-1/2 lg:my-[12%] lg:px-8">
          <h1 className="font-bold">
            <span className="prose-dark text-white lg:text-2xl">
              Free blockchain newsletter for{" "}
            </span>
            <span className="text-transparent lg:text-2xl bg-gradient-to-r bg-clip-text from-parlourGreen to-parlourBlue">
              business
            </span>
          </h1>
          <p className="leading-snug prose-dark text-white">
            Sign up now and receive the total of 10 emails, send out daily with
            beginner-friendly introduction to the the various applicatoins of
            blockchain in your businesses.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 static lg:absolute max-w-[500px] lg:max-w-none left-[50%] right-[3%] top-0 bottom-0 p-1 h-full rounded-[30px] bg-gradient-to-r from-parlourGreen to-parlourBlue">
          <div className="relative w-full h-full p-8 rounded-[30px] bg-parlourDark">
            <div
              className={`lg:mt-8 flex flex-col h-full transition-all duration-300\
             ${showThankYou ? "opacity-0 invisible" : "opacity-100 visible"}`}
            >
              <h1 className="text-center font-bold prose-dark text-white">
                Sign up
              </h1>
              <div className="flex flex-col lg:h-full justify-start">
                <form className="flex flex-col prose-dark" onSubmit={onSubmit}>
                  <label htmlFor="email-address" className="text-white">
                    EMAIL
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-2 py-2 mb-4 h-10 bg-parlourDark border-b-2 border-b-white shadow-sm focus:ring-1 focus:ring-teal-500"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />

                  <label htmlFor="name" className="text-white">
                    NAME
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-2 py-2 h-10 mb-8 bg-parlourDark border-b-2 border-b-white shadow-sm focus:ring-1 focus:ring-teal-500"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />

                  <button
                    type="submit"
                    className="hover:scale-95 duration-300 transition min-w-[45%] w-[fit-content] mx-auto flex items-center justify-center mt-8 py-2 px-8 rounded-br-[18px] rounded-tl-[18px] border-transparent text-base font-semibold text-white bg-gradient-to-r from-parlourGreen to-parlourBlue"
                  >
                    {buttonText}
                  </button>
                </form>

                <div className="mt-auto mb-4 text-sm text-gray-300">
                  <p className="!mt-4 !mb-0 lg:!my-5 leading-snug">
                    We care about the protection of your data. Read our{" "}
                    <Link href="/privacy">
                      <a className="!text-gray-300 underline" target="_blank">
                        Privacy Policy
                      </a>
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-300\
            ${showThankYou ? "opacity-100 visible" : "opacity-0 invisible"}\
            absolute left-0 right-0 bottom-0 top-0 p-6\
            flex flex-col items-center justify-center\
            prose prose-dark text-center`}
            >
              <h1>Thank you for signing up!</h1>
              {showThankYou && (
                <RegisterGAOnce category="Contact" action="newsletter signup" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
