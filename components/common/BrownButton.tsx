interface Props {
  contents: string;
  mandatory?: boolean;
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
