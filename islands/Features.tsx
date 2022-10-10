import { Feature1, Feature2 } from "../components/index/Feature.tsx";
import { useEffect, useRef, useState } from "preact/hooks";

export default function islands() {
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
  return (
    <div class="flex flex-row w-full overflow-x-auto pr-4 hidden-scrollbar"// ref={div}
    >
      <Feature1 bgColor="red" />
      <Feature1 bgColor="blue" />
      <Feature1 bgColor="black" />
      <Feature1 bgColor="yellow" />
      <Feature1 bgColor="green" />
      <Feature1 bgColor="pink" />
    </div>
  );
}
