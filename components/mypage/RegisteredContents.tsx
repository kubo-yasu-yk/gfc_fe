interface Props {
  contents: {src: string; alt: string; label: string}[];
}

export function RegisteredContents(props: Props) {
  return (
    <>
      {props.contents.map((content) => (
        <div class="grid place-items-center">
          <button class="flex items-center justify-between bg-[#FFFFFF] rounded-[5px] w-[90%] h-14 font-bold text-[#5F5F5F] text-[14px] rounded-[3px] border-[#E9E9E9] border-[1px]">
            <div class="flex ml-3">
              <img
                src={`${content.src}`}
                alt={`${content.alt}`}
                class="h-5 w-5"
              />
              <p class="mx-auto pl-3">{content.label}</p>
            </div>
            <img
              src="/icon/mypage/grayRightArrow.png"
              alt="グレーの右矢印"
              class="h-3 w-3 my-auto mr-4 text-right"
            />
          </button>
        </div>
      ))}
    </>
  );
}
