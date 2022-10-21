export function CheckedBrands() {
  const checkedBrands = [{
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
      {checkedBrands.map((checkedBrand) => (
        <div class="h-[6.25rem] mx-4 border rounded-[5px] mb-3 last:mb-6 flex flex-row">
          <img
            src={`${checkedBrand.src}`}
            alt="ブランドロゴ"
            class="h-[3.75rem] w-[3.75rem] my-5 ml-3 mr-1"
          />
          <div class="mx-3 my-3.5">
            <p class="text-[14px] text-[#5F5F5F] font-semibold mb-1">{checkedBrand.name}</p>
            <p class="text-[0.625rem] text-[#5F5F5F] font-semibold">
              {checkedBrand.content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
