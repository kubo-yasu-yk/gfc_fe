interface Props {
  placeholder: string;
  width: string;
  value?: string;
  onInput?: (e: Event) => void;
}

export function InputPassword(props: Props) {
  return (
    <input
      class={`text-[11px] ml-6 mt-2 mb-4 pl-2 w-[${props.width}] h-10 rounded-[5px] border-[#C3C3C3] border-[1px]`}
      placeholder={props.placeholder}
      type="password"
      value={props.value}
      onInput={props.onInput}
    />
  );
}
