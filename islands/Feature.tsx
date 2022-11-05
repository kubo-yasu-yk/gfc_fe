//swiper.jsを使用した特集ページを出すときに使うislands

import { Component } from "preact";
import { SwiperFeature } from "../components/common/Feature.tsx";

// deno-lint-ignore no-var no-explicit-any
declare var Swiper: any;

const featureList = [
  { src: "/banner/top/main1.jpeg" },
  { src: "/banner/top/main2.jpeg" },
  { src: "/banner/top/main3.jpeg" },
  { src: "/banner/top/main4.jpeg" },
  { src: "/banner/top/main5.jpeg" },
  { src: "/banner/top/main6.jpeg" },
  { src: "/banner/top/main7.jpeg" },
  { src: "/banner/top/main8.jpeg" },
];

export default class SlideFeatures extends Component {
  componentDidMount() {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      speed: 500,
      centeredSlides: true,
      spaceBetween: 1,
      slidesPerView: 1.3,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        waitForTransition: false,
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
      },
    });
  }

  render() {
    return (
      <>
        <div class="swiper-container overflow-hidden">
          <div class="swiper-wrapper">
            <SwiperFeature featureList={featureList} />
          </div>
          <div class="swiper-pagination" />
        </div>
      </>
    );
  }
}
