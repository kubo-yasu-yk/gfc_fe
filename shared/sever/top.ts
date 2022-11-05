export interface genre {
  name: string;
  src: string;
  link: string;
}

interface brand {
  name: string;
  src: string;
  content: string;
}

interface info {
  date: string;
  content: string;
}

export interface TopInfo {
  allGenres: genre[];
  recentGenres: genre[];
  newBrands: brand[];
  info: info[];
}

const allGenres = [
  { name: "洋食", src: "/icon/genreIcon.jpg", link: "/search-genre" },
  {
    name: "中華",
    src: "/icon/genreIcon.jpg",
    link: "/search-genre",
  },
  { name: "和食", src: "/icon/genreIcon.jpg", link: "/search-genre" },
  {
    name: "エスニック",
    src: "/icon/genreIcon.jpg",
    link: "/search-genre",
  },
  { name: "ラーメン", src: "/icon/genreIcon.jpg", link: "/search-genre" },
  {
    name: "焼肉",
    src: "/icon/genreIcon.jpg",
    link: "/search-genre",
  },
  { name: "ファーストフード", src: "/icon/genreIcon.jpg", link: "/search-genre" },
  {
    name: "スイーツ",
    src: "/icon/genreIcon.jpg",
    link: "/search-genre",
  },
  { name: "飲み物", src: "/icon/genreIcon.jpg", link: "/search-genre" },
  {
    name: "その他",
    src: "/icon/genreIcon.jpg",
    link: "/search-genre",
  },
];

const recentGenres = [
  { name: "洋食", src: "/icon/genreIcon.jpg", link: "/search-genre" },
  {
    name: "焼肉",
    src: "/icon/genreIcon.jpg",
    link: "/search-genre",
  },
  { name: "ファーストフード", src: "/icon/genreIcon.jpg", link: "/search-genre" },
  {
    name: "飲み物",
    src: "/icon/genreIcon.jpg",
    link: "/search-genre",
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
    newBrands: newBrands,
    info: info,
  };
}
