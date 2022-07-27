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
import { TinaTemplate } from "tinacms";

function ParlourCarePage({data}) {
  return (
    <>
      <Section>
        <Container className="py-10">
          
        </Container>
      </Section>
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


