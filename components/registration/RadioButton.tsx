

interface Props {
    label: string;
    name: string;
    // number: number;
}

export function RadioButton(props: Props) {
    return (
        <>
            <label class="flex flex-row mt-4 mr-6 mb-7 cursor-pointer relative">
                <input type="radio" name={props.name} class="w-[0.875rem] h-[0.875rem] rounded-[0.875rem] 
                    border-[#C3C3C3] border-[1px] ml-6 mr-2 opacity-0" required checked/>{props.label}
                <div class="w-3.5 h-3.5 rounded-[50%] border-[#C3C3C3] border-[1px] absolute left-6" />
                <input class="w-2.5 h-2.5 rounded-[50%] checked:bg-[#947771] absolute left-[1.625rem] top-0.5" />
            </label>
            
        </>

    );
}