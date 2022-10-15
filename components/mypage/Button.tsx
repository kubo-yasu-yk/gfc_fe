interface Props {
  onClick?: (e: Event) => void;
}

export function Button(props: Props) {
  return (
    <div class="grid place-items-center">
      <button
        class="rounded-[5px] w-full  mt-1 py-1 bg-[#947771]"
        onClick={props.onClick}
      >
        <p class="mx-auto font-semibold text-[#ffffff] text-[10px]">申請する</p>
      </button>
    </div>
  );
}
