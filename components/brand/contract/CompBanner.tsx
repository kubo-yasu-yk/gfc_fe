export function CompBanner() {
  return (
    <div class="bg-[rgb(148,119,113,0.2)] my-12 mx-4 py-6 flex flex-col content-center">
      <img
        src="/icon/complete.png"
        alt="完了アイコン"
        class="h-16 w-16 mb-5 mx-auto"
      />
      <div class="text-[#5F5F5F] text-center font-bold text-sm">
        <p>契約が完了しました。</p>
        <p>引き続き飲食フランチャイズ.comのご利用を</p>
        <p>よろしくお願いいたします。</p>
      </div>
    </div>
  );
}
