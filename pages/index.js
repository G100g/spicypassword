import Head from "next/head";
import SpicyForm from "../components/spicy-form";

export default function Home() {
  return (
    <div className="maincontent">
      <Head>
        <title>Spicy Password</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,300"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <h1>
          Welcome to <em>Spicy Password</em>
        </h1>
        <SpicyForm />
      </main>
    </div>
  );
}
