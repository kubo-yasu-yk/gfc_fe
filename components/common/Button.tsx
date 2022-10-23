interface Props {
  contents: string;
  disabled?: boolean;
  onClick?: (e: Event) => void;
  mandatory?: boolean;
  Arrow?: string;
}

export function Button(props: Props) {
  return (
    <div class="grid place-items-center">
      <button
        class={`${
          props.disabled ? "bg-[#EBEBEB]" : "bg-[#947771]"
        } py-2.5 rounded-[5px] w-[85%] text-[#ffffff] text-[14px] mb-4`}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        <p class="mx-auto">{props.contents}</p>
      </button>
    </div>
  );
}

export function BrownButton(props: Props) {
  return (
    <div class="grid place-items-center">
      <button class="flex flex-row content-center bg-[#947771] py-2.5 rounded-[5px] w-[85%] text-[#ffffff] text-[14px] mb-4">
        <p class="mx-auto pl-7">{props.contents}</p>
        {props.mandatory
          ? (
            <img
              src="/icon/whiteRightArrow.png"
              alt="白い右矢印"
              class="h-3 w-3 my-auto mr-4 text-right"
            />
          )
          : null}
      </button>
    </div>
  );
}

export function GrayButton(props: Props) {
  return (
    <div class="grid place-items-center">
      <button class="flex flex-row content-center bg-[#EBEBEB] py-2.5 rounded-[5px] w-[85%] text-[#ffffff] text-[14px] mb-4">
        <p class="mx-auto pl-7">{props.contents}</p>
        <img
          src="/icon/whiteRightArrow.png"
          alt="白い右矢印"
          class="h-3 w-3 my-auto mr-4 text-right"
        />
      </button>
    </div>
  );
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
