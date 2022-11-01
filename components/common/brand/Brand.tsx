import {
  BrownButton,
  SmallWhiteButton,
  WhiteButton,
} from "../button/Button.tsx";

interface Props {
  src?: string;
  rank?: number; //ランキング表示する際のランキングに使う
  brandName?: string;
  genre?: string;
  contractNum?: number; //契約数を表示したい時に使う
  status?: number; //ブランドの申請ステータスを取得したい時に使う
  brandList?: { src: string; name: string; content: string }[];
  applyingList?: { status: number; name: string; genre: string; src: string }[];
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

//申請中ブランド一覧画面のブランド表示時に使う
//todo:中身の整理まだできそう（ボタンで高さ、マージン設定ができるようになったら再度リファクタリング）
export function Brand1(props: Props) {
  const statusList = [
    { status: "申請中", button: "申請を取り消す" },
    { status: "契約可能", button: "申請を取り消す" },
    { status: "契約不可", button: "再度申請する" },
  ];

  return (
    <>
      {props.applyingList?.map((brand) => (
        <div class="border m-5 rounded">
          <div class="flex my-3 mx-4">
            <img
              src={brand.src}
              alt="ブランドロゴ"
              class="w-14 h-14 mr-4"
            />
            <div>
              <p class="text-sm mb-1">{brand.name}</p>
              <p class="text-[0.625rem] mb-1 ml-4">ジャンル：{brand.genre}</p>
              <p class="text-[0.625rem] ml-4">
                ステータス：{statusList[brand.status].status}
              </p>
            </div>
          </div>
          {brand.status == 1 ? <BrownButton name="フランチャイズ契約する" /> : null}
          <div class="h-2" />
          {brand.status == 0 || brand.status == 1
            ? (
              <SmallWhiteButton
                name={statusList[brand.status].button}
              />
            )
            : null}
          {brand.status == 2
            ? <BrownButton name={statusList[brand.status].button} />
            : null}
          <div class="h-2" />
        </div>
      ))}
    </>
  );
}
