export interface TestComponentProps {
    /** This is label documentation. */
    label: string;
    /** This is a message documentation. */
    message: string;
}
export declare class TestComponent {
    /** This is label documentation. */
    label: TestComponentProps['label'];
    /** This is a message documentation. */
    message: TestComponentProps['message'];
    render(): any;
}
