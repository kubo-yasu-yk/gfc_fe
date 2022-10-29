export function SearchBox() {
  return (
    <div class="mx-5 mt-5">
      <input
        class="h-9 bg-white rounded-[0.625rem] w-[100%] pl-11 text-[0.75rem] border border-[#947771] outline-hidden"
        placeholder="ブランドを検索する"
      />
      <img
        src="/icon/search.png"
        alt="サーチアイコン"
        class="h-6 w-6 mt-[-1.875rem] ml-2"
      />
    </div>
  );
}
