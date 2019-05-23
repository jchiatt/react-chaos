import { createChaos } from './createChaos';

/**
 * Public API
 */
export function Chaos({ children, level, errorMessage }) {
  return createChaos(level, errorMessage) || children;
}