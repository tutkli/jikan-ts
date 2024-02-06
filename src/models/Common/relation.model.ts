export interface JikanRelation {
  relation: string;
  entry: RelationEntry[];
}

export interface RelationEntry {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
