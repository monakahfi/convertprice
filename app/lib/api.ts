interface Ipric {
  data: {};
}

const fetchApi = async (): Promise<Ipric> => {
  const response = await fetch('https://api.navasan.tech/latest/?api_key=freekSlTWdVvyopXVv7IfFseXEXSfzRv');
  const market = await response.json();
  return market as Ipric;
};

export { fetchApi };