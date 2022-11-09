import {
  BrownButton,
  FreeBrownButton,
  H6BrownButton,
  H6WhiteButton,
  W0506BrownButton,
} from "./Button.tsx";
import { Favorite } from "../Favorite.tsx";
import { ScrollBrandPhotos } from "./scroll/Scroll.tsx";

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
    num?: number;
  }[];
  applyingList?: { status: number; name: string; genre: string; src: string }[];
  imgs?: string[];
  dastBox?: boolean; //FavTripleBrand関数で削除ボタンに切り替える時に使う
}

//人気ブランドランキングで使うブランド単体のカセット
export function FavBrand(props: Props) {
  return (
    <a href="/brand/brand-detail">
      <div class="w-64 h-20 ml-3 border rounded flex">
        <img
          src={`${props.src}`}
          alt="ブランドロゴ"
          class="h-14 w-14 m-2"
        />
        <div class="w-48 mt-2">
          <p class="text-sm">{props.brandName}</p>
          <p class="my-0.5 text-2.5">ジャンル：{props.genre}</p>
          <FreeBrownButton
            name="申請する"
            link="brand/application/confirmation"
            klass="h-6 w-11/12 text-2.5"
          />
        </div>
      </div>
    </a>
  );
}

//人気ブランドランキングで使うブランド単体のカセット（例：トップページ）
export function BrandRanking(props: Props) {
  return (
    <div class="flex w-full overflow-x-auto hidden-scrollbar">
      {props.brandList?.map((brand, i) => (
        <div class="first:ml-4 pr-4">
          <a
            href="/Brand-detail"
            class="w-64 h-20 border rounded flex"
          >
            <img
              src={`${brand.src}`}
              alt="ブランドロゴ"
              class="h-14 w-14 m-3"
            />
            <div class="mt-2">
              <div class="flex">
                <p>
                  {i + 1}
                  <span class="ml-0.5 text-2.5">位</span>
                </p>
                <p class="ml-2">{brand.name}</p>
              </div>
              <p class="mt-1 ml-4 text-2.5">ジャンル：{brand.genre}</p>
              <p class="mt-1 ml-4 text-2.5">
                契約数：{brand.num?.toLocaleString()}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

//ブランドを一覧で表示する際に使う
export function BrandList(props: Props) {
  return (
    <>
      {props.brandList?.map((brand) => (
        <div class="mx-4 mb-2">
          <a
            href="/brand/brand-detail"
            class="h-24 border rounded flex"
          >
            <img
              src={`${brand.src}`}
              alt="ブランドロゴ"
              class="h-16 w-16 my-4 ml-4"
            />
            <div class="mx-4 my-4">
              <p class="text-sm mb-0.5">{brand.name}</p>
              <p class="text-2.5">
                {brand.content}
              </p>
            </div>
          </a>
        </div>
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
            link="/Brand-detail"
            arrow="right"
          />
          <div class="h-5" />
        </div>
      ))}
    </div>
  );
}

//閲覧履歴で3列ブランドを表示する場合に使う
export function TripleBrand(props: Props) {
  return (
    <>
      <div class="flex text-[0.625rem] ">
        {props.brandList?.map((brand) => (
          <a
            href="/Brand-detail"
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
                src="/icon/common/four-icons/favorite-brown.png"
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

//お気に入り画面で3列ブランドを表示する場合に使う
export function FavTripleBrand(props: Props) {
  return (
    <>
      <div class="flex text-[0.625rem] ">
        {props.brandList?.map((brand) => (
          <a
            href="/Brand-detail"
            class="w-1/3 border-b border-r last:border-r-0 flex flex-col content-center"
          >
            <img
              src={`${brand.src}`}
              alt="ブランドロゴ"
              class="w-5/6 mx-auto mt-2 mb-3"
            />
            <p class="text-sm ml-2 mb-1">{brand.name}</p>
            <p class="ml-2">{brand.genre}</p>
            {props.dastBox
              ? (
                <img
                  src="/icon/common/delete/delete.png"
                  alt="削除アイコン"
                  class="mx-auto my-3 w-6 h-6"
                />
              )
              : (
                <div class="flex items-center justify-center my-3">
                  <W0506BrownButton
                    name="申請する"
                    link="/brand/application/confirmation"
                  />
                </div>
              )}
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
          <a href="/Brand-detail" class="flex my-3 mx-4">
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
          {brand.status == 1
            ? (
              <BrownButton
                name="フランチャイズ契約する"
                link="/brand/contract/confirmation"
              />
            )
            : null}
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
