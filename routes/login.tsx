import { BrownHeader } from "../components/common/header/Header.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { Footer } from "../components/common/footer/Footer.tsx";
import Login_i from "../islands/Login.tsx";

export default function routes() {
  return (
    <>
      <BrownHeader />

      <Title title="ログイン" />
      <Login_i></Login_i>

      <p class="text-[10px] text-[#947771] text-center font-bold mb-6">
        初めてのご利用の方（新規会員登録）
      </p>

      <div class="flex flex-row my-2">
        <img
          src="/icon/common/arrow/brownRight.png"
          alt="茶色の右矢印"
          class="h-3 w-3 my-auto mx-4 text-right"
        />
        <p class="text-[10px] text-[#5F5F5F] font-bold">
          メールアドレスをお忘れですか？
        </p>
      </div>

      <div class="flex flex-row my-2">
        <img
          src="/icon/common/arrow/brownRight.png"
          alt="茶色の右矢印"
          class="h-3 w-3 my-auto mx-4 text-right"
        />
        <p class="text-[10px] text-[#5F5F5F] font-bold">
          パスワードをお忘れですか？
        </p>
      </div>

      <Footer />
    </>
  );
}
