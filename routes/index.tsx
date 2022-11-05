import Index from "../islands/index.tsx";
import { getTopInfo, TopInfo } from "../shared/sever/top.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

export default function routes({ data }: PageProps<TopInfo>) {
  return <Index info={data} />;
}

export const handler: Handlers<TopInfo> = {
  GET(_, ctx) {
    return ctx.render(getTopInfo());
  },
};
