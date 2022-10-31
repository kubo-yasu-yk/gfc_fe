//確認画面のタイトル下部に出る確認メッセージ

interface Props {
  msg: string;
}

export function ConfirmMsg(props: Props) {
  return (
    <div class="text-[0.625rem] my-8 ml-4">
      <p>以下の内容で{props.msg}します。</p>
      <p>よろしければ「{props.msg}する」ボタンを押してください。</p>
    </div>
  );
}
