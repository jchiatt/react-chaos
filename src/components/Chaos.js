import { createChaos } from '../utils/createChaos';

/**
 * Public API
 */
export function Chaos({ children, level, errorMessage, runInProduction }) {
  return createChaos(level, errorMessage, runInProduction) || children;
}