/**
 * An unique resource from the API
 */
export interface JikanUniqueResource {
  /** The identifier of the referenced resource */
  mal_id: number;
  /** The type of the referenced resource */
  type: string;
  /** The name of the referenced resource */
  name: string;
  /** The URL of the referenced resource */
  url: string;
}

export interface JikanNamedResource {
  name: string;
  url: string;
}

export interface JikanResourceTitle {
  type: string;
  title: string;
}

export interface JikanResourcePeriod {
  from: string;
  to: string;
  prop: {
    form: { day: number; month: number; year: number };
    to: { day: number; month: number; year: number };
    string: string;
  };
}
export interface JikanResourceRelation {
  relation: string;
  entry: JikanUniqueResource[];
}
