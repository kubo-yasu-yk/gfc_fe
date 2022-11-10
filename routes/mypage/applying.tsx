import { Head } from "$fresh/runtime.ts";
import Applying from "../../islands/Applying.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <Applying />
    </>
  );
}
