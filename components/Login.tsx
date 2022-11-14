//ログイン画面の要素をまとめたコンポーネント

import { BrownHeader } from "../components/common/Header.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { Input } from "../components/common/input/Input.tsx";
import { GrayButton } from "../components/common/Button.tsx";
import { Footer } from "../components/common/Footer.tsx";

interface Props {
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
          <p class="mt-1 text-2.5 text-red">
            {!mail ? "メールアドレスが入力されていません。" : null}
          </p>
          <Input
            klass="w-full my-1 mb-8"
            placeholder="insyoku.franchise@insyoku.co.jp"
            value={mail}
            onInput={onInputMail}
          />
          <p class="text-xs">
            パスワード
          </p>
          <p class="mt-1 text-2.5 text-red">
            {!password ? "パスワードが入力されていません。" : null}
          </p>
          <Input
            klass="w-full my-1"
            placeholder="半角英数字の6~20文字"
            value={password}
            onInput={onInputPassword}
          />
          <p class="text-right text-2.5">
            パスワードを表示する
          </p>
          <GrayButton
            name="ログイン"
            klass="mt-8 mb-4"
            disabled={isDisabled()}
            onClick={(e) => console.log(e)}
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
