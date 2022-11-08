//マイページトップの要素をまとめたコンポーネント

import { LoginHeader } from "./common/Header.tsx";
import { Title } from "./common/screen-title/Title.tsx";
import { BlackButton } from "./common/Button.tsx";
import { Leading } from "./common/others/Leading.tsx";
import { ScrollFavBrand } from "./common/scroll/Scroll.tsx";
import { BorderLinkList } from "./common/others/LinkList.tsx";
import { BrandList } from "./common/Brand.tsx";
import { Inquiry } from "./common/others/Inquiry.tsx";
import { SNSAccount } from "./common/others/SNSAccount.tsx";
import { Footer } from "./common/Footer.tsx";

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

export function Mypage(props: Props) {
  const settingList = [
    { name: "会員情報の確認・変更", src: "/icon/mypage/human.png", alt: "人型アイコン" },
    { name: "パスワードの変更", src: "/icon/mypage/lock.png", alt: "鍵アイコン" },
    { name: "決済情報の登録・確認・変更", src: "/icon/mypage/card.png", alt: "クレカアイコン" },
    { name: "メルマガ受信設定の変更", src: "/icon/mypage/mail.png", alt: "メールアイコン" },
  ];

  const visitedBrandList = [{
    name: "ガスト",
    src: "/image/brandLogo/logo1.jpg",
    content: "ガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここ",
  }, {
    name: "ガスト",
    src: "/image/brandLogo/logo1.jpg",
    content: "ガストの説明はここガストの説明はここガストの説明はここ",
  }, {
    name: "ガスト",
    src: "/image/brandLogo/logo1.jpg",
    content: "ガストの説明はここガストの説明はここ",
  }];

  const favBrandList = [{
    genre: "洋食",
    name: "ガスト",
    src: "/image/brandLogo/logo1.jpg",
  }, {
    genre: "洋食",
    name: "ガスト",
    src: "/image/brandLogo/logo1.jpg",
  }, {
    genre: "洋食",
    name: "ガスト",
    src: "/image/brandLogo/logo1.jpg",
  }];

  return (
    <div
      class={`${props.open ? "fixed w-full" : ""}`}
    >
      <LoginHeader onClick={props.onClick} />

      <Title title="マイページ" />
      <p class="text-center my-5">グルメ商店さま</p>
      <BlackButton
        name="契約中ブランド一覧"
        link="/mypage/under-contract"
        arrow="right"
      />
      <div class="h-2" />
      <BlackButton
        name="申請中ブランド一覧"
        link="/mypage/applying"
        arrow="right"
      />
      <div class="w-72 flex mx-auto mt-2">
        <div class="flex-1" />
        <p class="text-xs text-lightGray">
          申請履歴は<a
            href="/mypage/application-history"
            class="underline"
          >
            コチラ
          </a>
        </p>
      </div>

      <Leading
        title="お気に入りブランド"
        more={true}
        linkName="すべて見る"
        link="/mypage/favorite"
      />
      <ScrollFavBrand brandList={favBrandList} />

      <Leading
        title="最近チェックしたブランド"
        more={true}
        linkName="すべて見る"
        link="/mypage/browsing-history"
      />
      <BrandList brandList={visitedBrandList} />

      <Leading title="登録内容の確認・修正" />
      <BorderLinkList linkList={settingList} />
      <div class="flex w-11/12 mx-auto mt-2">
        <div class="flex-1" />
        <p class="text-xs text-lightGray">
          退会する場合は<a
            href=""
            class="underline"
          >
            コチラ
          </a>
        </p>
      </div>

      <Inquiry />
      <SNSAccount />
      <Footer />
    </div>
  );
}
