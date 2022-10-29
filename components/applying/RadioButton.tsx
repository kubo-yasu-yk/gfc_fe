interface Props {
  label: string;
  name: string;
  checked?: boolean;
  onClick?: () => void;
}

export function RadioButton(props: Props) {
  return (
    <>
      <label class="flex text-xs items-center ml-5 my-5">
        <input
          type="radio"
          name={props.name}
          class="w-3 h-3 rounded-xl border mr-1"
          required
          checked={props.checked}
          onClick={props.onClick}
        />
        {props.label}
      </label>
    </>
  );
}
