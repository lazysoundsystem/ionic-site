"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return (d && d(target, key), void 0);
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PopupsPage = (function () {
    function PopupsPage(popup) {
        _classCallCheck(this, PopupsPage);

        this.popup = popup;
    }

    _createClass(PopupsPage, [{
        key: "showPopup",
        value: function showPopup() {
            this.popup.alert("Popup Title").then(function () {});
        }
    }]);

    return PopupsPage;
})();
exports.PopupsPage = PopupsPage;
exports.PopupsPage = PopupsPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'popups/popups.html'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.Popup !== 'undefined' && _ionicIonic.Popup) === 'function' && _a || Object])], PopupsPage);
var _a;