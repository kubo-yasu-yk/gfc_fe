import { Component } from "preact";

// deno-lint-ignore no-var no-explicit-any
declare var Swiper: any;

const imgs = [
  "/icon/brand/brandPhoto0.png",
  "/icon/brand/brandPhoto1.jpeg",
  "/icon/brand/brandPhoto2.jpeg",
  "/icon/brand/brandPhoto3.jpeg",
  "/icon/brand/brandPhoto4.jpeg",
  "/icon/brand/brandPhoto5.jpeg",
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
        <div class="relative h-[19rem] mt-8 border border-[#947771] flex items-center">
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
            <img src="/icon/brand/leftArrow.png" class="swiper-button-prev" />
            <img src="/icon/brand/rightArrow.png" class="swiper-button-next" />
          </div>
          <div class="w-14 h-14 border border-[#947771] rounded-full flex items-center absolute bottom-2 right-2 z-50 bg-white">
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
