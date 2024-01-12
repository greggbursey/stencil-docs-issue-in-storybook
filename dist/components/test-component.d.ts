import type { Components, JSX } from "../types/components";

interface TestComponent extends Components.TestComponent, HTMLElement {}
export const TestComponent: {
    prototype: TestComponent;
    new (): TestComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
