interface Props {
  contents: string;
  Arrow?: "left" | "right";
}

export function BrownButton(props: Props) {
  return (
    <div class="grid place-items-center">
      <button class="flex flex-row content-center bg-[#947771] py-2.5 rounded-[5px] w-[85%] text-[#ffffff] text-[14px] mb-4">
        {props.Arrow == "right"
          ? <p class="mx-auto pl-7">{props.contents}</p>
          : null}

        {props.Arrow == "right"
          ? (
            <img
              src="/icon/whiteRightArrow.png"
              alt="白色の右矢印"
              class="h-3 w-3 my-auto mr-4 text-right"
            />
          )
          : (
            <img
              src="/icon/whiteLeftArrow.png"
              alt="白色の左矢印"
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
