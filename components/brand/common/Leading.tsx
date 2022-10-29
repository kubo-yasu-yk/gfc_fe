interface Props {
  title: string;
}

export function Leading(props: Props) {
  return (
    <div class="bg-[rgb(149,119,113,0.1)] h-8 border-y border-[rgb(149,119,113,0.3)] flex items-center font-bold">
      <p class="ml-[5%] text-[0.625rem]">{props.title}</p>
    </div>
  );
}
