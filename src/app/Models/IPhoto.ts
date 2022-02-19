import { SafeUrl } from "@angular/platform-browser";

export interface IPhoto{
  previewImageSrc: SafeUrl;
  thumbnailImageSrc: SafeUrl;
  alt: string,
  title: string,
}
