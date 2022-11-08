import { BrownHeader } from "../../../components/common/Header.tsx";
import { CompMsg } from "../../../components/common/others/CompMsg.tsx";
import { Title } from "../../../components/common/screen-title/Title.tsx";
import {
  BrownButton,
  WhiteButton,
} from "../../../components/common/Button.tsx";
import { Footer } from "../../../components/common/Footer.tsx";

const msg = ["申請を受け付けました。", "契約許可が出るまでしばらくお待ちください。"];

export default function routes() {
  return (
    <>
      <BrownHeader />
      <Title title="申請完了" />
      <CompMsg compMsg={msg} />
      <BrownButton link="/" name="トップページへ" />
      <div class="h-3" />
      <WhiteButton link="/mypage" name="マイページへ" />
      <Footer />
    </>
  );
}
