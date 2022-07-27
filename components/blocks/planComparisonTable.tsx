import { TinaTemplate } from "tinacms";
import { Container } from "../util/container";
import { Section } from "../util/section";
import Image from "next/image";
import CheckedImg from "../../public/uploads/Vector24.png";
import useMediaQuery from "../../hooks/useMediaQuery"

export const PlanComparisonTable = ({data}) => {
  return (
    <Section>
      <Container>
        <h3 className="lg:text-4xl text-2xl font-bold lg:ml-16 py-5">Plan comparison</h3>
        <div className="lg:w-[100%] w-[100%] flex flex-row justify-center mx-auto">
          <div className="flex flex-col lg:w-80 w-32 h-[100%]">
            <div className="border-parlourDark border-r-2 text-left lg:text-base text-xs pr-2 pt-3 h-14">
              <h3>Name</h3>
            </div>
            {data?.option?.map((item, key) => (
              <FirstColumn key={key} data={item.label} />
            ))}
          </div>
          <div className="flex flex-col lg:w-80 w-20">
            <div className="border-parlourDark border-r-2 text-left lg:text-base text-xs px-5 pt-3 h-14">
              <h3 className="lg:mb-3 mb-1 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF630B] to-[#FBC918]">Analytic reports</h3>
            </div>
            <SecondColumn />
          </div>
          <div className="flex flex-col lg:w-80 w-20 h-[100%]">
            <div className="border-parlourDark border-r-2 text-left lg:text-base text-xs px-5 pt-3 h-14">
              <h3 className="lg:mb-0 mb-1 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-parlourGreen to-parlourBlue">Parlour CARE+</h3>
            </div>
            <ThirdColumn />
          </div>
          <div className="flex flex-col lg:w-80 w-26">
            <div className="border-parlourDark border-r-2 text-left lg:text-base text-xs px-5 pt-3 h-14 ">
              <h3 className="lg:mb-3 mb-1 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2670DF] to-[#02D1FF]">Performance reports</h3>
            </div>
            <FourthColumn />
          </div>
        </div>
      </Container>
    </Section>
  );
};

const FirstColumn = ({data}) => (
  <div className="border-parlourDark border-t-2 border-r-2 flex items-center lg:text-base text-[70%] h-14">
    {data}
  </div>
);

export const Checked = () =>{

  const isDesktop = useMediaQuery("(min-width: 1400px)")

  return(
    <div className="border-parlourDark border-t-2 border-r-2 h-14  flex justify-center items-center">
      {isDesktop ? (<Image width={24} height={24} src={CheckedImg} />):(
        <Image width={10} height={10} src={CheckedImg} />
      )} 
    </div>
  )  
}

const SecondColumn = () => (
  <div>
    <div className="border-parlourDark border-t-2 border-r-2 h-14 lg:w-auto"></div>
    <div className="border-parlourDark border-t-2 border-r-2 h-14"></div>
    <Checked />
    <Checked />
    <Checked />
    <Checked />
    <div className="border-parlourDark border-t-2 border-r-2 h-14"></div>
    <div className="border-parlourDark border-t-2 border-r-2 h-14"></div>
    <div className="border-parlourDark border-t-2 border-r-2 h-14"></div>
    <div className="border-parlourDark h-14"></div>
  </div>
);

const ThirdColumn = () =>(
  <div>
    <Checked />
    <Checked />
    <Checked />
    <Checked />
    <Checked />
    <Checked />
    <Checked />
    <Checked />
    <Checked />
  </div>
);

const FourthColumn = () =>(
  <div>
    <div className="border-parlourDark border-t-2 border-r-2 h-14"></div>
    <Checked />
    <div className="border-parlourDark border-t-2 border-r-2 h-14"></div>
    <Checked />
    <div className="border-parlourDark border-t-2 border-r-2 h-14"></div>
    <div className="border-parlourDark border-t-2 border-r-2 h-14"></div>
    <div className="border-parlourDark border-t-2 border-r-2 h-14"></div>
    <div className="border-parlourDark border-t-2 border-r-2 h-14"></div>
    <div className="border-parlourDark border-t-2 border-r-2 h-14"></div>
    <div className="border-parlourDark h-14"></div>
  </div>
);

export const planComparisonTableSchema: TinaTemplate = {
  label: "Plan Comparison Table",
  name: "planComparisonTable",
  fields: [
    {
      name: "option",
      type: "object",
      label: "Option",
      list: true,
      fields: [
        {
          name: "label",
          type: "string",
          label: "Label",
        },
      ],
    },
  ]
}
