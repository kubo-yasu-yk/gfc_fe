interface banner {
  src: string;
}

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
  mainBanners: banner[];
  allGenres: genre[];
  recentGenres: genre[];
  brandRanking: brand[];
  newBrands: brand[];
  info: info[];
}

const mainBanners = [
  { src: "/banner/top/main1.jpeg" },
  { src: "/banner/top/main2.jpeg" },
  { src: "/banner/top/main3.jpeg" },
  { src: "/banner/top/main4.jpeg" },
  { src: "/banner/top/main5.jpeg" },
  { src: "/banner/top/main6.jpeg" },
  { src: "/banner/top/main7.jpeg" },
  { src: "/banner/top/main8.jpeg" },
];

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
  { name: "焼肉", src: "/image/genre/grilled-meat.jpg", link: "/search-genre" },
  {
    name: "ファーストフード",
    src: "/image/genre/fast-food.jpeg",
    link: "/search-genre",
  },
  { name: "飲み物", src: "/image/genre/drink.jpg", link: "/search-genre" },
];

const brandRanking = [
  {
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    genre: "ラーメン",
    num: 1000,
  },
  {
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    genre: "ラーメン",
    num: 900,
  },
  {
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    genre: "ラーメン",
    num: 800,
  },
  {
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    genre: "ラーメン",
    num: 700,
  },
  {
    src: "/image/brandLogo/logo1.jpg",
    name: "花村屋拉麺",
    genre: "ラーメン",
    num: 600,
  },
];

const newBrands = [{
  src: "/image/brandLogo/logo1.jpg",
  name: "花村屋拉麺",
  content: "花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ",
}, {
  src: "/image/brandLogo/logo1.jpg",
  name: "花村屋拉麺",
  content: "花村屋拉麺の説明はここ花村屋拉麺の説明はここ花村屋拉麺の説明はここ",
}, {
  src: "/image/brandLogo/logo1.jpg",
  name: "花村屋拉麺",
  content: "花村屋拉麺の説明はここ花村屋拉麺の説明はここ",
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
    mainBanners: mainBanners,
    allGenres: allGenres,
    recentGenres: recentGenres,
    brandRanking: brandRanking,
    newBrands: newBrands,
    info: info,
  };
}
