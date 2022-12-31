export interface AccountCard {
  small: string;
  large: string;
  wide: string;
  id: string;
}

export interface AccountData {
  puuid: string;
  region: string;
  account_level: number;
  name: string;
  tag: string;
  card: AccountCard;
  last_update: string;
  last_update_raw: number;
}

export interface AccountDataResponse{
  status: number
  data: AccountData
}



//////////////////


export interface MmrImages {
  small: string;
  large: string;
  triangle_down: string;
  triangle_up: string;
}

export interface MmrData {
  currenttier: number;
  currenttierpatched: string;
  images: MmrImages;
  ranking_in_tier: number;
  mmr_change_to_last_game: number;
  elo: number;
  name: string;
  tag: string;
  old: boolean;
}

export interface MmrDataResponse {
  status: number;
  data: MmrData;
}


