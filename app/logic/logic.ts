interface Iprice {
      money: number;
  dollar: number;
  setMoney: (value: number) => void;
  setCurrency: (value: "dollar" | "toman") => void;
}

const regex:RegExp = /\.?0+$/
const separtment :RegExp= /\B(?=(\d{3})+(?!\d))/g
const ConvertDollar = ({money, dollar, setMoney, setCurrency}: Iprice)=>{
   const dollarValue = money / dollar
     const result = dollarValue
    .toFixed(2)
    .replace(regex,"");
    setMoney(Number(result))
    setCurrency("dollar")
}

    const formatNumber = (value: number) =>
        separtment.test(String(value)) ? String(value).replace(separtment, ",") : value
const convertToman = ({
  money,
  dollar,
  setMoney,
  setCurrency,
}: Iprice) => {
  const tomanValue = money * dollar;

  const result = tomanValue
    .toFixed(2)
    .replace(regex, "");

  setMoney(Number(result));
  setCurrency("toman");
};   


export {ConvertDollar,convertToman ,separtment ,formatNumber}