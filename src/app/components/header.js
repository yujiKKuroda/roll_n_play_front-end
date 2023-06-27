'use client';

import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <main class="bg-transparent border-solid border-b border-gray flex fixed font-['Bebas_Neue'] font-bold h-[90px] items-center justify-between leading-[24px] min-w-full px-[98px] z-1">
      <h2 class="flex leading-[45px] text-[45px]">
        <p class="text-white">ROLL&nbsp;</p>
        <p class="text-red-dragon">& PLAY</p>
      </h2>
      <div class="flex justify-between text-[21px] text-white w-[500px]">
        <h3 class="text-red-dragon">HOME</h3>
        <h3>SYSTEMS</h3>
        <h3>SHOP</h3>
        <h3>CHARACTERS</h3>
        <h3>ABOUT US</h3>
      </div>
      <button
        class="bg-red-dragon w-[120px] h-[56px] rounded-none text-[21px] text-white"
        onClick={handleClick}
      >
        LOG IN
      </button>
    </main>
  )
}