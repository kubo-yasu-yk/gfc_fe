interface Props {
  itemName: string;
}

export function Item(props: Props) {
  return (
    <a href="#" class="h-10 border-t border-[#947771] flex items-center">
      <p class="text-xs ml-8 flex-1">{props.itemName}</p>
      <img
        src="/icon/grayRightArrow.png"
        alt="右矢印アイコン"
        class="h-3 w-3 mr-4"
      />
    </a>
  );
}
