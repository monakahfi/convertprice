"use client"

import { useState } from "react"
import { useExchangeRate } from "../hooks/useExchageRate"
import { ConvertDollor, convertToman, formatNumber, separtment } from "../logic/logic"



function CurrencyConvert() {
    const {data, isLoading, isError} = useExchangeRate()
    const [money, setMoney] = useState<number>(0)
    const [currency, setCurrency] = useState<"dollar" | "toman">("toman")

    const dollor: number = data?.usd.value ?? 0
    const sell: number = data?.usd_sell.value ?? 0
    const buy: number = data?.usd_buy.value ?? 0


  return (
    <div className=" container md:flex-col m-auto p-2 w-full h-full flex flex-col justify-between items-center gap-4 bg-blue-50 shadow-2xl">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error fetching data</p>}

     <div className="  flex  w-full h-40  p-4 mx-4 justify-between items-center  gap-4 bg-blue-100 shadow-2xl rounded-2xl">
      <p className="flex items-center text-xl font-semibold gap-2">{formatNumber(buy)}<img src="./toman.png" alt="Toman"  className="w-5 h-5"/>: قیمت روز خرید</p>
      <p className="flex items-center text-xl font-semibold gap-2">{formatNumber(sell)}<img src="./toman.png" alt="Toman"  className="w-5 h-5"/>: قیمت روز فروش</p>
      <p className="flex items-center text-xl font-semibold gap-2">{formatNumber(dollor)}<img src="./toman.png" alt="Toman"  className="w-5 h-5"/>: قیمت روز دلار</p>
      </div>
          <label htmlFor="money" className="text-lg font-bold">قیمت مورد نظر خودتون وارد کنید</label>
        <input type="input" value={money} onChange={(e)=>setMoney(Number(e.target.value))} placeholder="مقدار را وارد کنید" className="border-2 border-blue-500 rounded-2xl p-2"/>
        <div className="flex gap-2 items-center justify-center">
        <button onClick={() => convertToman({money, dollor, setMoney,setCurrency})} className=" rounded-2xl  w-40 h-20 hover:bg-black hover:text-white hover:w-50 bg-blue-600">تبدیل به تومان </button>
        <button onClick={() => ConvertDollor({money, dollor, setMoney,setCurrency})} className=" rounded-2xl w-40 h-20 hover:bg-black hover:text-white hover:w-50 bg-blue-600">تبدیل به دلار</button>
        </div>
        <div className="flex gap-2  w-50 h-20 bg-blue-200 rounded-2xl items-center justify-center">
            <p className="text-xl font-serif ">{formatNumber(money)}</p>
        {currency === "toman" ?  <img src="./toman.png" alt="Toman" className="w-5 h-5" />
        : <img src="./dollar.png" alt="Dollar" className="w-5 h-5" />}
        </div>
    </div>
  )
}

export default CurrencyConvert