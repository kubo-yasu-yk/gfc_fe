//お知らせを出す際に使うコンポーネント

interface Props {
  info: { date: string; content: string }[];
}

export function Info(props: Props) {
  return (
    <div>
      {props.info.map((info) => (
        <div class="first:border-t border-b mx-5 py-2 text-[0.625rem]">
          <p class="mb-1">{info.date}</p>
          <p>{info.content}</p>
        </div>
      ))}
    </div>
  );
}
