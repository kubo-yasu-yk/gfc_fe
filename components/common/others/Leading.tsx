//小見出しに使うコンポーネント
//todo:トップページの小見出し右の青文字リンクのリンク先を記入（画面が出来次第）

interface Props {
  title: string;
  more?: boolean;
  link?: string;
  linkName?: string;
}

export function Leading(props: Props) {
  return (
    <div class="mx-5 mb-2 mt-8 flex items-center">
      <h3 class="text-sm font-medium">{props.title}</h3>
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
