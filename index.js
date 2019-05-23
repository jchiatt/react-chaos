import { createChaos } from './react-chaos/createChaos';

/**
 * Public API
 */
export default function Chaos({ children, level, errorMessage }) {
  return createChaos(level, errorMessage) || children;
}
