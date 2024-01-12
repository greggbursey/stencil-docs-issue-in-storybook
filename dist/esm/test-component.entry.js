import { r as registerInstance, h, H as Host } from './index-f3a4de62.js';

const testComponentCss = ".label,.message{padding:1rem;color:#fff}.label{background-color:blue}.message{background-color:red}";

const TestComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = undefined;
        this.message = undefined;
    }
    render() {
        return (h(Host, null, h("div", { class: 'label' }, this.label), h("div", { class: 'message' }, this.message)));
    }
};
TestComponent.style = testComponentCss;

export { TestComponent as test_component };

//# sourceMappingURL=test-component.entry.js.map