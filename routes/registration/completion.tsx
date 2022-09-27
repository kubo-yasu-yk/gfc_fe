import { MainHeader } from "../../components/MainHeader.tsx";
import { SubFooter } from "../../components/SubFooter.tsx";
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
      <div class="mt-5">
        <div class="flex flex-row flex-1 mx-auto w-[16.875rem]">
          <div class="h-2.5 w-2.5 bg-[#947771] rounded-[5px]" />
          <div class="h-[1px] w-[7.5rem] bg-[#947771] my-auto" />
          <div class="h-2.5 w-2.5 bg-[#947771] rounded-[5px]" />
          <div class="h-[1px] w-[7.5rem] bg-[#947771] my-auto" />
          <div class="h-2.5 w-2.5 bg-[#947771] rounded-[5px]" />
        </div>
        <div class="w-[17.5rem] flex flex-row justify-between mx-auto mt-1">
          <p class="text-[8px] text-[#947771]">登録</p>
          <p class="text-[8px] text-[#947771]">確認</p>
          <p class="text-[8px] text-[#947771]">完了</p>
        </div>
      </div>
      <div class="mt-5">
        <div class="flex flex-row flex-1 justify-center">
          <div class="flex flex-col">
            <div class="h-2.5 w-2.5 bg-[#947771] rounded-[5px] mx-auto" />
            <p class="text-[8px] text-[#947771] mt-1">登録</p>
          </div>
          <div class="h-[1px] w-[35%] bg-[#947771] mt-[5px]" />
          <div class="flex flex-col">
            <div class="h-2.5 w-2.5 bg-[#947771] rounded-[5px] mx-auto" />
            <p class="text-[8px] text-[#947771] mt-1">登録</p>
          </div>
          <div class="h-[1px] w-[35%] bg-[#947771] mt-[5px]" />
          <div class="flex flex-col">
            <div class="h-2.5 w-2.5 bg-[#947771] rounded-[5px] mx-auto" />
            <p class="text-[8px] text-[#947771] mt-1">登録</p>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <div class="bg-[rgb(148,119,113,0.2)] my-12 mx-4 py-6 flex flex-col">
          <img
            src="/icon/complete.png"
            alt="完了アイコン"
            class="h-[64px] w-[64px] mb-5 mx-auto"
          />
          <p class="text-[#5F5F5F] mx-auto font-bold">会員登録が完了しました。</p>
        </div>
        <div class="grid place-items-center">
          <button class="flex flex-row content-center bg-[#947771] py-2.5 rounded-[5px] w-[85%] text-[#ffffff] text-[14px] mb-4">
            <p class="mx-auto pl-4">トップページへ</p>
            <img
              src="/icon/whiteRightArrow.png"
              alt="白い右矢印"
              class="h-3 w-3 my-auto mr-4 text-right"
            />
          </button>
          <button class="flex flex-row content-center bg-[#ffffff] py-2.5 rounded-[5px] w-[85%] text-[#947771] text-[14px] border border-solid border-[#947771]">
            <p class="mx-auto pl-4">マイページへ</p>
            <img
              src="/icon/brownRightArrow.png"
              alt="茶色の右矢印"
              class="h-3 w-3 my-auto mr-4 text-right"
            />
          </button>
        </div>
      </div>
      <SubFooter />
      
    </>
  );
}
