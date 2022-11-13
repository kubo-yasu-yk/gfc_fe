import { Head } from "$fresh/runtime.ts";
import Index from "../islands/index.tsx";
import { getTopInfo, TopInfo } from "../shared/server/top.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

export default function routes({ data }: PageProps<TopInfo>) {
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
      <Index info={data} />
    </>
  );
}

export const handler: Handlers<TopInfo> = {
  GET(_, ctx) {
    return ctx.render(getTopInfo());
  },
};
