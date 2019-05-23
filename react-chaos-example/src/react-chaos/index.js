import { createChaos } from './createChaos';

/**
 * Public API
 */
export default function Chaos({ children, level, errorMessage }) {
  return createChaos(level, errorMessage) || children;
}
