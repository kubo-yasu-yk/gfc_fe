import { MainHeader } from "../../components/MainHeader.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Completion() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <MainHeader />
      <div>
        <h1 class="mt-[1.625rem] ml-4 mb-2 text-[#5F5F5F]">会員登録完了</h1>
        <div class="h-px bg-[#E6E6E6] mx-2" />
      </div>
      <div class="mt-5 relative">
        <div class="h-px ml-[3.5rem] mr-[50%] bg-[#947771]" />
        <div class="flex flex-row mx-[2.875rem] justify-between">
          <div class="flex flex-col items-center">
            <div class="h-2.5 w-2.5 bg-[#947771] rounded-[5px]"></div>
            <p class="text-[8px] text-[#947771]">登録</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="h-2.5 w-2.5 bg-[#947771] rounded-[5px]"></div>
            <p class="text-[8px] text-[#947771]">確認</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="h-2.5 w-2.5 bg-[#947771] rounded-[5px]"></div>
            <p class="text-[8px] text-[#947771]">完了</p>
          </div>
        </div>
        <div class="bg-[rgb(148,119,113,0.2)] my-12 mx-4 py-6 flex flex-col">
          <img src="/icon/complete.png" alt="完了アイコン" class="h-[64px] w-[64px] mb-5 mx-auto" />
          <p class="text-[#5F5F5F] mx-auto">会員登録が完了しました。</p>
        </div>
        <div class="text-center">
          <button class="bg-[#947771] py-2.5 rounded-[5px] w-[18.75rem] text-[#ffffff] text-[14px] mb-4">
            トップページへ
          </button>
          <button class="bg-[#ffffff] py-2.5 rounded-[5px] w-[18.75rem] text-[#947771] text-[14px] border border-solid border-[#947771]">
            マイページへ
          </button>
        </div>
      </div>
    </>
  );
}
