import { BrownHeader } from "../../../components/common/Header.tsx";
import { CompMsg } from "../../../components/common/others/CompMsg.tsx";
import { Title } from "../../../components/common/screen-title/Title.tsx";
import {
  BrownButton,
  WhiteButton,
} from "../../../components/common/Button.tsx";
import { Footer } from "../../../components/common/Footer.tsx";

const msg = ["申請キャンセルが完了しました。", "引き続き飲食フランチャイズ.comのご利用を", "よろしくお願いいたします。"];

export default function routes() {
  return (
    <>
      <BrownHeader />
      <Title title="申請キャンセル完了" />
      <CompMsg compMsg={msg} />
      <BrownButton link="/" name="トップページへ" />
      <div class="h-3" />
      <WhiteButton link="/mypage" name="マイページへ" />
      <Footer />
    </>
  );
}
