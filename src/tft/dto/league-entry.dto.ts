import { MiniSeriesDTO } from './mini-series.dto';

export interface LeagueEntryDto {
  leagueID: string;
  summonerId: string;
  summonerName: string;
  queueType: string;
  ratedTier: string;
  ratedRating: number;
  tier: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  hotStreak: boolean;
  veteran: boolean;
  freshBlood: boolean;
  inactive: boolean;
  miniSeries: MiniSeriesDTO;
}
