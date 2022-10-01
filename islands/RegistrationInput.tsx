import { useState } from "preact/hooks";
import { Leading } from "../components/registration/Leading.tsx";
import { Input } from "../components/registration/Input.tsx";
import { RadioButton } from "../components/registration/RadioButton.tsx";

export default function Completion() {
  const [classification, setClassification] = useState(true);
  const Gender = () =>
    classification
      ? (
        <>
          <Leading title="性別" mandatory={true} />
          <div class="flex flex-row">
            <RadioButton name="gender" label="男性" />
            <RadioButton name="gender" label="女性" />
            <RadioButton name="gender" label="無回答" />
          </div>
        </>
      )
      : null;

  return (
    <main class="mt-8 text-[0.625rem] text-[#5F5F5F] border-b-[1px] border-solid border-[rgb(149,119,113,0.3)]">
      <p class="ml-4 mb-[0.625rem] text-[#FF7171] font-semibold ">
        入力目安時間（2分）
      </p>
      <Leading title="会員種別" mandatory={true} />
      <div class="flex flex-row">
        <RadioButton
          name="classification"
          label="個人"
          checked={classification}
          onClick={() => setClassification(true)}
        />
        <RadioButton
          name="classification"
          label="法人"
          onClick={() => setClassification(false)}
        />
      </div>

      <Leading title="氏名" mandatory={true} />
      <Input placeholder="性" width="10rem" />
      <Input placeholder="名" width="10rem" />

      <Leading title="氏名（カナ）" mandatory={true} />
      <Input placeholder="セイ" width="10rem" />
      <Input placeholder="メイ" width="10rem" />

      <Gender />

      <Leading title="会員種別" />
      <p class="mx-6 my-4">メールマガジンにて、新着ブランド情報、コラムなどのお得な情報をお送りします。</p>
      <div class="text-[0.625rem]">
        <div class="w-[90%] h-10 mx-auto mt-4 mb-8 rounded-[5px] flex flex-row border-[#947771] border-[1px]">
          <div class="w-5 h-5 my-auto bg-white rounded-[5px] border border-[#947771] ml-2.5" />
          <p class="my-auto ml-2.5">メールマガジンを受け取る</p>
        </div>
      </div>
    </main>
  );
}
