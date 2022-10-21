interface Props {
  height: string;
  marginBottom?: boolean;
}

export function LightBrownBox(props: Props) {
  return (
    <div
      class={`h-${props.height} border-t border-[#947771] bg-[rgb(149,119,113,0.1)]`}
    />
  );
}
