interface Props {
  title: string;
  mandatory?: boolean;
}

export function Title(props: Props) {
  return (
    <div>
      <h1 class="font-bold mt-[1.625rem] ml-4 mb-2 text-[#5F5F5F]">
        {props.title}
      </h1>
      <div class="h-px bg-[#E6E6E6] mx-2" />
    </div>
  );
}
