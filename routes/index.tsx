import { Head } from "$fresh/runtime.ts";
import { Leading } from "../components/index/Leading.tsx";
import { Genre } from "../components/index/Genre.tsx";
import { NewBrands } from "../components/index/NewBrands.tsx";
import { WhiteButton } from "../components/index/Button.tsx";
import { Info } from "../components/index/Info.tsx";
import { Inquiry } from "../components/index/Inquiry.tsx";
import { PublicAccount } from "../components/index/PublicAccount.tsx";
import { SubFooter } from "../components/common/SubFooter.tsx";
import { Icons } from "../components/index/Icons.tsx";
import Header from "../islands/Header.tsx";
import BrandRanking from "../islands/BrandRanking.tsx";
import Features from "../islands/Features.tsx";
import FeatureContents from "../islands/FeatureContents.tsx";
import { Header2 } from "../components/index/Header.tsx";

export default function Index() {
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
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
        <script src="/index.ts" defer></script>
      </Head>

      <Header2 />
      <Icons />
      <Features />

      <Leading title="ジャンルから探す" more="ジャンル一覧" mandatory={true} />
      <Genre genres={allGenres} />

      <Leading title="最近チェックしたジャンル" />
      <Genre genres={recentGenres} />

      <Leading title="人気ブランド総合ランキング" more="すべて見る" mandatory={true} />
      <BrandRanking />

      <Leading title="新着ブランド" more="すべて見る" mandatory={true} />
      <NewBrands />

      <Leading title="特集コンテンツ" />
      <FeatureContents />
      <WhiteButton contents="特集コンテンツをもっと見る" />

      <Leading title="お知らせ" more="新着情報一覧" mandatory={true} />
      <Info />
      <Inquiry />
      <PublicAccount />
      <SubFooter />
    </>
  );
}
