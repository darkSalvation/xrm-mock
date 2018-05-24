"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var uifocusable_mock_1 = require("../../controls/uifocusable/uifocusable.mock");
var uistandardelement_mock_1 = require("../../controls/uistandardelement/uistandardelement.mock");
var control_mock_1 = require("../control/control.mock");
var StandardControlMock = /** @class */ (function (_super) {
    __extends(StandardControlMock, _super);
    function StandardControlMock(components) {
        var _this = _super.call(this, components) || this;
        _this.disabled = components.disabled || false;
        _this.uiStandardElement = uistandardelement_mock_1.UiStandardElementMock.create(components.label || _this.name, components.visible);
        _this.uiFocusable = new uifocusable_mock_1.UiFocusableMock(components.hasFocus);
        _this.attribute = components.attribute;
        if (_this.attribute && _this.attribute.controls) {
            _this.attribute.controls.push(_this);
        }
        return _this;
    }
    StandardControlMock.prototype.addNotification = function (notification) {
        throw new Error("Method not implemented.");
    };
    StandardControlMock.prototype.clearNotification = function (uniqueId) {
        throw new Error(("clear notification not implemented"));
    };
    StandardControlMock.prototype.getDisabled = function () {
        return this.disabled;
    };
    StandardControlMock.prototype.setDisabled = function (disabled) {
        this.disabled = disabled;
    };
    StandardControlMock.prototype.setNotification = function (message, uniqueId) {
        throw new Error(("set notification not implemented"));
    };
    StandardControlMock.prototype.getAttribute = function () {
        if (["subgrid", "iframe", "webresource"].indexOf(this.getControlType()) === -1) {
            return this.attribute;
        }
        else {
            throw new Error("control is not bound to an attribute because it is of type " + this.getControlType());
        }
    };
    StandardControlMock.prototype.getLabel = function () {
        return this.uiStandardElement.getLabel();
    };
    StandardControlMock.prototype.setLabel = function (label) {
        this.uiStandardElement.setLabel(label);
    };
    StandardControlMock.prototype.getVisible = function () {
        return this.uiStandardElement.getVisible();
    };
    StandardControlMock.prototype.setVisible = function (visible) {
        this.uiStandardElement.setVisible(visible);
    };
    StandardControlMock.prototype.setFocus = function () {
        this.uiFocusable.setFocus();
    };
    return StandardControlMock;
}(control_mock_1.ControlMock));
exports.StandardControlMock = StandardControlMock;
//# sourceMappingURL=standardcontrol.mock.js.map