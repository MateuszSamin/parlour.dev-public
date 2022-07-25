import { useState } from "react";
import { contact } from "../util/contact";
import { Layout } from "../components/layout";
import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import ReactGA from "react-ga4";
import Script from "next/script";
import Head from "next/head";
import withLayout, { getStaticProps } from "../components/layout/withLayout";

function ContactPage() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setMessage("");
    setName("");
    setEmail("");
    contact(message, email, name);
  };

  return (
    <Section className="flex-1 mt-4">
      <Container size="large" className="!max-w-3xl">
        <div className="bg-white rounded-2xl drop-shadow-xl p-6 flex flex-col items-center">
          <h1 className="text-lg text-left w-full sm:text-xl md:text-2xl py-2 font-bold">
            Contact us
          </h1>
          <div className="p-6 sm:p-0 mt-10 mx-auto">
            <p className="sm:p-6 md:p-0 text-base sm:text-lg md:text-xl  leading-tight font-semibold ">
              To work with us email us at{" "}
              <span className="w-[80%] text-transparent bg-clip-text break-words bg-gradient-to-r bg-radial-at-tl from-sky-400 to-purple-400">
                contact@parlour.dev
              </span>{" "}
              or use the form below
            </p>
          </div>
          {/* Calendly inline widget begin */}
          <Head>
            <script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            />
          </Head>
          <div
            className="calendly-inline-widget w-full min-w-[320px] h-[630px]"
            data-url="https://calendly.com/antonikiszka?hide_landing_page_details=1&hide_gdpr_banner=1"
          ></div>
        </div>
      </Container>
    </Section>
  );
}

export default withLayout(ContactPage);
export { getStaticProps };
