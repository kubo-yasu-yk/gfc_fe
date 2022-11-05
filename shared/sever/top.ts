export interface genre {
  name: string;
  src: string;
  link: string;
}

interface brand {
  name?: string;
  src?: string;
  content?: string;
  genre?: string;
  num?: number;
}

interface info {
  date: string;
  content: string;
}

export interface TopInfo {
  allGenres: genre[];
  recentGenres: genre[];
  brandRanking: brand[];
  newBrands: brand[];
  info: info[];
}

const allGenres = [
  { name: "洋食", src: "/image/genre/western.jpeg", link: "/search-genre" },
  {
    name: "中華",
    src: "/image/genre/chinese.jpg",
    link: "/search-genre",
  },
  { name: "和食", src: "/image/genre/japanese.jpg", link: "/search-genre" },
  {
    name: "エスニック",
    src: "/image/genre/ethnic.jpg",
    link: "/search-genre",
  },
  { name: "ラーメン", src: "/image/genre/ramen.jpg", link: "/search-genre" },
  {
    name: "焼肉",
    src: "/image/genre/grilled-meat.jpg",
    link: "/search-genre",
  },
  {
    name: "ファーストフード",
    src: "/image/genre/fast-food.jpeg",
    link: "/search-genre",
  },
  {
    name: "スイーツ",
    src: "/image/genre/sweets.jpeg",
    link: "/search-genre",
  },
  { name: "飲み物", src: "/image/genre/drink.jpg", link: "/search-genre" },
  {
    name: "その他",
    src: "/image/genre/others.jpg",
    link: "/search-genre",
  },
];

const recentGenres = [
  { name: "洋食", src: "/image/genre/western.jpeg", link: "/search-genre" },
  {
    name: "焼肉",
    src: "/image/genre/grilled-meat.jpg",
    link: "/search-genre",
  },
  {
    name: "ファーストフード",
    src: "/image/genre/fast-food.jpeg",
    link: "/search-genre",
  },
  { name: "飲み物", src: "/image/genre/drink.jpg", link: "/search-genre" },
];

const brandRanking = [
  {
    src: "/icon/brandLogo.png",
    name: "ガスト",
    genre: "洋食、中華、和食",
    num: 1000,
  },
  {
    src: "/icon/brandLogo.png",
    name: "ガスト",
    genre: "洋食、中華、和食",
    num: 900,
  },
  {
    src: "/icon/brandLogo.png",
    name: "ガスト",
    genre: "洋食、中華、和食",
    num: 800,
  },
  {
    src: "/icon/brandLogo.png",
    name: "ガスト",
    genre: "洋食、中華、和食",
    num: 700,
  },
  {
    src: "/icon/brandLogo.png",
    name: "ガスト",
    genre: "洋食、中華、和食",
    num: 600,
  },
];

const newBrands = [{
  src: "/icon/brandLogo.png",
  name: "ガスト",
  content: "ガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここ",
}, {
  src: "/icon/brandLogo.png",
  name: "ガスト",
  content: "ガストの説明はここガストの説明はここガストの説明はここ",
}, {
  src: "/icon/brandLogo.png",
  name: "ガスト",
  content: "ガストの説明はここガストの説明はここ",
}];

const info = [{
  date: "2022/09/12",
  content: "お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。",
}, {
  date: "2022/09/12",
  content: "お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。",
}, {
  date: "2022/09/12",
  content: "お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。",
}, {
  date: "2022/09/12",
  content: "お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。",
}, {
  date: "2022/09/12",
  content: "お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。お知らせだよ。",
}];

export function getTopInfo() {
  return {
    allGenres: allGenres,
    recentGenres: recentGenres,
    brandRanking: brandRanking,
    newBrands: newBrands,
    info: info,
  };
}
