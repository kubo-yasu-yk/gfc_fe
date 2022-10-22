import { Header } from "../components/searchGenre/Header.tsx";
import { GenreName } from "../components/searchGenre/GenreName.tsx";
import { Brand } from "../components/searchGenre/brand.tsx";
import { Button } from "../components/searchGenre/Button.tsx";
import { PageNation } from "../components/searchGenre/pageNation.tsx";
import { FooterSearchBox } from "../components/searchGenre/SearchBox.tsx";
import { SearchLink } from "../components/searchGenre/SearchLink.tsx";
import { Banner } from "../components/searchGenre/Banner.tsx";
import { OtherContent } from "../components/searchGenre/OtherContent.tsx";
import { SubFooter } from "../components/common/SubFooter.tsx";
import { PublicAccount } from "../components/searchGenre/PublicAccount.tsx";

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

export default function SearchGenre(props: Props) {
  const contents = [["飲食フランチャイズ.com", "トップページへ"], ["特集ページ一覧", "新着ブランド一覧"], [
    "NEWS一覧",
    "お問い合わせ",
  ]];
  return (
    <>
      <Header />
      <GenreName />
      <div class="flex mx-5 mb-5">
        <Button name="絞り込む" />
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
    </>
  );
}
