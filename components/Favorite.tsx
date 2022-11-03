//お気に入りの要素をまとめたコンポーネント
import { useState } from "preact/hooks";
import { LoginHeader } from "../components/common/header/Header.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { SearchBox } from "../components/common/input/SearchBox.tsx";
import { ResultNumber } from "../components/common/others/ResultNumber.tsx";
import { FavTripleBrand } from "../components/common/brand/Brand.tsx";
import { PageNation } from "../components/common/others/PageNation.tsx";
import { WhiteButton } from "../components/common/button/Button.tsx";
import { Footer } from "../components/common/footer/Footer.tsx";

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

export function Favorite(props: Props) {
  const [dastBox, setDastBox] = useState(false);
  const [name, setName] = useState("編集");

  const toggleFunction = () => {
    if (dastBox) {
      console.log("編集にするよ");
      setDastBox(false);
      setName("編集");
    } else {
      console.log("キャンセルにするよ");
      setDastBox(true);
      setName("キャンセル");
    }
  };

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
      <Title title="お気に入り" />
      <SearchBox />
      <ResultNumber
        displayNumStart={16}
        displayNumEnd={30}
        totalNum={45}
        name={name}
        onClick={toggleFunction}
      />
      <div class="border border-t">
        {brands.map(() => (
          <FavTripleBrand brandList={visitedBrands} dastBox={dastBox} />
        ))}
      </div>
      <PageNation displayNumStart={2} displayNumEnd={3} />
      <WhiteButton name="もっとブランドを探す" />
      <Footer />
    </div>
  );
}
