import { Header } from "./Header.tsx";
import { GenreName } from "./GenreName.tsx";
import { Brand } from "./brand.tsx";
import { Button } from "./Button.tsx";
import { PageNation } from "./pageNation.tsx";
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
}

export function SearchGenre(props: Props) {
  const contents = [["飲食フランチャイズ.com", "トップページへ"], ["特集ページ一覧", "新着ブランド一覧"], [
    "NEWS一覧",
    "お問い合わせ",
  ]];
  console.log(props.display);
  return (
    <div class={`${props.display ? "fixed w-full" : ""}`}>
      <Header onClick={props.onClick} />
      <GenreName />
      <div class="flex mx-5 mb-5">
        <Button name="絞り込む" onClick={props.onClickButton} />
        <Button name="表示順" />
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
