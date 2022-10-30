import { tw } from "twind";
import { Header } from "./Header.tsx";
import BrandPhoto from "../../../islands//BrandPhoto.tsx";
import { BrownButton, WhiteButton } from "./Button.tsx";
import { BrandInfo } from "./BrandInfo.tsx";
import { Feature } from "./Feature.tsx";
import { CheckedBrand } from "./CheckedBrand.tsx";
import { Icons } from "./Icons.tsx";
import { FooterSearchBox } from "./SearchBox.tsx";
import { SearchLink } from "./SearchLink.tsx";
import { Banner } from "./Banner.tsx";
import { OtherContent } from "./OtherContent.tsx";
import { PublicAccount } from "./PublicAccount.tsx";
import { SubFooter } from "../../common/SubFooter.tsx";

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

export function BrandDetail(props: Props) {
  const contents = [["飲食フランチャイズ.com", "トップページへ"], ["特集ページ一覧", "新着ブランド一覧"], [
    "NEWS一覧",
    "お問い合わせ",
  ]];
  return (
    <div
      class={`${props.open ? "fixed w-full" : ""}`}
    >
      <Header onClick={props.onClick} />
      <BrandPhoto />
      <BrandInfo company="オリジン東秀株式会社" brandName="オリジン弁当" />
      <a href="/brand/application/confirmation">
        <BrownButton contents="申請手続きへ" />
      </a>

      <div class="mt-10">
        <p class="text-sm ml-4 my-3">関連ブログ</p>
        <div
          class={`flex flex-row w-full overflow-x-auto pr-4 ${tw`(hidden-scrollbar)`}`}
        >
          <Feature bgColor="lightblue" />
          <Feature bgColor="lightblue" />
          <Feature bgColor="lightblue" />
          <Feature bgColor="lightblue" />
        </div>
      </div>
      <div class="mt-10">
        <p class="text-sm ml-4 my-3">このブランドと一緒にチェックされるブランド</p>
        <CheckedBrand />
        <WhiteButton contents="もっと見る" />
      </div>
      <div class="my-10 border-b" />
      <Icons />
      <div class="bg-[rgb(149,119,113,0.1)] py-5 mb-12">
        <FooterSearchBox />
        <div class="border-b border-[#D6D6D6] mb-4">
          <SearchLink mt8={true} title="ジャンルから探す" />
          <SearchLink title="お気に入りブランドから探す" />
          <SearchLink title="閲覧履歴から探す" />
          <SearchLink noBorder={true} title="ランキングから探す" />
        </div>
        <Banner />
        <Banner />
        <Banner />
        <Banner />
      </div>
      <OtherContent contents={contents} />
      <PublicAccount />
      <SubFooter />
    </div>
  );
}
