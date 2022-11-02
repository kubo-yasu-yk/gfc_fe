//お気に入りアイコンの表示に関してまとめたコンポーネント

interface Props {
  num?: number;
}

//お気に入りされた数がわかる表示を出したい時に使う
export function FavoriteNum(props: Props) {
  return (
    <div class="w-14 h-14 border border-[#947771] rounded-full flex items-center absolute bottom-2 right-2 z-50 bg-white">
      <div class="flex flex-col text-center mx-auto">
        <img
          src="/icon/common/favorite/pink-heart.png"
          alt="お気に入り"
          class="w-6 h-6 my-1"
        />
        <p class="text-[0.625rem]">{props.num}</p>
      </div>
    </div>
  );
}
