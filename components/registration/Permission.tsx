//利用規約とプライバシポリシーへの同意を求める際に使う
export function Permission() {
  return (
    <div class="text-[0.625rem] w-11/12 h-16 bg-[rgb(255,212,203,0.2)] mx-auto mt-12 rounded flex items-center">
      <input
        type="checkbox"
        class="w-4 h-4 bg-white ml-3 mr-2"
      />
      <p>
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
