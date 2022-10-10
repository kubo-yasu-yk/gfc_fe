interface Props {
  contents: string;
}

//「特集コンテンツをもっと見る」の白いボタン
export function WhiteButton(props: Props) {
  return (
    <div class="grid place-items-center">
      <button class="flex flex-row content-center bg-[#ffffff] border-[#947771] border py-2.5 rounded-[5px]
        w-[18rem] h-12  text-[#947771] text-xs mb-8">
        <p class="m-auto pl-5">{props.contents}</p>
        <img
          src="/icon/brownRightArrow.png"
          alt="茶色の右矢印"
          class="h-3 w-3 my-auto mr-2 text-right"
        />
      </button>
    </div>
  );
}

//「よくあるご質問・お問い合わせ」の茶色のボタン
export function BrownButton(props: Props) {
  return (
    <div class="grid place-items-center">
      <button class="flex flex-row content-center bg-[#947771] py-2.5 rounded-[5px]
          w-[18rem] h-12  text-[#ffffff] text-xs mb-8">
        <p class="m-auto pl-5">{props.contents}</p>
        <img
          src="/icon/whiteRightArrow.png"
          alt="白い右矢印"
          class="h-3 w-3 my-auto mr-2 text-right"
        />
      </button>
    </div>
  );
}
