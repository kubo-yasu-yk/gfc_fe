interface Props {
  msg: string;
  mandatory?: boolean;
}

export function CompBanner(props: Props) {
  return (
    <div class="bg-[rgb(148,119,113,0.2)] my-12 mx-4 py-6 flex flex-col content-center">
      <img
        src="/icon/complete.png"
        alt="完了アイコン"
        class="h-16 w-16 mb-5 mx-auto"
      />
      <p class="text-[#5F5F5F] mx-auto font-bold">{props.msg}</p>
    </div>
  );
}
