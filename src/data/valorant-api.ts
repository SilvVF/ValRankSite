import type { AccountDataResponse, MmrDataResponse } from "./api-types";
import axios from "axios";

const accountDataUrl= (
  username: string,
  tagline: string
) => "https://api.henrikdev.xyz/valorant/v1/account/" + username +"/"+ tagline

const mmrDataUrl = (
  username: string,
  tagline: string
) => "https://api.henrikdev.xyz/valorant/v1/mmr/na/" + username +"/"+ tagline



export async function fetchAccountDataFromApi(
  username: string, tagline: string
) {
  return await axios.get<AccountDataResponse>(accountDataUrl(username, tagline))
}

export function fetchMmrDataFromApi(
  username: string, tagline: string
){
  return axios.get<MmrDataResponse>(mmrDataUrl(username, tagline))
}
