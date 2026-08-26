 import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "../lib/api";
 
 const useExchangeRate = () => {

    const queryKey = ["exchangeRate"];
    const queryFn = fetchApi;
    const result = useQuery({queryKey, queryFn ,staleTime: 1000 * 60 * 10, });
    return result;
 }

 export { useExchangeRate };