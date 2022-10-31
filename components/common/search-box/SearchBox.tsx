import { tw } from "twind";

//検索ボックス
export function SearchBox() {
  return (
    <div class="mx-5 mt-3 relative">
      <img
        src="/icon/search.png"
        alt="サーチアイコン"
        class="h-6 w-6 left-2 top-1.5 absolute"
      />
      <input
        class={`h-9 bg-white rounded-lg w-full pl-11 text-xs border border-[#947771] ${tw`(outline-hidden)`} `}
        placeholder="ブランドを検索する"
      />
    </div>
  );
}
