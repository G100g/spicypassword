import Head from "next/head";
import SpicyForm from "../components/spicy-form";

export default function Home() {
  return (
    <div className="maincontent">
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
}
