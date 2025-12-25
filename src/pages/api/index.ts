import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

// ---------------------------- WALLETS ----------------------
export const useGetWallets = () => {
  return useQuery({
    queryKey: ["wallets"],
    queryFn: async () => {
      let response = await api?.get("/wallet/user-wallets");
      return response?.data;
    },
  });
};

// ---------------------------- PACKAGES ----------------------
export const  useGetPackages=()=>{
    return useQuery({
        queryKey:['packages'],
        queryFn:async ()=>{
            let response = await api?.get("/packages");
            return response?.data;
        }
    })
}

// ---------------------------- Tree ----------------------

export const useGetRecentlyAddedUser=()=>{
    return useQuery({
        queryKey:['recent-user'],
        queryFn:async()=>{
            let response = await api?.get("/tree/downline/recent");
            return response?.data;
        }
    })
}