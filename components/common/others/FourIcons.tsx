//お気に入り・閲覧履歴・申請中ブランド・契約中ブランドのアイコンが横並びになっている
//todo:お気に入りのlink修正

export function FourIcons() {
  const icons = [
    {
      link: "/mypage/favorite",
      src: "/icon/favorite.png",
      alt: "お気に入りアイコン",
      label: "お気に入り",
    },
    {
      link: "/mypage/browsing-history",
      src: "/icon/history.png",
      alt: "閲覧履歴アイコン",
      label: "閲覧履歴",
    },
    {
      link: "/mypage/applying",
      src: "/icon/application.png",
      alt: "申請中アイコン",
      label: "申請中ブランド",
    },
    {
      link: "/mypage/under-contract",
      src: "/icon/contract.png",
      alt: "契約中アイコン",
      label: "契約中ブランド",
    },
  ];
  return (
    <div class="my-6 flex place-content-around">
      {icons.map((icon) => (
        <div class="w-1/4">
          <a href={`${icon.link}`} class="flex flex-col items-center ">
            <img
              src={`${icon.src}`}
              alt={`${icon.alt}`}
              class="h-6 w-6 mb-1"
            />
            <p class="text-[0.625rem]">{icon.label}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
