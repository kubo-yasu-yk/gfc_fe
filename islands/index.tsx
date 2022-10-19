import { Head } from "$fresh/runtime.ts";
import { Top } from "../components/index/Top.tsx";
import { useState } from "preact/hooks";
import { DrawerMenu } from "../components/index/DrawerMenu.tsx";

export default function Index() {
  const [open, setOpen] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);

  const toggleFunction = () => {
    if (open) {
      setOpen(false);
      setTimeout(() => {
        setVisibleMenu(false);
      }, 400);
    } else {
      setOpen(true);
      setVisibleMenu(true);
    }
  };
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />
        <link href="/style.css" rel="stylesheet" />

        <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
      </Head>
      <Top open={visibleMenu} onClick={toggleFunction} />
      {visibleMenu ? <DrawerMenu open={open} onClick={toggleFunction} /> : null}
    </div>
  );
}
