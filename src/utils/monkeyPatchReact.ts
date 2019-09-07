export function monkeyPatchReact(React: any, patches: object) {
  Object.entries(patches).forEach(patchPair => {
    const methodToPatch = patchPair[0];
    const patch = patchPair[1];

    let originalReactMethod = React[methodToPatch];
    React[methodToPatch] = function(...args: any) {
      return patch(originalReactMethod, ...args);
    };
  });
}
