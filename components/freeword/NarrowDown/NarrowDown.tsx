import { css } from "twind/css";
import { tw } from "twind";
const shrink = css`
{
  flex-shrink: 0;
}`;

interface Props {
  open: boolean;
  onClickButton: (e: Event) => void;
}

export function NarrowDown(props: Props) {
  return (
    <>
      <div
        class={`h-screen bg-white relative ${props.open ? "open" : "close"}`}
      >
        <div class="bg-[#EBEBEB] h-12 flex items-center justify-center">
          <p>ブランドを絞り込む</p>
        </div>
        <div class="w-12 h-12 bg-[#947771] z-10 absolute top-0 right-0 flex items-center">
          <img
            src="./icon/cross-white.png"
            alt="バツボタン"
            class="w-6 h-6 mx-auto"
            onClick={props.onClickButton}
          />
        </div>

        <div class="border-b">
          <div class="h-12 text-sm flex items-center mx-3">
            <p class="mr-3 whitespace-nowrap">キーワード</p>
            <input class="h-9 border border-[#947771] rounded w-full" />
          </div>
        </div>

        <div class="border-b">
          <div class="h-12 text-sm flex items-center mx-3">
            <p class="flex-1">ジャンル</p>
            <img src="./icon/grayRightArrow.png" alt="右矢印" class="h-3" />
          </div>
        </div>

        <div class="border-b">
          <div class="h-12 text-sm flex items-center mx-3">
            <p class={`w-[70px] mr-3 ${tw`(shrink)`}`}>価格帯</p>
            <div class="flex items-center">
              <input class="h-9 border border-[#947771] rounded w-[50%]" />
              <p class="mx-1 whitespace-nowrap">円〜</p>
              <input class="h-9 border border-[#947771] rounded w-[50%]" />
              <p class="ml-1 whitespace-nowrap">円</p>
            </div>
          </div>
        </div>

        <div class="border-b">
          <div class="h-12 text-sm flex items-center mx-3">
            <p class="w-[70px] mr-3">季節</p>
            <input
              type="checkbox"
              class="w-4 h-4 border rounded-[4px] mr-2"
              id="spring"
            />
            <label class="mr-4" for="spring">春</label>
            <input
              type="checkbox"
              class="w-4 h-4 border rounded-[4px] mr-2"
              id="summer"
            />
            <label class="mr-4" for="summer">夏</label>
            <input
              type="checkbox"
              class="w-4 h-4 border rounded-[4px] mr-2"
              id="fall"
            />
            <label class="mr-4" for="fall">秋</label>
            <input
              type="checkbox"
              class="w-4 h-4 border rounded-[4px] mr-2"
              id="winter"
            />
            <label class="mr-4" for="winter">冬</label>
          </div>
        </div>

        <div class="border-b">
          <div class="h-12 text-sm flex items-center mx-3">
            <p class="flex-1">対応エリア</p>
            <img src="./icon/grayRightArrow.png" alt="右矢印" class="h-3" />
          </div>
        </div>
      </div>
      <div class="bg-[#EBEBEB] w-full h-12 flex items-center px-5 fixed bottom-0">
        <button class="w-[10rem] h-9 mr-4 rounded-3xl border border-[#947771] bg-white text-xs text-[#947771]">
          リセット
        </button>
        <button class="w-[100%] h-9 rounded-3xl bg-[#947771] text-xs text-white">
          検索
        </button>
      </div>
    </>
  );
}
