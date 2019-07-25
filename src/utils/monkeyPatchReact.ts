export function monkeyPatchReact(React, patches) {
  Object.entries(patches).forEach(patchPair => {
    const methodToPatch = patchPair[0];
    const patch = patchPair[1];

    let originalReactMethod = React[methodToPatch];
    console.log(patch);
    React[methodToPatch] = function(...args) {
      patch(originalReactMethod, args);
    };
  });
}
