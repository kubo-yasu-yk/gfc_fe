import { SearchBoxHeader } from "../common/header/Header.tsx";
import { ResultBrand } from "../common/brand/Brand.tsx";
import { AccodionButton, HalfWWhiteButton } from "../common/button/Button.tsx";
import { PageNation } from "../common/others/PageNation.tsx";
import { LongFooter } from "../common/footer/Footer.tsx";

interface Props {
  open: boolean;
  display: boolean;
  onClick: (e: Event) => void;
  onClickButton: (e: Event) => void;
  Accodion?: (e: Event) => void;
}

const brandList = [{
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}];

const imgs = [
  "/icon/brand-detail/brandPhoto0.png",
  "/icon/brand-detail/brandPhoto1.jpeg",
  "/icon/brand-detail/brandPhoto2.jpeg",
  "/icon/brand-detail/brandPhoto3.jpeg",
  "/icon/brand-detail/brandPhoto4.jpeg",
  "/icon/brand-detail/brandPhoto5.jpeg",
];

const sortOrders = ["おすすめ", "人気順", "新着順", "価格帯（安い）", "価格帯（高い）"];

export function SearchGenre(props: Props) {
  return (
    <div class={`${props.display || props.open ? "fixed w-full" : ""}`}>
      <SearchBoxHeader onClick={props.onClick} />
      <div class="my-5 ml-5">
        <p class="text-[0.875rem]">
          和食<span class="text-[0.625rem]">（11 - 20件 / 275件）</span>
        </p>
      </div>
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
      <ResultBrand brandList={brandList} imgs={imgs} />
      <PageNation />
      <LongFooter />
    </div>
  );
}
