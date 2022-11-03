//特集ページを出すときに使うコンポーネント
//todo:swiper以外の特集ページの格納

import { tw } from "twind";

interface Props {
  features?: { bgColor?: string; introContent?: string }[];
  banners?: string[];
  bgColor?: string;
  introContent?: string;
}

//swiper.jsに対応した特集ページ作成時に使用
export function SwiperFeature(props: Props) {
  return (
    <>
      <div
        class={`border rounded-[0.625rem] text-center bg-[${props.bgColor}] swiper-slide`}
      >
        <p class="text-[0.625rem] text-[#ffffff] m-auto leading-[10rem]">
          特集ページ
        </p>
      </div>
    </>
  );
}

//特集の横スクロールを出したい時に使う
export function ScrollFeature(props: Props) {
  return (
    <div
      class={`flex w-full overflow-x-auto pr-4 ${tw`(hidden-scrollbar)`}`}
    >
      {props.features?.map((feature) => (
        <div>
          <div class="w-[10rem] ml-5 mb-4 text-[0.625rem] ">
            <div
              class={`h-[10rem] flex items-center border rounded mb-2 text-center bg-[${feature.bgColor}]`}
            >
              <p class="text-white mx-auto">特集ページ</p>
            </div>
            <p class="my-1">
              {feature.introContent}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

//バナー広告を出す時に使う
export function Banner(props: Props) {
  return (
    <>
      {props.banners?.map(() => (
        <div class="mx-5 mt-1 h-20 border content-center flex items-center">
          <p class="mx-auto text-xs">バナー</p>
        </div>
      ))}
    </>
  );
}

//特集の横スクロールを出したい時に使う
export function ScrollFeature2(props: Props) {
  return (
    <div>
      <div class="w-[10rem] ml-4 mb-4 text-[0.625rem] ">
        <div
          class={`h-[10rem] flex items-center border rounded mb-2 text-center bg-[${props.bgColor}]`}
        >
          <p class="text-white mx-auto">特集ページ</p>
        </div>
        <p class="my-1">
          一世を風靡したタピオカミルクティーがなぜ人気なのかを解説。タピオカミルクティーの秘密からバズる秘訣を見出します。
        </p>
      </div>
    </div>
  );
}
