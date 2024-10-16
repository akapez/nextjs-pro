"use client";

import { Suspense, use, useEffect, useState } from "react";

import { getStocksAction } from "./get-stocks-actions";
import { StockInfo } from "@/types";

import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button";


function StockDisplay({ stockPromise }: { stockPromise: Promise<StockInfo> }) {
  const { name, ui } = use(stockPromise);
  return (
    <div>
      <div className="font-bold text-3xl">{name}</div>
      <div>{ui}</div>
    </div>
  );
}

export default function Dashboard() {
  const [stocks, setStocks] = useState<Promise<StockInfo>[]>([]);


  const callStocksActions = async () =>
    getStocksAction().then((stocks) => setStocks(stocks));

  useEffect(() => {
    callStocksActions();
  }, []);

  return (
    <>
    <Button
        onClick={() => {
          setStocks([]);
          callStocksActions();
        }}
      >
        Refresh
      </Button>
    <div className="grid grid-cols-3 gap-4 mt-5">
      {stocks.map((stockPromise, index) => (
        <Suspense key={index} fallback={<Skeleton className="w-full rounded-lg shadow-lg m-4" />    }>
          <StockDisplay stockPromise={stockPromise} />
        </Suspense>
      ))}
    </div>
    </>
  );
}