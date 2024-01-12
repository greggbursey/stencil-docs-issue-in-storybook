import { html } from 'lit';

import { TestComponentProps } from '../components/test-component/text-component';

export default {
    title: 'Components/Test Component',
    tags: ['autodocs'],
    render: (args: TestComponentProps) => getElement(args),
    argTypes: {},
};

export const Default = {
    args: {
        label: 'Label Here',
        message: 'Message will show here',
    } satisfies TestComponentProps,
};

function getElement(args) {
    return html`
        <test-component
            label="${args.label}"
            message="${args.message}"
        >
        </test-component>
    `;
}
