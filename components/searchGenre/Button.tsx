import { useState } from "preact/hooks";

interface Props {
  name: string;
  onClickButton?: (e: Event) => void;
  Accodion?: (e: Event) => void;
}

export function Button(props: Props) {
  return (
    <button
      class="h-[2.625rem] w-[50%] border border-[#947771] rounded-[5px] text-[#947771] text-[0.75rem] first:mr-3"
      onClick={props.onClickButton}
    >
      {props.name}
    </button>
  );
}

export function AccodionButton(props: Props) {
  const sortOrders = ["おすすめ", "人気順", "新着順", "価格帯（安い）", "価格帯（高い）"];
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
            {props.name}
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
