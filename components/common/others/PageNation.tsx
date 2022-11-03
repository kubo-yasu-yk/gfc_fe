interface Props {
  displayNumStart: number;
  displayNumEnd: number;
}

//ページネーションを使用するときに使うコンポーネント
export function PageNation(props: Props) {
  return (
    <div class="h-10 flex items-center text-center px-5 my-10 border-y">
      <a href="#">
        <img
          src="/icon/common/arrow/grayLeft.png"
          alt="左矢印"
          class="h-2.5 w-2.5"
        />
      </a>

      <p class="text-xs flex-1">
        {props.displayNumStart} / {props.displayNumEnd} ページ
      </p>
      <a href="#">
        <img
          src="/icon/common/arrow/grayRight.png"
          alt="右矢印"
          class="h-2.5 w-2.5"
        />
      </a>
    </div>
  );
}
