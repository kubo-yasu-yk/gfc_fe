interface Props {
  contents: string;
  height?: number;
}

export function WhiteButton(props: Props) {
  return (
    <div class="flex justify-center">
      <button class="flex items-center bg-[#ffffff] border-[#947771] border rounded
        w-[18rem] h-10 text-[#947771] text-xs mt-5">
        <p class="mx-auto">{props.contents}</p>
      </button>
    </div>
  );
}

export function BrownButton(props: Props) {
  return (
    <div class="flex justify-center">
      <button
        class={`flex items-center bg-[#947771] rounded
        w-[18rem] mx-4 mb-2 h-10 text-white text-xs`}
      >
        <p class="mx-auto">{props.contents}</p>
      </button>
    </div>
  );
}
