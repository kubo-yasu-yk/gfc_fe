interface Props {
  placeholder: string;
  width: string;
}

export function Input1(props: Props) {
  return (
    <input
      class={`ml-[8%] mt-4 mb-7 pl-2 w-[${props.width}] h-10 rounded-[5px] border-[#C3C3C3] border-[1px]`}
      placeholder={props.placeholder}
    />
  );
}

export function Input2(props: Props) {
  return (
    <input
      class={`ml-[2%] mt-4 mb-7 pl-2 w-[${props.width}] h-10 rounded-[5px] border-[#C3C3C3] border-[1px]`}
      placeholder={props.placeholder}
    />
  );
}

export function Input3(props: Props) {
  return (
    <input
      class={`ml-[8%] mb-2 pl-2 w-[${props.width}] h-10 rounded-[5px] border-[#C3C3C3] border-[1px]`}
      placeholder={props.placeholder}
    />
  );
}

export function Input4(props: Props) {
  return (
    <input
      class={`ml-[8%] mb-7 pl-2 w-[${props.width}] h-10 rounded-[5px] border-[#C3C3C3] border-[1px]`}
      placeholder={props.placeholder}
    />
  );
}

export function Input5(props: Props) {
  return (
    <input
      class={`ml-[8%] mt-4 mb-1 pl-2 w-[${props.width}] h-10 rounded-[5px] border-[#C3C3C3] border-[1px]`}
      placeholder={props.placeholder}
    />
  );
}

// export function Input(props: Props) {
//   if (props.type == 1) {
//     return (
//       <input
//         class={`ml-[8%] mt-4 mb-7 pl-2 w-[${props.width}] h-10 rounded-[5px] border-[#C3C3C3] border-[1px]`}
//         placeholder={props.placeholder}
//       />
//     );
//   }

//   if (props.type == 2) {
//     return (
//       <>
//         <input
//           class={`ml-[8%] mt-4 mb-7 pl-2 w-[${props.width}] h-10 rounded-[5px] border-[#C3C3C3] border-[1px]`}
//           placeholder={props.placeholder}
//         />
//         <input
//           class={`ml-[4%] mt-4 mb-7 pl-2 w-[${props.width}] h-10 rounded-[5px] border-[#C3C3C3] border-[1px]`}
//           placeholder={props.placeholder}
//         />
//       </>
//     );
//   }

//   return (
//     <input
//       class={`ml-[8%] mt-2 pl-2 w-[${props.width}] h-10 rounded-[5px] border-[#C3C3C3] border-[1px]`}
//       placeholder={props.placeholder}
//     />
//   );
// }
