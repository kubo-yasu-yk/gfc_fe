//swiper.jsを使用した特集ページを出すときに使うislands

import { Component } from "preact";
import { SwiperFeature } from "../components/common/feature/Feature.tsx";

// deno-lint-ignore no-var no-explicit-any
declare var Swiper: any;

const features = [
  <SwiperFeature bgColor="red" />,
  <SwiperFeature bgColor="blue" />,
  <SwiperFeature bgColor="black" />,
  <SwiperFeature bgColor="orange" />,
  <SwiperFeature bgColor="green" />,
  <SwiperFeature bgColor="pink" />,
  <SwiperFeature bgColor="skyblue" />,
  <SwiperFeature bgColor="gray" />,
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
            {features.map((feature, i) => feature)}
          </div>
          <div class="swiper-pagination" />
        </div>
      </>
    );
  }
}
