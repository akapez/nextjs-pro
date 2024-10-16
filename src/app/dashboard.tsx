import { Suspense, use } from "react";

import { getStocks } from "@/lib/get-stocks";
import { StockInfo } from "@/types";

import { Skeleton } from "@/components/ui/skeleton"


function StockDisplay({ stockPromise }: { stockPromise: Promise<StockInfo> }) {
  const { name, ui } = use(stockPromise);
  return (
    <div>
      <div className="font-bold text-3xl">{name}</div>
      <div>{ui}</div>
    </div>
  );
}

export default async function Dashboard() {
  const stocks = await getStocks();

  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      {stocks.map((stockPromise, index) => (
        <Suspense key={index} fallback={<Skeleton className="w-full rounded-lg shadow-lg m-4" />    }>
          <StockDisplay stockPromise={stockPromise} />
        </Suspense>
      ))}
    </div>
  );
}