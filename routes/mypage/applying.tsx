import { Head } from "$fresh/runtime.ts";
import Applying from "../../islands/Applying.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />
        <link href="/style.css" rel="stylesheet" />
        <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js" />
      </Head>
      <Applying />
    </>
  );
}
