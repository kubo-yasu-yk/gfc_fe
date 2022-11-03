import { BrownHeader } from "../../components/common/header/Header.tsx";
import { Title } from "../../components/common/screen-title/Title.tsx";
import { StepBar } from "../../components/registration/StepBar.tsx";
import Main from "../../islands/RegistrationInput.tsx";
import { Permission } from "../../components/registration/Permission.tsx";
import { GrayButton } from "../../components/common/button/Button.tsx";

export default function routes() {
  return (
    <>
      <BrownHeader />
      <Title title="新規会員登録" />
      <StepBar step={1} />
      <Main />
      <Permission />
      <div class="mt-12 mb-[17.5rem]">
        <GrayButton
          name="確認画面へ"
          arrow="right"
          link="/registration/confirmation"
        />
      </div>
    </>
  );
}
