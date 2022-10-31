//ヘッダー挿入時に使用するコンポーネント
//todo:トップページ以外のヘッダーを格納

import { tw } from "twind";

interface Props {
  onClick?: (e: Event) => void;
}

//DrawerMenuのヘッダー（未ログイン時）
export function DrawerMenuHeader(props: Props) {
  return (
    <div class="h-16 bg-[#947771]">
      <div class="h-full w-12 ml-4 bg-white">
        <img
          src="/icon/cross.png"
          alt="バツアイコン"
          class="h-11 w-6 mx-auto pt-5"
          onClick={props.onClick}
        />
      </div>
    </div>
  );
}

//トップページのみに使用するヘッダー（未ログイン時）
export function TopPageHeader(props: Props) {
  return (
    <header>
      <div class="h-[7.5rem] bg-[#947771]">
        <div class="flex mx-5">
          <img
            src="/icon/hamburgerButton.png"
            alt="ハンバーガーメニューアイコン"
            class="h-6 w-6 mt-5 ml-2"
            onClick={props.onClick}
          />
          <div class="flex-1" />
          <div class="mt-3">
            <a href="/login" class="flex flex-col items-center">
              <img src="/icon/login.png" alt="ログインアイコン" class="h-6 w-6" />
              <p class="text-white text-[0.625rem] mt-1.5">ログイン</p>
            </a>
          </div>
        </div>
        <div class="mx-5 mt-3">
          <input
            class={`h-9 bg-white rounded-[0.625rem] w-[100%] pl-11 text-[0.75rem] ${tw`(outline-hidden)`}`}
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
