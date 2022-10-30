interface Props {
  open: boolean;
  onClickButton: (e: Event) => void;
}

//todo:checkbuttonの色変更
export function NarrowDown(props: Props) {
  return (
    <div>
      <div
        class={`h-screen bg-white relative ${props.open ? "open" : "close"}`}
      >
        <div class="bg-[#EBEBEB] h-12 flex items-center justify-center">
          <p>ブランドを絞り込む</p>
        </div>
        <div class="w-12 h-12 bg-[#947771] z-10 absolute top-0 right-0 flex items-center">
          <img
            src="/icon/cross-white.png"
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
            <img src="/icon/grayRightArrow.png" alt="右矢印" class="h-3" />
          </div>
        </div>
        <div class="border-b">
          <div class="text-sm flex mx-3 my-3">
            <p class="mr-3 whitespace-nowrap">ステータス</p>
            <div class="">
              <div class="mb-1">
                <input type="checkbox" id="status1" class="mr-1" checked />
                <label for="status">申請中</label>
              </div>
              <div class="mb-1">
                <input type="checkbox" id="status1" class="mr-1" checked />
                <label for="status">契約可能</label>
              </div>
              <div class="mb-1">
                <input type="checkbox" id="status1" class="mr-1" checked />
                <label for="status">契約不可</label>
              </div>
              <div class="mb-1">
                <input type="checkbox" id="status1" class="mr-1" checked />
                <label for="status">申請キャンセル</label>
              </div>
              <div class="mb-1">
                <input type="checkbox" id="status1" class="mr-1" checked />
                <label for="status">解約申請中</label>
              </div>
              <div class="mb-1">
                <input type="checkbox" id="status1" class="mr-1" checked />
                <label for="status">解約済み</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-[#EBEBEB] w-full h-12 flex items-center px-5 fixed bottom-0">
        <button class="w-[10rem] h-9 rounded-3xl mr-4 border border-[#947771] bg-white text-xs text-[#947771]">
          リセット
        </button>
        <button class="w-[100%] h-9 rounded-3xl bg-[#947771] text-xs text-white">
          検索
        </button>
      </div>
    </div>
  );
}
