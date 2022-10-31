import { Head } from "$fresh/runtime.ts";
import { DrawerMenu } from "../components/common/drawerMenu/DrawerMenu.tsx";
import { useState } from "preact/hooks";
import { SearchGenre } from "../components/searchGenre/SearchGenre.tsx";
import { NarrowDown } from "../components/searchGenre/NarrowDown/NarrowDown.tsx";

export default function searchGenre() {
  const [open, setOpen] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [display, setDisplay] = useState(false);
  const [visibleNarrowDown, setVisibleNarrowDown] = useState(false);
  const sec = 200;

  const DrawerToggleFunction = () => {
    if (open) {
      console.log("押されているよ！");
      setOpen(false);
      setTimeout(() => {
        setVisibleMenu(false);
      }, sec);
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
      }, sec);
    } else {
      console.log("開く");
      setDisplay(true);
      setVisibleNarrowDown(true);
    }
  };

  const Accodion = 2;

  return (
    <div>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      {visibleNarrowDown || visibleMenu ? null : (
        <SearchGenre
          open={visibleMenu}
          display={visibleNarrowDown}
          onClick={DrawerToggleFunction}
          onClickButton={NarrowToggleFunction}
        />
      )}

      {visibleNarrowDown
        ? <NarrowDown open={display} onClickButton={NarrowToggleFunction} />
        : null}

      {visibleMenu
        ? <DrawerMenu open={open} onClick={DrawerToggleFunction} />
        : null}
    </div>
  );
}
