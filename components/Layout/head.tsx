import Head from "next/head";
import styles from "./layout.module.css";
import ILayoutProps from "../../interfaces/ILayoutProps";

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
}
