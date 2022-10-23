import { MainHeader } from "../../components/common/MainHeader.tsx";
import { Title } from "../../components/registration/Title.tsx";
import { Step } from "../../components/registration/Step.tsx";
import { ConfirmMsg } from "../../components/registration/ConfirmMsg.tsx";
import { Leading } from "../../components/registration/Leading.tsx";
import { BrownButton } from "../../components/common/Button.tsx";
import { WhiteButton } from "../../components/common/Button.tsx";

export default function Completion() {
  return (
    <>
      <MainHeader />
      <Title title="登録内容の確認" />
      <Step step={2} />
      <ConfirmMsg />
      <main class="text-[0.625rem] text-[#5F5F5F] border-b-[1px] border-solid border-[rgb(149,119,113,0.3)]">
        <Leading title="会員種別" />
        <p class="ml-6 my-4">個人</p>

        <Leading title="氏名" />
        <p class="ml-6 my-4">佐々木　小次郎</p>

        <Leading title="氏名（カナ）" />
        <p class="ml-6 my-4">ササキ　コジロウ</p>

        <Leading title="性別" />
        <p class="ml-6 my-4">男性</p>

        <Leading title="ご住所" />
        <p class="ml-6 my-4">
          〒123-4567<br />横浜市旭区二俣川1-11-11<br />やまとハウス101
        </p>

        <Leading title="電話番号" />
        <p class="ml-6 my-4">000-0000-0000</p>

        <Leading title="メールアドレス" />
        <p class="ml-6 my-4">taylor.taylor@icloud.com</p>

        <Leading title="パスワード" />
        <p class="ml-6 my-4">**********</p>

        <Leading title="メールマガジン" />
        <p class="ml-6 my-4">受け取る</p>
      </main>
      <div class="mt-12 mb-[17.5rem]">
        <BrownButton contents="登録する" />
        <WhiteButton Arrow="left" contents="戻る" />
      </div>
    </>
  );
}
