import { useState } from "preact/hooks";
import { BrownHeader } from "../components/common/Header.tsx";
import { Title } from "../components/common/screen-title/Title.tsx";
import { HiddenInput, Input } from "../components/common/input/Input.tsx";
import { GrayButton } from "../components/common/Button.tsx";
import { Footer } from "../components/common/Footer.tsx";
import { Login } from "../components/Login.tsx";

export default function islands() {
  const [error, setError] = useState("");
  const [mail, setMail] = useState({
    value: "",
    error: "",
    dirty: false,
    bg: false,
  });
  const [pass, setPass] = useState({
    value: "",
    error: "",
    dirty: false,
    bg: false,
  });

  const onMail = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    const regex =
      /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (regex.test(value)) {
      setMail({
        value,
        error,
        dirty: true,
        bg: false,
      });
    } else {
      if (value) {
        setMail({
          value,
          error: "正しいメールアドレスを入力してください",
          dirty: true,
          bg: true,
        });
      } else {
        setMail({
          value,
          error: "メールアドレスが入力されていません。",
          dirty: true,
          bg: true,
        });
      }
    }
  };

  const onPass = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    const regex = /^([a-zA-Z0-9]{6,20})$/;
    if (regex.test(value)) {
      setPass({
        value,
        error,
        dirty: true,
        bg: false,
      });
    } else {
      if (value) {
        setPass({
          value,
          error: "6~20文字の半角英数字で入力してください。",
          dirty: true,
          bg: true,
        });
      } else {
        setPass({
          value,
          error: "パスワードが入力されていません。",
          dirty: true,
          bg: true,
        });
      }
    }
  };

  const isValid = (state: { value: string; error: string; dirty: boolean }) => {
    return !state.error && state.dirty;
  };

  const disabled = () => {
    let valid = true;
    [mail, pass].forEach((state) => valid &&= isValid(state));
    return !valid;
  };

  return (
    <>
      <BrownHeader />
      <main>
        <Title title="ログイン" />
        <div class="mx-8">
          <p class="mt-8 text-2.5">
            メールアドレス
          </p>
          <span class="my-1 text-2.5 text-red">{mail.error}</span>
          <Input
            onInput={onMail}
            klass={`w-full my-1 mb-4 ${mail.bg ? "bg-red" : null}`}
            placeholder="insyoku.franchise@insyoku.co.jp"
          />
          <p class="text-2.5">
            パスワード
          </p>
          <span class="my-1 text-2.5 text-red">{pass.error}</span>
          <HiddenInput
            onInput={onPass}
            klass="w-full my-1"
            krass={pass.bg ? "bg-red" : ""}
            placeholder="半角英数字の6~20文字"
          />
          <GrayButton
            link="/"
            name="ログイン"
            klass="mt-10 mb-4"
            onClickButton={disabled}
          />
          <a href="/registration/input" class="text-center text-2.5">
            <p>初めてのご利用の方（新規会員登録）</p>
          </a>
        </div>
        <Forget msg="メールアドレスをお忘れですか？" klass="mt-10 mb-2" />
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
