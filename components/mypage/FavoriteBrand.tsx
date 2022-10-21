import { Button } from "./Button.tsx";

interface Props {
  src: string;
  brandName: string;
  genre: string;
}

export function FavoriteBrand(props: Props) {
  return (
    <div>
      <div class="w-[16.5rem] h-24 ml-4 px-4 border rounded-[5px] flex items-center">
        <img
          src={`${props.src}`}
          alt="ブランドロゴ"
          class="h-12 w-12 my-4 mx-3"
        />
        <div class="flex flex-col ml-2 w-full">
          <p class="font-semibold text-[14px] text-[#5F5F5F]">{props.brandName}</p>

          <p class="font-semibold text-[10px] text-[#5F5F5F]">ジャンル：{props.genre}</p>

          <Button />
        </div>
      </div>
    </div>
  );
}
