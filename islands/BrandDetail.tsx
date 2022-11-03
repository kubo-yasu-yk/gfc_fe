import { Head } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";
import { BrandDetail } from "../components/brand-detail/BrandDetail.tsx";
import { DrawerMenu } from "../components/common/drawerMenu/DrawerMenu.tsx";

export default function islands() {
  const [open, setOpen] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);

  const toggleFunction = () => {
    if (open) {
      setOpen(false);
      setTimeout(() => {
        setVisibleMenu(false);
      }, 200);
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
        <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js" />
      </Head>
      <BrandDetail open={visibleMenu} onClick={toggleFunction} />
      {visibleMenu ? <DrawerMenu open={open} onClick={toggleFunction} /> : null}
    </div>
  );
}
