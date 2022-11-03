//検索結果の数を表示するコンポーネント

interface Props {
  displayNumStart?: number;
  displayNumEnd?: number;
  totalNum?: number;
  genre?: boolean;
}

export function ResultNumber(props: Props) {
  return (
    <div class="mt-5 mb-3 ml-5 flex items-end">
      {props.genre ? <p class="text-sm mr-2">和食</p> : null}
      <p class="text-[0.625rem]">
        {props.displayNumStart} - {props.displayNumEnd}件 / {props.totalNum}件
      </p>
    </div>
  );
}
