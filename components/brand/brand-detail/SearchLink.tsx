interface Props {
  mt8?: boolean;
  noBorder?: boolean;
  title: string;
}

export function SearchLink(props: Props) {
  return (
    <div
      class={`mx-5 px-2 pb-2 flex items-center ${props.mt8 ? "mt-8" : "mt-4"} ${
        props.noBorder ? "" : "border-b border-[#D6D6D6]"
      }`}
    >
      <p class="text-xs flex-1">{props.title}</p>
      <img src="/icon/grayRightArrow.png" alt="右矢印" class="h-3" />
    </div>
  );
}
