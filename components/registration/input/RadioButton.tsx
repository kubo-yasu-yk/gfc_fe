interface Props {
  buttonList: {
    name: string;
    label: string;
    checked?: boolean;
    onClick: () => void;
  }[];
}

export function RadioButton(props: Props) {
  return (
    <div class="flex">
      {props.buttonList?.map((button) => (
        <label class="flex mt-4 mr-4 mb-7 ml-8">
          <input
            type="radio"
            name={button.name}
            class="w-3.5 h-3.5 rounded-full
                  border mr-2"
            required
            checked={button.checked}
            onClick={button.onClick}
          />
          {button.label}
        </label>
      ))}
    </div>
  );
}
