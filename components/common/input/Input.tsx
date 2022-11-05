interface Props {
  placeholder?: string;
  msg?: string; //チェックボックス横の文字列
  checked?: boolean; //チェックボックスのチェック有無
  klass?: string;
  mt2?: boolean; //"mt-2"の適応有無
  mt4?: boolean; //"mt-4"の適応有無
  mr2?: boolean; //"mr-2"の適応有無
  mr4?: boolean; //"mr-4"の適応有無
  mb2?: boolean; //"mb-2"の適応有無
  mb7?: boolean; //"mb-7"の適応有無
  ml2?: boolean; //"ml-2 "の適応有無
  ml3?: boolean; //"ml-3"の適応有無
  ml8?: boolean; //"ml-8"の適応有無
  mx2?: boolean; //"mx-2 "の適応有無
  w4rem?: boolean; //"w-[4rem]"の適応有無
  w6rem?: boolean; //"w-[6rem]"の適応有無
  w10rem?: boolean; //"w-[10rem]"の適応有無
  w18rem?: boolean; //"w-72"の適応有無
  w12?: boolean; //"w-1/2"の適応有無
  w23?: boolean; //"w-2/3"の適応有無
  inputList?: string[];
}

//通常の入力ボタン
export function Input(props: Props) {
  return (
    <input
      class={`
        ${props.klass ? props.klass : ""}
        ${props.mt2 ? "mt-2" : ""}
        ${props.mt4 ? "mt-4" : ""}
        ${props.mr2 ? "mr-2" : ""}
        ${props.mr4 ? "mr-4" : ""}
        ${props.mb2 ? "mb-2" : ""}
        ${props.mb7 ? "mb-7" : ""}
        ${props.ml2 ? "ml-2" : ""}
        ${props.ml3 ? "ml-3" : ""}
        ${props.ml8 ? "ml-8" : ""}
        ${props.mx2 ? "mx-2" : ""}
        ${props.w4rem ? "w-[4rem]" : ""}
        ${props.w6rem ? "w-[6rem]" : ""}
        ${props.w10rem ? "w-[10rem]" : ""}
        ${props.w18rem ? "w-72" : ""}
        ${props.w12 ? "w-1/2" : ""}
        ${props.w23 ? "w-2/3" : ""}
      pl-2 h-10 rounded border border-lightGray ${
        props.klass ? props.klass : null
      }`}
      placeholder={props.placeholder}
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
          class={`mr-2 pl-2 w-32 h-10 rounded border border-lightGray ${
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
        class="pl-2 w-72 h-10 rounded border-[#C3C3C3] border"
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
        class={`
        ${props.mt2 ? "mt-2" : ""}
        ${props.mt4 ? "mt-4" : ""}
        ${props.mr2 ? "mr-2" : ""}
        ${props.mr4 ? "mr-4" : ""}
        ${props.mb2 ? "mb-2" : ""}
        ${props.mb7 ? "mb-7" : ""}
        ${props.ml2 ? "ml-2" : ""}
        ${props.ml3 ? "ml-3" : ""}
        ${props.ml8 ? "ml-8" : ""}
        ${props.mx2 ? "mx-2" : ""}
         w-4 h-4 bg-white accent-brown ${props.klass ? props.klass : null}`}
        checked={props.checked}
      />
      {props.msg ? <p>{props.msg}</p> : null}
    </div>
  );
}

//横並びのチェックボックスを使いたい時に使う
export function VerticalCheckbox(props: Props) {
  return (
    <div>
      {props.inputList?.map((list, i) => (
        <div class="mb-1">
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
