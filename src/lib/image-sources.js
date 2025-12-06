export const buildImageSources = ({ avif, webp }) => {
  const sources = [];

  if (avif) {
    sources.push({
      type: 'image/avif',
      srcSet: avif,
    });
  }

  if (webp) {
    sources.push({
      type: 'image/webp',
      srcSet: webp,
    });
  }

  return sources;
};





