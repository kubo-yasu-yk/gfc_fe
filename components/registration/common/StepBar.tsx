interface Props {
  step: number;
}

export function Step(props: Props) {
  return (
    <div class="mt-5">
      <div class="flex mx-auto w-[17rem]">
        <div class="h-2.5 w-2.5 bg-[#947771] rounded-full" />
        {props.step > 1
          ? <div class="h-px w-[7.5rem] bg-[#947771] my-auto" />
          : <div class="h-px w-[7.5rem] bg-[#E1E1E1] my-auto" />}
        {props.step > 1
          ? <div class="h-2.5 w-2.5 bg-[#947771] rounded-full" />
          : <div class="h-2.5 w-2.5 border rounded-full" />}
        {props.step > 2
          ? <div class="h-px w-[7.5rem] bg-[#947771] my-auto" />
          : <div class="h-px w-[7.5rem] bg-[#E1E1E1] my-auto" />}
        {props.step > 2
          ? <div class="h-2.5 w-2.5 bg-[#947771] rounded-full" />
          : <div class="h-2.5 w-2.5 border rounded-full" />}
      </div>

      <div class="w-[17.625rem] flex justify-between mx-auto mt-1 text-[0.625rem] text-[#947771]">
        <p>登録</p>
        {props.step > 1 ? <p>確認</p> : <p class="text-[#E1E1E1]">確認</p>}
        {props.step > 2 ? <p>完了</p> : <p class="text-[#E1E1E1]">完了</p>}
      </div>
    </div>
  );
}
