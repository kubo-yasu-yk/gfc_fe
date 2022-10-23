interface Props {
  name: string;
  onClick?: (e: Event) => void;
}

export function Button(props: Props) {
  return (
    <button
      class="h-10 w-[50%] border border-[#947771] rounded-[5px] text-[#947771] text-[0.75rem] first:mr-3"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}
