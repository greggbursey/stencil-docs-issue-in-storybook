'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-301b2f1d.js');

/*
 Stencil Client Patch Browser v4.9.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencil-docs-not-working.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["test-component.cjs",[[1,"test-component",{"label":[1],"message":[1]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=stencil-docs-not-working.cjs.js.map