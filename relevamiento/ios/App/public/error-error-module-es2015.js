(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-error-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>error</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>\n     Ocurrio un error al ingresar Usuario o contraseña, reingrese por favor\n    </ion-label>\n  </ion-item>\n  <ion-item-divider>\n    <ion-button size=\"large\"  (click)=\"onSalir()\">Reingresar datos</ion-button>\n  \n  </ion-item-divider>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/error/error-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/error/error-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ErrorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageRoutingModule", function() { return ErrorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _error_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.page */ "./src/app/error/error.page.ts");




const routes = [
    {
        path: '',
        component: _error_page__WEBPACK_IMPORTED_MODULE_3__["ErrorPage"]
    }
];
let ErrorPageRoutingModule = class ErrorPageRoutingModule {
};
ErrorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ErrorPageRoutingModule);



/***/ }),

/***/ "./src/app/error/error.module.ts":
/*!***************************************!*\
  !*** ./src/app/error/error.module.ts ***!
  \***************************************/
/*! exports provided: ErrorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageModule", function() { return ErrorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _error_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-routing.module */ "./src/app/error/error-routing.module.ts");
/* harmony import */ var _error_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error.page */ "./src/app/error/error.page.ts");







let ErrorPageModule = class ErrorPageModule {
};
ErrorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _error_routing_module__WEBPACK_IMPORTED_MODULE_5__["ErrorPageRoutingModule"]
        ],
        declarations: [_error_page__WEBPACK_IMPORTED_MODULE_6__["ErrorPage"]]
    })
], ErrorPageModule);



/***/ }),

/***/ "./src/app/error/error.page.scss":
/*!***************************************!*\
  !*** ./src/app/error/error.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/error/error.page.ts":
/*!*************************************!*\
  !*** ./src/app/error/error.page.ts ***!
  \*************************************/
/*! exports provided: ErrorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPage", function() { return ErrorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ErrorPage = class ErrorPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onSalir() {
        {
            console.log('Vuelvo a register');
            this.router.navigateByUrl('/home');
        }
    }
};
ErrorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ErrorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./error.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./error.page.scss */ "./src/app/error/error.page.scss")).default]
    })
], ErrorPage);



/***/ })

}]);
//# sourceMappingURL=error-error-module-es2015.js.map