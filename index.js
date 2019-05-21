import React from "react";

/**
 * Public API
 */
export function Chaos({ children, level }) {
  React.Children.forEach(children, () => {
    CreateChaos(level);
  });
  return children || null;
}

/**
 * Private
 */
function CreateChaos(level = 5) {
  const chaosLevel = level !== 5 ? convertChaosLevel(level) : 0.5;
  const chaosOn = Math.random() >= chaosLevel;
  if (chaosOn) {
    throw new Error("CHAOS");
  }
}

function convertChaosLevel(level) {
  switch (level) {
    case 1:
      return 0.9;
    case 2:
      return 0.8;
    case 3:
      return 0.7;
    case 4:
      return 0.6;
    case 5:
      return 0.5;
    case 6:
      return 0.4;
    case 7:
      return 0.3;
    case 8:
      return 0.2;
    case 9:
      return 0.1;
    case 10:
      return 0.05;
    default:
      throw new Error(
        "Unable to read your chaos level, please only pass in an integer between 1 and 10."
      );
  }
}
