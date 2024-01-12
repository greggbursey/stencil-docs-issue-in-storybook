'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-301b2f1d.js');

const testComponentCss = ".label,.message{padding:1rem;color:#fff}.label{background-color:blue}.message{background-color:red}";

const TestComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = undefined;
        this.message = undefined;
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: 'label' }, this.label), index.h("div", { class: 'message' }, this.message)));
    }
};
TestComponent.style = testComponentCss;

exports.test_component = TestComponent;

//# sourceMappingURL=test-component.cjs.entry.js.map