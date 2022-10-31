//フッター挿入時に使用するコンポーネント

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
