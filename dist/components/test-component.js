import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const testComponentCss = ".label,.message{padding:1rem;color:#fff}.label{background-color:blue}.message{background-color:red}";

const TestComponent$1 = /*@__PURE__*/ proxyCustomElement(class TestComponent extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.label = undefined;
        this.message = undefined;
    }
    render() {
        return (h(Host, null, h("div", { class: 'label' }, this.label), h("div", { class: 'message' }, this.message)));
    }
    static get style() { return testComponentCss; }
}, [1, "test-component", {
        "label": [1],
        "message": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["test-component"];
    components.forEach(tagName => { switch (tagName) {
        case "test-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TestComponent$1);
            }
            break;
    } });
}

const TestComponent = TestComponent$1;
const defineCustomElement = defineCustomElement$1;

export { TestComponent, defineCustomElement };

//# sourceMappingURL=test-component.js.map