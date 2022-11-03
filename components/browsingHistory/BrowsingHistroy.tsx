//閲覧履歴の要素をまとめたコンポーネント

import { LoginHeader } from "../common/header/Header.tsx";
import { Title } from "../common/screen-title/Title.tsx";
import { SearchBox } from "../common/input/SearchBox.tsx";
import { ResultNumber } from "../common/others/ResultNumber.tsx";
import { TripleBrand } from "../common/brand/Brand.tsx";
import { PageNation } from "../common/others/PageNation.tsx";
import { WhiteButton } from "../common/button/Button.tsx";
import { Footer } from "../common/footer/Footer.tsx";

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

export function BrowsingHistory(props: Props) {
  const visitedBrands = [{
    name: "マクドナルド",
    genre: "ファーストフード",
    src: "/icon/browsingHistory/mac.png",
  }, {
    name: "丸亀製麺",
    genre: "和食",
    src: "/icon/browsingHistory/marukame.png",
  }, {
    name: "かぶきや",
    genre: "和食",
    src: "/icon/browsingHistory/kabukiya.jpeg",
  }];

  const brands = ["", "", "", "", ""]; //5行分出すために空の配列を作成している

  return (
    <div
      class={`${props.open ? "fixed w-full" : ""}`}
    >
      <LoginHeader onClick={props.onClick} />
      <Title title="閲覧履歴" />
      <SearchBox />
      <ResultNumber displayNumStart={16} displayNumEnd={30} totalNum={45} />
      <div class="border border-t">
        {brands.map(() => <TripleBrand brandList={visitedBrands} />)}
      </div>
      <PageNation displayNumStart={2} displayNumEnd={3} />
      <WhiteButton name="もっとブランドを探す" />
      <Footer />
    </div>
  );
}
