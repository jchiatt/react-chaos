export function networkChaos(level, fetchReplacement, XHRReplacement) {
  if ( typeof window.fetch === 'function' ) {
    var __fetch = window.fetch;
    if ( typeof fetchReplacement === 'function' ) {
      window.fetch = fetchReplacement
    } else {
      window.fetch = () => new Error ('failed to fetch')
    }
  }

  if ( typeof window.XMLHttpRequest === 'function' ) {
    var __xhr = window.XMLHttpRequest;
  }
}