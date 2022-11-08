import { RoundedBrowwnButton, RoundedWhiteButton } from "../Button.tsx";

//絞り込み条件を選択するときの画面におけるフッター（リセットボタンあり）
export function Footer() {
  return (
    <div class="w-full h-12 flex items-center px-5 fixed bottom-0 bg-lightgray">
      <RoundedWhiteButton name="リセット" />
      <div class="w-4" />
      <RoundedBrowwnButton name="検索" />
    </div>
  );
}
