import { createChaos } from '../utils/createChaos';
import { Level } from '../types';

/**
 * Public API
 */
interface Args {
  children: JSX.Element;
  level: Level;
  errorMessage?: string;
  runInProduction?: boolean;
}

export function Chaos({
  children,
  level,
  errorMessage,
  runInProduction,
}: Args): JSX.Element | null {
  return createChaos(level, errorMessage, runInProduction) ? null : children;
}
