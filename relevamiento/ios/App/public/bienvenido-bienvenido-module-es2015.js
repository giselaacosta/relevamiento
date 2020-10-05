(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bienvenido-bienvenido-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bienvenido/bienvenido.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bienvenido/bienvenido.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Bienvenido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item-divider>\n \n    <ion-button size=\"large\" (click)=\"logOut()\" >Volver a menu principal</ion-button>\n  \n\n  </ion-item-divider>\n  </ion-content>");

/***/ }),

/***/ "./src/app/bienvenido/bienvenido-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/bienvenido/bienvenido-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BienvenidoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidoPageRoutingModule", function() { return BienvenidoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bienvenido_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bienvenido.page */ "./src/app/bienvenido/bienvenido.page.ts");




const routes = [
    {
        path: '',
        component: _bienvenido_page__WEBPACK_IMPORTED_MODULE_3__["BienvenidoPage"]
    }
];
let BienvenidoPageRoutingModule = class BienvenidoPageRoutingModule {
};
BienvenidoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BienvenidoPageRoutingModule);



/***/ }),

/***/ "./src/app/bienvenido/bienvenido.module.ts":
/*!*************************************************!*\
  !*** ./src/app/bienvenido/bienvenido.module.ts ***!
  \*************************************************/
/*! exports provided: BienvenidoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidoPageModule", function() { return BienvenidoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bienvenido_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bienvenido-routing.module */ "./src/app/bienvenido/bienvenido-routing.module.ts");
/* harmony import */ var _bienvenido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bienvenido.page */ "./src/app/bienvenido/bienvenido.page.ts");







let BienvenidoPageModule = class BienvenidoPageModule {
};
BienvenidoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bienvenido_routing_module__WEBPACK_IMPORTED_MODULE_5__["BienvenidoPageRoutingModule"]
        ],
        declarations: [_bienvenido_page__WEBPACK_IMPORTED_MODULE_6__["BienvenidoPage"]]
    })
], BienvenidoPageModule);



/***/ }),

/***/ "./src/app/bienvenido/bienvenido.page.scss":
/*!*************************************************!*\
  !*** ./src/app/bienvenido/bienvenido.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpZW52ZW5pZG8vYmllbnZlbmlkby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/bienvenido/bienvenido.page.ts":
/*!***********************************************!*\
  !*** ./src/app/bienvenido/bienvenido.page.ts ***!
  \***********************************************/
/*! exports provided: BienvenidoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidoPage", function() { return BienvenidoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let BienvenidoPage = class BienvenidoPage {
    constructor(router) {
        this.router = router;
    }
    logOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Error al ingresar!!');
            this.router.navigateByUrl('/home');
        });
    }
};
BienvenidoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BienvenidoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bienvenido',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bienvenido.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bienvenido/bienvenido.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bienvenido.page.scss */ "./src/app/bienvenido/bienvenido.page.scss")).default]
    })
], BienvenidoPage);



/***/ })

}]);
//# sourceMappingURL=bienvenido-bienvenido-module-es2015.js.map