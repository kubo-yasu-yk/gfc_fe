import { tw } from "twind";

//検索ボックス
//todo:検索したらFWに飛ぶようにする
export function SearchBox() {
  return (
    <div class="mx-5 mt-3 relative">
      <img
        src="/icon/common/search/search.png"
        alt="サーチアイコン"
        class="h-6 w-6 left-2 top-1.5 absolute"
      />
      <input
        class={`h-9 bg-white rounded-full w-full pl-11 text-xs border border-brown ${tw`(outline-hidden brown-placeholder)`} `}
        placeholder="ブランドを検索する"
      />
    </div>
  );
}
