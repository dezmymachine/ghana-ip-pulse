import { s as sanityClient } from './page-ssr_1r5k1de_.mjs';
import imageUrlBuilder from '@sanity/image-url';

const imageBuilder = imageUrlBuilder(sanityClient);
function urlForImage(source) {
  return imageBuilder.image(source);
}

export { urlForImage as u };
