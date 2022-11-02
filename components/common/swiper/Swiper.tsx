// import { Component } from "preact";

// // deno-lint-ignore no-var no-explicit-any
// declare var Swiper: any;

// interface Props {
//   imgs: string[];
// }

// export default class BrandPhoto extends Component {
//   constructor(props: Props) {
//     super(props);
//     this.state = { imgs:[] };
//   }

//   componentDidMount() {
//     const swiper = new Swiper(".swiper-container", {
//       loop: true,
//       speed: 500,
//       centeredSlides: true,
//       autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//         waitForTransition: false,
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });
//   }

//   render() {
//     return (
//       <div class="h-[17rem] swiper-container overflow-hidden">
//         <div class="swiper-wrapper h-full">
//           {this.state.imgs.map((img) => (
//             <img
//               src={img}
//               alt="写真"
//               class="object-contain swiper-slide"
//             />
//           ))}
//         </div>
//         <img
//           src="/icon/brand-detail/leftArrow.png"
//           class="swiper-button-prev"
//         />
//         <img
//           src="/icon/brand-detail/rightArrow.png"
//           class="swiper-button-next"
//         />
//       </div>
//     );
//   }
// }
