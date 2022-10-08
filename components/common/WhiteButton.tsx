interface Props {
  contents: string;
  Arrow: string;
}

export function WhiteButton(props: Props) {
  return (
    <div class="grid place-items-center">
      <button class="flex flex-row bg-[#ffffff] py-2.5 rounded-[5px] w-[85%]
            text-center text-[#947771] text-[14px] border border-solid border-[#947771]">
        {props.Arrow == "right"
          ? <p class="mx-auto pl-7">{props.contents}</p>
          : null}
        {props.Arrow == "right"
          ? (
            <img
              src="/icon/brownRightArrow.png"
              alt="茶色の右矢印"
              class="h-3 w-3 my-auto mr-4 text-right"
            />
          )
          : (
            <img
              src="/icon/brownLeftArrow.png"
              alt="茶色の左やじるし"
              class="h-3 w-3 my-auto ml-4 text-left"
            />
          )}
        {props.Arrow == "left"
          ? <p class="mx-auto pr-7">{props.contents}</p>
          : null}
      </button>
    </div>
  );
}

//ちょい縦幅広めのボタン（TOPページで使用）
export function WhiteButton2(props: Props) {
  return (
    <div class="grid place-items-center mb-6">
      <button class="flex flex-row bg-[#ffffff] py-2.5 rounded-[5px] w-[18rem] h-12
            text-center text-[#947771] text-xs border border-solid border-[#947771]">
        {props.Arrow == "right"
          ? <p class="m-auto pl-5">{props.contents}</p>
          : null}
        {props.Arrow == "right"
          ? (
            <img
              src="/icon/brownRightArrow.png"
              alt="茶色の右矢印"
              class="h-3 w-3 my-auto mr-2 text-right"
            />
          )
          : (
            <img
              src="/icon/brownLeftArrow.png"
              alt="茶色の左やじるし"
              class="h-3 w-3 my-auto ml-4 text-left"
            />
          )}
        {props.Arrow == "left"
          ? <p class="mx-auto pr-7">{props.contents}</p>
          : null}
      </button>
    </div>
  );
}
