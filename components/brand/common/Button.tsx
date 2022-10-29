interface Props {
  link: string;
  contents: string;
  leftArrow?: boolean;
}

//my-12の茶色ボタン。確認画面の中断くらいにあるボタン
export function BrownButton(props: Props) {
  return (
    <a href={`${props.link}`} class="flex mx-5 my-12">
      <button class="h-10 w-full flex items-center bg-[#947771] rounded text-[#ffffff]">
        <p class="mx-auto text-sm">{props.contents}</p>
      </button>
    </a>
  );
}

//mb-3の茶色ボタン
export function BrownButton2(props: Props) {
  return (
    <a href={`${props.link}`} class="flex mx-5 mt-12 mb-3">
      <button class="h-10 w-full flex items-center bg-[#947771] rounded text-[#ffffff]">
        <p class="mx-auto text-sm">{props.contents}</p>
      </button>
    </a>
  );
}

//左矢印付きの白いボタン
export function WhiteButton(props: Props) {
  return (
    <a href={`${props.link}`} class="flex mx-5 mb-12">
      <button class="h-10 w-full flex items-center bg-[#ffffff]
            text-[#947771] border border-[#947771] rounded ">
        {props.leftArrow
          ? (
            <img
              src="/icon/brownLeftArrow.png"
              alt="茶色の左やじるし"
              class="h-3 w-3 my-auto ml-4 text-left"
            />
          )
          : null}

        <p class="mx-auto text-sm flex-1">{props.contents}</p>
        {props.leftArrow ? <div class="w-7" /> : null}
      </button>
    </a>
  );
}
