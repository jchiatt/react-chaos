import { interpolate } from './linearInterpolation';
import { Level } from 'types';

export function createChaos(
  level: Level = 5,
  errorMessage: string = '🐵 CHAOS 🐵',
  runInProduction: boolean = false
): boolean {
  if (process.env.NODE_ENV === 'production' && !runInProduction) {
    /** Chaos will not occur in production. */
    return false;
  }

  if (typeof level !== 'number') {
    throw new Error(
      `Please provide a number level. You provided: ${typeof level}`
    );
  }

  const chaosLevel = level !== 5 ? convertChaosLevel(level) : 0.5;
  const chaosOn = Math.random() >= chaosLevel;
  if (chaosOn) {
    throw new Error(errorMessage);
  }
  return false;
}

export function convertChaosLevel(level: Level): number {
  if (typeof level !== 'number') {
    throw new Error(
      'Unable to read your chaos level, please only pass in an integer between 1 and 10.'
    );
  }

  let floatLevel;

  if (level === 10) {
    floatLevel = 0.95;
  } else {
    floatLevel = parseFloat((level / 10).toFixed(2));
  }

  return interpolate(1, 0, floatLevel);
}
