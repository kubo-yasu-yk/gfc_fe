interface Props {
  title: string;
}

export function Leading(props: Props) {
  return (
    <div class="bg-[rgb(149,119,113,0.1)] h-8 border-y-[1px]
    border-[rgb(149,119,113,0.3)] flex items-center">
      <p class="ml-3 text-sm">{props.title}</p>
    </div>
  );
}
