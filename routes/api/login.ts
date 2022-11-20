import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req : Request) {
    const { mail, pass } = await req.json();
    console.log(mail, pass)
    return Response.json({});
  },
};
