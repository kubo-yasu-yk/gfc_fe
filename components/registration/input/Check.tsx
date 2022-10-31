export function Check() {
  return (
    <div class="text-[0.625rem] w-[95%] h-[4rem] bg-[rgb(255,212,203,0.2)] mx-auto mt-12 rounded flex">
      <input
        type="checkbox"
        class="w-4 h-4 my-auto bg-white rounded ml-3 mr-2"
      />
      <p class="my-auto">
        <a href="#" class="text-[#0085FF]">利用規約</a>と
        <a
          href="#"
          class="text-[#0085FF]"
        >
          プライバシーポリシー
        </a>に同意する。
      </p>
    </div>
  );
}
