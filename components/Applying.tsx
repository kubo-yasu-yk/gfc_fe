//申請中ブランド一覧画面の要素をまとめたコンポーネント

import { LoginHeader } from "../components/common/Header.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { SearchBox } from "../components/common/input/SearchBox.tsx";
import { BgLeading } from "../components/common/others/Leading.tsx";
import { RadioButton, WhiteButton } from "../components/common/Button.tsx";
import { ApplyBrand } from "../components/common/Brand.tsx";
import { Footer } from "../components/common/Footer.tsx";

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

//todo:mapでbrandを回す
export function Applying(props: Props) {
  const buttonList = [
    { name: "status", label: "すべて", checked: true },
    { name: "status", label: "申請中" },
    { name: "status", label: "契約可能" },
  ];

  const applyingList = [{
    status: 0,
    name: "マクドナルド",
    genre: "ファーストフード",
    src: "/icon/browsingHistory/mac.png",
  }, {
    status: 1,
    name: "マクドナルド",
    genre: "ファーストフード",
    src: "/icon/browsingHistory/mac.png",
  }, {
    status: 2,
    name: "マクドナルド",
    genre: "ファーストフード",
    src: "/icon/browsingHistory/mac.png",
  }];

  return (
    <div class={`${props.open ? "fixed w-full" : ""}`}>
      <LoginHeader onClick={props.onClick} />
      <main>
        <Title title="申請中ブランド一覧" />
        <SearchBox />
        <RadioButton buttonList={buttonList} klass="my-4" />
        <BgLeading title="2022年10月25日" />
        <ApplyBrand applyingList={applyingList} />
        <BgLeading title="2022年10月25日" />
        <ApplyBrand applyingList={applyingList} />
        <WhiteButton name="申請中のブランドをもっと見る" klass="mt-10" />
      </main>
      <Footer />
    </div>
  );
}
