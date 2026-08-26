interface Iprice {
      money: number;
  dollor: number;
  setMoney: (value: number) => void;
  setCurrency: (value: "dollar" | "toman") => void;
}

const regex:RegExp = /\.?0+$/
const separtment :RegExp= /\B(?=(\d{3})+(?!\d))/g
const ConvertDollor = ({money, dollor, setMoney, setCurrency}: Iprice)=>{
   const dollorValue = money / dollor
     const result = dollorValue
    .toFixed(2)
    .replace(regex,"");
    setMoney(Number(result))
    setCurrency("dollar")
}

    const formatNumber = (value: number) =>
        separtment.test(String(value)) ? String(value).replace(separtment, ",") : value
const convertToman=({money, dollor, setMoney, setCurrency   }: Iprice)=>{
    const tomanValue = money * dollor
    const result = tomanValue
    .toFixed(2)
    .replace(regex,"");
    setMoney(Number(result))
    setCurrency("toman")    
}

export {ConvertDollor,convertToman ,separtment ,formatNumber}