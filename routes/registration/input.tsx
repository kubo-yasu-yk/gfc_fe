import { MainHeader } from "../../components/common/MainHeader.tsx";
import { Title } from "../../components/registration/Title.tsx";
import { Step } from "../../components/registration/Step.tsx";
import { Leading } from "../../components/registration/Leading.tsx";
import { TwoButton } from "../../components/registration/TwoButton.tsx";
import { GrayButton } from "../../components/common/GrayButton.tsx";
import { RadioButton } from "../../components/registration/RadioButton.tsx";

export default function Completion() {
  return (
    <>
      <MainHeader />
      <Title title="新規会員登録" />
      <Step step={1} />
      <main class="mt-8 text-[0.625rem] text-[#5F5F5F] border-b-[1px] border-solid border-[rgb(149,119,113,0.3)]">
        <p class="ml-4 mb-[0.625rem] text-[#FF7171] font-semibold ">
          入力目安時間（2分）
        </p>
        <Leading title="会員種別" mandatory={true} />
        <div class="flex flex-row">
          <RadioButton name="classification" label="個人" />
          <RadioButton name="classification" label="法人" />
        </div>

        <Leading title="氏名" mandatory={true} />
        <TwoButton placeholder1="性" placeholder2="名" />

        <Leading title="氏名（カナ）" mandatory={true} />
        <TwoButton placeholder1="セイ" placeholder2="メイ" />

        <Leading title="性別" mandatory={true} />
        <div class="flex flex-row">
          <RadioButton name="sex" label="男性" />
          <RadioButton name="sex" label="女性" />
          <RadioButton name="sex" label="無回答" />
        </div>

        <Leading title="会員種別" />
        <p class="mx-6 my-4">メールマガジンにて、新着ブランド情報、コラムなどのお得な情報をお送りします。</p>
        <div class="text-[0.625rem]">
          <div class="w-[90%] h-10 mx-auto mt-4 mb-8 rounded-[5px] flex flex-row border-[#947771] border-[1px]">
            <div class="w-5 h-5 my-auto bg-white rounded-[5px] border border-[#947771] ml-2.5" />
            <p class="my-auto ml-2.5">メールマガジンを受け取る</p>
          </div>
        </div>
      </main>
      <div class="text-[0.625rem]">
        <div class="w-[95%] h-[3.75rem] bg-[rgb(255,212,203,0.2)] mx-auto mt-12 rounded-[5px] flex flex-row">
          <div class="w-5 h-5 my-auto bg-white rounded-[5px] border border-[#947771] ml-2.5" />
          <p class="text-[#947771] my-auto ml-2.5">
            「<a href="" class="text-[#0085FF]">利用規約</a>」「<a
              href=""
              class="text-[#0085FF]"
            >
              プライバシーポリシー
            </a>」に同意する
          </p>
        </div>
      </div>

      <div class="mt-12 mb-[17.5rem]">
        <GrayButton contents="確認画面へ" />
      </div>
    </>
  );
}
