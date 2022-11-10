import { Head } from "$fresh/runtime.ts";
import BrowsingHistory from "../../islands/BrowsingHistory.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <BrowsingHistory />
    </>
  );
}
