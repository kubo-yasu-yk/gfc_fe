//小見出しに使うコンポーネント
//todo:トップページの小見出し右の青文字リンクのリンク先を記入（画面が出来次第）

interface Props {
  title: string;
  more?: boolean;
  link?: string;
  linkName?: string;
  mandatory?: boolean;
}

//見出しは基本こっちを使う
export function Leading(props: Props) {
  return (
    <div class="mx-5 mb-2 mt-8 flex items-center">
      <p class="text-sm font-medium">{props.title}</p>
      {props.more
        ? (
          <>
            <div class="flex-1" />
            <a href={`${props.link}`}>
              <p class="text-[#0085FF] text-[0.625rem]">{props.linkName}</p>
            </a>
          </>
        )
        : null}
    </div>
  );
}

//新規会員登録系の画面で使用する背景色付きの小見出し
export function BgLeading(props: Props) {
  return (
    <div class="bg-[rgb(149,119,113,0.1)] h-8 flex items-center">
      <p class="ml-5">{props.title}</p>
      {props.mandatory ? <p class="ml-3 text-[#FF7171]">必須</p> : null}
    </div>
  );
}