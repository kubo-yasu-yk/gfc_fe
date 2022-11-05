//ブランド詳細画面の要素をまとめたコンポーネント

import { LoginHeader } from "../common/header/Header.tsx";
import BrandPhoto from "../../components/brand-detail/BrandPhoto.tsx";
import { BrownButton, WhiteButton } from "../common/button/Button.tsx";
import { BrandInfo } from "./BrandInfo.tsx"; //todo:未着手
import { Leading } from "../common/others/Leading.tsx";
import { ScrollFeature } from "../common/feature/Feature.tsx";
import { BrandList } from "../common/brand/Brand.tsx";
import { LongFooter } from "../common/footer/Footer.tsx";

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

export function BrandDetail(props: Props) {
  const features = [{
    bgColor: "lightblue",
    introContent: "一世を風靡したタピオカミルクティーがなぜ人気なのかを解説。タピオカミルクティーの秘密からバズる秘訣を見出します。",
  }, {
    bgColor: "lightgreen",
    introContent: "一世を風靡したタピオカミルクティーがなぜ人気なのかを解説。タピオカミルクティーの秘密からバズる秘訣を見出します。",
  }, {
    bgColor: "lightgray",
    introContent: "一世を風靡したタピオカミルクティーがなぜ人気なのかを解説。タピオカミルクティーの秘密からバズる秘訣を見出します。",
  }, {
    bgColor: "black",
    introContent: "一世を風靡したタピオカミルクティーがなぜ人気なのかを解説。タピオカミルクティーの秘密からバズる秘訣を見出します。",
  }];

  const checkedBrands = [{
    src: "/icon/brandLogo.png",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここ",
  }, {
    src: "/icon/brandLogo.png",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここガストの説明はここ",
  }, {
    src: "/icon/brandLogo.png",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここ",
  }];

  const wLinkList = [
    [{ name: "トップページへ", link: "/" }, { name: "マイページへ", link: "/mypage" }],
    [{ name: "特集ページ一覧", link: "" }, { name: "新着ブランド一覧", link: "" }],
    [{ name: "NEWS一覧", link: "" }, { name: "お問い合わせ", link: "" }],
  ];

  const banners = ["", "", ""]; //バナーを3つ出すために空の配列を作成している

  const linkList = [
    { name: "ジャンルから探す", link: "", border: true },
    { name: "お気に入りブランドから探す", link: "/mypage/favorite", border: true },
    { name: "閲覧履歴から探す", link: "/mypage/browsing-history", border: true },
    { name: "ランキングから探す", link: "" },
  ];

  return (
    <div
      class={`${props.open ? "fixed w-full" : ""}`}
    >
      <LoginHeader onClick={props.onClick} />

      <BrandPhoto />

      <BrandInfo company="オリジン東秀株式会社" brandName="オリジン弁当" />
      <BrownButton name="申請手続きへ" link="/brand/application/confirmation" />

      <div class="h-10" />
      <Leading title="関連ブログ" />
      <ScrollFeature features={features} />

      <div class="h-10" />
      <Leading title="このブランドと一緒にチェックされるブランド" />
      <BrandList brandList={checkedBrands} />
      <WhiteButton name="もっと見る" />
      <div class="mt-10 border-b" />

      <LongFooter />
    </div>
  );
}
