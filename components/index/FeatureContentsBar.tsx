export function FeatureContentsBar() {
  return (
    <>
      <div class="border-b mx-5 my-4 flex flex-row text-xs">
        <input
          id="recom"
          class="hidden"
          type="radio"
          name="tab"
          checked
        />
        <label
          for="recom"
          class="w-[25%] text-center label-checked:border-b label-checked:border-[#FF6B00]"
        >
          おすすめ
        </label>
        <input class="hidden" type="radio" name="tab">
          <label class="w-[25%] checked:border-b checked:border-[#FF6B00] text-center">
            新着
          </label>
        </input>
        <input class="hidden" type="radio" name="tab">
          <label class="w-[25%]  text-center">事例紹介</label>
        </input>
        <input class="hidden" type="radio" name="tab">
          <label class="w-[25%]  text-center">読みもの</label>
        </input>
      </div>
    </>
  );
}
