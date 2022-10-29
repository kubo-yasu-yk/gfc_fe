import { Header } from "./Header.tsx";
import { Title } from "./Title.tsx";
import { SearchBox } from "./SearchBox.tsx";
import { ResultNumber } from "./ResultNumber.tsx";
import { VisitedBrand } from "./VisitedBrand.tsx";
import { PageNation } from "./PageNation.tsx";
import { Button } from "./Button.tsx";
import { SubFooter } from "../common/SubFooter.tsx";

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

export function BrowsingHistory(props: Props) {
  return (
    <div
      class={`${props.open ? "fixed w-full" : ""}`}
    >
      <Header onClick={props.onClick} />
      <Title title="閲覧履歴" />
      <SearchBox />
      <ResultNumber />
      <div class="border border-t">
        <VisitedBrand />
        <VisitedBrand />
        <VisitedBrand />
        <VisitedBrand />
        <VisitedBrand />
      </div>
      <PageNation />
      <Button contents="もっとブランドを探す" />
      <SubFooter />
    </div>
  );
}
