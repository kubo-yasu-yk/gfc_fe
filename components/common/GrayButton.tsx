interface Props {
    contents: string;
    mandatory?: boolean;
}

export function GrayButton(props: Props) {
    return (
    <div class="grid place-items-center">
        <button class="flex flex-row content-center bg-[#EBEBEB] py-2.5 rounded-[5px] w-[85%] text-[#ffffff] text-[14px] mb-4">
            <p class="mx-auto pl-7">{props.contents}</p>
            <img
                src="/icon/whiteRightArrow.png"
                alt="白い右矢印"
                class="h-3 w-3 my-auto mr-4 text-right"
            />
        </button>
    </div>
    );
}
