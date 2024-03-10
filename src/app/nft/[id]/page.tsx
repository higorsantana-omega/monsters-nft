'use client'
import { Divisor } from "@/components/Divisor";
import { NFTCard } from "@/components/NFTCard";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const nft = {
  id: '1',
  name: '#4473',
  price: '0.1',
  author: '0x45305430',
  image: 'https://wdc-icon-generator.s3.amazonaws.com/d8e81771-cd8c-4625-910a-add501715725.jpg',
  description: 'Description da NFT'
}

export default function Details () {
  // const router = useRouter()

  return (
    <div className="px-24">
      <Head>
        <title>{nft.name} NFT - Details</title>
      </Head>

      <div className="mt-24 flex justify-between">
        <Image
          className="rounded-2xl w-[45%] h-auto"
          alt={nft.name}
          src={nft.image}
          width={1080}
          height={720}
        />

        <div className="ml-10 w-[45%]">
          <h1 className="text-5xl font-bold">{nft.name}</h1>
          <p className="text-[#93989A] mt-4">
            {nft.description}
          </p>

          <Divisor className="mt-8 mb-4"/>

          <div>
            <p className="text-[#93989A]">Creator</p>
            <p>{nft.author}</p>
          </div>

          <Divisor className="mt-8 mb-4"/>

          <div>
            <button className="bg-[#ff2748] py-4 px-6 rounded-xl hover:scale-105 active:scale-95">
              Place a bid
            </button>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-4xl mt-24">More works</h2>

        <div className="flex flex-wrap items-start gap-12 mt-7">
          <NFTCard />
          <NFTCard />
        </div>
      </div>
    </div>
  )
}
