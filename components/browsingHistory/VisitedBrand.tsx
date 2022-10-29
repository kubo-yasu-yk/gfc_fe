export function VisitedBrand() {
  const visitedBrands = [{
    name: "マクドナルド",
    genre: "ファーストフード",
    src: "/icon/browsingHistory/mac.png",
  }, {
    name: "丸亀製麺",
    genre: "和食",
    src: "/icon/browsingHistory/marukame.png",
  }, {
    name: "かぶきや",
    genre: "和食",
    src: "/icon/browsingHistory/kabukiya.jpeg",
  }];
  return (
    <>
      <div class="flex">
        {visitedBrands.map((brand) => (
          <div class="w-1/3 border-b border-r last:border-r-0">
            <img
              src={`${brand.src}`}
              alt="ブランドロゴ"
              class="w-[90%] mx-auto mt-2 mb-3"
            />
            <p class="text-sm ml-2 mb-1">{brand.name}</p>
            <p class="text-[0.625rem] ml-2">{brand.genre}</p>
            <div class="flex items-center justify-center my-3">
              <button class="bg-[#947771] h-6 w-[5.5rem] rounded text-[0.625rem] text-white">
                申請する
              </button>
              <img
                src="/icon/favorite-brown.png"
                alt="お気に入りボタン"
                class="w-4 h-4 ml-2"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
