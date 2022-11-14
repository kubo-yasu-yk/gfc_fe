import { useState } from "preact/hooks";
import { Login } from "../components/Login.tsx";

export default function islands() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const onInputMail = (e: Event) => {
    setMail((e.target as HTMLInputElement).value);
  };
  const onInputPassword = (e: Event) => {
    setPassword((e.target as HTMLInputElement).value);
  };

  const isDisabled = () => {
    return !mail || !password;
  };

  return <Login />;
}
