import { BrandRanking } from "../components/index/BrandRanking.tsx";

export default function islands() {
  const brands = [
    { brandName: "ガスト", genre: "洋食、中華、和食", contractNum: 1000 },
    { brandName: "ガスト", genre: "洋食、中華、和食", contractNum: 900 },
    { brandName: "ガスト", genre: "洋食、中華、和食", contractNum: 800 },
    { brandName: "ガスト", genre: "洋食、中華、和食", contractNum: 700 },
    { brandName: "ガスト", genre: "洋食、中華、和食", contractNum: 600 },
  ];
  return (
    <div class="flex flex-row w-full overflow-x-auto pr-4 hidden-scrollbar">
      {brands.map((brand, i) => (
        <BrandRanking
          rank={i + 1}
          brandName={brand.brandName}
          genre={brand.genre}
          contractNum={brand.contractNum}
        />
      ))}
    </div>
  );
}
