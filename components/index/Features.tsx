import { Feature1 } from "./Feature.tsx";
import { useEffect, useRef, useState } from "preact/hooks";

export function Features() {
  // const div = useRef<HTMLDivElement>(null);
  // const [left, setLeft] = useState(3);
  // useEffect(() => {}, [left]);
  // setInterval(() => {
  //   if (div.current) {
  //     console.log(div.current.scrollLeft);
  //     div.current.scroll({ left: left * 19 * 16, behavior: "smooth" });
  //     if (left == 5) {
  //       setLeft(0);
  //     } else {
  //       setLeft(left + 1);
  //     }
  //   }
  // }, 1000);
  const [featureNumber, setFeatureNumber] = useState(0);
  const number = [0, 1, 2, 3, 4, 5, 6, 7];
  const setClass = (i: number) =>
    "w-[0.625rem] h-[0.625rem] rounded-xl" +
    (featureNumber == i ? " bg-[#947771]" : " bg-[#E6E6E6]");
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
  return (
    <>
      <div>
        <div class="flex overflow-hidden w-screen">
          <div class="flex flex-row justify-between hidden-scrollbar scroll-left">
            {/* {features[featureNumber]} */}
            <Feature1 bgColor="red" />
            <Feature1 bgColor="blue" />
            <Feature1 bgColor="black" />
            <Feature1 bgColor="orange" />
            <Feature1 bgColor="green" />
            <Feature1 bgColor="pink" />
            <Feature1 bgColor="skyblue" />
            <Feature1 bgColor="gray" />
          </div>
          <div class="flex flex-row justify-between hidden-scrollbar scroll-left">
            {/* {features[featureNumber]} */}
            <Feature1 bgColor="red" />
            <Feature1 bgColor="blue" />
            <Feature1 bgColor="black" />
            <Feature1 bgColor="orange" />
            <Feature1 bgColor="green" />
            <Feature1 bgColor="pink" />
            <Feature1 bgColor="skyblue" />
            <Feature1 bgColor="gray" />
          </div>
        </div>
      </div>

      <div class="w-[11rem] flex justify-around mt-4 mx-auto">
        {
          /* {number.map((_, i) => (
          <div
            class={setClass(i)}
            onClick={() => {
              setFeatureNumber(i);
            }}
          />
        ))} */
        }
      </div>
    </>
  );
}
