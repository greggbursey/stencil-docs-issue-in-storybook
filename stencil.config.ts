import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

/** The package name specified in the package.json file. */
const PACKAGE_NAME = 'stencil-docs-not-working';

export const config: Config = {
    namespace: PACKAGE_NAME,
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements',
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'docs-vscode',
            file: 'custom-elements.json',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
    ],
    testing: {
        browserHeadless: 'new',
    },
    plugins: [sass()],
    extras: {
        enableImportInjection: true,
    },
};
