import { interpolate } from "./linearInterpolation";

export function createChaos(level = 5, errorMessage = "🐵 CHAOS 🐵", runInProduction = false) {
  if ( process.env.NODE_ENV === 'production' && !runInProduction ) {
    /** Chaos will not occur in production. */
    return false;
  }

  if (typeof level !== 'number') {
    throw new Error('Please provide a number level. You provided string');
  }

  const chaosLevel = level !== 5 ? convertChaosLevel(level) : 0.5;
  const chaosOn = Math.random() >= chaosLevel;
  if (chaosOn) {
    throw new Error(errorMessage);
  }
  return false;
}

function convertChaosLevel(level) {
  if ( typeof level !== 'number' ) {
    throw new Error(
      "Unable to read your chaos level, please only pass in an integer between 1 and 10."
    );
  }

  if ( level === 10 ) {
    level = .95;
  } else {
    level = (level/100).toFixed(2);
  }

  return interpolate(1, 0, level)
}
