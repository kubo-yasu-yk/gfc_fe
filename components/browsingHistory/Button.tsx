interface Props {
  contents: string;
}

export function Button(props: Props) {
  return (
    <div class="flex justify-center">
      <button class="flex flex-row bg-[#ffffff] border-[#947771] border py-2.5 rounded-[5px]
        w-[18rem] h-10 text-[#947771] text-xs mb-8">
        <p class="m-auto pl-5">{props.contents}</p>
      </button>
    </div>
  );
}
