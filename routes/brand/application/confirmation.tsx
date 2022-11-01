import { BrownHeader } from "../../../components/common/header/Header.tsx";
import { Title } from "../../../components/brand/common/Title.tsx";
import { ConfirmMsg } from "../../../components/brand/application/ConfirmMsg.tsx";
import { Leading } from "../../../components/brand/common/Leading.tsx";
import {
  BrownButton,
  BrownButton2,
  WhiteButton,
} from "../../../components/brand/common/Button.tsx";

export default function routes()  {
  return (
    <>
      <BrownHeader />
      <Title title="申請内容の確認" />
      <ConfirmMsg />
      <div class="text-[0.625rem] text-[#5F5F5F] border-b border-[rgb(149,119,113,0.3)]">
        <Leading title="ブランド名" />
        <p class="ml-6 my-4">オリジン弁当</p>

        <Leading title="ジャンル" />
        <p class="ml-6 my-4">和食、洋食、中華</p>

        <Leading title="価格帯" />
        <p class="ml-6 my-4">500円 〜 1,000円</p>

        <Leading title="対応エリア" />
        <p class="ml-6 my-4">全国</p>

        <Leading title="取扱商品" />
        <p class="ml-6 my-4">のり弁当、唐揚げ弁当など</p>
      </div>
      <BrownButton link="/brand/application/completion" contents="申請する" />
      <p class="text-xs ml-5 mb-3">申請者情報</p>
      <div class="text-[0.625rem] text-[#5F5F5F] border-b border-[rgb(149,119,113,0.3)]">
        <Leading title="会社名" />
        <p class="ml-6 my-4">株式会社リクルート</p>

        <Leading title="担当者名" />
        <p class="ml-6 my-4">佐々木　小次郎</p>

        <Leading title="メールアドレス" />
        <p class="ml-6 my-4">taylor.taylor@icloud.com</p>

        <Leading title="電話番号" />
        <p class="ml-6 my-4">000-0000-0000</p>
      </div>
      <BrownButton2 link="/brand/application/completion" contents="申請する" />
      <WhiteButton link="/brand/brand-detail" contents="戻る" leftArrow={true} />
    </>
  );
}
