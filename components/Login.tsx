//ログイン画面の要素をまとめたコンポーネント

import { BrownHeader } from "../components/common/Header.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { Input } from "../components/common/input/Input.tsx";
import { GrayButton } from "../components/common/Button.tsx";
import { Footer } from "../components/common/Footer.tsx";

interface Props {
  onInputMail?: (e: Event) => void;
}

export function Login(props: Props) {
  return (
    <>
      <BrownHeader />
      <main>
        <Title title="ログイン" />
        <div class="mx-8">
          <p class="text-xs mt-8">
            メールアドレス
          </p>
          <Input
            onInput={props.onInputMail}
            klass="w-full my-1 mb-8"
            placeholder="insyoku.franchise@insyoku.co.jp"
          />
          <p class="text-xs">
            パスワード
          </p>
          <Input
            klass="w-full my-1"
            placeholder="半角英数字の6~20文字"
          />
          <GrayButton
            name="ログイン"
            klass="mt-8 mb-4"
          />
          <a href="/registration/input" class="text-center text-2.5">
            <p>初めてのご利用の方（新規会員登録）</p>
          </a>
        </div>
        <Forget msg="メールアドレスをお忘れですか？" klass="mt-8 mb-2" />
        <Forget msg="パスワードをお忘れですか？" />
      </main>
      <Footer />
    </>
  );
}

function Forget({ msg, klass }: { msg: string; klass?: string }) {
  return (
    <div class={`flex items-center text-2.5 ${klass}`}>
      <img
        src="/icon/common/arrow/brownRight.png"
        alt="茶色の右矢印"
        class="h-2 w-2 my-auto ml-4 mr-1"
      />
      <p>{msg}</p>
    </div>
  );
}
