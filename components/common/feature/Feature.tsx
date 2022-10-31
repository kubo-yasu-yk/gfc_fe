//特集ページを出すときに使うコンポーネント
//todo:swiper以外の特集ページの格納

interface Props {
  bgColor: string;
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

export function Feature2(props: Props) {
  return (
    <div>
      <div class="w-[10rem] ml-4 mb-4">
        <div
          class={`h-[10rem] border rounded-[5px] mb-2 text-center bg-[${props.bgColor}]`}
        >
          <p class="text-[0.625rem] text-[#ffffff] leading-[10rem]">特集ページ</p>
        </div>
        <p class="text-[0.625rem] m-1">
          一世を風靡したタピオカミルクティーがなぜ人気なのかを解説。タピオカミルクティーの秘密からバズる秘訣を見出します。
        </p>
      </div>
    </div>
  );
}
