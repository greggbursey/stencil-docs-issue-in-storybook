import { Component, Host, Prop, h } from '@stencil/core';

type TestComponentType = 'One' | 'Two' | 'Three';

export interface TestComponentProps {
    /** This is label documentation. */
    label: string;
    /** This is a message documentation. */
    message: string;
    /** Some other thing without a proper control. */
    otherThing: TestComponentType;
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
    /** Some other thing without a proper control. */
    @Prop() otherThing!: TestComponentProps['otherThing'];

    render() {
        return (
            <Host>
                <div class={'label'}>{this.label}</div>
                <div class={'message'}>{this.message}</div>
                <div class={'other'}>{this.otherThing}</div>
            </Host>
        );
    }
}