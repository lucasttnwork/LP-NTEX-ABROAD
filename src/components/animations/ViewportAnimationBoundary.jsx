import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Wrapper que garante que animações complexas só sejam montadas quando
 * o contêiner estiver visível no viewport. Isso reduz trabalho de renderização
 * quando o usuário não está olhando para o componente.
 */
const ViewportAnimationBoundary = ({
  children,
  className = '',
  style,
  rootMargin = '-10% 0px',
  amount = 0.25,
  fallback = null,
  keepMounted = false,
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    margin: rootMargin,
    amount,
  });

  const content =
    typeof children === 'function' ? children({ isInView }) : children;

  return (
    <div ref={containerRef} className={className} style={style}>
      {isInView || keepMounted ? content : fallback}
    </div>
  );
};

export default ViewportAnimationBoundary;
