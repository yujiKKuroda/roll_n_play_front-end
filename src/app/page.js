import Image from 'next/image'
import Header from './components/header'

export default function Home() {
  return (
    <main class="flex min-h-screen flex-col items-center justify-between leading-[24px]">
      <div class="bg-cover bg-dragon min-h-[100vh] min-w-full z-0">
        <Header />
        <div class="flex justify-between
         mt-[208px] px-[98px]">
          <div class="flex flex-col max-w-[42.8125vh]">
            <div class="font-['Bebas_Neue'] font-bold leading-[136px] text-[128px]">
              <h1 class="text-white">FREE YOUR</h1>
              <h1 class="text-red-dragon">IMAGINATION!</h1>            
            </div>
            <p class="font-['Poppins', 'sans-serif'] font-light leading-[24px] mt-[32px] text-[20px] text-text-white">
              Creating your character has never been so easy! Analyse all the options and use your imagination, we’ll help you along the way!
            </p>
            <button
              class="bg-transparent border border-solid border-red-dragon font-['Bebas_Neue'] w-[164px] h-[63px] mt-[56px] rounded-none text-[21px] text-red-dragon"
            >
              CREATE NOW!
            </button>
            <div class="flex max-w-[50vh] mt-[89px]">
              <div class="border-solid border-r border-gray flex flex-col items-center pr-[40px]">
                <h1 class="font-['Bebas_Neue'] font-bold leading-[56px] text-[56px] text-red-dragon">5+</h1>
                <p class="font-['Poppins', 'sans-serif'] font-light text-[16px] text-white">Years of Experience</p>
              </div>
              <div class="border-solid border-r border-gray flex flex-col items-center px-[40px]">
                <h1 class="font-['Bebas_Neue'] font-bold leading-[56px] text-[56px] text-red-dragon">2K+</h1>
                <p class="font-['Poppins', 'sans-serif'] font-light text-[16px] text-white">Players Join</p>
              </div>
              <div class="flex flex-col items-center pl-[40px]">
                <h1 class="font-['Bebas_Neue'] font-bold leading-[56px] text-[56px] text-red-dragon">1.8K+</h1>
                <p class="font-['Poppins', 'sans-serif'] font-light text-[16px] text-white">Happy Players</p>
              </div>
            </div>
          </div>
          <div class="top-0 right-0 flex flex-col justify-start font-['Poppins', 'sans-serif'] font-black items-end max-w-[57.1875vh] shrink-0 text-[172px] text-right tracking-[44.72px] text-white uppercase drop-shadow-[0_4px_4px_0_rgba(0, 0, 0, 0.25)]">
            <h1>LEVEL</h1>
            <h1 class="mt-[258px]">UP</h1>
          </div>
        </div>
      </div>
    </main>
  )
}
