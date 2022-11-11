export interface JikanImages {
  jpg: JikanImagesCollection;
  webp?: JikanImagesCollection;
}

export interface JikanImagesCollection {
  image_url: string;
  small_image_url?: string;
  medium_image_url?: string;
  large_image_url?: string;
  maximum_image_url?: string;
}
