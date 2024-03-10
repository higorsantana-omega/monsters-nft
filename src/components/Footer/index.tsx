import { Divisor } from "../Divisor";
import { Logo } from "../Logo";

export function Footer () {
  return (
    <div className="px-24 mt-10 pb-4 bg-[#1d1f2b]">
      <Divisor className="mt-12" />

      <div className="h-16 py-10 flex items-center">
        <Logo />
        <p className="ml-3 text-[#93989a]">Monsters NFT. All rights reserverd.</p>
      </div>
    </div>
  )
}