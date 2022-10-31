//DrawerMenuの各リンク項目を設定するコンポーネント

interface Props {
  itemName: string;
  link: string;
  noBorderT?: boolean;
}

export function Link(props: Props) {
  return (
    <a
      href={`${props.link}`}
      class={`h-10 flex items-center ${props.noBorderT ? null : "border-t"}`}
    >
      <p class="text-xs ml-8 flex-1">{props.itemName}</p>
      <img
        src="/icon/grayRightArrow.png"
        alt="右矢印アイコン"
        class="h-3 w-3 mr-4"
      />
    </a>
  );
}
