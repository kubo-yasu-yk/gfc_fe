import { useState } from "preact/hooks";

interface Props {
  placeholder?: string;
  msg?: string; //チェックボックス横の文字列
  checked?: boolean; //チェックボックスのチェック有無
  klass?: string;
  krass?: string; //klassを使った親要素を持つ子要素に任意のclassを指定したいときに使用
  inputList?: string[];
  onInput?: (e: Event) => void;
}

//通常の入力ボタン
export function Input(props: Props) {
  return (
    <input
      class={`pl-2 h-10 rounded border ${props.klass ? props.klass : null}`}
      placeholder={props.placeholder}
      onInput={props.onInput}
    />
  );
}

//横並びで2個入力ボックスが並ぶ場合に使う
export function WInput(props: Props) {
  return (
    <div class="ml-8 flex">
      {props.inputList?.map((input) => (
        <input
          placeholder={input}
          class={`mr-2 pl-2 w-32 h-10 rounded border ${
            props.klass ? props.klass : null
          }`}
        />
      ))}
    </div>
  );
}

//パスワードなど入力内容を非表示にしたい時に使う
export function HiddenInput(props: Props) {
  const [hidden, setHidden] = useState(true);
  const OpenPassFunction = () => {
    if (hidden) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };
  return (
    <div
      class={`h-10 relative ${props.klass ? props.klass : null}`}
      onInput={props.onInput}
    >
      <input
        type={`${hidden ? "password" : "text"}`}
        class={`pl-2 h-10 w-full rounded border absolute ${
          props.krass ? props.krass : null
        }`}
        placeholder={props.placeholder}
      />
      <img
        src={`${
          hidden
            ? "/icon/common/input/open.png"
            : "/icon/common/input/close.png"
        }`}
        alt="目のアイコン"
        class="h-4 w-4 absolute right-2 top-3"
        onClick={OpenPassFunction}
      />
    </div>
  );
}

//横並びのチェックボックスを使いたい時に使う
export function Checkbox(props: Props) {
  return (
    <div class="flex">
      <input
        type="checkbox"
        class={`w-4 h-4 bg-white accent-brown ${
          props.klass ? props.klass : null
        }`}
        checked={props.checked}
      />
      {props.msg ? <p>{props.msg}</p> : null}
    </div>
  );
}

//縦並びのチェックボックスを使いたい時に使う
export function VerticalCheckbox(props: Props) {
  return (
    <div>
      {props.inputList?.map((list, i) => (
        <div class="mb-1 last:mb-0 flex items-center">
          <input
            type="checkbox"
            id={`status${i}`}
            class="mr-1 accent-brown"
            checked
          />
          <label for={`status${i}`} class="text-sm">{list}</label>
        </div>
      ))}
    </div>
  );
}
