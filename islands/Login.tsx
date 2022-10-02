import { BrownButton } from "../components/common/BrownButton.tsx";
import { Input } from "../components/registration/Input.tsx";
import { InputPassword } from "../components/registration/InputPassword.tsx";
import { useState } from "preact/hooks";

export default function Login() {
  const [password, setPassword] = useState("");
  const onInputPassword = (e: Event) => {
    console.log(e.target);
  };

  return (
    <>
      <p class="text-[12px] text-[#5F5F5F] text-left font-bold ml-4 mt-6">
        メールアドレス
      </p>
      <p>メールアドレスが正しくありません。</p>
      <Input placeholder="insyoku.franchise@insyoku.co.jp" width="20rem" />

      <p class="text-[12px] text-[#5F5F5F] text-left font-bold ml-4 mt-3">
        パスワード
      </p>
      <p>
        パスワードが正しくありません。<br></br>8~20文字の半角英数字で入力してください。
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

      <BrownButton contents="ログイン" mandatory={false} />
    </>
  );
}
