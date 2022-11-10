//ブランド詳細のブランド画像に関するコンポーネント
//todo:swiperの部分をコンポーネント化する
import { FavoriteNum } from "../../components/common/Favorite.tsx";
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
        <div class="relative h-72 mt-8 border flex items-center">
          <div class="h-64 overflow-hidden swiper-container">
            <div class="h-full swiper-wrapper">
              {imgs.map((img) => (
                <img
                  src={img}
                  alt="ブランドの写真"
                  class="object-contain swiper-slide"
                />
              ))}
            </div>
            <div class="swiper-button-prev" />
            <div class="swiper-button-next" />
          </div>
          <FavoriteNum num={358} />
        </div>
      </>
    );
  }
}
