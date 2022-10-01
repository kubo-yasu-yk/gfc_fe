interface Props {
    placeholder1: string;
    placeholder2: string;
    //width: string;
}

export function TwoButton(props: Props) {
    return (
        <>
            <input class="ml-6 mt-4 mb-7 pl-2 w-[10rem] h-10 rounded-[5px] border-[#C3C3C3] border-[1px]
                placeholder:color-[#E1E1E1]" placeholder={props.placeholder1} />
            <input class="ml-2 mt-4 mb-7 pl-2 w-[10rem] h-10 rounded-[5px] border-[#C3C3C3] border-[1px] 
                placeholder:color-[#E1E1E1]" placeholder={props.placeholder2} />
        </>
    );
}