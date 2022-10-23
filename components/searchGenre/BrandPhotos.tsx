export function BrandPhotos() {
  const colors = ["red", "blue", "black", "brown", "yellow"];
  return (
    <div class="flex w-full overflow-x-auto hidden-scrollbar">
      <div class="ml-5 mr-3 my-5 flex">
        {colors.map((color) => (
          <div
            class={`w-[6rem] h-[6rem] border border-[#947771] text-center mr-2 leading-[6rem] bg-[${color}]`}
          >
            <p class="text-white">写真</p>
          </div>
        ))}
      </div>
    </div>
  );
}
