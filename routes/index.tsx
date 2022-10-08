import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/index/Header.tsx";
import { Leading } from "../components/index/Leading.tsx";
import { Genre1, Genre2 } from "../components/index/Genre.tsx";
import { NewBrands } from "../components/index/NewBrands.tsx";
import { FeatureContentsBar } from "../components/index/FeatureContentsBar.tsx";
import { WhiteButton2 } from "../components/common/WhiteButton.tsx";
import { Info } from "../components/index/Info.tsx";
import { Inquiry } from "../components/index/Inquiry.tsx";
import { PublicAccount } from "../components/index/PublicAccount.tsx";
import { SubFooter } from "../components/common/SubFooter.tsx";
import { Icons } from "../components/index/Icons.tsx";
import Genre from "../islands/Genre.tsx";
import BrandRanking from "../islands/BrandRanking.tsx";
import Features from "../islands/Features.tsx";
import FeatureContents from "../islands/FeatureContents.tsx";

export default function Index() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      
      <Header />
      <Icons />
      <Features />

      <Leading title="ジャンルから探す" more="ジャンル一覧" mandatory={true} />
      <Genre1 />

      <Leading title="最近チェックしたジャンル" />
      <Genre2 />

      <Leading title="人気ブランド総合ランキング" more="すべて見る" mandatory={true} />
      <BrandRanking />

      <Leading title="新着ブランド" more="すべて見る" mandatory={true} />
      <NewBrands />

      <Leading title="特集コンテンツ" />
      <FeatureContentsBar />
      <FeatureContents />
      <WhiteButton2 contents="特集コンテンツをもっと見る" Arrow="right" />

      <Leading title="お知らせ" more="新着情報一覧" mandatory={true} />
      <Info />
      <Inquiry />
      <PublicAccount />
      <SubFooter />
    </>
  );
}
