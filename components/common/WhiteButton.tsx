interface Props {
  name: string;
  arrow?: "left" | "right";
}

//todo:他に使っている箇所があるか確認
export function WhiteButton(props: Props) {
  return (
    <button class="h-10 w-[18rem] mx-auto flex items-center bg-[#ffffff] border border-[#947771] rounded
            text-center text-[#947771] text-xs">
      {props.arrow == "right"
        ? (
          <>
            <div class="w-6" />
            <p class="flex-1">{props.name}</p>
            <img
              src="/icon/brownRightArrow.png"
              alt="茶色の右矢印"
              class="h-3 w-3 mr-3"
            />
          </>
        )
        : (
          <>
            <img
              src="/icon/brownLeftArrow.png"
              alt="茶色の左矢印"
              class="h-3 w-3 ml-3"
            />
            <p class="flex-1">{props.name}</p>
            <div class="w-6" />
          </>
        )}
    </button>
  );
}
