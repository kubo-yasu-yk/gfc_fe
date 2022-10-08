export function Header() {
  return (
    <header class="h-[7.5rem] bg-[#947771]">
      <div class="flex flex-row mx-5">
        <img
          src="/icon/hamburgerButton.png"
          alt="ハンバーガーメニューアイコン"
          class="h-7 mt-4"
        />
        <div class="flex-1" />
        <div class="mt-3 flex flex-col items-center">
          <img src="/icon/login.png" alt="ログインアイコン" class="h-7 w-7" />
          <p class="text-[#FFFFFF] text-[0.625rem] mt-1">ログイン</p>
        </div>
      </div>
      <div class="mx-5 mt-3">
        <a href="#">
          <input
            class="h-9 bg-[#FFFFFF] rounded-[0.625rem] w-[100%] pl-11 text-[0.75rem] outline-hidden"
            placeholder="ブランドを検索する"
          />
          <img
            src="/icon/search.png"
            alt="サーチアイコン"
            class="h-6 w-6 mt-[-1.875rem] ml-2"
          />
        </a>
      </div>
    </header>
  );
}
