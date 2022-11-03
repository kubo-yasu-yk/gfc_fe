import { RoundedBrowwnButton, RoundedWhiteButton } from "../button/Button.tsx";
import { Checkbox, Input } from "../input/Input.tsx";

interface Props {
  open: boolean;
  onClickButton: (e: Event) => void;
}

export function NarrowDown(props: Props) {
  const list = [
    { name: "キーワード" },
    { name: "ジャンル" },
    { name: "価格帯" },
    { name: "季節" },
    { name: "対応エリア" },
  ];
  return (
    <>
      <div
        class={`h-screen bg-white relative ${props.open ? "open" : "close"}`}
      >
        <div class="h-12 flex items-center justify-center bg-gray">
          <p>ブランドを絞り込む</p>
        </div>
        <div class="w-12 h-12 absolute top-0 right-0 flex items-center bg-brown">
          <img
            src="./icon/common/others/cross-white.png"
            alt="バツボタン"
            class="w-6 h-6 mx-auto"
            onClick={props.onClickButton}
          />
        </div>
        <div class="text-xs">
          {list.map((list) => (
            <>
              {list.name == "キーワード" || list.name == "季節" || list.name == "価格帯"
                ? (
                  <div class="border-b">
                    <div class="h-12 flex items-center mx-3">
                      <p
                        class={`w-[5rem] ${
                          list.name == "価格帯" ? "shrink" : null
                        }`}
                      >
                        {list.name}
                      </p>
                      {list.name == "キーワード" ? <Input w23={true} /> : null}
                      {list.name == "季節"
                        ? (
                          <div class="h-12 flex items-center">
                            <Checkbox msg="春" checked={true} mr2={true} />
                            <Checkbox
                              msg="夏"
                              checked={true}
                              ml3={true}
                              mr2={true}
                            />
                            <Checkbox
                              msg="秋"
                              checked={true}
                              ml3={true}
                              mr2={true}
                            />
                            <Checkbox
                              msg="冬"
                              checked={true}
                              ml3={true}
                              mr2={true}
                            />
                          </div>
                        )
                        : null}
                      {list.name == "価格帯"
                        ? (
                          <div class="flex items-center">
                            <Input w12={true} mr2={true} />
                            <p class="whitespace-nowrap">円 〜</p>
                            <Input w12={true} mx2={true} />
                            <p>円</p>
                          </div>
                        )
                        : null}
                    </div>
                  </div>
                )
                : null}
              {list.name == "ジャンル" || list.name == "対応エリア"
                ? (
                  <div class="border-b">
                    <div class="h-12 flex items-center mx-3">
                      <p class="flex-1">{list.name}</p>
                      <img
                        src="/icon/common/arrow/grayRight.png"
                        alt="右矢印"
                        class="h-3"
                      />
                    </div>
                  </div>
                )
                : null}
            </>
          ))}
        </div>
      </div>

      <div class="w-full h-12 flex items-center px-5 fixed bottom-0 bg-gray">
        <RoundedWhiteButton name="リセット" />
        <div class="w-4" />
        <RoundedBrowwnButton name="検索" />
      </div>
    </>
  );
}
