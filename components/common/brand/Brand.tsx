import {
  BrownButton,
  H6BrownButton,
  H6WhiteButton,
} from "../button/Button.tsx";
import { Favorite } from "../favorite/Favorite.tsx";
import { ScrollBrandPhotos } from "../scroll/Scroll.tsx";

interface Props {
  src?: string;
  rank?: number; //ランキング表示する際のランキングに使う
  brandName?: string;
  genre?: string;
  contractNum?: number; //契約数を表示したい時に使う
  status?: number; //ブランドの申請ステータスを取得したい時に使う
  brandList?: {
    src?: string;
    name?: string;
    genre?: string;
    price?: string;
    content?: string;
  }[];
  applyingList?: { status: number; name: string; genre: string; src: string }[];
  imgs?: string[];
}

//人気ブランドランキングで使うブランド単体のカセット
export function RankingBrand(props: Props) {
  return (
    <div>
      <div class="w-[16.5rem] h-20 ml-4 border rounded flex">
        <img
          src={`${props.src}`}
          alt="ブランドロゴ"
          class="h-14 w-14 my-3 mx-2"
        />
        <div class="mt-2">
          <div class="flex">
            <p>
              {props.rank}
              <span class="text-[0.625rem]">位</span>
            </p>
            <p class="ml-2">{props.brandName}</p>
          </div>
          <p class="text-[0.625rem] mt-1 ml-4">ジャンル：{props.genre}</p>
          <p class="text-[0.625rem] mt-1 ml-4">
            契約数：{props.contractNum?.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

//ブランドを一覧で表示する際に使う
export function BrandList(props: Props) {
  return (
    <>
      {props.brandList?.map((brand) => (
        <a
          href="/brand/brand-detail"
          class="h-[6.25rem] mx-4 border rounded mb-3 last:mb-6 flex"
        >
          <img
            src={`${brand.src}`}
            alt="ブランドロゴ"
            class="h-[3.75rem] w-[3.75rem] my-5 ml-3 mr-1"
          />
          <div class="mx-3 my-3.5">
            <p class="text-sm mb-1">{brand.name}</p>
            <p class="text-[0.625rem]">
              {brand.content}
            </p>
          </div>
        </a>
      ))}
    </>
  );
}

//ジャンル検索・FW検索結果一覧画面のブランド表示時に使用する
export function ResultBrand(props: Props) {
  return (
    <div>
      {props.brandList?.map((list) => (
        <div class="first:border-t border-b">
          <div class="mx-5 pt-3 flex">
            <div class="flex-1 text-[0.625rem]">
              <p class="text-[0.875rem]">{list.name}</p>
              <p class="my-1">ジャンル : {list.genre}</p>
              <p>価格帯 : {list.price}</p>
            </div>
            <Favorite />
          </div>
          <ScrollBrandPhotos imgs={props.imgs} />
          <BrownButton
            name="ブランド詳細ページへ"
            link="/brand/brand-detail"
            arrow="right"
          />
          <div class="h-5" />
        </div>
      ))}
    </div>
  );
}

//閲覧履歴など横に3列ブランドを表示する場合に使う
export function TripleBrand(props: Props) {
  return (
    <>
      <div class="flex text-[0.625rem] ">
        {props.brandList?.map((brand) => (
          <a
            href="/brand/brand-detail"
            class="w-1/3 border-b border-r last:border-r-0"
          >
            <img
              src={`${brand.src}`}
              alt="ブランドロゴ"
              class="w-5/6 mx-auto mt-2 mb-3"
            />
            <p class="text-sm ml-2 mb-1">{brand.name}</p>
            <p class="ml-2">{brand.genre}</p>
            <div class="flex items-center justify-center my-3">
              <H6BrownButton
                name="申請する"
                link="/brand/application/confirmation"
              />
              <img
                src="/icon/favorite-brown.png"
                alt="お気に入りボタン"
                class="w-4 h-4 ml-2"
              />
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

//申請中ブランド・申請履歴ブランド一覧画面のブランド表示時に使う
//todo:中身の整理まだできそう（ボタンで高さ、マージン設定ができるようになったら再度リファクタリング）
export function ApplyBrand(props: Props) {
  const statusList = [
    { status: "申請中", button: "申請を取り消す" },
    { status: "契約可能", button: "申請を取り消す" },
    { status: "契約不可", button: "再度申請する" },
    { status: "契約中", button: "解約する" },
    { status: "解約済み", button: "再度申請する" },
  ];

  return (
    <>
      {props.applyingList?.map((brand) => (
        <div class="border m-5 rounded">
          <a href="/brand/brand-detail" class="flex my-3 mx-4">
            <img
              src={brand.src}
              alt="ブランドロゴ"
              class="w-14 h-14 mr-4"
            />
            <div class="text-[0.625rem]">
              <p class="text-sm">{brand.name}</p>
              <p class="my-1 ml-4">ジャンル：{brand.genre}</p>
              <p class="ml-4">
                ステータス：{statusList[brand.status].status}
              </p>
            </div>
          </a>
          {brand.status == 1 ? <BrownButton name="フランチャイズ契約する" /> : null}
          <div class="h-2" />
          {brand.status == 0 || brand.status == 1 || brand.status == 3
            ? (
              <H6WhiteButton
                name={statusList[brand.status].button}
                link={brand.status == 0 || brand.status == 1
                  ? "/brand/cancel/confirmation"
                  : "/brand/cancel-contract/confirmation"}
              />
            )
            : null}
          {brand.status == 2 || brand.status == 4
            ? (
              <BrownButton
                name={statusList[brand.status].button}
                link="/brand/application/confirmation"
              />
            )
            : null}
          <div class="h-2" />
        </div>
      ))}
    </>
  );
}
