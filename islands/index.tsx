import { useState } from "preact/hooks";
import { TopInfo } from "../shared/server/top.ts";
import { Top } from "../components/index/Top.tsx";
import { DrawerMenu } from "../components/common/drawerMenu/DrawerMenu.tsx";

interface Props {
  info: TopInfo;
}

export default function islands(props: Props) {
  const [open, setOpen] = useState(false);
  const [drawerMenu, setDrawerMenu] = useState(false);

  const toggleFunction = () => {
    if (open) {
      setOpen(false);
      setTimeout(() => {
        setDrawerMenu(false);
      }, 200);
    } else {
      setOpen(true);
      setDrawerMenu(true);
    }
  };
  return (
    <div>
      <Top open={drawerMenu} info={props.info} onClick={toggleFunction} />
      {drawerMenu ? <DrawerMenu open={open} onClick={toggleFunction} /> : null}
    </div>
  );
}
