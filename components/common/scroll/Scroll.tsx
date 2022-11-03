import { tw } from "twind";

interface Props {
  imgs?: string[];
}

//ブランドの写真をスクロール表示させたい時に使用
export function ScrollBrandPhotos(props: Props) {
  return (
    <div class={`flex w-full overflow-x-auto ${tw`(hidden-scrollbar)`}`}>
      <div class="ml-5 mr-3 my-5 flex">
        {props.imgs?.map((img) => (
          <div class="w-[6rem] h-[6rem] border mr-2 flex items-center">
            <img
              src={img}
              class="w-full mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
