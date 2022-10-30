export function CheckedBrand() {
  const newBrands = [{
    src: "/icon/brandLogo.png",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここ",
  }, {
    src: "/icon/brandLogo.png",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここガストの説明はここ",
  }, {
    src: "/icon/brandLogo.png",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここ",
  }];

  return (
    <>
      {newBrands.map((newBrand) => (
        <div class="h-[6.25rem] mx-4 border rounded-[5px] mb-3 last:mb-6 flex flex-row">
          <img
            src={`${newBrand.src}`}
            alt="ブランドロゴ"
            class="h-[3.75rem] w-[3.75rem] my-5 ml-3 mr-1"
          />
          <div class="mx-3 my-3.5">
            <p class="text-[14px] font-semibold mb-1">{newBrand.name}</p>
            <p class="text-[0.625rem]">
              {newBrand.content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
