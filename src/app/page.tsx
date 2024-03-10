import { Divisor } from "@/components/Divisor";
import { NFTCard } from "@/components/NFTCard";
import Head from "next/head";

export default function Home() {
  return (
    <main className="h-full w-screen bg-[#1d1f2b] px-24">
      <Head>
        <title>Monsters NFT</title>
      </Head>

      <div className="flex justify-between items-baseline">
        <h2 className="text-5xl font-bold mt-24">
          Discover
        </h2>

        <input className="h-12 w-64 p-4 rounded-xl" placeholder="Search NFT" />
      </div>

      <Divisor className="mt-12"/>
      
      <div className="flex-col items-start gap-7 mt-12">
        <h2 className="text-5xl font-bold">Popular Bid</h2>

        <div className="flex flex-wrap items-start gap-7 mt-7 min-h-[50%]">
          <NFTCard />
        </div>
      </div>
    </main>
  );
}
