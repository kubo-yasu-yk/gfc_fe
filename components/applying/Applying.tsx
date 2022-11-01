import { LoginHeader } from "../common/header/Header.tsx";
import { Title } from "../common/screen-title/Title.tsx";
import { SearchBox } from "../common/input/SearchBox.tsx";
import { RadioButton } from "../common/button/RadioButton.tsx";
import { BgLeading } from "../common/others/Leading.tsx";
import { WhiteButton } from "../common/button/Button.tsx";
import { Brand1 } from "../common/brand/Brand.tsx";
import { Footer } from "../common/footer/Footer.tsx";

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
    <div
      class={`${props.open ? "fixed w-full" : ""}`}
    >
      <LoginHeader onClick={props.onClick} />
      <Title title="申請中ブランド一覧" />
      <SearchBox />
      <RadioButton buttonList={buttonList} />
      <BgLeading title="2022年10月25日" xs={true} />
      <Brand1 applyingList={applyingList} />

      <BgLeading title="2022年10月25日" xs={true} />
      <Brand1 applyingList={applyingList} />
      <WhiteButton name="申請中のブランドをもっと見る" />
      <Footer />
    </div>
  );
}
