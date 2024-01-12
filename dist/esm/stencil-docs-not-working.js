import { p as promiseResolve, b as bootstrapLazy } from './index-f3a4de62.js';
export { s as setNonce } from './index-f3a4de62.js';

/*
 Stencil Client Patch Browser v4.9.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["test-component",[[1,"test-component",{"label":[1],"message":[1]}]]]], options);
});

//# sourceMappingURL=stencil-docs-not-working.js.map