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
      <Title title="会員登録完了" />
      <Step step={3} />
      <CompBanner msg="会員登録が完了しました。" />
      <BrownButton Arrow="right" contents="トップページへ" />
      <WhiteButton Arrow="right" contents="マイページへ" />
      <SubFooter />
    </>
  );
}
