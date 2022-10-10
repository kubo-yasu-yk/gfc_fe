import { useState } from "preact/hooks";

export function Header() {
  return (
    <header class="h-[7.5rem] bg-[#947771]">
      <div class="flex flex-row mx-5">
        <div class="mt-3 flex flex-col items-center">
          <img
            src="/icon/hamburgerButton.png"
            alt="ハンバーガーメニューアイコン"
            class="h-6 w-6"
          />
          <p class="text-[#FFFFFF] text-[0.625rem] mt-1.5">メニュー</p>
        </div>
        <div class="flex-1" />
        <div class="mt-3 flex flex-col items-center">
          <img src="/icon/login.png" alt="ログインアイコン" class="h-6 w-6" />
          <p class="text-[#FFFFFF] text-[0.625rem] mt-1.5">ログイン</p>
        </div>
      </div>
      <div class="mx-5 mt-3">
        <a href="#">
          <input
            class="h-9 bg-[#FFFFFF] rounded-[0.625rem] w-[100%] pl-11 text-[0.75rem] outline-hidden"
            placeholder="ブランドを検索する"
          />
          <img
            src="/icon/search.png"
            alt="サーチアイコン"
            class="h-6 w-6 mt-[-1.875rem] ml-2"
          />
        </a>
      </div>
    </header>
  );
}

// export function Header2() {
//   const [open, setOpen] = useState(false);
//   const toggleFunction = () => {
//     setOpen((prevState) => !prevState);
//   };
//   return (
//     {open ?
//       <header class="h-16 bg-[#947771]">
//       <div class="ml-5 bg-white w-12 h-full pt-5">
//         <img
//           src="/icon/cross.png"
//           alt="バツアイコン"
//           class="h-6 w-6 m-auto"
//           onClick={toggleFunction}
//         />
//       </div>
//     </header>
//   :
//   <header class="h-[7.5rem] bg-[#947771]">
//   <div class="flex flex-row mx-5">
//     <div class="mt-3 flex flex-col items-center">
//       <img
//         src="/icon/hamburgerButton.png"
//         alt="ハンバーガーメニューアイコン"
//         class="h-6 w-6"
//         onClick={Header2}
//       />
//       <p class="text-[#FFFFFF] text-[0.625rem] mt-1.5">メニュー</p>
//     </div>
//     <div class="flex-1" />
//     <div class="mt-3 flex flex-col items-center">
//       <img src="/icon/login.png" alt="ログインアイコン" class="h-6 w-6" />
//       <p class="text-[#FFFFFF] text-[0.625rem] mt-1.5">ログイン</p>
//     </div>
//   </div>
//   <div class="mx-5 mt-3">
//     <a href="#">
//       <input
//         class="h-9 bg-[#FFFFFF] rounded-[0.625rem] w-[100%] pl-11 text-[0.75rem] outline-hidden"
//         placeholder="ブランドを検索する"
//       />
//       <img
//         src="/icon/search.png"
//         alt="サーチアイコン"
//         class="h-6 w-6 mt-[-1.875rem] ml-2"
//       />
//     </a>
//   </div>
// </header>}
//   );
// }
