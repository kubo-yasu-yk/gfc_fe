interface Props {
  contents: string[][];
}

export function OtherContent(props: Props) {
  return (
    <div class="mb-12">
      {props.contents.map((pairContents) => (
        <div class="mx-5 border-b border-[#D6D6D6] text-[0.625rem] flex pl-2 pb-2 mb-2">
          {pairContents.map((content) => <p class="w-[50%]">{content}</p>)}
        </div>
      ))}
    </div>
  );
}
