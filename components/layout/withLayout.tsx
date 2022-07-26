import { ExperimentalGetTinaClient } from "../../.tina/__generated__/types";
import { useTina } from "tinacms/dist/edit-state";
import { Layout } from "./layout";

const withLayout = (Component) => {
  const wrappedComponent: React.FC<any> = (props) => {
    const { data } = useTina({
      query: props.query,
      variables: props.variables,
      data: props.data,
    });

    return (
      <Layout
        rawData={props.data || undefined}
        data={props.data?.global as any}
      >
        <Component {...props} />
      </Layout>
    );
  };

  return wrappedComponent;
};

export const getStaticProps = async () => {
  const client = ExperimentalGetTinaClient();
  const tinaProps = await client.global({
    relativePath: "/index.json",
  });
  return {
    props: {
      data: tinaProps.data || null,
      query: tinaProps.query,
      variables: tinaProps.variables,
    },
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;

export default withLayout;
