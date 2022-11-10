//ブランド詳細画面の要素をまとめたコンポーネント

import { LoginHeader } from "../common/Header.tsx";
import BrandPhoto from "../../components/brand-detail/BrandPhoto.tsx";
import { BrownButton, WhiteButton } from "../common/Button.tsx";
import { BrandInfo } from "./BrandInfo.tsx";
import { Leading } from "../common/others/Leading.tsx";
import { ScrollFeature } from "../common/Feature.tsx";
import { BrandList } from "../common/Brand.tsx";
import { LongFooter } from "../common/Footer.tsx";

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

export function BrandDetail(props: Props) {
  const featureList = [{
    src: "/image/feature/feature1.jpg",
    content: "一世を風靡したタピオカミルクティーがなぜ人気なのかを解説。タピオカミルクティーの秘密からバズる秘訣を見出します。",
  }, {
    src: "/image/feature/feature2.jpg",
    content: "コーヒーを美味しく淹れるにはコツがあった！コーヒーソムリエによるコーヒーの淹れ方を解説！",
  }, {
    src: "/image/feature/feature3.jpg",
    content: "お茶にはこんなに種類があった！？世界で飲まれるお茶をご紹介します。是非新しいお茶を試してくださいね！",
  }, {
    src: "/image/feature/feature4.jpg",
    content: "ビール好きにはたまらない！世界のビール事情を徹底解説！お酒に関するイロハもお伝えします。",
  }];

  const checkedBrandList = [{
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    content:
      "花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ",
  }, {
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    content: "花村屋の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ",
  }, {
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    content: "花村屋拉麺の説明はここ花村屋拉麺の説明はここ",
  }];

  return (
    <div
      class={`${props.open ? "fixed w-full" : ""}`}
    >
      <LoginHeader onClick={props.onClick} />
      <main>
        <BrandPhoto />
        <BrandInfo company="オリジン東秀株式会社" brandName="オリジン弁当" />
        <BrownButton
          name="申請手続きへ"
          link="/brand/application/confirmation"
          klass="my-12"
        />
        <Leading title="関連ブログ" />
        <ScrollFeature featureList={featureList} />
        <Leading title="最近見たブランド" />
        <BrandList brandList={checkedBrandList} />
        <WhiteButton
          name="最近見たブランドをもっと見る"
          arrow="down"
          klass="mt-4 mb-12"
        />
      </main>
      <LongFooter />
    </div>
  );
}
