interface Props {
  name: string;
  link?: string;
  arrow?: "left" | "right"; //矢印を出したいときに使う
}

//茶色枠・白色背景のボタン
export function WhiteButton(props: Props) {
  return (
    <a
      href={props.link}
      class="h-10 w-[18rem] mx-auto flex items-center bg-[#ffffff] border border-[#947771] rounded
            text-center text-[#947771] text-xs"
    >
      {props.arrow == "left"
        ? (
          <img
            src="/icon/common/arrow/brownLeft.png"
            alt="茶色の左矢印"
            class="h-3 w-3 ml-3"
          />
        )
        : null}
      {props.arrow == "right" ? <div class="w-6" /> : null}
      <p class="flex-1">{props.name}</p>
      {props.arrow == "right"
        ? (
          <img
            src="/icon/common/arrow/brownRight.png"
            alt="茶色の右矢印"
            class="h-3 w-3 mr-3"
          />
        )
        : null}
      {props.arrow == "left" ? <div class="w-6" /> : null}
    </a>
  );
}

//茶色背景のボタン（横幅18rem）
export function BrownButton(props: Props) {
  return (
    <a
      href={props.link}
      class="h-10 w-[18rem] mx-auto flex items-center bg-[#947771] rounded
            text-center text-white text-xs"
    >
      {props.arrow == "left"
        ? (
          <img
            src="/icon/common/arrow/whiteLeft.png"
            alt="茶色の左矢印"
            class="h-3 w-3 ml-3"
          />
        )
        : null}
      {props.arrow == "right" ? <div class="w-6" /> : null}
      <p class="flex-1">{props.name}</p>
      {props.arrow == "right"
        ? (
          <img
            src="/icon/common/arrow/whiteRight.png"
            alt="白色の右矢印"
            class="h-3 w-3 mr-3"
          />
        )
        : null}
      {props.arrow == "left" ? <div class="w-6" /> : null}
    </a>
  );
}

//茶色背景ボタン（横幅6rem）
export function SmallBrownButton(props: Props) {
  return (
    <button class="h-10 w-[6rem] text-white rounded bg-brown">
      {props.name}
    </button>
  );
}

//灰色背景のボタン（disabledボタン）
export function GrayButton(props: Props) {
  return (
    <a
      href={props.link}
      class="h-10 w-[18rem] mx-auto flex items-center bg-[#EBEBEB] rounded
            text-center text-white text-xs"
    >
      {props.arrow == "left"
        ? (
          <img
            src="/icon/common/arrow/whiteLeft.png"
            alt="茶色の左矢印"
            class="h-3 w-3 ml-3"
          />
        )
        : null}
      {props.arrow == "right" ? <div class="w-6" /> : null}
      <p class="flex-1">{props.name}</p>
      {props.arrow == "right"
        ? (
          <img
            src="/icon/common/arrow/whiteRight.png"
            alt="白色の右矢印"
            class="h-3 w-3 mr-3"
          />
        )
        : null}
      {props.arrow == "left" ? <div class="w-6" /> : null}
    </a>
  );
}
