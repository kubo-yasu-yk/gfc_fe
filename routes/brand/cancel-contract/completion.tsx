import { Head } from "$fresh/runtime.ts";
import CancelContractCompletion from "../../../islands/CancelContractCompletion.tsx";

const msg = ["解約申請を受け付けました。", "解約までしばらくお待ちください。"];

export default function routes() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <CancelContractCompletion />
    </>
  );
}
