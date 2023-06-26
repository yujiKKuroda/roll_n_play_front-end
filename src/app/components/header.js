'use client';

import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/sign_in')
  }

  return (
    <main class="border-b border-grey border-solid flex font-['Bebas_Neue'] font-bold h-[90px] items-center justify-between min-w-full px-[98px]">
      <h2 class="flex text-[45px]">
        <p class="text-white">ROLL&nbsp;</p>
        <p class="text-red-dragon">& PLAY</p>
      </h2>
      <div class="flex justify-between text-[21px] w-[500px]">
        <h3 class="text-red-dragon">HOME</h3>
        <h3>SYSTEMS</h3>
        <h3>SHOP</h3>
        <h3>CHARACTERS</h3>
        <h3>ABOUT US</h3>
      </div>
      <button
        class="bg-red-dragon h-[56px] rounded-none text-[21px] w-[120px]"
        onClick={handleClick}
      >
        LOG IN
      </button>
    </main>
  )
}