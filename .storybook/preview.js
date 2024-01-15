// https://ionic.io/blog/how-to-use-storybook-with-stencil
import { defineCustomElements } from "../loader";
defineCustomElements();

import { setCustomElementsManifest } from "@storybook/web-components";
import customElements from "../custom-elements.json";

setCustomElementsManifest(customElements);

/** @type { import('@storybook/web-components').Preview } */
const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
