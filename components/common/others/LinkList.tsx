interface Props {
  WlinkList?: { name?: string; link?: string }[][];
  linkList?: { name?: string; link?: string; border?: boolean }[];
}

//２列×n列（任意の数）のリンク集を作りたい時に使用する（例：ブランド詳細ページ）
export function WLinkList(props: Props) {
  return (
    <div class="mb-12">
      {props.WlinkList?.map((pairList) => (
        <div class="mx-5 border-b border-[#D6D6D6] text-[0.625rem] flex pl-2 pb-2 mb-2">
          {pairList.map((list) => (
            <div class="w-[50%]">
              <a href={list.link}>
                {list.name}
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

//1列×n列（任意の数）の右矢印付きリンク集を作りたい時に使用する（例：ブランド詳細ページ）
export function RightArrowLinkList(props: Props) {
  return (
    <div class="border-b mb-4">
      {props.linkList?.map((list) => (
        <a
          href={list.link}
          class={`${list.border ? "border-b" : ""}
              first:mt-8 mt-4 mx-5 px-2 pb-2 flex items-center `}
        >
          <p class="text-xs flex-1">{list.name}</p>
          <img src="/icon/common/arrow/grayRight.png" alt="右矢印" class="h-3" />
        </a>
      ))}
    </div>
  );
}
