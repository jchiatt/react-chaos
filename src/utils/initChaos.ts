import { createChaos } from './createChaos';
import { monkeyPatchReact } from './monkeyPatchReact';

export const initChaos = function initChaos(React: any) {
  return monkeyPatchReact(React, {
    createElement: function __chaosCreateElement(
      originalCreateElement: any,
      ...args: any
    ) {
      createChaos(1, 'APP WIDE CHAOS YO 🐒');
      return originalCreateElement.apply(React, args);
    },
  });
};
