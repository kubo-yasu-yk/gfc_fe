import { Header } from "./Header.tsx";
import { Title } from "./Title.tsx";
import { SearchBox } from "./SearchBox.tsx";
import { ResultNumber } from "./ResultNumber.tsx";
import { ContractBrand } from "./ContractBrand.tsx";
import { PageNation } from "./PageNation.tsx";
import { Button } from "./Button.tsx";
import { SubFooter } from "../common/SubFooter.tsx";

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

export function UnderContract(props: Props) {
  return (
    <div
      class={`${props.open ? "fixed w-full" : ""}`}
    >
      <Header onClick={props.onClick} />
      <Title title="契約中ブランド一覧" />
      <SearchBox />
      <ResultNumber />
      <ContractBrand />
      <PageNation />
      <Button contents="もっとブランドを探す" />
      <SubFooter />
    </div>
  );
}
