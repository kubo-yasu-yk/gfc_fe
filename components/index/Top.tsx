//トップページの要素をまとめたコンポーネント

import { SearchBoxHeader } from "../common/header/Header.tsx";
import { FourIcons } from "../common/others/FourIcons.tsx";
import MainBanners from "../../components/Banner.tsx";
import { Leading } from "../common/others/Leading.tsx";
import { Genre } from "./Genre.tsx";
import { BrandList, BrandRanking } from "../common/brand/Brand.tsx";
import { WhiteButton } from "../common/Button.tsx";
import { Info } from "./Info.tsx";
import { Inquiry } from "../common/others/Inquiry.tsx";
import { SNSAccount } from "../common/others/SNSAccount.tsx";
import { Footer } from "../common/footer/Footer.tsx";
import { FeatureContents } from "./FeatureContentsBar.tsx"; //todo:このコンポーネントは未着手
import { genre, TopInfo } from "../../shared/sever/top.ts";

interface Props {
  open: boolean;
  info: TopInfo;
  onClick: (e: Event) => void;
}

function creatPair(genres: genre[], n: number) {
  const pair: genre[][] = [];
  for (let i = 0; i < genres.length; i += n)
    pair.push(genres.slice(i, i + n));
  return pair;
}

export function Top(props: Props) {
  const info = props.info;
  const allGenres = creatPair(info.allGenres, 2);
  const recentGenres = creatPair(info.recentGenres, 2);

  return (
    <div class={`${props.open ? "fixed w-full" : ""}`}>
      <SearchBoxHeader onClick={props.onClick} />
      <main>
        <FourIcons />
        <MainBanners banners={info.mainBanners} />

        <Leading title="ジャンルから探す" linkName="ジャンル一覧" more={true} />
        <Genre genres={allGenres} />

        <Leading title="最近チェックしたジャンル" />
        <Genre genres={recentGenres} />

        <Leading title="人気ブランド総合ランキング" linkName="すべて見る" more={true} />
        <BrandRanking brandList={info.brandRanking} />

        <Leading title="新着ブランド" linkName="すべて見る" more={true} />
        <BrandList brandList={info.newBrands} />

        <Leading title="特集コンテンツ" />
        <FeatureContents />
        <WhiteButton name="特集コンテンツをもっと見る" arrow="right" klass="mt-4" />

        <Leading title="お知らせ" linkName="新着情報一覧" more={true} />
        <Info info={info.info} />
        <Inquiry />
        <SNSAccount />
      </main>
      <Footer />
    </div>
  );
}
