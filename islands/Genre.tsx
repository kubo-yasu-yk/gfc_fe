import { Genre } from "../components/index/Genre.tsx";

export default function islands() {
  const genres = [
    [{ name: "洋食", number: 1 }, { name: "中華", number: 2 }],
    [{ name: "和食", number: 3 }, { name: "エスニック", number: 4 }],
    [{ name: "ラーメン", number: 5 }, { name: "焼肉", number: 6 }],
    [{ name: "ファーストフード", number: 7 }, { name: "スイーツ", number: 8 }],
    [{ name: "飲み物", number: 9 }, { name: "その他", number: 10 }],
    // "洋食",
    // "中華",
    // "和食",
    // "エスニック",
    // "ラーメン",
    // "焼肉",
    // "ファーストフード",
    // "スイーツ",
    // "飲み物",
    // "その他",
  ];
  return (
    <>
      {genres.map((genre, i: number) => (
        <Genre
          genre={genre.name}
        />
      ))}
    </>
  );
}
