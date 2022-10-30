// deno-lint-ignore-file
import { Component } from "preact";

// deno-lint-ignore no-explicit-any
declare var Swiper: any;

const imgs = [
  "/icon/brand/brandPhoto0",
  "/icon/brand/brandPhoto1",
  "/icon/brand/brandPhoto2",
  "/icon/brand/brandPhoto3",
  "/icon/brand/brandPhoto4",
  "/icon/brand/brandPhoto5",
];

export default class BrandPhoto extends Component {
  componentDidMount() {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      speed: 500,
      centeredSlides: true,
      spaceBetween: 1,
      slidesPerView: 1.3,
      autoplay: { //自動再生する
        delay: 5000, //次のスライドに切り替わるまでの時間
        disableOnInteraction: false, //ユーザーが操作したら止めるか
        waitForTransition: false, // アニメーションの間にスライドを止めるか
      },
    });
  }
  render() {
    return (
      <>
        <div class="relative w-full h-[19rem] mt-8 border border-[#947771]">
          <div class="swiper-container overflow-hidden">
            <div class="swiper-wrapper">
              {imgs.map((img) => <img src={img} alt="ブランドの写真" />)}
            </div>
            <div class="swiper-pagination" />
          </div>
          <div class="w-14 h-14 border border-[#947771] rounded-full flex items-center absolute bottom-2 right-2">
            <div class="flex flex-col text-center mx-auto">
              <img
                src="/icon/brand/favorite.png"
                alt="$1"
                class="w-6 h-6 my-1"
              />
              <p class="text-[0.625rem]">382</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
