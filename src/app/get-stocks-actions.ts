"use server";
import { getStocks } from "@/lib/get-stocks";

export async function getStocksAction() {
  return await getStocks();
}