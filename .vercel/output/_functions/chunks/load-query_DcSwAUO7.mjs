import { s as sanityClient } from './page-ssr_CZGsHcuX.mjs';

const visualEditingEnabled = false;
async function loadQuery({
  query,
  params
}) {
  const perspective = "published";
  const { result, resultSourceMap } = await sanityClient.fetch(
    query,
    params ?? {},
    {
      filterResponse: false,
      perspective,
      resultSourceMap: false,
      stega: visualEditingEnabled,
      ...{}
    }
  );
  return {
    data: result,
    sourceMap: resultSourceMap,
    perspective
  };
}

export { loadQuery as l };
