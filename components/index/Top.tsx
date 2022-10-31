//トップページの要素をまとめたコンポーネント

import { TopPageHeader } from "../common/header/Header.tsx";
import { FourIcons } from "../common/others/FourIcons.tsx";
import SwiperFeatures from "../../islands/Feature.tsx";
import { Leading } from "../common/others/Leading.tsx";
import { Genre } from "./Genre.tsx";
import { Ranking } from "../common/brand/Ranking.tsx";
import { BrandList } from "../common/brand/Brand.tsx";
import { WhiteButton } from "../common/button/Button.tsx";
import { Info } from "./Info.tsx";
import { Inquiry } from "../common/others/Inquiry.tsx";
import { SNSAccount } from "../common/others/SNSAccount.tsx";
import { Footer } from "../common/footer/Footer.tsx";
import { FeatureContents } from "./FeatureContentsBar.tsx"; //todo:このコンポーネントは未着手

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

export function Top(props: Props) {
  const allGenres = [
    [{ name: "洋食", src: "/icon/genreIcon.jpg", link: "/search-genre" }, {
      name: "中華",
      src: "/icon/genreIcon.jpg",
      link: "/search-genre",
    }],
    [{ name: "和食", src: "/icon/genreIcon.jpg", link: "/search-genre" }, {
      name: "エスニック",
      src: "/icon/genreIcon.jpg",
      link: "/search-genre",
    }],
    [{ name: "ラーメン", src: "/icon/genreIcon.jpg", link: "/search-genre" }, {
      name: "焼肉",
      src: "/icon/genreIcon.jpg",
      link: "/search-genre",
    }],
    [{ name: "ファーストフード", src: "/icon/genreIcon.jpg", link: "/search-genre" }, {
      name: "スイーツ",
      src: "/icon/genreIcon.jpg",
      link: "/search-genre",
    }],
    [{ name: "飲み物", src: "/icon/genreIcon.jpg", link: "/search-genre" }, {
      name: "その他",
      src: "/icon/genreIcon.jpg",
      link: "/search-genre",
    }],
  ];

  const recentGenres = [
    [{ name: "洋食", src: "/icon/genreIcon.jpg", link: "/search-genre" }, {
      name: "焼肉",
      src: "/icon/genreIcon.jpg",
      link: "/search-genre",
    }],
    [{ name: "ファーストフード", src: "/icon/genreIcon.jpg", link: "/search-genre" }, {
      name: "飲み物",
      src: "/icon/genreIcon.jpg",
      link: "/search-genre",
    }],
  ];

  const newBrandList = [{
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

  const info = [{
    date: "2022/09/12",
    content: "お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。",
  }, {
    date: "2022/09/12",
    content: "お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。",
  }, {
    date: "2022/09/12",
    content: "お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。",
  }, {
    date: "2022/09/12",
    content: "お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。",
  }, {
    date: "2022/09/12",
    content: "お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。",
  }];

  return (
    <div class={`${props.open ? "fixed w-full" : ""}`}>
      <TopPageHeader onClick={props.onClick} />
      <FourIcons />
      <SwiperFeatures />

      <Leading title="ジャンルから探す" linkName="ジャンル一覧" more={true} />
      <Genre genres={allGenres} />

      <Leading title="最近チェックしたジャンル" />
      <Genre genres={recentGenres} />

      <Leading title="人気ブランド総合ランキング" linkName="すべて見る" more={true} />
      <Ranking />

      <Leading title="新着ブランド" linkName="すべて見る" more={true} />
      <BrandList brandList={newBrandList} />

      <Leading title="特集コンテンツ" />
      <FeatureContents />
      <WhiteButton name="特集コンテンツをもっと見る" arrow="right" />

      <Leading title="お知らせ" linkName="新着情報一覧" more={true} />
      <Info info={info} />
      <Inquiry />
      <SNSAccount />
      <Footer />
    </div>
  );
}
