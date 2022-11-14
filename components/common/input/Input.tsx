interface Props {
  placeholder?: string;
  msg?: string; //チェックボックス横の文字列
  checked?: boolean; //チェックボックスのチェック有無
  klass?: string;
  inputList?: string[];
  value?: string;
  onInput?: (e: Event) => void;
}

//通常の入力ボタン
export function Input(props: Props) {
  return (
    <input
      class={`pl-2 h-10 rounded border ${props.klass ? props.klass : null}`}
      placeholder={props.placeholder}
      value={props.value}
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
  return (
    <div class={`h-10 relative ${props.klass ? props.klass : null}`}>
      <input
        class="pl-2 w-72 h-10 rounded border"
        placeholder={props.placeholder}
      />
      <img
        src="/icon/common/input/display.png"
        alt="目のアイコン"
        class="h-4 w-4 absolute right-2 top-3"
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
