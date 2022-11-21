import { useState } from "preact/hooks";

interface Props {
  list?: string[];
  buttonList?: {
    name: string;
    label: string;
    checked?: boolean; //デフォルトで選択させたいときに使用する
    onClick?: () => void; //関数を与えたいときに使用する
  }[];
  Accodion?: (e: Event) => void;

  link?: string; //ボタン内にリンクを付ける際に使用
  white?: boolean; //茶色の枠・白背景のボタンを作る時に使用
  brown?: boolean; //茶色背景のボタンを作る時に使用
  gray?: boolean; //グレーの枠・白背景のボタンを作る時に使用
  disabled?: boolean;
  h10_w72?: boolean; //h-10,w-72のサイズを指定する時に使用（基本は使う）
  no_mx_auto?: boolean; //mx-autoが不要な時に使用
  rounded_full?: boolean; //rounded-fullを使いたい時に使用
  klass?: string; //追加でCSSを入れたい時に使用
  name?: string; //ボタン内に文字を表示する際に使用
  arrow?: "left" | "right" | "down"; //矢印を出したいときに使う
  onClick?: (e: Event) => void;
}

//todo:disable未実装
export function Button(props: Props) {
  const onClick = (e: Event) => {
    if (!props.disabled) {
      location.href = props.link!;
    }
  };
  return (
    <button
      class={`flex items-center text-center text-xs
      ${props.white ? "text-brown bg-white border border-brown" : ""}
      ${props.brown ? "text-white bg-brown" : ""}
      ${props.gray ? "text-gray bg-white border border-gray" : ""}
      ${props.h10_w72 ? "h-10 w-72" : ""}
      ${props.no_mx_auto ? "" : "mx-auto"}
      ${props.rounded_full ? "rounded-full" : "rounded"}
      ${props.klass ? props.klass : ""}`} //klassではwidth,height,margin,paddingなどを設定
      onClick={props.onClick != null || undefined ? props.onClick : onClick} //
    >
      {props.arrow == "left"
        ? (
          <img
            src={`${props.white ? "/icon/common/arrow/brownLeft.png" : ""}${
              props.brown ? "/icon/common/arrow/whiteLeft.png" : ""
            }${props.gray ? "/icon/common/arrow/grayLeft.png" : ""}`}
            alt="左矢印"
            class="h-2 w-2 ml-4"
          />
        )
        : null}
      {props.arrow == "right" || props.arrow == "down"
        ? <div class="w-6" />
        : null}
      <p class="flex-1">{props.name}</p>
      {props.arrow == "right"
        ? (
          <img
            src={`${props.white ? "/icon/common/arrow/brownRight.png" : ""}${
              props.brown ? "/icon/common/arrow/whiteRight.png" : ""
            }${props.gray ? "/icon/common/arrow/grayRight.png" : ""}
            `}
            alt="右矢印"
            class="h-2 w-2 mr-4"
          />
        )
        : null}
      {props.arrow == "down"
        ? (
          <img
            src={`
            ${props.white ? "/icon/common/arrow/brownDown.png" : ""}
            `}
            alt="下矢印"
            class="h-2 w-2 mr-4"
          />
        )
        : null}
      {props.arrow == "left" ? <div class="w-6" /> : null}
    </button>
  );
}

//bgをklassで任意の値に指定するボタン
export function FreeButton(props: Props) {
  const onClick = (e: Event) => {
    if (!props.disabled) {
      location.href = props.link!; //!をつけると強制的にそれをやる（!important的なやつ）
    }
  };
  return (
    <button
      class={`h-10 w-72 mx-auto flex items-center rounded text-center text-white text-xs ${
        props.klass ? props.klass : null
      } ${props.disabled ? "bg-lightgray" : "bg-brown"}`}
      disabled={props.disabled}
      onClick={onClick}
    >
      {props.arrow == "right" ? <div class="w-6" /> : null}
      <p class="flex-1">{props.name}</p>
      {props.arrow == "right"
        ? (
          <img
            src="/icon/common/arrow/whiteRight.png"
            alt="白色の右矢印"
            class="h-2 w-2 mr-4"
          />
        )
        : null}
    </button>
  );
}

//アコーディオンタイプのボタンを表示したい時に使う
//todo:アコーディオンを開くと高さが微妙に変わる
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
    <div
      class={`flex flex-col w-1/2 text-xs text-brown  ${
        accodion ? "border rounded border-brown" : null
      }`}
    >
      <div
        class={`h-10 flex items-center text-center ${
          accodion ? null : "border rounded border-brown"
        }`}
      >
        <div class="w-2 h-2 ml-4" />
        <p class="flex-1">
          {props.name}
        </p>
        <img
          src="/icon/common/arrow/brownDown.png"
          alt="矢印"
          class={`w-2 h-2 mr-4 ${accodion ? "rotate-180" : null}`}
          onClick={accodionFunction}
        />
      </div>
      {accodion
        ? (
          <div>
            {props.list?.map((list) => (
              <a
                href=""
                class="h-10 flex items-center border-t border-brown"
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
    <div class={`flex ${props.klass ? props.klass : null}`}>
      {props.buttonList?.map((button) => (
        <label class="flex items-center ml-8 text-2.5">
          <input
            type="radio"
            name={button.name}
            class="w-3 h-3 rounded-full
                  border mr-1 accent-brown"
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
