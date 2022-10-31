import { BrownHeader } from "../../components/common/header/Header.tsx";
import { Title } from "../../components/common/screen-title/Title.tsx";
import { Step } from "../../components/registration/common/StepBar.tsx";
import Main from "../../islands/RegistrationInput.tsx";
import { Check } from "../../components/registration/input/Check.tsx";
import { GrayButton } from "../../components/common/button/Button.tsx";

export default function Input() {
  return (
    <>
      <BrownHeader />
      <Title title="新規会員登録" />
      <Step step={1} />
      <Main />
      <Check />
      <div class="mt-12 mb-[17.5rem]">
        <GrayButton name="確認画面へ" arrow="right" />
      </div>
    </>
  );
}
