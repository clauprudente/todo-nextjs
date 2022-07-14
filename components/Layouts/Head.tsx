import Head from "next/head";
import ILayoutProps from "../../interfaces/ILayoutProps";

export const HeadTag = ({ children }: ILayoutProps) => {
  return (
    <>
      <Head>
        <title>Notas Example</title>
        <meta name="description" content="Free Web tutorials" />
      </Head>
      <main>{children}</main>
    </>
  );
};
