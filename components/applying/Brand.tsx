import { BrownButton, WhiteButton, WhiteButton2 } from "./Button.tsx";

interface Props {
  status: number;
  brandName: string;
  genre: string;
  src: string;
}

export function Brand(props: Props) {
  const statusList = [
    { status: "申請中", button: "申請を取り消す" },
    { status: "契約可能", button: "申請を取り消す" },
    { status: "契約不可", button: "再度申請する" },
  ];

  return (
    <div class="border m-5 rounded ">
      <div class="flex my-3 mx-4">
        <img
          src={props.src}
          alt="ブランドロゴ"
          class="w-14 h-14 mr-4"
        />
        <div>
          <p class="text-sm mb-1">{props.brandName}</p>
          <p class="text-[0.625rem] mb-1 ml-4">ジャンル：{props.brandName}</p>
          <p class="text-[0.625rem] ml-4">
            ステータス：{statusList[props.status].status}
          </p>
        </div>
      </div>
      {props.status == 1
        ? <BrownButton contents="フランチャイズ契約する" height={10} />
        : null}
      <WhiteButton2
        contents={statusList[props.status].button}
        height={6}
      />
    </div>
  );
}
