//お問い合わせ欄を出すときに使用するコンポーネント

import { BrownButton } from "../button/Button.tsx";

export function Inquiry() {
  return (
    <div class="my-12 mx-5 border border-[#947771] rounded text-center">
      <p class="my-8">お電話でのお問い合わせ</p>
      <p class="text-2xl">0120-000-000</p>
      <p class="text-xs mt-2 mb-9">9時〜18時 / 年中無休</p>
      <BrownButton name="よくあるご質問・お問い合わせ" arrow="right" />
      <div class="h-6" />
    </div>
  );
}
