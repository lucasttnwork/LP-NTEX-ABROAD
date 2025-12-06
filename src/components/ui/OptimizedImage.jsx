import React from 'react';

const deriveSourcesFromPath = (src) => {
  if (typeof src !== 'string') {
    return [];
  }

  const match = src.match(/(.+)\.[^.\\/]+$/);
  if (!match) {
    return [];
  }

  return [
    {
      type: 'image/avif',
      srcSet: `${match[1]}.avif`,
    },
    {
      type: 'image/webp',
      srcSet: `${match[1]}.webp`,
    },
  ];
};

const OptimizedImage = ({ src, alt = '', sources, className, ...imgProps }) => {
  const resolvedSources = sources ?? deriveSourcesFromPath(src);

  return (
    <picture>
      {resolvedSources.map((source) => (
        <source key={`${source.type}-${source.srcSet}`} type={source.type} srcSet={source.srcSet} />
      ))}
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        {...imgProps}
      />
    </picture>
  );
};

export default OptimizedImage;






