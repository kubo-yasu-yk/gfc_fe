interface Props {
  src?: string;
  rank?: number;
  brandName?: string;
  genre?: string;
  contractNum?: number;
  brandList?: { src: string; name: string; content: string }[];
  //todo:contractNumとbrandListに?をつけるとコンパイルエラーが出るが、フロントは動いているのがなぜかを聞く
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
          <div class="flex flex-row">
            <p>
              {props.rank}
              <span class="text-[0.625rem]">位</span>
            </p>
            <p class="ml-2">{props.brandName}</p>
          </div>
          <p class="text-[0.625rem] mt-1 ml-4">ジャンル：{props.genre}</p>
          <p class="text-[0.625rem] mt-1 ml-4">
            契約数：{props.contractNum.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

//ブランドを一覧で表示する際に使う
export function BrandList(props: Props) {
  const BrandList = [{
    src: "/icon/brandLogo.png",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここ",
  }, {
    src: "/icon/brandLogo.png",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここガストの説明はここ",
  }, {
    src: "/icon/brandLogo.png",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここ",
  }];

  return (
    <>
      {props.brandList.map((brand) => (
        <div class="h-[6.25rem] mx-4 border rounded mb-3 last:mb-6 flex flex-row">
          <img
            src={`${brand.src}`}
            alt="ブランドロゴ"
            class="h-[3.75rem] w-[3.75rem] my-5 ml-3 mr-1"
          />
          <div class="mx-3 my-3.5">
            <p class="text-[14px] font-semibold mb-1">{brand.name}</p>
            <p class="text-[0.625rem]">
              {brand.content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
