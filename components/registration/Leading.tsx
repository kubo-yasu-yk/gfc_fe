interface Props {
  title: string;
  mandatory?: boolean;
}

export function Leading(props: Props) {
  return (
    <div class="bg-[rgb(149,119,113,0.1)] h-8 border-y-[1px] border-solid border-[rgb(149,119,113,0.3)] flex flex-row leading-8 font-bold">
      <p class="ml-[5%] leading-8">{props.title}</p>
      {props.mandatory ? <p class="ml-3 text-[#FF7171]">必須</p> : null}
    </div>
  );
}
