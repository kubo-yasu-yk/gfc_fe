import { useState } from "preact/hooks";

interface Props {
  contents: string;
  height?: number;
  onClickButton?: (e: Event) => void;
  Accodion?: (e: Event) => void;
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

//絞り込むボタン
export function WhiteButton3(props: Props) {
  return (
    <button
      class="h-[2.625rem] w-[50%] border border-[#947771] rounded-[5px] text-[#947771] text-[0.75rem] first:mr-3"
      onClick={props.onClickButton}
    >
      {props.contents}
    </button>
  );
}

//表示順のボタン
export function AccodionButton(props: Props) {
  const sortOrders = ["申請日順（新しい順）", "申請日順（古い順）"];
  const [open, setOpen] = useState(false);
  const [accodion, setAccodion] = useState(false);

  const accodionFunction = () => {
    console.log("押してるよ！");
    if (open) {
      console.log("閉じる");
      setOpen(false);
      setAccodion(false);
    } else {
      console.log("開く");
      setOpen(true);
      setAccodion(true);
    }
  };
  return (
    <div class="flex flex-col w-[50%]">
      <div class="w-[100%] border border-[#947771] rounded-[5px] text-[#947771] text-[0.75rem] first:mr-3">
        <div class="h-10 flex items-center text-center">
          <div class="w-3 h-3 ml-3" />
          <p class="flex-1">
            {props.contents}
          </p>
          <img
            src="../icon/downArrow.png"
            alt="矢印"
            class={`w-3 h-3 mr-3 ${accodion ? "rotate-180" : null}`}
            onClick={accodionFunction}
          />
        </div>
        {accodion
          ? (
            <div>
              {sortOrders.map((sortOrder) => (
                <div class="h-10 flex items-center border-t border-[#947771]">
                  <p class="ml-4">{sortOrder}</p>
                </div>
              ))}
            </div>
          )
          : null}
      </div>
    </div>
  );
}
