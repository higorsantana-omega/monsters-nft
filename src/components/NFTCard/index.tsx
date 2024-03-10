'use client'
import Image from "next/image"
import { PriceIcon } from "../Icons"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

const nft = {
  id: '1',
  name: '#4473',
  price: '0.1',
  author: '0x45305430',
  image: 'https://wdc-icon-generator.s3.amazonaws.com/d8e81771-cd8c-4625-910a-add501715725.jpg',
  description: 'Description da NFT'
}

export function NFTCard () {
  const router = useRouter()

  const handleCardClick = useCallback(() => {
    router.push('/nft/id')
  }, [router])

  return (
    <div
      className="w-[24rem] h-[31rem] bg-[#242634] rounded-xl cursor-pointer hover:scale-105 active:scale-95"
      onClick={handleCardClick}
    >
      <div>
        <Image src={nft.image} alt={nft.name} width={384} height={320} className="rounded-xl p-2 w-96 h-80"/>
      </div>

      <div className="mx-6 mt-4">
        <div className="mb-5">
          <p className="text-2xl font-semibold">{nft.name}</p>
          <p className="text-[#93989A]">By {nft.author}</p>
        </div>

        <div>
          <p className="text-[#93989A]">Current bid</p>

          <div className="flex mt-0.5">
            <PriceIcon />
            <p className="text-xl font-semibold">{nft.price}</p>
          </div>
        </div>

        <div className="relative">
          <button className="absolute right-1 bottom-0.5 bg-[#ff2748] py-[0.625rem] px-5 rounded-xl hover:scale-105 active:scale-95">
            Place a bid
          </button>
        </div>
      </div>
    </div>
  )
}