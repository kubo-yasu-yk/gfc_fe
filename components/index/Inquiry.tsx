import { BrownButton2 } from "../common/BrownButton.tsx";

export function Inquiry() {
  return (
    <div class="my-12 mx-auto max-w-[21rem] border border-[#947771] rounded-[5px] text-center font-light">
      <p class="my-8">お電話でのお問い合わせ</p>
      <p class="text-2xl">0120-000-000</p>
      <p class="text-xs mt-2 mb-9">9時〜18時 / 年中無休</p>
      <BrownButton2 contents="よくあるご質問・お問い合わせ" mandatory={true} />
    </div>
  );
}
