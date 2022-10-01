import { MainHeader } from "../../components/common/MainHeader.tsx";
import { Title } from "../../components/registration/Title.tsx";
import { Step } from "../../components/registration/Step.tsx";
import { CompBanner } from "../../components/common/CompBanner.tsx";
import { BrownButton } from "../../components/common/BrownButton.tsx";
import { WhiteButton } from "../../components/common/WhiteButton.tsx";
import { SubFooter } from "../../components/common/SubFooter.tsx";

export default function Completion() {
  return (
    <>
      <MainHeader />
      <Title title="会員登録完了"/>
      <Step step={3} />
      <CompBanner msg="会員登録が完了しました。" />
      <BrownButton contents="トップページへ"/>
      <WhiteButton Arrow="right" contents="マイページへ"/>
      <SubFooter />
    </>
  );
}














      {/* <div class="mt-5">
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
      </div> */}