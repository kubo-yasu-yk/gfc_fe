//人気ブランドランキングを出すときに使うコンポーネント

import { tw } from "twind";
import { RankingBrand } from "./Brand.tsx";

export function Ranking() {
  const brands = [
    {
      src: "/icon/brandLogo.png",
      brandName: "ガスト",
      genre: "洋食、中華、和食",
      contractNum: 1000,
    },
    {
      src: "/icon/brandLogo.png",
      brandName: "ガスト",
      genre: "洋食、中華、和食",
      contractNum: 900,
    },
    {
      src: "/icon/brandLogo.png",
      brandName: "ガスト",
      genre: "洋食、中華、和食",
      contractNum: 800,
    },
    {
      src: "/icon/brandLogo.png",
      brandName: "ガスト",
      genre: "洋食、中華、和食",
      contractNum: 700,
    },
    {
      src: "/icon/brandLogo.png",
      brandName: "ガスト",
      genre: "洋食、中華、和食",
      contractNum: 600,
    },
  ];
  return (
    <div class={`flex w-full overflow-x-auto pr-4 ${tw`(hidden-scrollbar)`}`}>
      {brands.map((brand, i) => (
        <RankingBrand
          src={brand.src}
          rank={i + 1}
          brandName={brand.brandName}
          genre={brand.genre}
          contractNum={brand.contractNum}
        />
      ))}
    </div>
  );
}
