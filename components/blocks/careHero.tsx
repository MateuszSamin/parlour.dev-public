import { Container } from "../util/container";
import { Section } from "../util/section";
import Image from "next/image";
import CareIMG from "../../public/parlour-care1.png";
import ParlourCarePlus from "../../public/uploads/parlourcareplus1.png";
import ParlourCarePlusOutline from "../../public/uploads/parlourcareplusoutline1.png";
import { TinaTemplate } from "tinacms";

export const CareHero = ({ data }) => {
    return (
      <Section className="text-parlourDark">
        <Container className="lg:py-10 py-32 flex items-center justify-center">
        <div className="text-parlourDark lg:text-6xl text-3xl font-bold flex flex-col items-center z-30">
            <div className="lg:mt-10 mt-0">
              {data?.title1?.map((item,key) =>(
                <Title1 key={key} data={item.label} />
              ))}
              {data?.title2?.map((item, key) =>(
                <Title2 key={key} data={item.label} />
              ))}
            </div>
            <div className="mt-16 lg:w-64 w-36">
              <Image src={CareIMG.src} width={250} height={65} />
            </div>
            <div className="absolute top-80 right-5 lg:block hidden">
              <Image
                src={ParlourCarePlusOutline.src}
                width={250}
                height={230}
              />
            </div>
            <div className="lg:w-20 absolute top-0 right-24 lg:block hidden">
              <Image src={ParlourCarePlusOutline.src} width={80} height={75} />
            </div>
            <div className="lg:w-14 absolute top-32 right-[20%] lg:block hidden">
              <Image src={ParlourCarePlusOutline.src} width={75} height={65} />
            </div>
            <div className="w-32 absolute top-0 right-[30%] lg:block hidden">
              <Image
                src={ParlourCarePlusOutline.src}
                width={150}
                height={140}
              />
            </div>
            <div className="lg:w-52 absolute top-[50vh] left-14 lg:block hidden">
              <Image
                src={ParlourCarePlusOutline.src}
                width={250}
                height={230}
              />
            </div>
            <div className="lg:w-16 absolute top-52 left-20 lg:block hidden">
              <Image src={ParlourCarePlusOutline.src} width={80} height={75} />
            </div>
            <div className="lg:w-32 absolute top-5 left-[15%] lg:block hidden">
              <Image
                src={ParlourCarePlusOutline.src}
                width={130}
                height={120}
              />
            </div>
          </div>
        </Container>
      </Section>
    );
  };

  const Title1 = ({data}) =>(
    <div className="flex flex-row gap-10 items-center">
      <h1>{data}</h1>
      <Image src={ParlourCarePlus.src} width={150} height={140} />
    </div>
  );
  
  const Title2 = ({data}) =>(
    <h1>{data}</h1>
  );
  
  export const careHeroSchema: TinaTemplate ={
    label: "Parlour Care Hero",
    name: "careHero",
    fields: [
      {
        name: "title1",
        type: "object",
        label: "Title 1",
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
        name: "title2",
        type: "object",
        label: "Title 2",
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