import { Banner } from "../feature/Feature.tsx";
import { SearchBox } from "../input/SearchBox.tsx";
import { RightArrowLinkList, WLinkList } from "../others/LinkList.tsx";
import { SNSAccount } from "../others/SNSAccount.tsx";

//通常のフッターを挿入する時に使用する
export function Footer() {
  const contents = [
    { name: "飲食フランチャイズ.comのトップへ", link: "/" },
    { name: "ご利用ガイド", link: "" },
    { name: "利用規約", link: "/" },
    { name: "プライバシポリシー", link: "/" },
  ];
  return (
    <footer class="bg-[#947771] text-white mt-[16rem]">
      <ul class="pt-7 text-xs">
        {contents.map((content) => (
          <li class="ml-5 mb-4">
            <a href={content.link}>{content.name}</a>
          </li>
        ))}
      </ul>
      <p class="text-center text-[10px] pt-3 pb-7">
        @Insyoku Franchise.com 2022 All Rights Reserved
      </p>
    </footer>
  );
}

//長いフッターを挿入する時に使用する
export function LongFooter() {
  const wLinkList = [
    [{ name: "トップページへ", link: "/" }, { name: "マイページへ", link: "/mypage" }],
    [{ name: "特集ページ一覧", link: "" }, { name: "新着ブランド一覧", link: "" }],
    [{ name: "NEWS一覧", link: "" }, { name: "お問い合わせ", link: "" }],
  ];

  const banners = ["", "", ""]; //バナーを3つ出すために空の配列を作成している

  const linkList = [
    { name: "ジャンルから探す", link: "", border: true },
    { name: "お気に入りブランドから探す", link: "/mypage/favorite", border: true },
    { name: "閲覧履歴から探す", link: "/mypage/browsing-history", border: true },
    { name: "ランキングから探す", link: "" },
  ];
  return (
    <>
      <div class="bg-[rgb(149,119,113,0.1)] pt-2 pb-5 mb-12">
        <SearchBox />
        <RightArrowLinkList linkList={linkList} />
        <Banner banners={banners} />
      </div>
      <WLinkList WlinkList={wLinkList} />
      <SNSAccount />
      <Footer />
    </>
  );
}
