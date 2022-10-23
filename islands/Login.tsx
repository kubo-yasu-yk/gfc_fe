import { Button } from "../components/common/Button.tsx";
import { InputMail } from "../components/login/InputMail.tsx";
import { InputPassword } from "../components/login/InputPassword.tsx";
import { useState } from "preact/hooks";

export default function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const onInputMail = (e: Event) => {
    // console.log((e.target as HTMLInputElement).value);
    setMail((e.target as HTMLInputElement).value);
  };
  const onInputPassword = (e: Event) => {
    // console.log((e.target as HTMLInputElement).value);
    setPassword((e.target as HTMLInputElement).value);
  };

  const isDisabled = () => {
    return !mail || !password;
  };

  return (
    <>
      <p class="text-[12px] text-[#5F5F5F] font-bold ml-6 mt-6">
        メールアドレス
      </p>
      <p class="text-[10px] text-[#FF0000] font-bold ml-6 mt-2">
        {!mail ? "メールアドレスが入力されていません。" : null}
      </p>
      <InputMail
        placeholder="insyoku.franchise@insyoku.co.jp"
        width="20rem"
        value={mail}
        onInput={onInputMail}
      />

      <p class="text-[12px] text-[#5F5F5F] font-bold ml-6 mt-3">
        パスワード
      </p>

      <p class="text-[10px] text-[#FF0000] font-bold ml-6 mt-2">
        {!password ? "パスワードが入力されていません。" : null}
      </p>

      <InputPassword
        placeholder="半角英数字の6~20文字"
        width="20rem"
        value={password}
        onInput={onInputPassword}
      />

      <p class="text-[10px] text-[#947771] text-right mr-4 mb-8 font-bold">
        パスワードを表示する
      </p>

      <Button
        contents="ログイン"
        disabled={isDisabled()}
        onClick={(e) => console.log(e)}
      />
    </>
  );
}
