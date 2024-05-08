const GenresFilter = {
  genres: 'genres',
  explicit_genres: 'explicit_genres',
  theme: 'themes',
  demographics: 'demographics',
} as const;
export type GenresFilter = (typeof GenresFilter)[keyof typeof GenresFilter];
