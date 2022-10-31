import { MainHeader } from "../../components/common/MainHeader.tsx";
import { Title } from "../../components/common/Title.tsx";
import { SubFooter } from "../../components/common/SubFooter.tsx";
import { BrandList } from "../../components/mypage/BrandList.tsx";
import { RegisteredContents } from "../../components/mypage/RegisteredContents.tsx";
import FavoriteBrands from "../../islands/FavoriteBrands.tsx";
import { Leading } from "../../components/common/Leading.tsx";
import { CheckedBrands } from "../../components/mypage/CheckedBrands.tsx";
import { Inquiry } from "../../components/common/others/Inquiry.tsx";
import { PublicAccount } from "../../components/common/PublicAccount.tsx";
// import L from "../islands/Login.tsx";

export default function Index() {
  const contents = [
    { src: "/icon/mypage/human.png", alt: "人型アイコン", label: "会員情報の確認・変更" },
    { src: "/icon/mypage/lock.png", alt: "鍵アイコン", label: "パスワードの変更" },
    { src: "/icon/mypage/card.png", alt: "クレカアイコン", label: "決済情報の登録・確認・変更" },
    { src: "/icon/mypage/mail.png", alt: "メールアイコン", label: "メルマガ受信設定の変更" },
  ];

  return (
    <>
      <MainHeader />

      <Title title="マイページ" />
      <p class="text-center text-[#5F5F5F] font-bold my-5">グルメ商店さま</p>

      <BrandList contents="契約中ブランド一覧" />
      <BrandList contents="申請中ブランド一覧" />

      <p class="text-[12px] text-[rgb(95,95,95,0.35)] font-bold text-right mr-5">
        申請履歴は<span class="underline underline-offset-auto">コチラ</span>
      </p>

      <Leading title="人気ブランド総合ランキング" more="すべて見る" mandatory={true} />
      <FavoriteBrands />

      <Leading title="最近チェックしたブランド" more="すべて見る" mandatory={true} />
      <CheckedBrands />

      <Leading title="登録内容の確認・修正" />
      <RegisteredContents contents={contents} />
      <p class="text-[14px] text-[rgb(95,95,95,0.35)] font-bold text-right mt-3 mr-5">
        退会する場合は<span class="underline underline-offset-auto">コチラ</span>
      </p>

      <Inquiry />
      <PublicAccount />

      {/* <L></L> */}

      {
        /* <p class="text-[10px] text-[#947771] text-center font-bold mb-6">
        初めてのご利用の方（新規会員登録）
      </p>

      <div class="flex flex-row my-2">
        <img
          src="/icon/brownRightArrow.png"
          alt="茶色の右矢印"
          class="h-3 w-3 my-auto mx-4 text-right"
        />
        <p class="text-[10px] text-[#5F5F5F] font-bold">
          メールアドレスをお忘れですか？
        </p>
      </div>

      <div class="flex flex-row my-2">
        <img
          src="/icon/brownRightArrow.png"
          alt="茶色の右矢印"
          class="h-3 w-3 my-auto mx-4 text-right"
        />
        <p class="text-[10px] text-[#5F5F5F] font-bold">
          パスワードをお忘れですか？
        </p>
      </div> */
      }

      <SubFooter />
    </>
  );
}
