export interface Statistics {
  completed: number;
  on_hold: number;
  dropped: number;
  total: number;
  scores: StatisticsScore[];
}

export interface StatisticsScore {
  score: number;
  votes: number;
  percentage: number;
}
