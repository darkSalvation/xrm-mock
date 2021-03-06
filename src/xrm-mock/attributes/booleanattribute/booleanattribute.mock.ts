import { ControlMock } from "../../controls/control/control.mock";
import { EnumAttributeMock, IEnumAttributeComponents } from "../enumattribute/enumattribute.mock";

export class BooleanAttributeMock extends EnumAttributeMock<ControlMock, boolean> implements Xrm.Attributes.BooleanAttribute {
    public static create(name: string, value: boolean = false): BooleanAttributeMock {
        return new BooleanAttributeMock({ name, value }  as any as IBooleanAttributeComponents);
    }

    private static defaultComponents(components: IBooleanAttributeComponents): IBooleanAttributeComponents {
        components.attributeType = "boolean";
        return components;
    }

    constructor(components: IBooleanAttributeComponents) {
        super(BooleanAttributeMock.defaultComponents(components));
    }
}

export interface IBooleanAttributeComponents extends IEnumAttributeComponents<ControlMock, boolean> {
}
