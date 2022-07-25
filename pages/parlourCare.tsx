import { Numbers } from "../components/blocks/numbers";
import { PlanComparisonBoxes } from "../components/blocks/planComparisonBoxes";
import { PlanComparisonTable } from "../components/blocks/planComparisonTable";
import { Layout } from "../components/layout";
import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import Image from "next/image";
import CareIMG from "../public/parlour-care1.png";
import ParlourCarePlus from "../public/uploads/parlourcareplus1.png";
import ParlourCarePlusOutline from "../public/uploads/parlourcareplusoutline1.png";
import { ExperimentalGetTinaClient } from "../.tina/__generated__/types";

function ParlourCarePage() {
  return (
    <>
      <Section>
        <Container className="py-10">
          <div className="text-parlourDark lg:text-6xl text-3xl font-bold flex flex-col items-center z-30">
            <div className="mt-32">
              <div className="flex flex-row gap-10 items-center">
                <h1>Fully</h1>
                <Image src={ParlourCarePlus.src} width={150} height={140} />
              </div>
              <h1>Covered.</h1>
            </div>
            <div className="mt-24 lg:w-64 w-36">
              <Image src={CareIMG.src} width={250} height={65} />
            </div>
            <div className="absolute top-96 right-5 lg:block hidden">
              <Image
                src={ParlourCarePlusOutline.src}
                width={250}
                height={230}
              />
            </div>
            <div className="lg:w-20 absolute top-12 right-24 lg:block hidden">
              <Image src={ParlourCarePlusOutline.src} width={80} height={75} />
            </div>
            <div className="lg:w-14 absolute top-56 right-[20%] lg:block hidden">
              <Image src={ParlourCarePlusOutline.src} width={75} height={65} />
            </div>
            <div className="w-32 absolute top-8 right-[30%] lg:block hidden">
              <Image
                src={ParlourCarePlusOutline.src}
                width={150}
                height={140}
              />
            </div>
            <div className="lg:w-52 absolute top-[60vh] left-14 lg:block hidden">
              <Image
                src={ParlourCarePlusOutline.src}
                width={250}
                height={230}
              />
            </div>
            <div className="lg:w-16 absolute top-64 left-20 lg:block hidden">
              <Image src={ParlourCarePlusOutline.src} width={80} height={75} />
            </div>
            <div className="lg:w-32 absolute top-16 left-[15%] lg:block hidden">
              <Image
                src={ParlourCarePlusOutline.src}
                width={130}
                height={120}
              />
            </div>
          </div>
        </Container>
      </Section>
      <Numbers />
      <PlanComparisonBoxes />
      <PlanComparisonTable />
    </>
  );
}

export const getStaticProps = async () => {
  const client = ExperimentalGetTinaClient();
  // const tinaProps = await client.ContentQuery({
  //   relativePath: `empty.md`,
  // });
  const tinaProps = await client.global({
    relativePath: "/index.json",
  });
  return {
    props: {
      data: tinaProps.data,
      query: tinaProps.query,
      variables: tinaProps.variables,
    },
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;

export default ParlourCarePage;
