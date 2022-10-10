export function Icons() {
  const icons = [
    { src: "/icon/favorite.png", alt: "お気に入りアイコン", label: "お気に入り" },
    { src: "/icon/history.png", alt: "閲覧履歴アイコン", label: "閲覧履歴" },
    { src: "/icon/application.png", alt: "申請中アイコン", label: "申請中ブランド" },
    { src: "/icon/contract.png", alt: "契約中アイコン", label: "契約中ブランド" },
  ];
  return (
    <div class="my-6 flex flex-row place-content-around">
      {icons.map((icon) => (
        <div class="text-[0.625rem] flex flex-col items-center w-[4.5rem]">
          <img
            src={`${icon.src}`}
            alt={`${icon.alt}`}
            class="h-6 w-6 mb-1"
          />
          <p>{icon.label}</p>
        </div>
      ))}
    </div>
  );
}
