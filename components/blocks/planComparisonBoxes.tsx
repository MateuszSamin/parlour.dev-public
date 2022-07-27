import { Container } from "../util/container";
import { Section } from "../util/section";
import Image from "next/image";
import ParlourCarePlusOutline from "../../public/uploads/parlourcareplusoutline1.png";
import PerformanceReports from "../../public/uploads/performanceReports.png";
import AnalyticReports from "../../public/uploads/analyticReports.png";
import CheckedImg from "../../public/uploads/Vector24.png";
import { TinaTemplate } from "tinacms";

export const PlanComparisonBoxes = ({data}) => {
  return (
    <Section className="bg-parlourDark py-24">
      <Container className=" flex flex-col items-center">
        <div className="flex lg:flex-row flex-col items-center justify-center w-[100%] h-[100%] gap-6">
          <div className="rounded-3xl lg:w-[25%] w-[90%] lg:h-[80%]  mt-10 bg-gradient-to-r p-1 from-[#FF630B] to-[#FBC918]">
            <div className="flex flex-col items-center justify-start pt-10 h-full bg-white rounded-3xl p-4 lg:pb-20 gap-5 text-lg ">
              <img src={AnalyticReports.src} className="w-32" />
              <div className="flex lg:flex-row flex-col gap-1">
                <h3 className="font-bold">Analytic</h3> <h3>Reports</h3>
              </div>
              <div className="flex flex-col justify-start w-[90%]">
                <PlanComparisonBoxesElement />
                <PlanComparisonBoxesElement />
                <PlanComparisonBoxesElement />
                <PlanComparisonBoxesElement />
                {data?.analytic?.map((item, key) => (
                  <PlanComparisonBoxesElement key={key} data={item.label} />
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-3xl lg:w-[30%] w-[90%] lg:h-[100%]  mt-10 bg-gradient-to-r p-1 from-parlourGreen to-parlourBlue">
            <div className="flex flex-col items-center justify-start pt-10 h-full bg-white rounded-3xl p-4 lg:pb-20 gap-5 text-xl ">
              <img src={ParlourCarePlusOutline.src} className="w-44" />
              <div className="flex lg:flex-row flex-col gap-1">
                <h3 className="font-bold">Parlour</h3>{" "}
                <h3 className="font-extrabold">CARE+</h3>
              </div>
              <div className="flex flex-col justify-start w-[90%]">
                <PlanComparisonBoxesElement />
                <PlanComparisonBoxesElement />
                <PlanComparisonBoxesElement />
                <PlanComparisonBoxesElement />
                {data?.careplus?.map((item, key) => (
                  <PlanComparisonBoxesElement key={key} data={item.label} />
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-3xl lg:w-[25%] w-[90%] lg:h-[80%]  mt-10 bg-gradient-to-r p-1 from-[#2572E0] to-[#03CFFE]">
            <div className="flex flex-col items-center justify-start pt-10 h-full bg-white rounded-3xl p-4 lg:pb-20 gap-5 text-lg ">
              <img src={PerformanceReports.src} className="w-40 pb-5" />
              <div className="flex lg:flex-row flex-col gap-1">
                <h3 className="font-bold">Performance</h3> <h3>Reports</h3>
              </div>
              <div className="flex flex-col justify-start w-[90%]">
                <PlanComparisonBoxesElement />
                <PlanComparisonBoxesElement />
                <PlanComparisonBoxesElement />
                {data?.perf?.map((item, key) => (
                  <PlanComparisonBoxesElement key={key} data={item.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <button className="hover:scale-95 transition duration-300 w-full sm:w-10/12 shadow-lg shadow-neutral-200 lg:w-[30%] lg:mt-12 mt-20 sm:mt-20 bg-gradient-to-r from-parlourBlue to-parlourGreen text-white py-6 px-6 sm:px-10 font-bold text-lg rounded-tl-[2rem] rounded-br-[2rem]">
          Select your plan now
        </button>
      </Container>
    </Section>
  );
};

const PlanComparisonBoxesElement = ({ data = "Great Feature" }) => (
  <div className="w-full flex flex-row md:px-5 py-2 items-center justify-start text-base">
    <div className="w-[8%] relative">
      <Image layout="responsive" src={CheckedImg} />
    </div>
    <p className="pl-2 w-[92%] leading-tight">{data}</p>
  </div>
);

export const planComparisonBoxesSchema: TinaTemplate = {
  name: "planComparison",
  label: "Plan Comparison Boxes",
  fields: [
    {
      name: "analytic",
      type: "object",
      label: "Analytic Reports",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item.label || "Great Feature",
        }),
      },
      fields: [
        {
          name: "label",
          type: "string",
          label: "Label",
        },
      ],
    },
    {
      name: "careplus",
      type: "object",
      label: "Parlour Care+",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item.label || "Great Feature",
        }),
      },
      fields: [
        {
          name: "label",
          type: "string",
          label: "Label",
        },
      ],
    },
    {
      name: "perf",
      type: "object",
      label: "Performance Reports",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item.label || "Great Feature",
        }),
      },
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
