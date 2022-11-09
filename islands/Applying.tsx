import { Head } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";
import { Applying } from "../components/Applying.tsx";
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
      <Applying open={visibleMenu} onClick={toggleFunction} />
      {visibleMenu ? <DrawerMenu open={open} onClick={toggleFunction} /> : null}
    </div>
  );
}
