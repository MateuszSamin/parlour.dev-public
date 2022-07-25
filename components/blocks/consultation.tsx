import React, { Key, useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Tina, TinaTemplate } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { signup } from "../../util/campaignSignup";
import { Container } from "../util/container";
import { MdSectionHeading } from "../util/mdSectionHeading";
import { Section } from "../util/section";
import ReactGA from "react-ga4";
import { RegisterGAOnce } from "../util/registerGAOnce";

export const Consultation = ({ data, parentField }) => {
  const [showThankYou, setShowThankYou] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const signUpForConsultation: React.FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();

    if (email.length < 4 || name.length < 4) {
      return;
    }

    setShowThankYou(true);
    setName("");
    setEmail("");
    signup("consultation", email, name);
  };

  return (
    <Section
      color={data.color}
      className="bg-gradient-to-b to-parlourDark from-[#304357] text-white"
    >
      <Container
        size="large"
        className="relative text-left w-full !max-w-[700px]"
      >
        {/* We use opacity to control the visibility of this part of the page.
            This is because we don't want the page to move when showing the 'thank you' page. */}
        <div
          className={`transition-all duration-300\
          ${showThankYou ? "opacity-0 invisible" : "opacity-100 visible"}`}
        >
          {data.heading && (
            <div className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-parlourGreen to-parlourBlue">
              <TinaMarkdown content={data.heading} />
            </div>
          )}
          <div className="text-base flex flex-col gap-6">
            <TinaMarkdown content={data.text} />
          </div>
          <form
            className="flex flex-col justify-center mt-8 gap-4 text-sm md:text-md"
            onSubmit={signUpForConsultation}
          >
            <div className="flex flex-col">
              <label className="ml-3 font-bold text-sm" htmlFor="formname">
                NAME
              </label>
              <input
                className="flex-grow-[1] text-black rounded-2xl p-3"
                name="name"
                id="formname"
                type="text"
                minLength={4}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="flex flex-col mt-1 mb-10">
              <label className="ml-3 font-bold text-sm" htmlFor="formemail">
                EMAIL
              </label>
              <input
                className="flex-grow-[1] text-black rounded-2xl p-3"
                name="email"
                id="formemail"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                minLength={4}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="shadow-lg px-12 py-4 text-lg hover:scale-95 duration-300 transition bg-gradient-to-r from-parlourGreen to-parlourBlue font-bold text-white flex flex-row items-center rounded-tl-[1.5rem] rounded-br-[1.5rem]"
                type="submit"
              >
                {data.ctatext} <FaLongArrowAltRight className="ml-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Actual 'thank you' page. Used to track subscriptions to our newsletter. */}
        <div
          className={`transition-all duration-300 w-full absolute left-0 right-0 top-0 bottom-0\
        ${showThankYou ? "visible opacity-100" : "invisible opacity-0"}\
        flex flex-col justify-center items-center\
        prose prose-dark`}
        >
          <h1 className="text-xl text-white">Thank you for trusting us</h1>
          <p>We'll reach out soon!</p>
          {showThankYou && (
            <RegisterGAOnce category="Contact" action="consultation booking" />
          )}
        </div>
      </Container>
    </Section>
  );
};

export const consultationBlockSchema: TinaTemplate = {
  name: "consultation",
  label: "Consultation Order",
  ui: {
    // previewSrc: "/blocks/features.png",
  },
  fields: [
    {
      type: "rich-text",
      label: "Heading",
      name: "heading",
    },
    {
      type: "rich-text",
      label: "Text",
      name: "text",
    },
    {
      type: "string",
      label: "Call to action",
      name: "ctatext",
    },
    {
      type: "string",
      label: "Newsletter subscription type",
      name: "subscription_type",
    },
  ],
};
