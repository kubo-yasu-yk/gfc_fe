import { Header } from "./Header.tsx";
import { ResultNumber } from "./GenreName.tsx";
import { Brand } from "./Brand.tsx";
import { AccodionButton, Button } from "./Button.tsx";
import { PageNation } from "./PageNation.tsx";
import { FooterSearchBox } from "./SearchBox.tsx";
import { SearchLink } from "./SearchLink.tsx";
import { Banner } from "./Banner.tsx";
import { OtherContent } from "./OtherContent.tsx";
import { SubFooter } from "../common/SubFooter.tsx";
import { PublicAccount } from "./PublicAccount.tsx";

interface Props {
  open: boolean;
  display: boolean;
  onClick: (e: Event) => void;
  onClickButton: (e: Event) => void;
  Accodion?: (e: Event) => void;
}

export function Freeword(props: Props) {
  const contents = [["飲食フランチャイズ.com", "トップページへ"], ["特集ページ一覧", "新着ブランド一覧"], [
    "NEWS一覧",
    "お問い合わせ",
  ]];
  // console.log(props.display);
  return (
    <div class={`${props.display || props.open ? "fixed w-full" : ""}`}>
      <Header onClick={props.onClick} />
      <ResultNumber />
      <div class="flex mx-5 mb-5">
        <Button name="絞り込む" onClickButton={props.onClickButton} />
        <AccodionButton name="表示順" Accodion={props.Accodion} />
      </div>
      <Brand />
      <Brand />
      <Brand />
      <Brand />
      <Brand />
      <Brand />
      <Brand />
      <Brand />
      <Brand />
      <Brand borderButtom={true} />
      <PageNation />
      <div class="bg-[rgb(149,119,113,0.1)] py-5 mb-12">
        <FooterSearchBox />
        <div class="border-b border-[#D6D6D6] mb-4">
          <SearchLink mt8={true} title="ジャンルから探す" />
          <SearchLink title="お気に入りブランドから探す" />
          <SearchLink title="閲覧履歴から探す" />
          <SearchLink noBorder={true} title="ランキングから探す" />
        </div>
        <Banner />
        <Banner />
        <Banner />
        <Banner />
      </div>
      <OtherContent contents={contents} />
      <PublicAccount />
      <SubFooter />
    </div>
  );
}