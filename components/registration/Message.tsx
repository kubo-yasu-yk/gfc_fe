interface Props {
  message: string;
}

export function Message(props: Props) {
  return (
    <div class="my-2 mx-[8%] flex flex-row">
      <p class="text-[8px]">{props.message}</p>
    </div>
  );
}
