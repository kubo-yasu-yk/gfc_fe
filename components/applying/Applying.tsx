import { Header } from "./Header.tsx";
import { Title } from "./Title.tsx";
import { SearchBox } from "./SearchBox.tsx";
import { RadioButton } from "./RadioButton.tsx";
import { Leading } from "./Leading.tsx";
import { WhiteButton } from "./Button.tsx";
import { Brand } from "./Brand.tsx";
import { Footer } from "../common/footer/Footer.tsx";

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

//todo:mapでbrandを回す
export function Applying(props: Props) {
  return (
    <div
      class={`${props.open ? "fixed w-full" : ""}`}
    >
      <Header onClick={props.onClick} />
      <Title title="申請中ブランド一覧" />
      <SearchBox />
      <div class="flex items-center">
        <RadioButton name="status" label="すべて" checked />
        <RadioButton name="status" label="申請中" />
        <RadioButton name="status" label="契約可能" />
      </div>
      <Leading title="2022年10月25日" />
      <Brand
        status={0}
        brandName="マクドナルド"
        genre="ファーストフード"
        src="/icon/browsingHistory/mac.png"
      />
      <Brand
        status={1}
        brandName="マクドナルド"
        genre="ファーストフード"
        src="/icon/browsingHistory/mac.png"
      />
      <Brand
        status={2}
        brandName="マクドナルド"
        genre="ファーストフード"
        src="/icon/browsingHistory/mac.png"
      />

      <Leading title="2022年10月25日" />
      <Brand
        status={0}
        brandName="マクドナルド"
        genre="ファーストフード"
        src="/icon/browsingHistory/mac.png"
      />
      <Brand
        status={1}
        brandName="マクドナルド"
        genre="ファーストフード"
        src="/icon/browsingHistory/mac.png"
      />
      <Brand
        status={2}
        brandName="マクドナルド"
        genre="ファーストフード"
        src="/icon/browsingHistory/mac.png"
      />

      <WhiteButton contents="申請中のブランドをもっと見る" />
      <Footer />
    </div>
  );
}
