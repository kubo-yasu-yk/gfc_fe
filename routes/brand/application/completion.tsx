import { BrownHeader } from "../../../components/common/header/Header.tsx";
import { CompBanner } from "../../../components/brand/application/CompBanner.tsx";
import { Title } from "../../../components/brand/common/Title.tsx";
import {
  BrownButton2,
  WhiteButton,
} from "../../../components/brand/common/Button.tsx";
import { Footer } from "../../../components/common/footer/Footer.tsx";

export default function routes() {
  return (
    <>
      <BrownHeader />
      <Title title="申請完了" />
      <CompBanner />
      <BrownButton2 link="/" contents="トップページへ" />
      <WhiteButton link="/mypage" contents="マイページへ" />
      <Footer />
    </>
  );
}
