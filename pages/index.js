import Head from "next/head";
import { LayoutContext, LayoutProvider } from "../context/layout";
import SpicyForm from "../components/spicy-form";
import { useContext } from "react";

const Main = () => {
  const { domain } = useContext(LayoutContext);

  return (
    <div className={`maincontent ${domain}`}>
      <Head>
        <title>Spicy Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          Welcome to <em>Spicy Password</em>
        </h1>
        <SpicyForm />
      </main>
    </div>
  );
};

export default function Home() {
  return (
    <LayoutProvider>
      <Main />
    </LayoutProvider>
  );
}
