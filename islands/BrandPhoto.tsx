//todo:swiperの部分をコンポーネント化する,下のやつがエラーになる
// import { FavoriteNum } from "../components/common/favorite/Favorite.tsx";

import { Component } from "preact";

// deno-lint-ignore no-var no-explicit-any
declare var Swiper: any;

const imgs = [
  "/icon/brand-detail/brandPhoto0.png",
  "/icon/brand-detail/brandPhoto1.jpeg",
  "/icon/brand-detail/brandPhoto2.jpeg",
  "/icon/brand-detail/brandPhoto3.jpeg",
  "/icon/brand-detail/brandPhoto4.jpeg",
  "/icon/brand-detail/brandPhoto5.jpeg",
];

export default class BrandPhoto extends Component {
  componentDidMount() {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      speed: 500,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        waitForTransition: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  render() {
    return (
      <>
        <div class="relative h-[19rem] mt-8 border flex items-center">
          <div class="h-[17rem] swiper-container overflow-hidden">
            <div class="swiper-wrapper h-full">
              {imgs.map((img) => (
                <img
                  src={img}
                  alt="ブランドの写真"
                  class="object-contain swiper-slide"
                />
              ))}
            </div>
            <img
              src="/icon/brand-detail/leftArrow.png"
              class="swiper-button-prev"
            />
            <img
              src="/icon/brand-detail/rightArrow.png"
              class="swiper-button-next"
            />
          </div>
          {/* <FavoriteNum num={358} /> */}
          <div class="w-14 h-14 border border-[#947771] rounded-full flex items-center absolute bottom-2 right-2 z-50 bg-white">
            <div class="flex flex-col text-center mx-auto">
              <img
                src="/icon/common/favorite/pink-heart.png"
                alt="お気に入り"
                class="w-6 h-6 my-1"
              />
              <p class="text-[0.625rem]">358</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
