//お気に入りアイコンの表示に関してまとめたコンポーネント

interface Props {
  num?: number;
}

//丸枠で囲まれたお気に入りアイコン
export function Favorite(props: Props) {
  return (
    <div class="w-10 h-10 rounded-full border border-[#947771] p-[0.625rem]">
      <img
        src="./icon/favorite-brown.png"
        alt="お気に入りアイコン"
      />
    </div>
  );
}

//丸枠で囲まれたお気に入りアイコンとお気に入りされた数を表示
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
