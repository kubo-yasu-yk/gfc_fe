import { Leading } from "./Leading.tsx";
import { Header } from "./Header.tsx";
import { Genre } from "./Genre.tsx";
import { NewBrands } from "./NewBrands.tsx";
import { WhiteButton } from "../common/WhiteButton.tsx";
import { Info } from "./Info.tsx";
import { Inquiry } from "./Inquiry.tsx";
import { PublicAccount } from "./PublicAccount.tsx";
import { SubFooter } from "../common/SubFooter.tsx";
import { Icons } from "./Icons.tsx";
import { BrandRankings } from "./BrandRankings.tsx";
import { FeatureContents } from "./FeatureContentsBar.tsx";
import SlideFeatures from "../../islands/Feature.tsx";

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

export function Top(props: Props) {
  const allGenres = [
    [{ name: "洋食", src: "/icon/genreIcon.jpg" }, {
      name: "中華",
      src: "/icon/genreIcon.jpg",
    }],
    [{ name: "和食", src: "/icon/genreIcon.jpg" }, {
      name: "エスニック",
      src: "/icon/genreIcon.jpg",
    }],
    [{ name: "ラーメン", src: "/icon/genreIcon.jpg" }, {
      name: "焼肉",
      src: "/icon/genreIcon.jpg",
    }],
    [{ name: "ファーストフード", src: "/icon/genreIcon.jpg" }, {
      name: "スイーツ",
      src: "/icon/genreIcon.jpg",
    }],
    [{ name: "飲み物", src: "/icon/genreIcon.jpg" }, {
      name: "その他",
      src: "/icon/genreIcon.jpg",
    }],
  ];

  const recentGenres = [
    [{ name: "洋食", src: "/icon/genreIcon.jpg" }, {
      name: "焼肉",
      src: "/icon/genreIcon.jpg",
    }],
    [{ name: "ファーストフード", src: "/icon/genreIcon.jpg" }, {
      name: "飲み物",
      src: "/icon/genreIcon.jpg",
    }],
  ];
  return (
    <div
      class={`${props.open ? "fixed w-full" : ""}`}
    >
      <Header onClick={props.onClick} />
      <Icons />
      <SlideFeatures />

      <Leading title="ジャンルから探す" more="ジャンル一覧" mandatory={true} />
      <Genre genres={allGenres} />

      <Leading title="最近チェックしたジャンル" />
      <Genre genres={recentGenres} />

      <Leading title="人気ブランド総合ランキング" more="すべて見る" mandatory={true} />
      <BrandRankings />

      <Leading title="新着ブランド" more="すべて見る" mandatory={true} />
      <NewBrands />

      <Leading title="特集コンテンツ" />
      <FeatureContents />
      <WhiteButton contents="特集コンテンツをもっと見る" Arrow="left" />

      <Leading title="お知らせ" more="新着情報一覧" mandatory={true} />
      <Info />
      <Inquiry />
      <PublicAccount />
      <SubFooter />
    </div>
  );
}
