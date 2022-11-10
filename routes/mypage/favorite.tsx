import { Head } from "$fresh/runtime.ts";
import Favorite from "../../islands/Favorite.tsx";

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <Favorite />
    </>
  );
}
