import { useState } from "preact/hooks";
import { Leading } from "../components/registration/Leading.tsx";
import { SubLeading } from "../components/registration/SubLeading.tsx";
import { Message } from "../components/registration/Message.tsx";
import {
  Input1,
  Input2,
  Input3,
  Input4,
  Input5,
} from "../components/registration/Input.tsx";
import { RadioButton } from "../components/registration/RadioButton.tsx";
import { TelHyphen } from "../components/registration/TelHyphen.tsx";
import {
  PasswordDisplay1,
  PasswordDisplay2,
} from "../components/registration/PassworDisplay.tsx";

export default function Completion() {
  const [classification, setClassification] = useState(true);
  const Individual = () =>
    classification
      ? (
        <>
          <Leading title="氏名" mandatory={true} />
          <Input1 placeholder="性" width="41%" />
          <Input2 placeholder="名" width="41%" />

          <Leading title="氏名（カナ）" mandatory={true} />
          <Input1 placeholder="セイ" width="41%" />
          <Input2 placeholder="メイ" width="41%" />

          <Leading title="性別" mandatory={true} />
          <div class="flex flex-row">
            <RadioButton name="gender" label="男性" />
            <RadioButton name="gender" label="女性" />
            <RadioButton name="gender" label="無回答" />
          </div>

          <Leading title="ご住所" mandatory={true} />
        </>
      )
      : null;

  const Company = () =>
    classification ? null : (
      <>
        <Leading title="会社名" mandatory={true} />
        <Input1 placeholder="会社名" width="84%" />

        <Leading title="会社名（カナ）" mandatory={true} />
        <Input1 placeholder="カイシャメイ" width="84%" />

        <Leading title="部署名" />
        <Input1 placeholder="部署名" width="84%" />

        <Leading title="部署名（カナ）" />
        <Input1 placeholder="ブショメイ" width="84%" />

        <Leading title="役職名" />
        <Input1 placeholder="役職名" width="84%" />

        <Leading title="担当者名" mandatory={true} />
        <Input1 placeholder="性" width="41%" />
        <Input2 placeholder="名" width="41%" />

        <Leading title="担当者名（カナ）" mandatory={true} />
        <Input1 placeholder="セイ" width="41%" />
        <Input2 placeholder="メイ" width="41%" />

        <Leading title="会社のご住所" mandatory={true} />
      </>
    );

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

      <Individual />

      <Company />

      <SubLeading title="郵便番号" mandatory={true} />
      <Message message="都道府県・市区町村は、郵便番号から住所検索していただくと、自動で入力されます。" />
      <div class="flex flex-row">
        <Input3 placeholder="0000000" width="6.25rem" />
        <button class="ml-2 h-10 w-[6.25rem] bg-[#947771] text-[#ffffff] rounded-[5px] mb-2">
          住所検索
        </button>
      </div>
      <SubLeading title="都道府県" mandatory={true} />
      <Input3 placeholder="都道府県" width="84%" /> {/*後程プルダウンにする */}

      <SubLeading title="市区町村" mandatory={true} />
      <Input3 placeholder="例：品川区平塚" width="84%" />

      <SubLeading title="丁目・番地" mandatory={true} />
      <Message message="数字は半角で記入してください" />
      <Input3 placeholder="例：2-3-2" width="84%" />

      <SubLeading title="建物名・部屋番号" />
      <Message message="全て半角で記入してください。" />
      <Input4 placeholder="飲食フランチャイズ101" width="84%" />

      <Leading title="電話番号" mandatory={true} />
      <div class="flex flex-row">
        <Input1 placeholder="000" width="3.75rem" />
        <TelHyphen />
        <Input2 placeholder="000" width="3.75rem" />
        <TelHyphen />
        <Input2 placeholder="000" width="3.75rem" />
      </div>

      <Leading title="メールアドレス" mandatory={true} />
      <Input1 placeholder="メールアドレス" width="84%" />

      <Leading title="パスワード" mandatory={true} />
      <Input5 placeholder="半角英数字6~20文字" width="84%" />
      <PasswordDisplay1 />

      <Input5 placeholder="確認のため再度ご入力ください" width="84%" />
      <PasswordDisplay2 />

      <Leading title="メールマガジン" />
      <p class="mx-[8%] my-4">メールマガジンにて、新着ブランド情報、コラムなどのお得な情報をお送りします。</p>
      <div class="text-[0.625rem]">
        <div class="w-[84%] h-10 mx-auto mt-4 mb-8 rounded-[5px] flex flex-row border-[#947771] border-[1px]">
          <div class="w-5 h-5 my-auto bg-white rounded-[5px] border border-[#947771] ml-2.5" />
          <p class="my-auto ml-2.5">メールマガジンを受け取る</p>
        </div>
      </div>
    </main>
  );
}
