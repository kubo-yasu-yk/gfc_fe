//画面のタイトルを挿入するときに使用するコンポーネント

interface Props {
  title: string;
}

export function Title(props: Props) {
  return (
    <div class="mx-2 border-b">
      <h1 class="mt-6 ml-2 mb-1">
        {props.title}
      </h1>
    </div>
  );
}
