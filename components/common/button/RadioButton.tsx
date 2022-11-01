interface Props {
  buttonList: {
    name: string;
    label: string;
    checked?: boolean; //デフォルトで選択させたいときに使用する
    onClick?: () => void; //関数を与えたいときに使用する
  }[];
}

//単一選択をさせたいときに使用する
export function RadioButton(props: Props) {
  return (
    <div class="flex">
      {props.buttonList.map((button) => (
        <label class="flex text-xs items-center mt-4 mr-4 mb-7 ml-8">
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
