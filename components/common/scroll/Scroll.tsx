import { FavBrand } from "../Brand.tsx";
import { tw } from "twind";

interface Props {
  imgs?: string[];
  brandList?: { name: string; genre: string; src: string }[];
}

//ブランドの写真をスクロール表示させたい時に使用
export function ScrollBrandPhotos(props: Props) {
  return (
    <div class={`flex w-full overflow-x-auto ${tw`(hidden-scrollbar)`}`}>
      <div class="m-3 flex">
        {props.imgs?.map((img) => (
          <div class="w-[6rem] h-[6rem] mr-2 last:mr-0 border flex items-center">
            <img
              src={img}
              class="w-full mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

//お気に入りブランドをスクロール表示させたい時に使用
export function ScrollFavBrand(props: Props) {
  return (
    <div class={`flex w-full overflow-x-auto ${tw`(hidden-scrollbar)`}`}>
      <div class="mr-2 flex">
        {props.brandList?.map((brand) => (
          <FavBrand
            src={brand.src}
            brandName={brand.name}
            genre={brand.genre}
          />
        ))}
      </div>
    </div>
  );
}
