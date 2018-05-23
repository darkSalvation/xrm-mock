/// <reference types="xrm" />
export declare class PageMock implements Xrm.Page {
    context: Xrm.GlobalContext;
    data: Xrm.Data;
    ui: Xrm.Ui;
    constructor(context: Xrm.GlobalContext, formContext: Xrm.FormContext);
    getAttribute<T extends Xrm.Page.Attribute>(attributeNameOrIndex: number | string): T;
    getAttribute<T extends Xrm.Page.Attribute>(delegateFunction?: Xrm.Collection.MatchingDelegate<T>): T[];
    getControl<T extends Xrm.Page.Control>(controlNameOrIndex: string | number): T;
    getControl<T extends Xrm.Page.Control>(delegateFunction?: Xrm.Collection.MatchingDelegate<T>): T[];
}
