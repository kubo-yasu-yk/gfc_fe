interface Props {
  contents: string;
  disabled?: boolean;
  onClick?: (e: Event) => void;
}

export function Button(props: Props) {
  return (
    <div class="grid place-items-center">
      <button
        class={`${
          props.disabled ? "bg-[#EBEBEB]" : "bg-[#947771]"
        } py-2.5 rounded-[5px] w-[85%] text-[#ffffff] text-[14px] mb-4`}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        <p class="mx-auto">{props.contents}</p>
      </button>
    </div>
  );
}
