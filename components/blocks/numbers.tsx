import { TinaTemplate } from "tinacms";
import { Layout } from "../layout";
import { Container } from "../util/container";
import { Section } from "../util/section";

export const Numbers = ({ data }) => {
  return (
    <Section className="bg-parlourDark">
      <Container className="lg:py-72 py-44 flex items-center justify-center">
        <div className=" flex lg:flex-row flex-col lg:items-end items-center justify-center lg:gap-44 gap-10">
          {data?.activeCustomers?.map((item,key) => (
            <ActiveCustomers key={key} data={item.label}/>
          ))}
          {data?.daysPerYear?.map((item,key) =>(
            <DaysPerYear key={key} data={item.label} />
          ))}
          {data?.instantlyFixedCrashes?.map((item,key) =>(
            <InstantlyFixedCrashes key={key} data={item.label} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

const ActiveCustomers = ({data}) =>(
  <div className="flex flex-col items-center">
    <span className="text-transparent bg-clip-text break-words bg-gradient-to-r bg-radial-at-tl from-parlourGreen to-parlourBlue lg:text-4xl text-3xl font-bold">
      {data}
    </span>
    <p className="text-white text-base font-bold">active customers</p>
  </div>
);

const DaysPerYear = ({data}) =>(
  <div className="flex flex-col items-center">
    <span className="text-transparent bg-clip-text break-words bg-gradient-to-r bg-radial-at-tl from-sky-400 to-purple-700 lg:text-6xl text-5xl font-bold">
      {data}
    </span>
    <p className="text-white text-xl font-bold">days per year</p>
  </div>
);

const InstantlyFixedCrashes = ({data}) =>(
  <div className="flex flex-col items-center">
    <span className="text-transparent bg-clip-text break-words bg-gradient-to-r bg-radial-at-tl from-parlourBlue to-blue-500 lg:text-4xl text-3xl font-bold">
      {data}
    </span>
    <p className="text-white text-base font-bold">
      instantly fixed crashes
    </p>
  </div>
);

export const numbersSchema: TinaTemplate ={
  label: "Numbers",
  name: "numbers",
  fields: [
    {
      name: "activeCustomers",
      type: "object",
      label: "Active Customers",
      list: true,
      fields: [
        {
          name: "label",
          type: "string",
          label: "Label",
        },
      ],
    },
    {
      name: "daysPerYear",
      type: "object",
      label: "Days Per Year",
      list: true,
      fields: [
        {
          name: "label",
          type: "string",
          label: "Label",
        },
      ],
    },
    {
      name: "instantlyFixedCrashes",
      type: "object",
      label: "Instantly Fixed Crashes",
      list: true,
      fields: [
        {
          name: "label",
          type: "string",
          label: "Label",
        },
      ],
    },
  ],
};