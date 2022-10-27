export function HeaderSearchBox() {
  return (
    <div class="mx-5 mt-3">
      <input
        class="h-9 bg-white rounded-[0.625rem] w-[100%] pl-11 text-[0.75rem] outline-hidden"
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

export function FooterSearchBox() {
  return (
    <div class="mx-5">
      <input
        class="h-9 bg-white rounded-[0.625rem] w-[100%] pl-11 text-[0.75rem] border border-[#5F5F5F] outline-hidden"
        placeholder="ブランドを検索する"
      />
      <img
        src="/icon/blackSearch.png"
        alt="サーチアイコン"
        class="h-6 w-6 mt-[-1.875rem] ml-2"
      />
    </div>
  );
}
