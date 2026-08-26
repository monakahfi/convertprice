import { useQuery } from "@tanstack/react-query";

const fetchExchangeRate = async () => {
  const response = await fetch("/api/exchange-rate");

  if (!response.ok) {
    throw new Error("Failed to fetch exchange rate");
  }

  return response.json();
};

const useExchangeRate = () => {
  return useQuery({
    queryKey: ["exchangeRate"],
    queryFn: fetchExchangeRate,
    staleTime: 1000 * 60 * 10,
  });
};

export { useExchangeRate };