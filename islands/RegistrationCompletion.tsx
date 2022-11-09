import { BrownHeader } from "../components/common/Header.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { StepBar } from "../components/registration/StepBar.tsx";
import { CompMsg } from "../components/common/others/CompMsg.tsx";
import { BrownButton } from "../components/common/Button.tsx";
import { WhiteButton } from "../components/common/Button.tsx";
import { Footer } from "../components/common/Footer.tsx";

export default function routes() {
  return (
    <>
      <BrownHeader />
      <main>
        <Title title="会員登録完了" />
        <StepBar step={3} />
        <CompMsg compMsg="会員登録が完了しました。" />
        <BrownButton name="トップページへ" link="/" klass="mb-2" />
        <WhiteButton name="マイページへ" link="/mypage" />
      </main>
      <Footer />
    </>
  );
}