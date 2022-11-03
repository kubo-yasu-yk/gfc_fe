import { useState } from "preact/hooks";
import { BgLeading, SubLeading } from "../components/common/others/Leading.tsx";
import {
  RadioButton,
  SmallBrownButton,
} from "../components/common/button/Button.tsx";
import {
  Checkbox,
  HiddenInput,
  Input,
  WInput,
} from "../components/common/input/Input.tsx";

export default function islands() {
  const [classification, setClassification] = useState(true);

  const memberType = [{
    name: "classification",
    label: "個人",
    checked: classification,
    onClick: () => setClassification(true),
  }, {
    name: "classification",
    label: "法人",
    onClick: () => setClassification(false),
  }];

  const gender = [{
    name: "gender",
    label: "男性",
  }, {
    name: "gender",
    label: "女性",
  }, {
    name: "gender",
    label: "無回答",
  }];

  const name = ["性", "名"];
  const nameKana = ["セイ", "メイ"];

  return (
    <div class="mt-8 text-[0.625rem] text-[#5F5F5F] border-b">
      <p class="ml-5 mb-2.5 text-red">
        入力目安時間（2分）
      </p>
      <BgLeading title="会員種別" mandatory={true} />
      <div class="h-4" />
      <RadioButton
        buttonList={memberType}
      />
      {classification
        ? (
          <>
            <BgLeading title="氏名" mandatory={true} />
            <WInput inputList={name} mt4={true} mb7={true} />

            <BgLeading title="氏名（カナ）" mandatory={true} />
            <WInput inputList={nameKana} mt4={true} mb7={true} />

            <BgLeading title="性別" mandatory={true} />
            <div class="h-4" />
            <RadioButton
              buttonList={gender}
            />

            <BgLeading title="ご住所" mandatory={true} />
          </>
        )
        : (
          <>
            <BgLeading title="会社名" mandatory={true} />
            <Input
              placeholder="会社名"
              mt4={true}
              mb7={true}
              ml8={true}
              w18rem={true}
            />

            <BgLeading title="会社名（カナ）" mandatory={true} />
            <Input
              placeholder="カイシャメイ"
              mt4={true}
              mb7={true}
              ml8={true}
              w18rem={true}
            />

            <BgLeading title="部署名" />
            <Input
              placeholder="部署名"
              mt4={true}
              mb7={true}
              ml8={true}
              w18rem={true}
            />

            <BgLeading title="部署名（カナ）" />
            <Input
              placeholder="ブショメイ"
              mt4={true}
              mb7={true}
              ml8={true}
              w18rem={true}
            />

            <BgLeading title="役職名" />
            <Input
              placeholder="役職名"
              mt4={true}
              mb7={true}
              ml8={true}
              w18rem={true}
            />

            <BgLeading title="担当者名" mandatory={true} />
            <WInput inputList={name} mt4={true} mb7={true} />

            <BgLeading title="担当者名（カナ）" mandatory={true} />
            <WInput inputList={nameKana} mt4={true} mb7={true} />

            <BgLeading title="会社のご住所" mandatory={true} />
          </>
        )}

      <SubLeading title="郵便番号" mandatory={true} />
      <p class="my-2 mx-8">都道府県・市区町村は、郵便番号から住所検索していただくと、自動で入力されます。</p>
      <div class="flex">
        <Input placeholder="0000000" mr2={true} ml8={true} w6rem={true} />
        <SmallBrownButton name="住所検索" />
      </div>
      <SubLeading title="都道府県" mandatory={true} />
      <Input placeholder="都道府県" ml8={true} w18rem={true} />
      {/* todo:後程プルダウンにする */}

      <SubLeading title="市区町村" mandatory={true} />
      <Input placeholder="例 : 品川区平塚" ml8={true} w18rem={true} />

      <SubLeading title="丁目・番地" mandatory={true} />
      <p class="my-2 mx-8">数字は半角で記入してください</p>
      <Input placeholder="例 : 2-3-2" ml8={true} w18rem={true} />

      <SubLeading title="建物名・部屋番号" />
      <p class="my-2 mx-8">全て半角で記入してください。</p>
      <Input placeholder="飲食フランチャイズ101" mb7={true} ml8={true} w18rem={true} />

      <BgLeading title="電話番号" mandatory={true} />
      <div class="flex">
        <Input
          placeholder="000"
          mt4={true}
          mb7={true}
          ml8={true}
          w4rem={true}
        />
        <div class="h-10 mx-2 mt-4 flex items-center">
          <p>ー</p>
        </div>
        <Input placeholder="000" mt4={true} mb7={true} w4rem={true} />
        <div class="h-10 mx-2 mt-4 flex items-center">
          <p>ー</p>
        </div>
        <Input placeholder="000" mt4={true} mb7={true} w4rem={true} />
      </div>

      <BgLeading title="メールアドレス" mandatory={true} />
      <Input
        placeholder="メールアドレス"
        mt4={true}
        mb7={true}
        ml8={true}
        w18rem={true}
      />

      <BgLeading title="パスワード" mandatory={true} />
      <HiddenInput
        placeholder="半角英数字6~20文字"
        mt4={true}
        ml8={true}
        w18rem={true}
      />
      <HiddenInput
        placeholder="確認のため再度ご入力ください"
        mt4={true}
        mb7={true}
        ml8={true}
        w18rem={true}
      />

      <BgLeading title="メールマガジン" />
      <p class="mt-4 mx-8">メールマガジンにて、新着ブランド情報、コラムなどのお得な情報をお送りします。</p>
      <div class="w-[18rem] h-10 ml-8 mt-2 mb-8 rounded flex border items-center text-[0.625rem]">
        <Checkbox msg="メールマガジンを受け取る" mx2={true} />
      </div>
    </div>
  );
}
