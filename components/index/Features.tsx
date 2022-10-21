import { Feature1 } from "./Feature.tsx";
import { debounce } from "https://deno.land/std@0.159.0/async/mod.ts";
import { Component, createRef, render } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

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
const w = 16 * 19;

interface State {
  featureNumber: number;
}

// deno-lint-ignore ban-types
export class Features extends Component<{}, State> {
  div = createRef();
  t = 0;

  constructor(state: State) {
    super(state);
    this.state = {
      featureNumber: 0,
    };
  }

  setClass = (i: number) =>
    "w-[0.625rem] h-[0.625rem] rounded-xl " +
    (this.state.featureNumber == i ? "bg-[#947771]" : "bg-[#E6E6E6]");

  startScrool = () => {
    this.t = setInterval(() => {
      this.div.current.scroll({
        left: (this.state.featureNumber + 1) * w,
        behavior: "smooth",
      });
      if (this.state.featureNumber < 8) {
        this.setState({ featureNumber: this.state.featureNumber + 1 });
      } else {
        this.setState({ featureNumber: 0 });
        this.div.current!.scrollLeft = 0;
      }
    }, 3000);
    console.log("startScrool", this.t);
  };

  clearInterval = () => {
    console.log("clearInterval", this.t);
    clearInterval(this.t);
  };

  componentDidMount() {
    this.div.current!.scrollLeft;
    this.startScrool();
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  onPointerEnter = (e: PointerEvent) => {
    console.log(e.type);
    this.clearInterval();
  };

  onPointerLeave = (e: PointerEvent) => {
    console.log(e.type);
    this.startScrool();
  };

  onScroll = (e: Event) => {
    const n = Math.floor(this.div.current.scrollLeft / w);
    this.setState({ featureNumber: n % 8 });
    this.div.current?.scroll({ left: n * w, behavior: "smooth" });
    console.log("onScroll", n % 8);
    console.log("this.div.current!.scrollLeft", this.div.current!.scrollLeft);
  };

  render() {
    const marginWidth = IS_BROWSER ? (window.screen.width - w) / 2 : 375;

    return (
      <>
        <div>
          <div
            class="flex overflow-auto w-screen hidden-scrollbar"
            ref={this.div}
            onScroll={debounce(this.onScroll, 1000)}
            onPointerEnter={this.onPointerEnter}
            onPointerLeave={this.onPointerLeave}
          >
            <div class={`flex flex-row mx-[${marginWidth}px]`}>
              {features.map((feature, i) => feature)}
              {features.map((feature, i) => feature)}
            </div>
          </div>
        </div>

        <div class="w-[11rem] flex justify-around mt-4 mx-auto">
          {features.map((_, i) => (
            <div
              class={this.setClass(i)}
              onClick={() => {
                this.div.current.scroll({
                  left: w * i,
                  behavior: "smooth",
                });
                this.setState({ featureNumber: i });
              }}
            />
          ))}
        </div>
      </>
    );
  }
}
