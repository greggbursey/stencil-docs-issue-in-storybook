import { Component, Host, Prop, h } from '@stencil/core';

export interface TestComponentProps {
    /** This is label documentation. */
    label: string;
    /** This is a message documentation. */
    message: string;
}

@Component({
    tag: 'test-component',
    styleUrl: 'test-component.scss',
    shadow: true,
})
export class TestComponent {
    /** This is label documentation. */
    @Prop() label!: TestComponentProps['label'];
    /** This is a message documentation. */
    @Prop() message!: TestComponentProps['message'];

    render() {
        return (
            <Host>
                <div class={'label'}>{this.label}</div>
                <div class={'message'}>{this.message}</div>
            </Host>
        );
    }
}
