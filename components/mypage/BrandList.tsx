interface Props {
  contents: string;
}

export function BrandList(props: Props) {
  return (
    <div class="grid place-items-center">
      <button class="flex items-center bg-[#FFFFFF] rounded-[5px] w-[75%] h-14 font-bold text-[#5F5F5F] text-[14px] mb-2 rounded-[5px] border-[#C3C3C3] border-[1px]">
        <p class="mx-auto pl-7">{props.contents}</p>
        <img
          src="/icon/mypage/grayRightArrow.png"
          alt="グレーの右矢印"
          class="h-3 w-3 my-auto mr-4 text-right"
        />
      </button>
    </div>
  );
}
