interface Props {
  displayNumStart: number;
  displayNumEnd: number;
  totalNum: number;
}

//検索結果の数を表示する
export function ResultNumber(props: Props) {
  return (
    <div class="mt-5 mb-3 ml-5">
      <p class="text-sm">
        {props.displayNumStart} - {props.displayNumEnd}件 / {props.totalNum}件
      </p>
    </div>
  );
}
