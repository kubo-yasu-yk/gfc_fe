interface Props {
  rank: number;
  brandName: string;
  genre: string;
  contractNum: number;
}

export function BrandRanking(props: Props) {
  return (
    <div>
      <div class="w-[16.5rem] h-20 ml-4 border rounded-[5px] flex">
        <img
          src="/icon/brandLogo.png"
          alt="ブランドロゴ"
          class="h-12 w-12 my-4 mx-3"
        />
        <div class="mt-2">
          <div class="flex flex-row">
            <p class="text-[1rem]">
              {props.rank}
              <span class="text-[0.625rem]">位</span>
            </p>
            <p class="ml-2">{props.brandName}</p>
          </div>
          <p class="text-[0.625rem] mt-1 ml-4">ジャンル：{props.genre}</p>
          <p class="text-[0.625rem] mt-1 ml-16">
            契約数：{props.contractNum.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
