'use client'

import { useRouter } from "next/navigation";
import { Divisor } from "../Divisor";
import { Logo } from "../Logo";
import { useCallback } from "react";

export function Navbar () {
  const router = useRouter()

  const handleLogoClick = useCallback(() => {
    router.push('/')
  }, [router])

  return (
    <div>
      <div
        className="h-2 px-24 py-10 flex items-center cursor-pointer"
        onClick={handleLogoClick}
      >
        <Logo />
        <p className="ml-3 font-semibold">Monsters NFT</p>
      </div>

      <Divisor />
    </div>
  )
}