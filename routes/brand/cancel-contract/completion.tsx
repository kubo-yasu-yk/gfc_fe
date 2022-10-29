import { MainHeader } from "../../../components/common/MainHeader.tsx";
import { CompBanner } from "../../../components/brand/cancel-contract/CompBanner.tsx";
import { Title } from "../../../components/brand/common/Title.tsx";
import {
  BrownButton2,
  WhiteButton,
} from "../../../components/brand/common/Button.tsx";
import { SubFooter } from "../../../components/common/SubFooter.tsx";

export default function Completion() {
  return (
    <>
      <MainHeader />
      <Title title="解約申請完了" />
      <CompBanner />
      <BrownButton2 link="/" contents="トップページへ" />
      <WhiteButton link="/mypage" contents="マイページへ" />
      <SubFooter />
    </>
  );
}
