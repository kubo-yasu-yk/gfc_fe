import { Component } from "preact";
import { Feature1 } from "../components/index/Feature.tsx";

// deno-lint-ignore no-var no-explicit-any
declare var Swiper: any;

const features = [
  <Feature1 bgColor="red" />,
  <Feature1 bgColor="blue" />,
  <Feature1 bgColor="black" />,
  <Feature1 bgColor="orange" />,
  <Feature1 bgColor="green" />,
  <Feature1 bgColor="pink" />,
  <Feature1 bgColor="skyblue" />,
  <Feature1 bgColor="gray" />,
];

export default class SlideFeatures extends Component {
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

      // ページネーションが必要なら追加
      pagination: {
        el: ".swiper-pagination",
        clickable: true, //クリック可能にするか
        type: "bullets",
      },
    });
  }

  render() {
    return (
      <>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            {features.map((feature, i) => feature)}
          </div>
          <div class="swiper-pagination" />
        </div>
      </>
    );
  }
}
