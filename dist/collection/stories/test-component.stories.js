import { html } from "lit";
export default {
    title: 'Components/Test Component',
    tags: ['autodocs'],
    render: (args) => getElement(args),
    argTypes: {},
};
export const Default = {
    args: {
        label: 'Label Here',
        message: 'Message will show here',
    },
};
function getElement(args) {
    return html `
        <test-component
            label="${args.label}"
            message="${args.message}"
        >
        </test-component>
    `;
}
//# sourceMappingURL=test-component.stories.js.map
