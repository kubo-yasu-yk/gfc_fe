import { BrownHeader } from "../../components/common/header/Header.tsx";
import { Title } from "../../components/common/screen-title/Title.tsx";
import { StepBar } from "../../components/registration/StepBar.tsx";
import { ConfirmMsg } from "../../components/common/others/ConfirmMsg.tsx";
import { BgLeading } from "../../components/common/others/Leading.tsx";
import { BrownButton } from "../../components/common/button/Button.tsx";
import { WhiteButton } from "../../components/common/button/Button.tsx";

export default function routes() {
  const inputInfo = [
    { title: "会員種別", input: "法人" },
    { title: "会社名", input: "株式会社リクルート" },
    { title: "会社名（カナ）", input: "カブシキガイシャリクルート" },
    { title: "部署名", input: "未入力" },
    { title: "役職名", input: "未入力" },
    { title: "担当者氏名", input: "佐々木　小次郎" },
    { title: "担当者氏名（カナ）", input: "ササキ　コジロウ" },
    { title: "会社のご住所", input: ["〒123-4567", "横浜市旭区二俣川1-11-11", "やまとハウス101"] },
    { title: "代表電話番号", input: "000-0000-0000" },
    { title: "メールアドレス", input: "taylor.taylor@icloud.com" },
    { title: "パスワード", input: "**********" },
    { title: "メールマガジン", input: "受け取る" },
  ];

  return (
    <>
      <BrownHeader />
      <Title title="登録内容の確認" />
      <StepBar step={2} />
      <ConfirmMsg msg="登録" />
      <main class="text-[0.625rem] text-[#5F5F5F] border-b">
        {inputInfo.map((info) => (
          <>
            <BgLeading title={info.title} />

            {info.input instanceof Array
              ? info.input.map((input) => <p class="ml-8 my-3">{input}</p>) //todo:マージンの修正
              : <p class="ml-8 my-3">{info.input}</p>}
          </>
        ))}
      </main>
      <div class="mt-12 mb-[17.5rem]">
        <BrownButton name="登録する" link="/registration/completion" />
        <div class="h-3" />
        <WhiteButton name="戻る" arrow="left" link="/registration/input" />
      </div>
    </>
  );
}
