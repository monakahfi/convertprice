interface Price {
  value: number;
}

interface Iprice {
  usd: Price;
  usd_sell: Price;
  usd_buy: Price;
}

const fetchApi = async (): Promise<Iprice> => {
  const response = await fetch('https://api.navasan.tech/latest/?api_key=freekSlTWdVvyopXVv7IfFseXEXSfzRv');
  const market = await response.json();
  return market ;
};

export { fetchApi };