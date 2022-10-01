import { MainHeader } from "../components/common/MainHeader.tsx";
import { Title } from "../components/registration/Title.tsx";
import { SubFooter } from "../components/common/SubFooter.tsx";
import { BrownButton } from "../components/common/BrownButton.tsx";

export default function Login() {
  return (
    <>
      <MainHeader />
      <Title title="ログイン" />

      メールアドレス パスワード

      <p class="text-[10px] text-[#947771] text-right mr-4 font-bold">
        パスワードを表示する
      </p>

      <BrownButton contents="ログイン" mandatory={false} />
      <p class="text-[10px] text-[#947771] text-center font-bold">
        初めてのご利用の方（新規会員登録）
      </p>

      <div class="flex flex-row my-2">
        <img
          src="/icon/brownRightArrow.png"
          alt="茶色の右矢印"
          class="h-3 w-3 my-auto mx-4 text-right"
        />
        <p class="text-[10px] text-[#5F5F5F] font-bold">
          メールアドレスをお忘れですか？
        </p>
      </div>

      <div class="flex flex-row my-2">
        <img
          src="/icon/brownRightArrow.png"
          alt="茶色の右矢印"
          class="h-3 w-3 my-auto mx-4 text-right"
        />
        <p class="text-[10px] text-[#5F5F5F] font-bold">
          パスワードをお忘れですか？
        </p>
      </div>
      <SubFooter />
    </>
  );
}
