//各種完了画面で使用するコンポーネント

interface Props {
  msg: string;
}

export function CompMsg(props: Props) {
  return (
    <div class="bg-[rgb(148,119,113,0.2)] my-12 mx-5 py-6 flex flex-col content-center rounded">
      <img
        src="/icon/complete.png"
        alt="完了アイコン"
        class="h-16 w-16 mb-5 mx-auto"
      />
      <p class="mx-auto text-sm">{props.msg}</p>
    </div>
  );
}
