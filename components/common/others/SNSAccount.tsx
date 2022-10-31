//SNSアイコンを出すときに使うコンポーネント
//todo:linkの設定

export function SNSAccount() {
  const icons = [
    { src: "/icon/common/sns/Facebook.png", alt: "Facebookのアイコン", link: "" },
    { src: "/icon/common/sns/Twitter.png", alt: "Twitterのアイコン", link: "" },
    { src: "/icon/common/sns/Instagram.png", alt: "Instagramのアイコン", link: "" },
    { src: "/icon/common/sns/LINE.png", alt: "LINEのアイコン", link: "" },
  ];
  return (
    <div class="text-center mb-[15rem]">
      <p class="text-[0.625rem] mb-5">飲食フランチャイズ.com公式アカウント</p>
      <div class="flex w-[16rem] mx-auto justify-between">
        {icons.map((icon) => (
          <a>
            <img
              src={icon.src}
              alt={icon.alt}
              class="w-9 h-9"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
