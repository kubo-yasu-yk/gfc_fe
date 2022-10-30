interface Props {
  onClick?: (e: Event) => void;
}

export function Header(props: Props) {
  return (
    <header>
      <div class="h-16 bg-[#947771]">
        <div class="flex flex-row mx-5">
          <img
            src="/icon/hamburgerButton.png"
            alt="ハンバーガーメニューアイコン"
            class="h-6 w-6 mt-5 ml-2"
            onClick={props.onClick}
          />

          <div class="flex-1" />
          <a href="/mypage" class="mt-3 flex flex-col items-center z-0">
            <img src="/icon/mypageIcon.png" alt="ログインアイコン" class="h-6 w-6" />
            <p class="text-white text-[0.625rem] mt-1.5">マイページ</p>
          </a>
        </div>
      </div>
    </header>
  );
}
