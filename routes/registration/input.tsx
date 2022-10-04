import { useState } from "preact/hooks";
import { MainHeader } from "../../components/common/MainHeader.tsx";
import { Title } from "../../components/registration/Title.tsx";
import { Step } from "../../components/registration/Step.tsx";
import { Leading } from "../../components/registration/Leading.tsx";
import { GrayButton } from "../../components/common/GrayButton.tsx";
import { RadioButton } from "../../components/registration/RadioButton.tsx";
import Main from "../../islands/RegistrationInput.tsx";

export default function Completion() {
  return (
    <>
      <MainHeader />
      <Title title="新規会員登録" />
      <Step step={1} />
      <Main />

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
