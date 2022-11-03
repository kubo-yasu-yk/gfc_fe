//todo:buttonの高さやマージンの設定ができるようにする

import { useState } from "preact/hooks";

interface Props {
  name?: string;
  link?: string;
  arrow?: "left" | "right"; //矢印を出したいときに使う
  list?: string[];
  buttonList?: {
    name: string;
    label: string;
    checked?: boolean; //デフォルトで選択させたいときに使用する
    onClick?: () => void; //関数を与えたいときに使用する
  }[];
  onClickButton?: (e: Event) => void;
  Accodion?: (e: Event) => void;
}

//丸い茶色枠・白色背景のボタン（w-1/3）
export function RoundedWhiteButton(props: Props) {
  return (
    <button class="w-1/3 h-9 rounded-full border border-[#947771] bg-white text-xs text-brown">
      {props.name}
    </button>
  );
}

//丸い茶色背景のボタン（w-2/3）
export function RoundedBrowwnButton(props: Props) {
  return (
    <button class="w-2/3 h-9 rounded-full text-xs text-white bg-brown">
      {props.name}
    </button>
  );
}

//茶色枠・白色背景のボタン
export function WhiteButton(props: Props) {
  return (
    <a
      href={props.link}
      class="h-10 w-[18rem] mx-auto flex items-center bg-white border border-[#947771] rounded
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

//茶色枠・白色背景ボタン（h-6）
export function H6WhiteButton(props: Props) {
  return (
    <a
      href={props.link}
      class="w-[18rem] h-6 mx-auto flex items-center bg-white border border-[#947771] rounded
     text-[#947771] text-xs"
    >
      <p class="mx-auto">{props.name}</p>
    </a>
  );
}

//茶色枠・白色背景ボタン（w-1/2,h-10）
export function HalfWWhiteButton(props: Props) {
  return (
    <div class="h-[42px] w-1/2 mr-3 border border-[#947771] rounded text-xs text-brown">
      <div class="h-10 flex items-center" onClick={props.onClickButton}>
        <p class="mx-auto">
          {props.name}
        </p>
      </div>
    </div>
  );
}

//茶色背景のボタン（w-[18rem]）
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

//茶色背景ボタン（w-[6rem]）
export function SmallBrownButton(props: Props) {
  return (
    <button class="h-10 w-[6rem] text-white rounded bg-brown">
      {props.name}
    </button>
  );
}

//茶色背景ボタン（w-[6rem],h-6）
export function H6BrownButton(props: Props) {
  return (
    <a
      href={props.link}
      class="h-6 w-[5.5rem] text-white rounded flex items-center bg-brown"
    >
      <p class="mx-auto">{props.name}</p>
    </a>
  );
}

//茶色背景ボタン（w-5/6,h-6）
export function W0506BrownButton(props: Props) {
  return (
    <a
      href={props.link}
      class="h-6 w-5/6 text-white rounded flex items-center bg-brown"
    >
      <p class="mx-auto">{props.name}</p>
    </a>
  );
}

//灰色背景のボタン（disabledボタン）
export function GrayButton(props: Props) {
  return (
    <a
      href={props.link}
      class="h-10 w-[18rem] mx-auto flex items-center rounded
            text-center text-white text-xs bg-gray"
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

//アコーディオンタイプのボタンを表示したい時に使う
export function AccodionButton(props: Props) {
  const [open, setOpen] = useState(false);
  const [accodion, setAccodion] = useState(false);

  const accodionFunction = () => {
    if (open) {
      setOpen(false);
      setAccodion(false);
    } else {
      setOpen(true);
      setAccodion(true);
    }
  };
  return (
    <div class="flex flex-col w-1/2 border border-[#947771] rounded text-xs text-brown">
      <div class="h-10 flex items-center text-center">
        <div class="w-3 h-3 ml-3" />
        <p class="flex-1">
          {props.name}
        </p>
        <img
          src="/icon/common/arrow/brownDown.png"
          alt="矢印"
          class={`w-3 h-3 mr-3 ${accodion ? "rotate-180" : null}`}
          onClick={accodionFunction}
        />
      </div>
      {accodion
        ? (
          <div>
            {props.list?.map((list) => (
              <a
                href=""
                class="h-10 flex items-center border-t border-[#947771]"
              >
                <p class="ml-4">{list}</p>
              </a>
            ))}
          </div>
        )
        : null}
    </div>
  );
}

//単一選択をさせたいときに使用する
export function RadioButton(props: Props) {
  return (
    <div class="flex">
      {props.buttonList?.map((button) => (
        <label class="flex text-xs items-center mr-4 mb-7 ml-8">
          <input
            type="radio"
            name={button.name}
            class="w-3.5 h-3.5 rounded-full
                  border mr-2"
            required
            checked={button.checked}
            onClick={button.onClick}
          />
          {button.label}
        </label>
      ))}
    </div>
  );
}
