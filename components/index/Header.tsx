interface Props {
  onClick?: (e: Event) => void;
}

export function Header(props: Props) {
  return (
    <header>
      <div class="h-[7.5rem] bg-[#947771]">
        <div class="flex flex-row mx-5">
          <img
            src="/icon/hamburgerButton.png"
            alt="ハンバーガーメニューアイコン"
            class="h-6 w-6 mt-5 ml-2"
            onClick={props.onClick}
          />

          <div class="flex-1" />
          <div class="mt-3 flex flex-col items-center z-0">
            <img src="/icon/login.png" alt="ログインアイコン" class="h-6 w-6" />
            <p class="text-white text-[0.625rem] mt-1.5">ログイン</p>
          </div>
        </div>
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
      </div>
    </header>
  );
}
