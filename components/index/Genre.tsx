//配列で回したい。
//最後の要素だけクラス名を変える

interface Props {
  genre: string;
}

export function Genre() {
  const allGenres = [
    // [{ name: "洋食", number: 1 }, { name: "中華", number: 2 }],
    // [{ name: "和食", number: 3 }, { name: "エスニック", number: 4 }],
    // [{ name: "ラーメン", number: 5 }, { name: "焼肉", number: 6 }],
    // [{ name: "ファーストフード", number: 7 }, { name: "スイーツ", number: 8 }],
    // [{ name: "飲み物", number: 9 }, { name: "その他", number: 10 }],
    ["洋食", "中華"],
    ["和食", "エスニック"],
    ["ラーメン", "焼肉"],
    ["ファーストフード", "スイーツ"],
    ["飲み物", "その他"],
  ];

  return (
    <div class="mx-4 border rounded-[5px]">
      <div class="flex flex-col">
        {for (let i=0; i < allGenres.length; i++) {

        }}
        <div class="flex">
          <a class="py-2 flex flex-row items-center border-b border-r w-[50%]">
            <img
              src="/icon/genreIcon.jpg"
              alt="写真"
              class="w-8 h-8 rounded-[5px] mx-4"
            />
            <p class="text-xs">{props.genre}</p>
          </a>
        </div>
        <div class="flex">
          <a class="py-2 flex flex-row items-center border-b border-r w-[50%]">
            <img
              src="/icon/genreIcon.jpg"
              alt="写真"
              class="w-8 h-8 rounded-[5px] mx-4"
            />
            <p class="text-xs">{props.genre}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export function Genre1() {
  return (
    <div class="mx-4 border rounded-[5px]">
      <div class="flex flex-col">
        <div class="flex">
          <a class="py-2 flex flex-row items-center border-b border-r w-[50%]">
            <img
              src="/icon/genreIcon.jpg"
              alt="写真"
              class="w-8 h-8 rounded-[5px] mx-4"
            />
            <p class="text-xs">洋食</p>
          </a>
          <a class="py-2 flex flex-row items-center border-b w-[50%]">
            <img
              src="/icon/genreIcon.jpg"
              alt="写真"
              class="w-8 h-8 rounded-[5px] mx-4"
            />
            <p class="text-xs">中華</p>
          </a>
        </div>

        <div class="flex">
          <a class="py-2 flex flex-row items-center border-b border-r w-[50%]">
            <img
              src="/icon/genreIcon.jpg"
              alt="写真"
              class="w-8 h-8 rounded-[5px] mx-4"
            />
            <p class="text-xs">和食</p>
          </a>
          <a class="py-2 flex flex-row items-center border-b w-[50%]">
            <img
              src="/icon/genreIcon.jpg"
              alt="写真"
              class="w-8 h-8 rounded-[5px] mx-4"
            />
            <p class="text-xs">エスニック</p>
          </a>
        </div>

        <div class="flex">
          <a class="py-2 flex flex-row items-center border-b border-r w-[50%]">
            <img
              src="/icon/genreIcon.jpg"
              alt="写真"
              class="w-8 h-8 rounded-[5px] mx-4"
            />
            <p class="text-xs">ラーメン</p>
          </a>
          <a class="py-2 flex flex-row items-center border-b w-[50%]">
            <img
              src="/icon/genreIcon.jpg"
              alt="写真"
              class="w-8 h-8 rounded-[5px] mx-4"
            />
            <p class="text-xs">焼肉</p>
          </a>
        </div>

        <div class="flex">
          <a class="py-2 flex flex-row items-center border-b border-r w-[50%]">
            <img
              src="/icon/genreIcon.jpg"
              alt="写真"
              class="w-8 h-8 rounded-[5px] mx-4"
            />
            <p class="text-xs">ファーストフード</p>
          </a>
          <a class="py-2 flex flex-row items-center border-b w-[50%]">
            <img
              src="/icon/genreIcon.jpg"
              alt="写真"
              class="w-8 h-8 rounded-[5px] mx-4"
            />
            <p class="text-xs">スイーツ</p>
          </a>
        </div>

        <div class="flex">
          <a class="py-2 flex flex-row items-center border-r w-[50%]">
            <img
              src="/icon/genreIcon.jpg"
              alt="写真"
              class="w-8 h-8 rounded-[5px] mx-4"
            />
            <p class="text-xs">飲み物</p>
          </a>
          <a class="py-2 flex flex-row items-center w-[50%]">
            <img
              src="/icon/genreIcon.jpg"
              alt="写真"
              class="w-8 h-8 rounded-[5px] mx-4"
            />
            <p class="text-xs">エスニック</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export function Genre2() {
  return (
    <div class="mx-4 border rounded-[5px]">
      <div class="flex flex-col">
        <div class="flex">
          <a class="py-2 flex flex-row items-center border-b border-r w-[50%]">
            <img
              src="/icon/genreIcon.jpg"
              alt="写真"
              class="w-8 h-8 rounded-[5px] mx-4"
            />
            <p class="text-xs">洋食</p>
          </a>
          <a class="py-2 flex flex-row items-center border-b w-[50%]">
            <img
              src="/icon/genreIcon.jpg"
              alt="写真"
              class="w-8 h-8 rounded-[5px] mx-4"
            />
            <p class="text-xs">中華</p>
          </a>
        </div>

        <div class="flex">
          <a class="py-2 flex flex-row items-center border-r w-[50%]">
            <img
              src="/icon/genreIcon.jpg"
              alt="写真"
              class="w-8 h-8 rounded-[5px] mx-4"
            />
            <p class="text-xs">ラーメン</p>
          </a>
          <a class="py-2 flex flex-row items-center w-[50%]">
            <img
              src="/icon/genreIcon.jpg"
              alt="写真"
              class="w-8 h-8 rounded-[5px] mx-4"
            />
            <p class="text-xs">焼肉</p>
          </a>
        </div>
      </div>
    </div>
  );
}
