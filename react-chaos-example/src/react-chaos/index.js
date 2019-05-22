import React from "react";
import { createChaos } from './createChaos';

/**
 * Public API
 */
export default function Chaos({ children, level }) {
  React.Children.forEach(children, () => {
    createChaos(level);
  });
  
  return children || null;
}
