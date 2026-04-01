import { s as sanityClient } from './page-ssr_CZGsHcuX.mjs';
import imageUrlBuilder from '@sanity/image-url';

const imageBuilder = imageUrlBuilder(sanityClient);
function urlForImage(source) {
  return imageBuilder.image(source);
}

export { urlForImage as u };
