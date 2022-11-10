import { Head } from "$fresh/runtime.ts";
import ApplicationHistory from "../../islands/ApplicationHistory.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com" />
      </Head>
      <ApplicationHistory />
    </>
  );
}
