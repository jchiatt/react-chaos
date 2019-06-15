var __xhr;

function networkChaos() {
  if (!(this instanceof networkChaos)) {
    return new networkChaos();
  }

  return this;
}

networkChaos.prototype.delay = (duration = 2000) => {
  setTimeout(() => {
    return this;
  }, duration);
}

networkChaos.prototype.hijackXHR = (XHRReplacement) => {
  __xhr = window.XMLHttpRequest;
  if ( typeof XHRReplacement === 'function' ) {
    window.XMLHttpRequest = XHRReplacement;
  } else {
    window.XMLHttpRequest = () => undefined;
  }

  return this
}

networkChaos.prototype.restoreXHR = () => {
  window.XMLHttpRequest = __xhr;
  __xhr = undefined;

  return this;
}