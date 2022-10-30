import { tw } from "twind";
import { Tab } from "./Tab.tsx";

interface Props {
  company: string;
  brandName: string;
}

export function BrandInfo(props: Props) {
  const BrandInfo = [
    { name: "ジャンル", content: "和食、洋食、中華" },
    { name: "価格帯", content: "500円 〜 1,500円" },
    { name: "対応エリア", content: "全国" },
    { name: "取扱商品", content: "のり弁当、唐揚げ弁当など" },
    {
      name: "プロフィール",
      content: "和食から洋食まで幅広いお弁当を取り扱っています。お弁当キットがあるので、そちらをレンジで温めるとすぐに配達が可能です。",
    },
  ];
  return (
    <>
      <div class="mt-3 mb-10">
        <div class="mx-4 flex items-center">
          <img src="/icon/brand/at.png" alt="会社情報アイコン" class="h-4 w-4 mr-1" />
          <p class="text-[0.625rem] text-[#D6D6D6]">{props.company}</p>
        </div>
        <p class="text-sm ml-4 my-3">{props.brandName}</p>
        <Tab />
        {BrandInfo.map((brand) => (
          <div class="text-[0.625rem] flex border-b mt-4 first:mt-0 mx-8 pb-2 pl-4">
            <p class={`w-20 ${tw`(shrink)`}`}>{brand.name}</p>
            <p>{brand.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}
