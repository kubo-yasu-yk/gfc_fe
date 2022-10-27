import { BrandPhotos } from "./BrandPhotos.tsx";

interface Props {
  borderButtom?: boolean;
}

export function Brand(props: Props) {
  const color = ["red", "blue", "black", "brown"];
  return (
    <div
      class={`border-t border-[#947771] ${
        props.borderButtom ? "border-b" : ""
      }`}
    >
      <div class="mx-5 pt-3 flex">
        <div class="flex-1">
          <p class="text-[0.875rem]">オリジン弁当</p>
          <p class="text-[0.625rem] my-1">ジャンル：和食、洋食、中華</p>
          <p class="text-[0.625rem]">価格帯：500円 〜 2,000円</p>
        </div>
        <div class="w-10 h-10 rounded-[2.5rem] border border-[#947771] p-[0.625rem]">
          <img
            src="./icon/favorite-brown.png"
            alt="お気に入りアイコン"
          />
        </div>
      </div>
      <BrandPhotos />

      <div class="flex justify-center mb-5">
        <button class="bg-[#947771] h-12 w-[18rem] text-xs text-white rounded-[5px] items-center">
          ブランド詳細ページへ
        </button>
      </div>
    </div>
  );
}
