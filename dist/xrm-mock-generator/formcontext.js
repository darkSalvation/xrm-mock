"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XrmMock = require("../xrm-mock/index");
var ui_1 = require("./ui");
var FormContext = /** @class */ (function () {
    function FormContext() {
    }
    FormContext.createFormContext = function (entity) {
        return new XrmMock.FormContextMock(new XrmMock.DataMock(new XrmMock.EntityMock(entity)), ui_1.default.createUi());
    };
    return FormContext;
}());
exports.default = FormContext;
//# sourceMappingURL=formcontext.js.map