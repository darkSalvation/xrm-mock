import * as Visible from "../../../src/xrm-mock/controls/uicangetvisibleelement/uicangetvisibleelement.mock";
import * as Label from "../../../src/xrm-mock/controls/uilabelelement/uilabelelement.mock";
import * as Standard from "../../../src/xrm-mock/controls/uistandardelement/uistandardelement.mock";

describe("Xrm.Ui Mock", () => {
    beforeEach(() => {
        this.uiStandardElement = new Standard.UiStandardElementMock(
            new Label.UiLabelElementMock("Section_1"),
            new Visible.UiCanGetVisibleElementMock(true));
    });

    it("should instantiate", () => {
        expect(this.uiStandardElement).toBeDefined();
    });

    it("should be visible", () => {
        expect(this.uiStandardElement.getVisible()).toBe(true);
    });

    it("should toggle not visible", () => {
        expect(this.uiStandardElement.getVisible()).toBe(true);
        this.uiStandardElement.setVisible(false);
        expect(this.uiStandardElement.getVisible()).toBe(false);
    });

    it("should be labelled Section_1", () => {
        expect(this.uiStandardElement.getLabel()).toBe("Section_1");
    });

    it("should set its label to Section_2", () => {
        expect(this.uiStandardElement.getLabel()).toBe("Section_1");
        this.uiStandardElement.setLabel("Section_2");
        expect(this.uiStandardElement.getLabel()).toBe("Section_2");
    });
});
