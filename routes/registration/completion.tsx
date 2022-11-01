import { BrownHeader } from "../../components/common/header/Header.tsx";
import { Title } from "../../components/common/screen-title/Title.tsx";
import { StepBar } from "../../components/registration/StepBar.tsx";
import { CompMsg } from "../../components/common/others/CompMsg.tsx";
import { BrownButton } from "../../components/common/button/Button.tsx";
import { WhiteButton } from "../../components/common/button/Button.tsx";
import { Footer } from "../../components/common/footer/Footer.tsx";

export default function routes() {
  return (
    <>
      <BrownHeader />
      <Title title="会員登録完了" />
      <StepBar step={3} />
      <CompMsg msg="会員登録が完了しました。" />
      <BrownButton name="トップページへ" arrow="right" />
      <div class="h-3" />
      <WhiteButton name="マイページへ" arrow="right" />
      <Footer />
    </>
  );
}
