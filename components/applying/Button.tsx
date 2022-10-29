interface Props {
  contents: string;
  height?: number;
}

//申請ブランドカセットの下部にある白いボタン
export function WhiteButton(props: Props) {
  return (
    <div class="flex justify-center">
      <button class="flex items-center bg-[#ffffff] border-[#947771] border rounded
        w-[18rem] h-10 text-[#947771] text-xs mt-5">
        <p class="mx-auto">{props.contents}</p>
      </button>
    </div>
  );
}

//申請ブランドカセットの内部にある白いボタン
export function WhiteButton2(props: Props) {
  return (
    <div class="flex justify-center">
      <button
        class={`flex items-center bg-[#ffffff] border-[#947771] border rounded
        w-full mx-4 h-${props.height} text-[#947771] text-xs mb-2
        `}
      >
        <p class="mx-auto">{props.contents}</p>
      </button>
    </div>
  );
}

//申請ブランドカセットの内部にある茶色のボタン
export function BrownButton(props: Props) {
  return (
    <div class="flex justify-center">
      <button
        class={`flex items-center bg-[#947771] rounded
        w-full mx-4 mb-2 h-${props.height} text-white text-xs`}
      >
        <p class="mx-auto">{props.contents}</p>
      </button>
    </div>
  );
}
