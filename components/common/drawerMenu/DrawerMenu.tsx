//DrawerMenuの画面（未ログイン時の画面）
//todo:ログイン後の画面の実装

import { DrawerMenuHeader } from "../header/Header.tsx";
import { BrownButton } from "../button/Button.tsx";
import { Link } from "./Link.tsx";

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

export function DrawerMenu(props: Props) {
  return (
    <>
      <div class={`${props.open ? "relative w-full" : ""}`}>
        <div class={`bg-white relative top-0 ${props.open ? "open" : "close"}`}>
          <DrawerMenuHeader onClick={props.onClick} />
          <p class="text-sm my-4 text-center">
            ゲスト<span class="text-[0.625rem]">さん</span>
          </p>
          <BrownButton name="飲食フランチャイズ.comを試す" link="/registration/input" />
          <div class="h-8" />
          <Link itemName="ログイン" link="/login" />
          <div class="h-3 bg-[rgb(149,119,113,0.1)]" />
          <Link noBorderT={true} itemName="お気に入りブランド" link="" />
          <Link itemName="最近見たブランド" link="/mypage/browsing-history" />
          <Link itemName="申請中のブランド" link="/mypage/applying" />
          <Link itemName="契約中のブランド" link="/mypage/under-contract" />
          <div class="h-3 bg-[rgb(149,119,113,0.1)]" />
          <Link noBorderT={true} itemName="ジャンルから探す" link="" />
          <Link itemName="最近見たジャンル" link="" />
          <div class="h-3 bg-[rgb(149,119,113,0.1)]" />
          <Link noBorderT={true} itemName="人気ブランドランキング" link="" />
          <Link itemName="新着ブランド" link="" />
          <div class="h-3 bg-[rgb(149,119,113,0.1)]" />
          <Link noBorderT={true} itemName="お知らせ" link="" />
          <Link itemName="ご利用ガイド" link="" />
          <Link itemName="よくあるご質問" link="" />
          <Link itemName="お問い合わせ" link="" />
          <p class="border-t text-[0.625rem] text-center pt-[6rem] pb-8 text-[#947771]">
            @Insyoku Franchise.com 2022 All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
