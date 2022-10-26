import { NoArrowButton } from "./Button.tsx";
import { Item } from "./HamburgerMenu/Item.tsx";
import { LightBrownBox } from "./HamburgerMenu/lightBrownBox.tsx";

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

export function DrawerMenu(props: Props) {
  return (
    <>
      <div class={`${props.open ? "fixed w-full" : ""}`}>
        <div class={`bg-white relative top-0 ${props.open ? "open" : "close"}`}>
          <div class="h-16 bg-[#947771]">
            <div class="h-full w-12 ml-4 bg-white">
              <img
                src="/icon/cross.png"
                alt="バツアイコン"
                class="h-11 w-6 mx-auto pt-5"
                onClick={props.onClick}
              />
            </div>
          </div>
          <p class="text-[0.875rem] my-4 text-center">
            ゲスト<span class="text-[0.625rem]">さん</span>
          </p>
          <NoArrowButton contents="飲食フランチャイズ.comを試す" />
          <Item itemName="ログイン" />
          <LightBrownBox height="3" />
          <Item itemName="お気に入りブランド" />
          <Item itemName="最近見たブランド" />
          <Item itemName="申請中のブランド" />
          <Item itemName="契約中のブランド" />
          <LightBrownBox height="3" />
          <Item itemName="ジャンルから探す" />
          <Item itemName="最近見たジャンル" />
          <LightBrownBox height="3" />
          <Item itemName="人気ブランドランキング" />
          <Item itemName="新着ブランド" />
          <LightBrownBox height="3" />
          <Item itemName="お知らせ" />
          <Item itemName="ご利用ガイド" />
          <Item itemName="よくあるご質問" />
          <Item itemName="お問い合わせ" />
          <p class="border-t border-[#947771] text-[0.625rem] text-center pt-[6rem] pb-8 text-[#947771]">
            @Insyoku Franchise.com 2022 All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
