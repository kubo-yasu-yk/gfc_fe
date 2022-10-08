// interface Props {
//   date: number;
//   content: string;
// }
import { DateTimeFormatter } from "https://deno.land/std@0.159.0/datetime/formatter.ts";

export function Info() {
  const information = [{
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

  return (
    <div>
      {information.map((info) => (
        <div class="first-of-type:border-t border-b mx-5 py-2 text-[0.625rem] font-light">
          <p class="mb-1">{info.date}</p>
          <p>{info.content}</p>
        </div>
      ))}
    </div>
  );
}
