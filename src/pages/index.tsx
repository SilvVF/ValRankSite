import { type NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import type { ChartDataSetItem} from "../components/chart";
import { RanksChart } from "../components/chart";
import { fetchChartData } from "../data/repo";

const Home: NextPage = () => {

  const [rankItems, setRankItems] = useState<ChartDataSetItem[]>([])


  useEffect(  () => {
    fetchChartData().then(r =>setRankItems(r))
      .catch(e => console.log(e))
  }, [])


  return (
    <>
      <Head>
        <title>Ant Leaderboard</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex-1 flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className={"text-xl text-white"}>Valorant Rank Leaderboard</h1>
        </div>
        <RanksChart items={rankItems} />
      </main>
    </>
  );
};

export default Home;
