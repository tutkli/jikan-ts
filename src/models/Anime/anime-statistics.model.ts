export interface AnimeStatistics {
  watching: number;
  completed: number;
  on_hold: number;
  dropped: number;
  plan_to_watch: number;
  total: number;
  scores: AnimeStatisticsScore[];
}

export interface AnimeStatisticsScore {
  score: number;
  votes: number;
  percentage: number;
}
