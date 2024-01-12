import { Host, h } from "@stencil/core";
export class TestComponent {
    constructor() {
        this.label = undefined;
        this.message = undefined;
    }
    render() {
        return (h(Host, null, h("div", { class: 'label' }, this.label), h("div", { class: 'message' }, this.message)));
    }
    static get is() { return "test-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["test-component.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["test-component.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TestComponentProps['label']",
                    "resolved": "string",
                    "references": {
                        "TestComponentProps": {
                            "location": "local",
                            "path": "C:/Repos/STENCIL_DOCS_ISSUE/packages/component-library/src/components/test-component/text-component.tsx",
                            "id": "src/components/test-component/text-component.tsx::TestComponentProps"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "This is label documentation."
                },
                "attribute": "label",
                "reflect": false
            },
            "message": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TestComponentProps['message']",
                    "resolved": "string",
                    "references": {
                        "TestComponentProps": {
                            "location": "local",
                            "path": "C:/Repos/STENCIL_DOCS_ISSUE/packages/component-library/src/components/test-component/text-component.tsx",
                            "id": "src/components/test-component/text-component.tsx::TestComponentProps"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "This is a message documentation."
                },
                "attribute": "message",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=text-component.js.map
