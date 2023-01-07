"use strict";
var _a;
(function (options) {
    if (options & 1) {
        console.log = function () { };
        console.debug = function () { };
        console.error = function () { };
        console.warn = function () { };
        console.info = function () { };
    }
    if (options & 2) {
        window.alert = function () { };
        window.prompt = function () { return null; };
        window.confirm = function () { return false; };
    }
    if (options & 4) {
        document.write = function () { };
        document.writeln = function () { };
    }
})(parseInt(((_a = document.querySelector("script[data-bliss-options]")) === null || _a === void 0 ? void 0 : _a.getAttribute("data-golden-options")) || "3"));
