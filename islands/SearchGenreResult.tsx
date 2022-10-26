import { Head } from "$fresh/runtime.ts";
import { DrawerMenu } from "../components/index/DrawerMenu.tsx";
import { useState } from "preact/hooks";
import { SearchGenre } from "../components/searchGenre/SearchGenre.tsx";
import { NarrowDown } from "../components/searchGenre/NarrowDown/NarrowDown.tsx";

export default function searchGenre() {
  const [open, setOpen] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [display, setDisplay] = useState(false);
  const [visibleNarrowDown, setVisibleNarrowDown] = useState(false);

  const DrawerToggleFunction = () => {
    if (open) {
      console.log("押されているよ！");
      setOpen(false);
      setTimeout(() => {
        setVisibleMenu(false);
      }, 400);
    } else {
      console.log("こっちだよ！");
      setOpen(true);
      setVisibleMenu(true);
    }
  };

  const NarrowToggleFunction = () => {
    if (display) {
      console.log("閉じる");
      setDisplay(false);
      setTimeout(() => {
        setVisibleNarrowDown(false);
      }, 400);
    } else {
      console.log("開く");
      setDisplay(true);
      setVisibleNarrowDown(true);
    }
  };

  return (
    <div>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>

      <SearchGenre
        open={visibleMenu}
        display={visibleNarrowDown}
        onClick={DrawerToggleFunction}
        onClickButton={NarrowToggleFunction}
      />

      {visibleNarrowDown
        ? <NarrowDown open={display} onClickButton={NarrowToggleFunction} />
        : null}

      {visibleMenu
        ? <DrawerMenu open={open} onClick={DrawerToggleFunction} />
        : null}
    </div>
  );
}
