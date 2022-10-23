interface Props {
  open: boolean;
  onClickButton: (e: Event) => void;
}

export function NarrowDown(props: Props) {
  return (
    <>
      <div class={`bg-white relative ${props.open ? "open" : "close"}`}>
        <div>
          <div>
            <p>ブランドを絞り込む</p>
          </div>
        </div>
        <div class="h-[50rem] bg-[#947771]">
          <div class="h-full w-12 ml-4 bg-white">
            <img
              src="/icon/cross.png"
              alt="バツアイコン"
              class="h-11 w-6 mx-auto pt-5"
              onClick={props.onClickButton}
            />
          </div>
        </div>
      </div>
    </>
  );
}
