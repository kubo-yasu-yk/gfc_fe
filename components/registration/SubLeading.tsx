interface Props {
  title: string;
  mandatory?: boolean;
}

export function SubLeading(props: Props) {
  return (
    <div class="mt-4 mb-2 ml-[8%] flex flex-row font-bold">
      <p>{props.title}</p>
      {props.mandatory ? <p class="ml-3 text-[#FF7171]">必須</p> : null}
    </div>
  );
}
