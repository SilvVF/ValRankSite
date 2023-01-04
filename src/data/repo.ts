import { fetchAccountDataFromApi, fetchMmrDataFromApi } from "./valorant-api";
import type { AccountCard, AccountData, MmrData, MmrImages } from "./api-types";
import type { ChartDataSetItem } from "../components/chart";



export const fetchAccountData = async (username: string, tagline: string) =>  {
  const response = await fetchAccountDataFromApi(username, tagline)
    .catch(e => console.log(e))

  if (response) {
    return response.data.data
  }
  const emptyCard: AccountCard = { id: "", large: "", small: "", wide: "" }
  const emptyData: AccountData = {
    account_level: 0,
    card: emptyCard,
    last_update: "",
    last_update_raw: 0,
    name: username,
    puuid: "",
    region: "",
    tag: tagline
  }
  return emptyData
}

export const fetchMmrData = async (username: string, tagline: string) => {
  const response = await fetchMmrDataFromApi(username, tagline).catch(e => console.log(e))

  if (response)  {
    return response.data.data
  }
  const emptyImages: MmrImages = { large: "", small: "", triangle_down: "", triangle_up: "" }
  const emptyData:  MmrData = {
    currenttier: 0, currenttierpatched: "", elo: 0,
    images:emptyImages, mmr_change_to_last_game: 0,
    name: username, old: false, ranking_in_tier: 0, tag: tagline
  }
  return emptyData
}

type User = {
  name: string,
  tagline: string
}

const userList: User[] = [
  {name: "silv", tagline: "0000"},
  {name: "Bobdini24", tagline: "8397"},
  {name: "Coopapeen", tagline: "1937"},
  {name: "DrEvilTurtle", tagline: "6547"},
  {name: "FizzyDone", tagline: "NA1"},
  {name: "Jenna Ortega", tagline: "Mom"},
  {name: "kzb", tagline: "6842"},
  {name: "Leo", tagline: "2844"},
  {name: "murph", tagline: "3559"},
  {name: "Pxyl", tagline: "NA1"},
  {name: "qube", tagline: "2495"},
  {name: "TeenisWeenis", tagline: "1234"},
  {name: "ToastyPosty", tagline: "4950"},
  {name: "LiSA", tagline: "AYAYA"}
]
export const fetchChartData = async (): Promise<ChartDataSetItem[]>=> {
  const allData = await Promise.all(userList.map( async user =>
    await fetchMmrData(user.name, user.tagline)
  ))

  return allData.map(it => { return {name: it.name, elo: it.elo} })
}
