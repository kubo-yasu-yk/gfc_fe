import { LoginHeader } from "../common/header/Header.tsx";
import { Title } from "../common/screen-title/Title.tsx";
import { SearchBox } from "../common/input/SearchBox.tsx";
import {
  AccodionButton,
  HalfWWhiteButton,
  WhiteButton,
} from "../common/button/Button.tsx";
import { BgLeading } from "../common/others/Leading.tsx";
import { ApplyBrand } from "../common/brand/Brand.tsx";
import { Footer } from "../common/footer/Footer.tsx";

interface Props {
  open: boolean;
  display: boolean;
  onClick: (e: Event) => void;
  onClickButton: (e: Event) => void;
  Accodion?: (e: Event) => void;
}

export function ApplicationHistory(props: Props) {
  const sortOrders = ["申請日順（新しい順）", "申請日順（古い順）"];

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
  }, {
    status: 3,
    name: "マクドナルド",
    genre: "ファーストフード",
    src: "/icon/browsingHistory/mac.png",
  }, {
    status: 4,
    name: "マクドナルド",
    genre: "ファーストフード",
    src: "/icon/browsingHistory/mac.png",
  }];

  return (
    <div
      class={`${props.display || props.open ? "fixed w-full" : ""}`}
    >
      <LoginHeader onClick={props.onClick} />
      <Title title="申請履歴一覧" />
      <SearchBox />
      <div class="h-4" />
      <div class="flex mx-5 mb-5">
        {
          /* todo:アコーディオンを押すとHalfWhiteButtonまで下に行く（Half
        WhiteButtonの一番上のdivに高さを設定すると動かない） */
        }
        <HalfWWhiteButton name="絞り込む" onClickButton={props.onClickButton} />
        <AccodionButton
          name="表示順"
          list={sortOrders}
          Accodion={props.Accodion}
        />
      </div>
      <BgLeading title="2022年10月25日" />
      <ApplyBrand applyingList={applyingList} />

      <BgLeading title="2022年10月2日" />
      <ApplyBrand applyingList={applyingList} />

      <WhiteButton name="申請中のブランドをもっと見る" />
      <Footer />
    </div>
  );
}
