import { FavoriteBrand } from "../components/mypage/FavoriteBrand.tsx";

export default function islands() {
  const brands = [
    {
      src: "/icon/brandLogo.png",
      brandName: "ガスト",
      genre: "洋食、中華、和食",
    },
    {
      src: "/icon/brandLogo.png",
      brandName: "ガスト",
      genre: "洋食、中華、和食",
    },
    {
      src: "/icon/brandLogo.png",
      brandName: "ガスト",
      genre: "洋食、中華、和食",
    },
    {
      src: "/icon/brandLogo.png",
      brandName: "ガスト",
      genre: "洋食、中華、和食",
    },
    {
      src: "/icon/brandLogo.png",
      brandName: "ガスト",
      genre: "洋食、中華、和食",
    },
  ];
  return (
    <div class="flex flex-row w-full overflow-x-auto pr-4 hidden-scrollbar">
      {brands.map((brand, i) => (
        <FavoriteBrand
          src={brand.src}
          brandName={brand.brandName}
          genre={brand.genre}
        />
      ))}
    </div>
  );
}
