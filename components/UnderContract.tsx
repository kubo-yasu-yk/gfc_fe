//契約中ブランド一覧画面の要素をまとめたコンポーネント

import { LoginHeader } from "../components/common/header/Header.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { SearchBox } from "../components/common/input/SearchBox.tsx";
import { ResultNumber } from "../components/common/others/ResultNumber.tsx";
import { BrandList } from "../components/common/brand/Brand.tsx";
import { PageNation } from "../components/common/others/PageNation.tsx";
import { WhiteButton } from "../components/common/button/Button.tsx";
import { Footer } from "../components/common/footer/Footer.tsx";

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

export function UnderContract(props: Props) {
  const contractBrands = [{
    src: "/image/brandLogo/logo1.jpg",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここ",
  }, {
    src: "/image/brandLogo/logo1.jpg",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここガストの説明はここ",
  }, {
    src: "/image/brandLogo/logo1.jpg",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここ",
  }, {
    src: "/image/brandLogo/logo1.jpg",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここ",
  }, {
    src: "/image/brandLogo/logo1.jpg",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここ",
  }];

  return (
    <div
      class={`${props.open ? "fixed w-full" : ""}`}
    >
      <LoginHeader onClick={props.onClick} />
      <Title title="契約中ブランド一覧" />
      <SearchBox />
      <ResultNumber displayNumStart={6} displayNumEnd={10} totalNum={15} />
      <BrandList brandList={contractBrands} />
      <PageNation displayNumStart={2} displayNumEnd={3} />
      <WhiteButton name="もっとブランドを探す" />
      <Footer />
    </div>
  );
}
