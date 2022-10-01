interface Props {
  step: number;
}

export function Step(props: Props) {
  return (
    <div class="mt-5">
      <div class="flex flex-row flex-1 mx-auto w-[16.875rem]">
        <div class="h-2.5 w-2.5 bg-[#947771] rounded-[5px]" />
        {props.step > 1
        ?<div class="h-[1px] w-[7.5rem] bg-[#947771] my-auto" />
        :<div class="h-[1px] w-[7.5rem] bg-[#E1E1E1] my-auto" />}
        {props.step > 1
        ?<div class="h-2.5 w-2.5 bg-[#947771] rounded-[5px]" />
        :<div class="h-2.5 w-2.5 border border-solid border-[#E1E1E1] rounded-[5px]" />}
        {props.step > 2
        ?<div class="h-[1px] w-[7.5rem] bg-[#947771] my-auto" />
        :<div class="h-[1px] w-[7.5rem] bg-[#E1E1E1] my-auto" />}
        {props.step > 2
        ?<div class="h-2.5 w-2.5 bg-[#947771] rounded-[5px]" />
        :<div class="h-2.5 w-2.5 border border-solid border-[#E1E1E1] rounded-[5px]" />}
      </div>

      <div class="w-[17.5rem] flex flex-row justify-between mx-auto mt-1">
        <p class="text-[8px] text-[#947771]">登録</p>
        {props.step > 1
        ?<p class="text-[8px] text-[#947771]">確認</p>
        :<p class="text-[8px] text-[#E1E1E1]">確認</p>}
        {props.step > 2
        ?<p class="text-[8px] text-[#947771]">完了</p>
        :<p class="text-[8px] text-[#E1E1E1]">完了</p>}
      </div>
    </div>
  );
}
