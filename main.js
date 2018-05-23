(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var _views_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/detail/detail.component */ "./src/app/views/detail/detail.component.ts");
/* harmony import */ var _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/type-page/type-page.component */ "./src/app/views/type-page/type-page.component.ts");
/* harmony import */ var _views_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/cart/cart.component */ "./src/app/views/cart/cart.component.ts");
/* harmony import */ var _views_order_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/order/order.component */ "./src/app/views/order/order.component.ts");
/* harmony import */ var _views_pay_bill_pay_bill_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/pay-bill/pay-bill.component */ "./src/app/views/pay-bill/pay-bill.component.ts");
/* harmony import */ var _views_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/search-result/search-result.component */ "./src/app/views/search-result/search-result.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: '/type-page/type-page/1', pathMatch: 'full' },
    { path: 'type-page/type-page/:cat_id', component: _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__["TypePageComponent"] },
    { path: 'detail/detail/:goods_id', component: _views_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: 'type-page/type-page/:cat_id', component: _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__["TypePageComponent"] },
    { path: 'type-page/type-page/:cat_id/:x', component: _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__["TypePageComponent"] },
    { path: 'type-page/type-page/:cat_id/:x/:y', component: _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__["TypePageComponent"] },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z', component: _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__["TypePageComponent"] },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x', component: _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__["TypePageComponent"] },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x', component: _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__["TypePageComponent"] },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x', component: _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__["TypePageComponent"] },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x', component: _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__["TypePageComponent"] },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x/:y', component: _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__["TypePageComponent"] },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x/:y/:z', component: _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__["TypePageComponent"] },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x/:y/:z/:x', component: _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__["TypePageComponent"] },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x/:y/:z/:x/:y', component: _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__["TypePageComponent"] },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x/:y/:z/:x/:y/:z', component: _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__["TypePageComponent"] },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x/:y/:z/:x/:y/:z/:x', component: _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__["TypePageComponent"] },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x/:y/:z/:x/:y/:z/:x/:y', component: _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__["TypePageComponent"] },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x/:y/:z/:x/:y/:z/:x/:y/:z', component: _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_6__["TypePageComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'detail/:id', component: _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__["HeroDetailComponent"] },
    // { path: 'cart/:id', component: CartComponent },
    { path: 'cart/cart/:goods_id/:goods_name/:shop_price', component: _views_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"] },
    { path: 'cart/cart', component: _views_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"] },
    { path: 'order/order', component: _views_order_order_component__WEBPACK_IMPORTED_MODULE_8__["OrderComponent"] },
    { path: 'pay-bill/:money', component: _views_pay_bill_pay_bill_component__WEBPACK_IMPORTED_MODULE_9__["PayBillComponent"] },
    { path: 'search-result/search-result/:search_Text', component: _views_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_10__["SearchResultComponent"] },
    { path: 'heroes', component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__["HeroesComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\nh1 {\n    font-size: 1.2em;\n    color: #999;\n    margin-bottom: 0;\n  }\nh2 {\n    font-size: 2em;\n    margin-top: 0;\n    padding-top: 0;\n  }\nnav a {\n    padding: 5px 10px;\n    text-decoration: none;\n    margin-top: 10px;\n    display: inline-block;\n    background-color: #eee;\n    border-radius: 4px;\n  }\nnav a:visited, a:link {\n    color: #607D8B;\n  }\nnav a:hover {\n    color: #039be5;\n    background-color: #CFD8DC;\n  }\nnav a.active {\n    color: #039be5;\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n<!--\n<app-messages></app-messages>\n-->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/in-memory-data.service */ "./src/app/services/in-memory-data.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hero-search/hero-search.component */ "./src/app/hero-search/hero-search.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/type-page/type-page.component */ "./src/app/views/type-page/type-page.component.ts");
/* harmony import */ var _views_cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/cart/cart.component */ "./src/app/views/cart/cart.component.ts");
/* harmony import */ var _views_order_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/order/order.component */ "./src/app/views/order/order.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _views_pay_bill_pay_bill_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/pay-bill/pay-bill.component */ "./src/app/views/pay-bill/pay-bill.component.ts");
/* harmony import */ var _views_detail_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/detail/detail.component */ "./src/app/views/detail/detail.component.ts");
/* harmony import */ var _views_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/breadcrumb/breadcrumb.component */ "./src/app/views/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _views_search_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/search/search.component */ "./src/app/views/search/search.component.ts");
/* harmony import */ var _views_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/search-result/search-result.component */ "./src/app/views/search-result/search-result.component.ts");
/* harmony import */ var _views_small_goods_small_goods_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/small-goods/small-goods.component */ "./src/app/views/small-goods/small-goods.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // together for search Box




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_16__["HttpModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_10__["HeroesComponent"],
                _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_9__["HeroDetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__["MessagesComponent"],
                _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_11__["HeroSearchComponent"],
                _views_type_page_type_page_component__WEBPACK_IMPORTED_MODULE_13__["TypePageComponent"],
                _views_cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"],
                _views_order_order_component__WEBPACK_IMPORTED_MODULE_15__["OrderComponent"],
                _views_pay_bill_pay_bill_component__WEBPACK_IMPORTED_MODULE_17__["PayBillComponent"],
                _views_detail_detail_component__WEBPACK_IMPORTED_MODULE_18__["DetailComponent"],
                _views_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_19__["BreadcrumbComponent"],
                _views_search_search_component__WEBPACK_IMPORTED_MODULE_20__["SearchComponent"],
                _views_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_21__["SearchResultComponent"],
                _views_small_goods_small_goods_component__WEBPACK_IMPORTED_MODULE_22__["SmallGoodsComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Top Heroes</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let hero of heroes\" class=\"col-1-4\"\n      routerLink=\"/detail/{{hero.id}}\">\n    <div class=\"module hero\">\n      <h4>{{hero.name}}</h4>\n    </div>\n  </a>\n</div>\n\n<app-hero-search></app-hero-search>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/hero.service */ "./src/app/services/hero.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    DashboardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dataClass/defineClass.ts":
/*!******************************************!*\
  !*** ./src/app/dataClass/defineClass.ts ***!
  \******************************************/
/*! exports provided: Category, MenuItem, Hero, Teacher, Goods, CartItem, OrdInfo, OrdGoods, NetState_Result, AccountState_Result, Transaction_Result, Student, Transaction, Sign, Unlock, PwdChangeStatusModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teacher", function() { return Teacher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Goods", function() { return Goods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdInfo", function() { return OrdInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdGoods", function() { return OrdGoods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetState_Result", function() { return NetState_Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountState_Result", function() { return AccountState_Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction_Result", function() { return Transaction_Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sign", function() { return Sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unlock", function() { return Unlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PwdChangeStatusModel", function() { return PwdChangeStatusModel; });
var Category = /** @class */ (function () {
    function Category(id, cat_id, parent_id, cat_name, intro) {
        this.id = id;
        this.cat_id = cat_id;
        this.parent_id = parent_id;
        this.cat_name = cat_name;
        this.intro = intro;
    }
    return Category;
}());

var MenuItem = /** @class */ (function () {
    function MenuItem() {
    }
    return MenuItem;
}());

var Hero = /** @class */ (function () {
    function Hero(id, name, power, 
    // optional field (alterEgo).
    alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Hero;
}());

var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    return Teacher;
}());

var Goods = /** @class */ (function () {
    function Goods(id, cat_id, goods_id, goods_sn, brand_id, goods_name, shop_price, market_price, goods_quantity, sold_quantity, goods_weight, goods_brief, goods_desc, thumb_img, goods_img, ori_img, is_on_sale, is_delete, is_best, is_new, is_free_post, add_time, last_update) {
        this.id = id;
        this.cat_id = cat_id;
        this.goods_id = goods_id;
        this.goods_sn = goods_sn;
        this.brand_id = brand_id;
        this.goods_name = goods_name;
        this.shop_price = shop_price;
        this.market_price = market_price;
        this.goods_quantity = goods_quantity;
        this.sold_quantity = sold_quantity;
        this.goods_weight = goods_weight;
        this.goods_brief = goods_brief;
        this.goods_desc = goods_desc;
        this.thumb_img = thumb_img;
        this.goods_img = goods_img;
        this.ori_img = ori_img;
        this.is_on_sale = is_on_sale;
        this.is_delete = is_delete;
        this.is_best = is_best;
        this.is_new = is_new;
        this.is_free_post = is_free_post;
        this.add_time = add_time;
        this.last_update = last_update;
    }
    return Goods;
}());

var CartItem = /** @class */ (function () {
    function CartItem(id, goods_id, goods_name, shop_price, quantity) {
        this.id = id;
        this.goods_id = goods_id;
        this.goods_name = goods_name;
        this.shop_price = shop_price;
        this.quantity = quantity;
    }
    return CartItem;
}());

var OrdInfo = /** @class */ (function () {
    function OrdInfo() {
    }
    return OrdInfo;
}());

/*
export class   Ordinfo {

    ordinfo_id  : 	number;
    ord_sn	    :   string;
    user_id     : 	number;
    xm 		    :   string;
    mobile 		:   string;
    address 	: 	string;
    paytype 	:	number;
    paystatus   : 	number;
    money 		:   number;
    note 		:   string;
    ordtime		:   Date;
}
*/
var OrdGoods = /** @class */ (function () {
    function OrdGoods(ordgoods_id, ordinfo_id, goods_id, goods_name, shop_price, quantity) {
        this.ordgoods_id = ordgoods_id;
        this.ordinfo_id = ordinfo_id;
        this.goods_id = goods_id;
        this.goods_name = goods_name;
        this.shop_price = shop_price;
        this.quantity = quantity;
    }
    return OrdGoods;
}());

var NetState_Result = /** @class */ (function () {
    function NetState_Result() {
    }
    return NetState_Result;
}());

var AccountState_Result = /** @class */ (function () {
    function AccountState_Result() {
    }
    return AccountState_Result;
}());

var Transaction_Result = /** @class */ (function () {
    function Transaction_Result() {
    }
    return Transaction_Result;
}());

//localhost:8685
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());

var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    return Transaction;
}());

var Sign = /** @class */ (function () {
    function Sign() {
    }
    return Sign;
}());

var Unlock = /** @class */ (function () {
    function Unlock() {
    }
    return Unlock;
}());

var PwdChangeStatusModel = /** @class */ (function () {
    function PwdChangeStatusModel() {
    }
    return PwdChangeStatusModel;
}());



/***/ }),

/***/ "./src/app/dataClass/hero.ts":
/*!***********************************!*\
  !*** ./src/app/dataClass/hero.ts ***!
  \***********************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
var Hero = /** @class */ (function () {
    function Hero() {
    }
    return Hero;
}());



/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroDetailComponent's private CSS styles */\nlabel {\n    display: inline-block;\n    width: 3em;\n    margin: .5em 0;\n    color: #607D8B;\n    font-weight: bold;\n  }\ninput {\n    height: 2em;\n    font-size: 1em;\n    padding-left: .4em;\n  }\nbutton {\n    margin-top: 20px;\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer; cursor: hand;\n  }\nbutton:hover {\n    background-color: #cfd8dc;\n  }\nbutton:disabled {\n    background-color: #eee;\n    color: #ccc;\n    cursor: auto;\n  }"

/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hero\">\n  <h2>{{ hero.name | uppercase }} Details</h2>\n  <div><span>id: </span>{{hero.id}}</div>\n  <div>\n    <label>name:\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n    </label>\n  </div>\n  <button (click)=\"goBack()\">go back</button>\n  <button (click)=\"save()\">save</button>\n</div>"

/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.ts ***!
  \******************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dataClass_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataClass/hero */ "./src/app/dataClass/hero.ts");
/* harmony import */ var _services_hero_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/hero.service */ "./src/app/services/hero.service.ts");
// import { Hero } from '../hero';
// import { Component, OnInit, Input } from '@angular/core';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { ActivatedRoute } from '@angular/router';
// /*
// The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. 
// This component is interested in the route's bag of parameters extracted from the URL. 
// The "id" parameter is the id of the hero to display.
// */
// import { Location } from '@angular/common';
// import { HeroService }  from '../hero.service';
// @Component({
//   selector: 'app-hero-detail',
//   templateUrl: './hero-detail.component.html',
//   styleUrls: ['./hero-detail.component.css']
// })
// export class HeroDetailComponent implements OnInit {
//   @Input() hero: Hero;  // transfer from parent compoment ...
//   constructor(
//     private route: ActivatedRoute,
//     private heroService: HeroService,
//     private location: Location) { }
//   ngOnInit() {
//     this.getHero();
//   }
//   goBack(): void {
//     this.location.back();
//   }
//   getHero(): void {
//     // parameter ID ............................................
//     const id = +this.route.snapshot.paramMap.get('id');
//     this.heroService.getHero(id)
//       .subscribe(hero => this.hero = hero);
//   }
// }





var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    HeroDetailComponent.prototype.getHero = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService.updateHero(this.hero)
            .subscribe(function () { return _this.goBack(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _dataClass_hero__WEBPACK_IMPORTED_MODULE_3__["Hero"])
    ], HeroDetailComponent.prototype, "hero", void 0);
    HeroDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-detail',
            template: __webpack_require__(/*! ./hero-detail.component.html */ "./src/app/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__(/*! ./hero-detail.component.css */ "./src/app/hero-detail/hero-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "./src/app/hero-search/hero-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/hero-search/hero-search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroSearch private styles */\n.search-result li {\n    border-bottom: 1px solid gray;\n    border-left: 1px solid gray;\n    border-right: 1px solid gray;\n    width:195px;\n    height: 16px;\n    padding: 5px;\n    background-color: white;\n    cursor: pointer;\n    list-style-type: none;\n  }\n.search-result li:hover {\n    background-color: #607D8B;\n  }\n.search-result li a {\n    color: #888;\n    display: block;\n    text-decoration: none;\n  }\n.search-result li a:hover {\n    color: white;\n  }\n.search-result li a:active {\n    color: white;\n  }\n#search-box {\n    width: 200px;\n    height: 20px;\n  }\nul.search-result {\n    margin-top: 0;\n    padding-left: 0;\n  }"

/***/ }),

/***/ "./src/app/hero-search/hero-search.component.html":
/*!********************************************************!*\
  !*** ./src/app/hero-search/hero-search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h4>Hero Search</h4>\n \n  <!-- \n    The search() method is called via an event binding to the textbox's keystroke event.\n  -->\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n \n  <ul class=\"search-result\">\n    <li *ngFor=\"let hero of heroes$ | async\" >\n      <a routerLink=\"/detail/{{hero.id}}\">\n        {{hero.name}}\n      </a>\n    </li>\n  </ul>\n</div>\n\n<!--\nThe $ is a convention that indicates heroes$ is an Observable, not an array.\n\nThe *ngFor can't do anything with an Observable. But there's also a pipe character (|) followed by async, which identifies Angular's AsyncPipe.\n\nThe AsyncPipe subscribes to an Observable automatically so you won't have to do so in the component class.\n\n-->"

/***/ }),

/***/ "./src/app/hero-search/hero-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hero-search/hero-search.component.ts ***!
  \******************************************************/
/*! exports provided: HeroSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroSearchComponent", function() { return HeroSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/hero.service */ "./src/app/services/hero.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroSearchComponent = /** @class */ (function () {
    function HeroSearchComponent(heroService) {
        this.heroService = heroService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // Push a search term into the observable stream.
    HeroSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    HeroSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this.heroService.searchHeroes(term); }));
    };
    HeroSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-search',
            template: __webpack_require__(/*! ./hero-search.component.html */ "./src/app/hero-search/hero-search.component.html"),
            styles: [__webpack_require__(/*! ./hero-search.component.css */ "./src/app/hero-search/hero-search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"]])
    ], HeroSearchComponent);
    return HeroSearchComponent;
}());



/***/ }),

/***/ "./src/app/heroes/heroes.component.css":
/*!*********************************************!*\
  !*** ./src/app/heroes/heroes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.heroes li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.heroes a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n}\n.heroes a:hover {\n  color:#607D8B;\n}\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}"

/***/ }),

/***/ "./src/app/heroes/heroes.component.html":
/*!**********************************************!*\
  !*** ./src/app/heroes/heroes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>My Heroes</h2>\n \n<div>\n  <label>Hero name:\n    <input #heroName />\n  </label>\n  <!-- (click) passes input value to add() and then clears the input -->\n  <button (click)=\"add(heroName.value); heroName.value=''\">\n    add\n  </button>\n</div>\n \n<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes\">\n    <a routerLink=\"/detail/{{hero.id}}\">\n      <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n    </a>\n    <button class=\"delete\" title=\"delete hero\"\n    (click)=\"delete(hero)\">x</button>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/heroes/heroes.component.ts":
/*!********************************************!*\
  !*** ./src/app/heroes/heroes.component.ts ***!
  \********************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/hero.service */ "./src/app/services/hero.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.addHero({ name: name })
            .subscribe(function (hero) {
            _this.heroes.push(hero);
        });
    };
    HeroesComponent.prototype.delete = function (hero) {
        this.heroes = this.heroes.filter(function (h) { return h !== hero; });
        this.heroService.deleteHero(hero).subscribe();
    };
    HeroesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! ./heroes.component.html */ "./src/app/heroes/heroes.component.html"),
            styles: [__webpack_require__(/*! ./heroes.component.css */ "./src/app/heroes/heroes.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\nh2 {\n    color: red;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: lighter;\n  }\nbody {\n    margin: 2em;\n  }\nbody, input[text], button {\n    color: crimson;\n    font-family: Cambria, Georgia;\n  }\nbutton.clear {\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n  }\nbutton:hover {\n    background-color: #cfd8dc;\n  }\nbutton:disabled {\n    background-color: #eee;\n    color: #aaa;\n    cursor: auto;\n  }\nbutton.clear {\n    color: #888;\n    margin-bottom: 12px;\n  }"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/models/defineClass.ts":
/*!***************************************!*\
  !*** ./src/app/models/defineClass.ts ***!
  \***************************************/
/*! exports provided: Category, MenuItem, Hero, Teacher, Goods, CartItem, OrdInfo, OrdGoods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teacher", function() { return Teacher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Goods", function() { return Goods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdInfo", function() { return OrdInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdGoods", function() { return OrdGoods; });
var Category = /** @class */ (function () {
    function Category(id, cat_id, parent_id, cat_name, intro) {
        this.id = id;
        this.cat_id = cat_id;
        this.parent_id = parent_id;
        this.cat_name = cat_name;
        this.intro = intro;
    }
    return Category;
}());

var MenuItem = /** @class */ (function () {
    function MenuItem() {
    }
    return MenuItem;
}());

/*
export class Hero {
    id:     number;
    name:   string;
}
*/
var Hero = /** @class */ (function () {
    function Hero(id, name, power, 
    // optional field (alterEgo).
    alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Hero;
}());

var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    return Teacher;
}());

var Goods = /** @class */ (function () {
    function Goods(id, cat_id, goods_id, goods_sn, brand_id, goods_name, shop_price, market_price, goods_quantity, sold_quantity, goods_weight, goods_brief, goods_desc, thumb_img, goods_img, ori_img, is_on_sale, is_delete, is_best, is_new, is_free_post, add_time, last_update) {
        this.id = id;
        this.cat_id = cat_id;
        this.goods_id = goods_id;
        this.goods_sn = goods_sn;
        this.brand_id = brand_id;
        this.goods_name = goods_name;
        this.shop_price = shop_price;
        this.market_price = market_price;
        this.goods_quantity = goods_quantity;
        this.sold_quantity = sold_quantity;
        this.goods_weight = goods_weight;
        this.goods_brief = goods_brief;
        this.goods_desc = goods_desc;
        this.thumb_img = thumb_img;
        this.goods_img = goods_img;
        this.ori_img = ori_img;
        this.is_on_sale = is_on_sale;
        this.is_delete = is_delete;
        this.is_best = is_best;
        this.is_new = is_new;
        this.is_free_post = is_free_post;
        this.add_time = add_time;
        this.last_update = last_update;
    }
    return Goods;
}());

var CartItem = /** @class */ (function () {
    function CartItem(id, goods_id, goods_name, shop_price, quantity) {
        this.id = id;
        this.goods_id = goods_id;
        this.goods_name = goods_name;
        this.shop_price = shop_price;
        this.quantity = quantity;
    }
    return CartItem;
}());

var OrdInfo = /** @class */ (function () {
    function OrdInfo() {
    }
    return OrdInfo;
}());

/*
export class   Ordinfo {

    ordinfo_id  : 	number;
    ord_sn	    :   string;
    user_id     : 	number;
    xm 		    :   string;
    mobile 		:   string;
    address 	: 	string;
    paytype 	:	number;
    paystatus   : 	number;
    money 		:   number;
    note 		:   string;
    ordtime		:   Date;
}
*/
var OrdGoods = /** @class */ (function () {
    function OrdGoods(ordgoods_id, ordinfo_id, goods_id, goods_name, shop_price, quantity) {
        this.ordgoods_id = ordgoods_id;
        this.ordinfo_id = ordinfo_id;
        this.goods_id = goods_id;
        this.goods_name = goods_name;
        this.shop_price = shop_price;
        this.quantity = quantity;
    }
    return OrdGoods;
}());

/*
export class Hero {
    constructor(
        public id: number,
        public name: string) { }
}

*/


/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CartService = /** @class */ (function () {
    function CartService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.cartUrl = 'api/cartItems'; // URL to web api
    }
    CartService.prototype.getCartItems_O = function () {
        var _this = this;
        console.log("getCartItems_O");
        return this.http.get(this.cartUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (cartItems) { return _this.log("Fetched CartItems_O"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCartItems', [])));
    };
    CartService.prototype.getItems_P = function () {
        console.log("getItems_P");
        return this.http.get(this.cartUrl)
            .toPromise()
            .catch(this.handleError);
    };
    // GET CartItem by id. Return `undefined` when id not found 
    CartService.prototype.getCartItemNo404 = function (id) {
        var _this = this;
        var url = this.cartUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (goods) { return goods[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " Good id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("got Goods id=" + id)));
    };
    // GET CartItem by id. Will 404 if id not found 
    CartService.prototype.getItem_O = function (id) {
        var _this = this;
        console.log("getItem_O");
        var url = this.cartUrl + "/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("Fetched Cart Item_O, id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getCartItem id=" + id)));
    };
    // POST: add a new CartItem to the server 
    CartService.prototype.addItem_O = function (Item) {
        var _this = this;
        return this.http.post(this.cartUrl, Item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (Item) { return _this.log("added CartItem w/ id=" + Item.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('CartItem')));
    };
    CartService.prototype.addItem_P = function (item) {
        var _this = this;
        console.log("addItem_P item +++++++ ");
        console.log(item);
        return this.http
            .post(this.cartUrl, item, httpOptions)
            .toPromise()
            .then(function () { return _this.log("Add Cart Item_P, id=" + item.id); })
            .catch(this.handleError);
    };
    // PUT: update the Item on the server 
    CartService.prototype.updateItem_O = function (Item) {
        var _this = this;
        console.log("updateItem_O");
        return this.http.put(this.cartUrl, Item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("Updated Cart Item_O, id=" + Item.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updated Item')));
    };
    CartService.prototype.updateItem_P = function (Item) {
        var _this = this;
        console.log("updateItem_P");
        return this.http.put(this.cartUrl, Item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("Updated Cart Item_O, id=" + Item.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updated Item')));
    };
    // delete one
    CartService.prototype.deleteItem_O = function (item) {
        var _this = this;
        console.log("In cart Service, delete item: ");
        console.log(item);
        var url = this.cartUrl + "/" + item.id;
        return this.http.delete(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (Item) { return _this.log("deleted cart item w/ id=" + item.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('CartItem')));
    };
    CartService.prototype.deleteItems_O = function () {
        console.log("deleteItems_O");
        var url = this.cartUrl + "/$";
        return this.http.delete(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('CartItem')));
    };
    // delete all 
    CartService.prototype.deleteItems_P = function () {
        console.log("deleteItems_P");
        var url = this.cartUrl + "/$";
        return this.http.delete(url, httpOptions)
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    //**
    // * Handle Http operation that failed.
    // * Let the app continue.
    // * @param operation - name of the operation that failed
    // * @param result - optional value to return as the observable result
    // */
    CartService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    //** Log a ItemService message with the MessageService 
    CartService.prototype.log = function (message) {
        this.messageService.add('Service: ' + message);
    };
    CartService.prototype.createOneItem = function (item) {
        var _this = this;
        console.log("createOneItem +++++++ ");
        console.log(item);
        return this.http.post(this.cartUrl, JSON.stringify(item), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (Item) { return _this.log("createOneItem: " + Item); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('createOneItem Err')));
    };
    CartService.prototype.updateOneItem = function (item) {
        var _this = this;
        console.log("update ------- ");
        console.log(item);
        var url = this.cartUrl + "/" + item.id;
        return this.http
            .put(url, JSON.stringify(item), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated Item :" + item); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updated Item Err')));
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/goods.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/goods.service.ts ***!
  \*******************************************/
/*! exports provided: GoodsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsService", function() { return GoodsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
var GoodsService = /** @class */ (function () {
    function GoodsService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.goodsUrl = 'api/goods'; // URL to web api
        this.categoryUrl = 'app/categraies'; // URL to web api ,  web api   in Memory
        //private goodsUrl = 'https://pacific-plains-55185.herokuapp.com/api/students';  // URL to web api
        this.nasUrl = 'testnet.nebulas.io/v1/user/nebstate'; // URL to web api
        this.site = 'http://localhost:8685/v1/user/nebstate';
        //this.site = "https://testnet.nebulas.io/v1/user/nebstate";
        //this.site = "localhost:8685/v1/user/accountstate";
        //this.site = "https://pacific-plains-55185.herokuapp.com/api/students";
    }
    /*   Get From Array:
        getgoods(): Observable<Good[]> {
          return of(goods);
        }
    */
    // Not work here, because of HttpClient ??, move to remote service
    GoodsService.prototype.getNebState = function () {
        var _this = this;
        return this.http.get(this.site)
            .toPromise()
            .then(function () { return _this.log("get OrdInforItems_P"); })
            .catch(this.handleError);
    };
    /** GET goods from the server */
    /*   Not work -- new way ??
      getNebState (){
    
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});   // For mean
        let options = new RequestOptions({ headers: headers });
    
          return this.http.get<any>(this.site, httpOptions)
          .pipe(
            tap(goods => this.log(`fetched goods`)),
            catchError(this.handleError('get all goods', []))
          );
      }
    */
    GoodsService.prototype.getAccountState = function () {
        var _this = this;
        return this.http.post(this.site, { "address": "n1FF1nz6tarkDVwWQkMnnwFPuPKUaQTdptE" }, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (Item) { return _this.log("added Item w/ id="); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('added Item')));
    };
    GoodsService.prototype.getGoodsByID = function (cat_id) {
        //console.log("cat_id = " + cat_id);
        //this.paramsID = cat_id;
        return this.getGoods()
            .toPromise()
            .then(function (goodsOne) { return goodsOne.filter(function (good) { return good.cat_id === cat_id; }); });
    };
    /** GET goods from the server */
    GoodsService.prototype.getGoods = function () {
        var _this = this;
        console.log("Get goods");
        return this.http.get(this.goodsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (goods) { return _this.log("fetched goods"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('get all goods', [])));
    };
    /** GET Good by id. Return `undefined` when id not found */
    GoodsService.prototype.getGoodNo404 = function (id) {
        var _this = this;
        var url = this.goodsUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (goods) { return goods[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " Good id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("got Goods id=" + id)));
    };
    /** GET Good by id. Will 404 if id not found */
    GoodsService.prototype.getGood = function (id) {
        var _this = this;
        var url = this.goodsUrl + "/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched Good id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("got Goods id=" + id)));
    };
    /* GET goods whose name contains search term */
    GoodsService.prototype.searchgoods = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty Good array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http.get("api/goods/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("found goods matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searched goods', [])));
    };
    GoodsService.prototype.getCategory = function () {
        return this.http.get(this.categoryUrl)
            .toPromise()
            .then(function (response) { return response; }); // ????
    };
    //////// Save methods //////////
    /** POST: add a new Item to the server */
    GoodsService.prototype.addGoods = function (Item) {
        var _this = this;
        return this.http.post(this.goodsUrl, Item, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (Item) { return _this.log("added Item w/ id=" + Item.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('added Item')));
    };
    /** DELETE: delete the Item from the server */
    GoodsService.prototype.deleteGoods = function (Item) {
        var _this = this;
        var id = typeof Item === 'number' ? Item : Item.id;
        var url = this.goodsUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted Item id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleted Item')));
    };
    /** PUT: update the Item on the server */
    GoodsService.prototype.updateGoods = function (Item) {
        var _this = this;
        return this.http.put(this.goodsUrl, Item, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated Item id=" + Item.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updated Item')));
    };
    // Bad way:
    // getOneGoodsByID(goods_id: number) {
    //     console.log("goods_id = " + goods_id);
    //     return this.getGoods()
    //         .subscribe(goodsOne => goodsOne.filter(good => good.goods_id === goods_id));
    //   }
    GoodsService.prototype.getOneGoodsByID = function (id) {
        var _this = this;
        var url = this.goodsUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched hero id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getHero id=" + id)));
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    GoodsService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a Service message with the MessageService */
    GoodsService.prototype.log = function (message) {
        this.messageService.add('Service: ' + message);
    };
    GoodsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], GoodsService);
    return GoodsService;
}());



/***/ }),

/***/ "./src/app/services/hero.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/hero.service.ts ***!
  \******************************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
// import { Injectable } from '@angular/core';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Observable, of } from 'rxjs';
// import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
// import { MessageService } from './message.service';
// @Injectable({ providedIn: 'root' })
// export class HeroService {
//   constructor(private messageService: MessageService) { }
//   getHeroes(): Observable<Hero[]> {
//     // TODO: send the message _after_ fetching the heroes
//     this.messageService.add('HeroService: fetched heroes');
//     return of(HEROES);
//   }
//   getHero(id: number): Observable<Hero> {
//     // TODO: send the message _after_ fetching the hero
//     this.messageService.add(`HeroService: fetched hero id=${id}`);
//     return of(HEROES.find(hero => hero.id === id));
//   }
// }
// =========== Up for Array[] data service 





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var HeroService = /** @class */ (function () {
    function HeroService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.heroesUrl = 'api/heroes'; // URL to web api
    }
    /*   Get From Array:
        getHeroes(): Observable<Hero[]> {
          return of(HEROES);
        }
    */
    /** GET heroes from the server */
    HeroService.prototype.getHeroes = function () {
        var _this = this;
        return this.http.get(this.heroesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (heroes) { return _this.log("fetched heroes"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getHeroes', [])));
    };
    /** GET hero by id. Return `undefined` when id not found */
    HeroService.prototype.getHeroNo404 = function (id) {
        var _this = this;
        var url = this.heroesUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (heroes) { return heroes[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " hero id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getHero id=" + id)));
    };
    /** GET hero by id. Will 404 if id not found */
    HeroService.prototype.getHero = function (id) {
        var _this = this;
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched hero id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getHero id=" + id)));
    };
    /* GET heroes whose name contains search term */
    HeroService.prototype.searchHeroes = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http.get("api/heroes/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("found heroes matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchHeroes', [])));
    };
    //////// Save methods //////////
    /** POST: add a new hero to the server */
    HeroService.prototype.addHero = function (hero) {
        var _this = this;
        return this.http.post(this.heroesUrl, hero, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (hero) { return _this.log("added hero w/ id=" + hero.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addHero')));
    };
    /** DELETE: delete the hero from the server */
    HeroService.prototype.deleteHero = function (hero) {
        var _this = this;
        var id = typeof hero === 'number' ? hero : hero.id;
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted hero id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteHero')));
    };
    /** PUT: update the hero on the server */
    HeroService.prototype.updateHero = function (hero) {
        var _this = this;
        return this.http.put(this.heroesUrl, hero, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated hero id=" + hero.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateHero')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HeroService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    HeroService.prototype.log = function (message) {
        this.messageService.add('HeroService: ' + message);
    };
    HeroService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "./src/app/services/in-memory-data.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/in-memory-data.service.ts ***!
  \****************************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
// import { Injectable } from '@angular/core';
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        var cartItems = [];
        var ordInforItems = [];
        var ordGoodsItems = [];
        var categraies = [
            { id: 1, cat_id: 1, parent_id: 0, cat_name: 'Smart Phone', intro: 'Smart Phone' },
            { id: 2, cat_id: 2, parent_id: 0, cat_name: 'Laptop', intro: 'Laptop' },
            { id: 3, cat_id: 3, parent_id: 0, cat_name: 'Television', intro: 'Television' },
            //{ id: 4, cat_id: 4, parent_id: 0, cat_name: 'Car', intro: 'Television'},
            //{ id: 41, cat_id: 41, parent_id: 4, cat_name: 'Ford', intro: 'LG'},
            { id: 11, cat_id: 11, parent_id: 1, cat_name: 'iPhone', intro: 'iPhone' },
            { id: 12, cat_id: 12, parent_id: 1, cat_name: 'Samsung', intro: 'Samsung' },
            { id: 13, cat_id: 13, parent_id: 1, cat_name: 'HUAWEI', intro: 'HUAWEI' },
            { id: 21, cat_id: 21, parent_id: 2, cat_name: 'Lenovo', intro: 'lenovo' },
            { id: 22, cat_id: 22, parent_id: 2, cat_name: 'Dell', intro: 'Dell' },
            { id: 23, cat_id: 23, parent_id: 2, cat_name: 'HP', intro: 'HP' },
            { id: 31, cat_id: 31, parent_id: 3, cat_name: 'Hisense', intro: 'Hisense' },
            { id: 32, cat_id: 32, parent_id: 3, cat_name: 'Samsung', intro: 'Samsung' },
            { id: 33, cat_id: 33, parent_id: 3, cat_name: 'LG', intro: 'LG' },
        ];
        var goods = [
            { id: 1, cat_id: 11, goods_id: 1, goods_sn: 'ECS000001', brand_id: 1, goods_name: 'iPhone 6s',
                shop_price: 5.1, market_price: 869.60, goods_quantity: 127, sold_quantity: 6, goods_weight: 1.2,
                goods_brief: '', goods_desc: 'iPhone 6s 4.7-inch display',
                thumb_img: 'assets/imgs/iphone6s-silver-select.png', goods_img: 'assets/imgs/6s-1.jpeg',
                ori_img: 'assets/imgs/6s-3.jpeg', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 15, 2016 11:13:00')
            },
            { id: 2, cat_id: 11, goods_id: 2, goods_sn: 'ECS000002', brand_id: 1,
                goods_name: 'iPhone 6s Plus',
                shop_price: 5.0, market_price: 969.60, goods_quantity: 17, sold_quantity: 6,
                goods_weight: 0.2, goods_brief: '', goods_desc: 'iPhone 6s Plus 5.5-inch display',
                thumb_img: 'assets/imgs/iphone6sp-silver-select.png', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.jpg', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 11, 2016 11:13:00')
            },
            { id: 3, cat_id: 11, goods_id: 3, goods_sn: 'ECS000003', brand_id: 1,
                goods_name: 'iPhone 7',
                shop_price: 3.5, market_price: 1269.60, goods_quantity: 17, sold_quantity: 10, goods_weight: 1.2,
                goods_brief: '', goods_desc: 'iPhone 7 4.7-inch display',
                thumb_img: 'assets/imgs/iphone7-select-2016.png', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.jpg', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 4, cat_id: 11, goods_id: 4, goods_sn: 'ECS000004', brand_id: 1,
                goods_name: 'iPhone 7 Plus',
                shop_price: 4.8, market_price: 1169.60, goods_quantity: 17, sold_quantity: 3,
                goods_weight: 0.22, goods_brief: '', goods_desc: 'iPhone 7 Plus 5.5-inch display',
                thumb_img: 'assets/imgs/iphone7-plus-select-2016.png', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.jpg', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 5, cat_id: 11, goods_id: 5, goods_sn: 'ECS000005', brand_id: 1,
                goods_name: 'iPhone SE',
                shop_price: 5.9, market_price: 669.60, goods_quantity: 17, sold_quantity: 0,
                goods_weight: 0.32, goods_brief: '', goods_desc: 'iPhone SE 4-inch display',
                thumb_img: 'assets/imgs/iphonese-hero-modelselect.png', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.jpg', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 6, cat_id: 12, goods_id: 6, goods_sn: 'ECS000006', brand_id: 1,
                goods_name: 'Galaxy S7 edge',
                shop_price: 9.00, market_price: 1069.60, goods_quantity: 17, sold_quantity: 6,
                goods_weight: 0.12, goods_brief: '', goods_desc: 'ca-smartphones-galaxy-s7-galaxys7edge_gold',
                thumb_img: 'assets/imgs/ca-smartphones-galaxy-s7-galaxys7edge_gold.jpeg', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.jpeg', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 7, cat_id: 12, goods_id: 7, goods_sn: 'ECS000007', brand_id: 1,
                goods_name: 'Galaxy S7',
                shop_price: 7.00, market_price: 869.60, goods_quantity: 17, sold_quantity: 0,
                goods_weight: 0.23, goods_brief: '', goods_desc: 'iPhone 7 Plus 5.5-inch display',
                thumb_img: 'assets/imgs/ca-smartphones-galaxy-s7-galaxys7_gold.jpeg', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.jpg', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 8, cat_id: 13, goods_id: 8, goods_sn: 'ECS000008', brand_id: 1,
                goods_name: 'HUAWEI Mate 9',
                shop_price: 8.1, market_price: 969.60, goods_quantity: 17, sold_quantity: 9,
                goods_weight: 1.2, goods_brief: '', goods_desc: 'HUAWEI Mate 9 Leica dual camera, 5.9” FHD Display',
                thumb_img: 'assets/imgs/161103205719198317229Mate9_listimage1.jpg', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.jpg', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 9, cat_id: 21, goods_id: 9, goods_sn: 'ECS000009', brand_id: 1,
                goods_name: 'ThinkPad X260', shop_price: 7.10, market_price: 1169.60, goods_quantity: 17, sold_quantity: 0,
                goods_weight: 7.2, goods_brief: '', goods_desc: 'HThinkPad X260 New: Portable, durable, and fully loaded inside a thin, light design, this 12.5" enterprise-ready powerhouse comes with an extended battery life.',
                thumb_img: 'assets/imgs/lenovo-laptop-thinkpad-x260-front-side-2.jpg', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.png', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 10, cat_id: 21, goods_id: 10, goods_sn: 'ECS000010', brand_id: 1,
                goods_name: 'ThinkPad X1 Yoga', shop_price: 8.10, market_price: 1969.60, goods_quantity: 17, sold_quantity: 1,
                goods_weight: 0.12, goods_brief: '', goods_desc: 'ThinkPad X1 Yoga Ultralight 14" Business 2-in-1 The definition of versatility, this ultralight 2-in-1 adapts to your business with 4 flexible modes to work, present, create, and connect. Features a stunning display with intense color and deep contrast. Even a dockable, rechargeable stylus pen. Plus, the fastest, advanced mobile broadband technology available.',
                thumb_img: 'assets/imgs/X260-hero.png', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 11, cat_id: 21, goods_id: 11, goods_sn: 'ECS000011', brand_id: 1,
                goods_name: 'ThinkPad X1 Carbon', shop_price: 7.10, market_price: 1869.60, goods_quantity: 17, sold_quantity: 2,
                goods_weight: 1.2, goods_brief: '', goods_desc: 'Ultrathin. Ultralight. Ultratough. For the average Ultrabook™ these attributes may sound like a contradiction. But the new X1 Carbon is far above average. It features a carbon-fiber reinforced chassis & passes durability tests in extreme environments. Plus, it delivers more than all-day battery life, includes faster, more powerful storage performance, & has innovative docking options available, including wireless.',
                thumb_img: 'assets/imgs/X1-Carbon-List-Image.png', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.png', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 12, cat_id: 21, goods_id: 12, goods_sn: 'ECS000012', brand_id: 1,
                goods_name: 'ThinkPad X260', shop_price: 1.10, market_price: 1169.60, goods_quantity: 17, sold_quantity: 3,
                goods_weight: 1.2, goods_brief: '', goods_desc: 'HThinkPad X260 New: Portable, durable, and fully loaded inside a thin, light design, this 12.5" enterprise-ready powerhouse comes with an extended battery life.',
                thumb_img: 'assets/imgs/lenovo-laptop-thinkpad-x260-front-side-2.jpg', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.png', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 13, cat_id: 22, goods_id: 13, goods_sn: 'ECS000013', brand_id: 1,
                goods_name: 'ALIENWARE 13', shop_price: 9.99, market_price: 1669.60, goods_quantity: 17, sold_quantity: 0,
                goods_weight: 1.2, goods_brief: '', goods_desc: 'Alienware’s most powerful 13" gaming laptop. Featuring quad-core, H-class processors and NVIDIA 10-series graphics, the Alienware 13 has evolved to offer unprecedented gameplay.',
                thumb_img: 'assets/imgs/OriginalPng.png', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.png', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 14, cat_id: 22, goods_id: 14, goods_sn: 'ECS000014', brand_id: 1,
                goods_name: 'AHP EliteBook Folio G1', shop_price: 1.99, market_price: 1669.60, goods_quantity: 17, sold_quantity: 0,
                goods_weight: 1.2, goods_brief: '', goods_desc: 'HP EliteBook Folio G1 - 12.5" - Core m5 6Y54 - 8 GB RAM - 256 GB SSD',
                thumb_img: 'assets/imgs/4196553.jpeg', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.png', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 15, cat_id: 23, goods_id: 15, goods_sn: 'ECS000015', brand_id: 1,
                goods_name: 'HP EliteBook 2570p', shop_price: 3.99, market_price: 1769.60, goods_quantity: 17, sold_quantity: 0,
                goods_weight: 1.2, goods_brief: '', goods_desc: 'HP EliteBook 2570p - 12.5" - Core i7 3520M - 4 GB RAM - 128 GB SSD',
                thumb_img: 'assets/imgs/2832948.jpeg', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.png', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 16, cat_id: 31, goods_id: 16, goods_sn: 'ECS000016', brand_id: 1,
                goods_name: 'Hisense H7GB 50" 4K LED Smart TV', shop_price: 9.39, market_price: 869.60, goods_quantity: 17, sold_quantity: 0,
                goods_weight: 1.2, goods_brief: '', goods_desc: 'With a stunning Ultra High-Definition 4K resolution, the Hisense 50" LED Smart TV will make your favourite movies and TV shows look like real life. This smart TV is a certified Netflix Recommended TV and offers a modernized smart tv experience.',
                thumb_img: 'assets/imgs/10448897.jpg', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.jpg', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 17, cat_id: 32, goods_id: 17, goods_sn: 'ECS000017', brand_id: 1,
                goods_name: 'Samsung 40"', shop_price: 799.99, market_price: 6.60, goods_quantity: 17, sold_quantity: 0,
                goods_weight: 1.2, goods_brief: '', goods_desc: 'Samsung 40" KU6270 4K UHD Television',
                thumb_img: 'assets/imgs/485572.jpg', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.png', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 18, cat_id: 33, goods_id: 18, goods_sn: 'ECS000018', brand_id: 1,
                goods_name: 'LG 55" UH6150 4K UHD Smart', shop_price: 3.9, market_price: 1669.60, goods_quantity: 17, sold_quantity: 0,
                goods_weight: 1.2, goods_brief: '', goods_desc: 'LG 55" UH6150 4K UHD Smart LED Television',
                thumb_img: 'assets/imgs/10414409.jpg', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.png', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 19, cat_id: 32, goods_id: 19, goods_sn: 'ECS000019', brand_id: 1,
                goods_name: 'Samsung 58" Smart Full HD LED ', shop_price: 6.99, market_price: 1769.60, goods_quantity: 17, sold_quantity: 0,
                goods_weight: 1.2, goods_brief: '', goods_desc: 'Samsung 58" Smart Full HD LED ',
                thumb_img: 'assets/imgs/485597.jpg', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.png', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 20, cat_id: 31, goods_id: 20, goods_sn: 'ECS000020', brand_id: 1,
                goods_name: 'Sylvania 39" HD LED ', shop_price: 2.99, market_price: 469.60, goods_quantity: 17, sold_quantity: 0,
                goods_weight: 1.2, goods_brief: '', goods_desc: 'HP EliteBook 2570p - 12.5" - Core i7 3520M - 4 GB RAM - 128 GB SSD',
                thumb_img: 'assets/imgs/483663.jpg', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.png', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 21, cat_id: 33, goods_id: 21, goods_sn: 'ECS000021', brand_id: 1,
                goods_name: 'LG 49" UH6100 4K UHD Smart', shop_price: 1.99, market_price: 1169.60, goods_quantity: 17, sold_quantity: 0,
                goods_weight: 1.2, goods_brief: '', goods_desc: 'LG 49" UH6100 4K UHD Smart LED TV with webOS™ 3.0',
                thumb_img: 'assets/imgs/436631.jpg', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.png', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 22, cat_id: 33, goods_id: 22, goods_sn: 'ECS000022', brand_id: 1,
                goods_name: 'LG 55" UH7650 4K Super ', shop_price: 3.42, market_price: 1669.60, goods_quantity: 17, sold_quantity: 0,
                goods_weight: 0.26, goods_brief: '', goods_desc: 'LG 55" UH7650 4K Super UHD Television with webOS™ 3.0',
                thumb_img: 'assets/imgs/436115.jpg', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.png', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 23, cat_id: 32, goods_id: 23, goods_sn: 'ECS000023', brand_id: 1,
                goods_name: 'Samsung 40" 1080p LED', shop_price: 3.99, market_price: 1669.60, goods_quantity: 17, sold_quantity: 0,
                goods_weight: 0.12, goods_brief: '', goods_desc: 'Samsung 40" 1080p LED Smart Hub Smart TV (UN40J5200AFXZC) Model #: UN40J5200AFXZC Web Code: 10382339',
                thumb_img: 'assets/imgs/10382339.jpg', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.png', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
            { id: 24, cat_id: 23, goods_id: 24, goods_sn: 'ECS000024', brand_id: 1,
                goods_name: 'HP 15.6" Touchscreen', shop_price: 5.9, market_price: 869.60, goods_quantity: 17, sold_quantity: 0,
                goods_weight: 0.25, goods_brief: '', goods_desc: 'HP 15.6" Touchscreen Laptop - Black (Intel Core i3-6100U/1024 GB HDD/8 GB RAM/Windows 10 Home)',
                thumb_img: 'assets/imgs/10483535.jpg', goods_img: 'images/200905/imgs/4_G_1241422402722.jpg',
                ori_img: 'images/200905/source_img/4_G_1241422402919.png', is_on_sale: true, is_delete: true, is_best: true, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 13, 2016 11:13:00')
            },
        ];
        return { heroes: heroes,
            cartItems: cartItems,
            categraies: categraies,
            ordInforItems: ordInforItems,
            ordGoodsItems: ordGoodsItems,
            goods: goods
        };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var OrderService = /** @class */ (function () {
    function OrderService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.ordInforUrl = 'app/ordInforItems'; // URL to web api ,  web api   in Memory
        this.ordGoodsUrl = 'app/ordGoodsItems'; // URL to web api ,  web api   in Memory
    }
    OrderService.prototype.getOrdInforItems = function () {
        var _this = this;
        console.log("order.service - getOrdInforItems() ... ");
        return this.http.get(this.ordInforUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (ordInfos) { _this.log("fetched OrdInfos"); _this.log("" + ordInfos); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getOrdInforItems', [])));
    };
    OrderService.prototype.getOrdInforItems_P = function () {
        var _this = this;
        return this.http
            .get(this.ordInforUrl)
            .toPromise()
            .then(function () { return _this.log("get Order Infor Items_P"); })
            .catch(this.handleError);
    };
    OrderService.prototype.getOrdGoodsItems = function () {
        var _this = this;
        return this.http.get(this.ordGoodsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (ordGoods) { return _this.log("fetched OrdGoods"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getOrdGoodsItems', [])));
    };
    OrderService.prototype.getOrdGoodsItems_P = function () {
        var _this = this;
        return this.http.get(this.ordGoodsUrl)
            .toPromise()
            .then(function () { return _this.log("get OrdInforItems_P"); })
            .catch(this.handleError);
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    OrderService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    OrderService.prototype.log = function (message) {
        this.messageService.add('HeroService: ' + message);
    };
    OrderService.prototype.create_OrdInforItem_old = function (item) {
        var _this = this;
        console.log("In create_OrdInforItem, ordinfo_id: " + item.ordinfo_id);
        // Add to memory DB ????????????????????????????????????????????????????????????
        console.log(item);
        return this.http
            .post(this.ordInforUrl, item, httpOptions)
            .toPromise()
            .then(function () { return _this.log("Add order info item ++++++++++++++++++++++++++++++++++=, ordinfo_id=" + item.ordinfo_id); })
            .catch(this.handleError);
    };
    /** POST: add a new hero to the server */
    OrderService.prototype.create_OrdInforItem = function (hero) {
        var _this = this;
        return this.http.post(this.ordInforUrl, hero, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (hero) { return _this.log("added hero w/ id=" + hero.ordinfo_id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addHero')));
    };
    OrderService.prototype.create_OrdGoodsItem = function (item) {
        var _this = this;
        console.log("In create_OrdGoodsItem, ordgoods_id: " + item.ordgoods_id);
        return this.http
            .post(this.ordGoodsUrl, item, httpOptions)
            .toPromise()
            .then(function () { return _this.log("Add order goods item, ordgoods_id=" + item.ordgoods_id); })
            .catch(this.handleError);
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/remote.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/remote.service.ts ***!
  \********************************************/
/*! exports provided: PwdChangeStatusModel, RemoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PwdChangeStatusModel", function() { return PwdChangeStatusModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteService", function() { return RemoteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PwdChangeStatusModel = /** @class */ (function () {
    function PwdChangeStatusModel() {
    }
    return PwdChangeStatusModel;
}());

var RemoteService = /** @class */ (function () {
    function RemoteService(http) {
        this.http = http;
        //this.site = 'https://pacific-plains-55185.herokuapp.com/';
        this.site = 'http://localhost:8685';
        //this.site = 'https://testnet.nebulas.io';
        // https://pacific-plains-55185.herokuapp.com/api/students
    }
    RemoteService.prototype.getNebState = function () {
        //let url = 'http://localhost:8685/v1/user/nebstate';
        var url = this.site + '/v1/user/nebstate';
        return this.http.get(url)
            .toPromise()
            .catch(this.handleError);
    };
    /* For Testing
    getProducts(): Promise<Student[] | any> {

        //let url  = this.site + 'api/students';
        let url = 'http://localhost:8685/v1/user/nebstate';

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });   // For mean
        let options = new RequestOptions({ headers: headers });

        return this.http.get(url, options)
            .toPromise()
            .then(response => response.json() as Student[])
            .catch(this.handleError);
    }
    */
    RemoteService.prototype.getAccountState = function (address) {
        var _this = this;
        var url = this.site + '/v1/user/accountstate';
        //let url = 'http://localhost:8685/v1/user/accountstate';
        //let url = 'https://testnet.nebulas.io/v1/user/accountstate';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' }); // For mean
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        //return this.http.post(url, {"address":"n1MjR3J28LPYGSVNGYC8DWsM7VJaAqqPnWH"}, options)  // local address
        return this.http.post(url, { "address": address }, options) // Test net address
            .toPromise()
            .then(function (response) { return _this.parsePwdChangeData(response); })
            .catch(this.handleError);
    };
    RemoteService.prototype.sendTransaction = function (transaction) {
        var _this = this;
        var url = this.site + '/v1/admin/transaction';
        //let url = 'http://localhost:8685/v1/admin/transaction';
        //let url = 'http://localhost:8685/v1/user/accountstate';
        //let url = 'https://testnet.nebulas.io/v1/user/accountstate';
        console.log(transaction);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' }); // For mean
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(url, transaction, options) // Test net address
            .toPromise()
            .then(function (response) { return _this.parsePwdChangeData(response); })
            .catch(this.handleError);
    };
    RemoteService.prototype.unlock = function (unlock) {
        var _this = this;
        var url = this.site + '/v1/admin/account/unlock';
        //let url = 'https://testnet.nebulas.io/v1/admin/account/unlock';
        console.log(url);
        console.log(unlock);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' }); // For mean
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        //return this.http.post(url, unlock, options)    // Test net address
        return this.http.post(url, { "address": unlock.address, "passphrase": unlock.passphrase, "duration": unlock.duration }, options) // Test net address
            .toPromise()
            .then(function (response) { console.log(response); _this.parsePwdChangeData(response); })
            .catch(this.handleError);
    };
    RemoteService.prototype.sign = function (sign) {
        var _this = this;
        var url = this.site + '/v1/admin/sign';
        //let url = 'https://testnet.nebulas.io/v1/admin/account/unlock';
        console.log(url);
        console.log(sign);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' }); // For mean
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(url, { "transaction": { "from": sign.from, "to": sign.to, "value": sign.value, "nonce": sign.nonce, "gasPrice": sign.gasPrice, "gasLimit": sign.gasLimit }, "passphrase": sign.passphrase }, options)
            .toPromise()
            .then(function (response) { return _this.parsePwdChangeData(response); })
            .catch(this.handleError);
    };
    // Retreival of JSON from .NET is a success. ----------------------------------------------------------------------------
    // I had trouble parsing the passwordChange response with extractData so I created this custom function to do it.
    RemoteService.prototype.parsePwdChangeData = function (res) {
        var pwdChangeStatus = new PwdChangeStatusModel();
        pwdChangeStatus._body = res["_body"];
        pwdChangeStatus.status = res["status"];
        pwdChangeStatus.statusText = res["statusText"];
        return pwdChangeStatus || {};
    };
    // Retreival of JSON from .NET is a success.
    RemoteService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    // An error occurred. Notify the user.
    RemoteService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMsg);
    };
    RemoteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RemoteService);
    return RemoteService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
    }
    /*
      search(term: string): Observable<Goods[]> {
        return this.http
            .get(`app/instructors/?name=${term}`)
            .map((r: Response) => r.json().data as Goods[]);
      }
    */
    SearchService.prototype.search = function (term) {
        return this.http.get("app/instructors/?name=" + term)
            .toPromise()
            .then(function (r) { return r.json().data; })
            .catch(this.handleError);
    };
    // Json file data
    /*
    searchForJsonFile(term: string): Observable<string[]> {
  
      console.log(term);
  
      return this.http
          .get(`./app/data/test.json?name=${term}`)
          //.get(this.dataUrl)    ?????? No filer ??
          .map(this.extractData)
          .catch(this.handleError);
    }
  */
    SearchService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    SearchService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMsg);
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/views/breadcrumb/breadcrumb.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/breadcrumb/breadcrumb.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/breadcrumb/breadcrumb.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/breadcrumb/breadcrumb.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"goods\">\n  \n        <!--<ol class=\"breadcrumb col-lg-10 col-md-10 col-sm-12 col-xs-12\" style=\"margin-top:0px; padding-top:0px;\">-->\n        <ol class=\"breadcrumb col-lg-10 col-md-10 col-sm-12 col-xs-12\">\n      \n          <!--<li><a href=\"#\">Home</a></li>-->\n          <span class=\"glyphicon glyphicon-hand-right\"></span>&nbsp;\n          <!--<li  *ngFor=\"let item of menuMyItems\"><a routerLink={{item.path}}{{item.parameterID}}{{item.random}} routerLinkActive=\"active fluffy\">{{item.linkName}}</a></li>-->\n          <li  *ngFor=\"let item of menuMyItems\"><a routerLink={{item.path}}{{item.parameterID}} routerLinkActive=\"active fluffy\">{{item.linkName}}</a></li>\n       \n          <li class=\"active\">{{goods.goods_name}}</li>\n        \n         </ol>\n      </div>\n      \n      "

/***/ }),

/***/ "./src/app/views/breadcrumb/breadcrumb.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_goods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/goods.service */ "./src/app/services/goods.service.ts");
/* harmony import */ var _models_defineClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/defineClass */ "./src/app/models/defineClass.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(goodsService) {
        this.goodsService = goodsService;
        this.menuMyItems = new Array();
        this.tabItems = new Array();
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        // console.log(this.goods.goods_name);
        this.getCategoryThenBreadCrumb();
    };
    // export class BreadcrumbComponent {
    //   @Input()
    //   hero: Goods;
    // }
    BreadcrumbComponent.prototype.getCategory = function () {
        var _this = this;
        return this.goodsService.getCategory()
            .then(function (categories) { return _this.categories = categories; });
    };
    BreadcrumbComponent.prototype.getCategoryByID = function () {
        var _this = this;
        return this.goodsService
            .getCategory()
            .then(function (categories) { return _this.categories = categories; });
    };
    // In  then() ,  call a new function ************
    BreadcrumbComponent.prototype.getCategoryThenBreadCrumb = function () {
        var _this = this;
        return this.getCategoryByID()
            .then(function () { return _this.createMenuItems(); });
    };
    // Create Menu string array ..........................
    BreadcrumbComponent.prototype.createMenuItems = function () {
        //// console.log("createMenuItems Method :  -----------------------");
        // console.log(this.goods.cat_id);
        // console.log("this.categories.length: " + this.categories.length);
        var subCat;
        var item1;
        for (var i = 0; i < this.categories.length; i++) {
            if (this.categories[i].cat_id == this.goods.cat_id) {
                // console.log(this.categories[i].cat_id);
                subCat = this.categories[i];
                item1 = {
                    id: 'bread' + i,
                    parameterID: subCat.cat_id,
                    path: '/type-page/type-page/',
                    linkName: subCat.cat_name,
                    active: '',
                    random: this.getRandomString(i + 1) // get random url tail for refresh
                };
                // late push, change order 
                //this.menuMyItems.push(item);
                //console.log(item1);
                break;
            }
        }
        for (var i = 0; i < this.categories.length; i++) {
            if (this.categories[i].cat_id == subCat.parent_id) {
                var subCat1 = this.categories[i];
                var item = {
                    id: 'bread' + i,
                    parameterID: subCat1.cat_id,
                    path: '/type-page/type-page/',
                    linkName: subCat1.cat_name,
                    active: '',
                    random: this.getRandomString(i + 1) // get random url tail for refresh
                };
                this.menuMyItems.push(item);
                this.menuMyItems.push(item1);
                //console.log(item);
                break;
            }
        }
    };
    BreadcrumbComponent.prototype.getRandomString = function (len) {
        var str = '';
        for (var i = 0; i < len; i++) {
            str += "/1";
        }
        //console.log(str);
        return str;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_defineClass__WEBPACK_IMPORTED_MODULE_2__["Goods"])
    ], BreadcrumbComponent.prototype, "goods", void 0);
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/views/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.css */ "./src/app/views/breadcrumb/breadcrumb.component.css")]
        }),
        __metadata("design:paramtypes", [_services_goods_service__WEBPACK_IMPORTED_MODULE_1__["GoodsService"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/views/cart/cart.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/cart/cart.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".caption {\n\n    background-color: #BBD8DC;\n}\n\n\n"

/***/ }),

/***/ "./src/app/views/cart/cart.component.html":
/*!************************************************!*\
  !*** ./src/app/views/cart/cart.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n                aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">\n                    <img alt=\"Nebulas\" src=\"assets/imgs/icon_19.png\"></a>   \n            <a class=\"navbar-brand\" href=\"#\">NAS Shop</a>\n        </div>\n    <!--\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li>\n                    <a routerLink=\"/type-page/type-page/11\" routerLinkActive=\"active fluffy\">\n                        <span class=\"glyphicon glyphicon-screenshot\"></span> Shopping</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a routerLink=\"/dashboard/dashboard\" routerLinkActive=\"active fluffy\">\n                        <span class=\"glyphicon glyphicon-pencil\"></span> Admin</a>\n                </li>\n            </ul>\n        </div>\n    -->\n\n    </div>\n</nav>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-offset-0 col-md-6\">\n            <div class=\"panel panel-info\" *ngIf=\"!selectedOrder\">\n                <div class=\"panel-heading\">\n                    <h4>Cart goods listing</h4>\n                </div>\n                <br>\n                <table class=\"table table-striped\" style=\"box-shadow:2px 2px 3px #ccc;\">\n                    <tr>\n                        <th></th>\n                        <th>Goods ID</th>\n                        <th>Goods Name</th>\n                        <th>Quantity</th>\n                        <th>Sold Price</th>\n                        <th>Subtotal</th>\n                    </tr>\n                    <tr *ngFor=\"let item of cartItems\">\n                        <td>\n                            <button class=\"delete\" (click)=\"deleteOne(item); $event.stopPropagation()\">x</button>\n                        </td>\n                        <td align=\"center\">{{item.goods_id}}</td>\n                        <td>{{item.goods_name}}</td>\n                        <td>{{item.quantity}}</td>\n                        <td>{{item.shop_price}} NAS</td>\n                        <td>{{item.shop_price*item.quantity}} NAS</td>\n                    </tr>\n                </table>\n                <br />\n                <div class=\"btn-group\">\n                    <button type=\"button\" class=\"btn btn-info\" (click)=\"goBack()\">Go on shopping</button>\n                    <!--\n                    <a routerLink=\"/type-page/type-page/1\" class=\"btn btn-primary\" role=\"button\">Continue shopping</a>\n                    <button type=\"button\" class=\"btn btn-info\" (click)=\"clearCart()\"> Clear Cart</button>\n                    -->\n                    <button type=\"button\" class=\"btn btn-warning\" (click)=\"confirmAndSaveOrder()\">Confirm order</button>\n                </div>\n            </div>\n\n            <div class=\"thumbnail\" *ngIf=\"selectedOrder\">\n                <div class=\"caption\">\n                    <h4>Order goods listing </h4>\n                </div>\n                <div class=\"table-responsive\">\n                    <table class=\"table table-striped\">\n                        <tr>\n                            <th>Order ID</th>\n                            <th>Goods ID</th>\n                            <th>Name</th>\n                            <th>Shop Price</th>\n                            <th>Quantity</th>\n                            <th>Total Cost</th>\n                        </tr>\n                        <tr *ngFor=\"let item of ordGoodsArray\">\n                            <td align=\"center\">{{item.ordinfo_id}}</td>\n                            <td align=\"center\">{{item.goods_id}}</td>\n\n                            <td>{{item.goods_name}}</td>\n                            <td>{{item.shop_price}} NAS</td>\n                            <td align=\"center\">{{item.quantity}}</td>\n                            <td>{{(item.shop_price*item.quantity)}} NAS</td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-xs-12 col-sm-6\">\n            <div class=\"thumbnail\" *ngIf=\"selectedOrder\">\n                <div class=\"caption\">\n                    <h4>Order information</h4>\n                </div>\n                <table class=\"table table-striped\">\n                    <tr>\n                        <th>Order ID :</th>\n                        <th>{{selectedOrder.ordinfo_id}}</th>\n                    </tr>\n                    <tr>\n                        <th>Order SN : </th>\n                        <th>{{selectedOrder.ord_sn}}</th>\n                    </tr>\n                    <tr>\n                        <th>User ID :</th>\n                        <th>{{selectedOrder.user_id}}</th>\n                    </tr>\n                    <tr>\n                        <th>Mobile :</th>\n                        <th>{{selectedOrder.mobile}}</th>\n                    </tr>\n                    <tr>\n                        <th>Total Cost : </th>\n                        <th>{{selectedOrder.money}} NAS</th>\n                    </tr>\n                    <tr>\n                        <th>Notes : </th>\n                        <th>{{selectedOrder.note}}</th>\n                    </tr>\n                </table>\n                <hr />\n                <div class=\"btn-group\">\n                    <button type=\"button\" class=\"btn btn-info\" (click)=\"goBack()\">Go on shopping</button>\n                    <!--\n                    <button type=\"button\" class=\"btn btn-info\" (click)=\"clearCart()\">Cancel</button>\n                    -->\n                    <a routerLink=\"/pay-bill/{{selectedOrder.money}}\" class=\"btn btn-warning\" role=\"button\">Pay the bill</a>\n                </div> \n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/views/cart/cart.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, orderService, route, 
    //private routeParams: RouteParams,
    router, location) {
        this.cartService = cartService;
        this.orderService = orderService;
        this.route = route;
        this.router = router;
        this.location = location;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        // init
        this.cartItem = { id: -1, goods_id: 4, goods_name: 'iPhone 6s88', shop_price: 621.34, quantity: 2 };
        console.log(this.route.params);
        this.sub = this.route.params.subscribe(function (params) {
            _this.cartItem.id = +params['goods_id'];
            _this.cartItem.goods_id = +params['goods_id']; // (+) converts string 'id' to a number
            _this.cartItem.goods_name = params['goods_name'];
            _this.cartItem.shop_price = +params['shop_price'];
            _this.cartItem.quantity = 1;
        });
        console.log(this.cartItem);
        // If no parameter come in from url
        if (this.cartItem.id > 0) {
            //console.log("this.route.parameterFromUrl = " + this.cartItem);
            // First Add or Updat eone to cart , in the Memory first !!!!
            this.findOneItemAfterGetAll(this.cartItem);
            // For get Max ID
            this.getOrder();
            // For get Max ID
            this.getOrdGoods();
        }
    };
    // In  then() ,  call a new function ************
    CartComponent.prototype.findOneItemAfterGetAll = function (item) {
        var _this = this;
        return this.getCartItems()
            .then(function () { return _this.findItemAddOne_Memory(item); });
    };
    // Do in Array
    CartComponent.prototype.findItemAddOne = function (item) {
        for (var i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].goods_id == item.goods_id) {
                console.log("find it and account ++ ");
                this.cartItems[i].quantity++;
                return true;
            }
        }
        console.log("new one, and add to memory array ! ");
        this.cartItems.push(item);
        return false;
    };
    //*********** Add a new one or update a old one item **********
    CartComponent.prototype.findItemAddOne_Memory = function (item) {
        var _this = this;
        for (var i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].goods_id == item.goods_id) {
                this.cartItems[i].quantity++;
                console.log("find item ID: " + this.cartItems[i].goods_id + ", quantity++ : " + this.cartItems[i].quantity + ", and update !");
                return this.cartService.updateItem_P(this.cartItems[i])
                    .subscribe(function () { return _this.getCartItems(); });
            }
        }
        console.log("new one, and add it! ID: " + item.goods_id);
        //this.cartItems.push(item);  do not need
        return this.cartService.addItem_P(this.cartItem)
            .then(function () { return _this.getCartItems(); });
    };
    CartComponent.prototype.getCartItems = function () {
        var _this = this;
        return this.cartService.getCartItems_O()
            .toPromise()
            .then(function (cartItems) { return _this.cartItems = cartItems; });
    };
    // add to in-memory-data
    CartComponent.prototype.addItem = function (item) {
        var _this = this;
        if (!item) {
            return;
        }
        console.log("addItem(): " + item);
        this.cartService.createOneItem(item)
            .toPromise()
            .then(function (oneItem) {
            _this.cartItems.push(oneItem);
            //this.selectedTeacher = null;
        });
    };
    // update to in-memory-data
    CartComponent.prototype.updateItem = function (item) {
        //if (!item) { return; }
        this.cartService.updateOneItem(item);
        // .then(oneItem => {
        //   this.cartItems.push(oneItem);
        //this.selectedTeacher = null;
        // });
    };
    // delete to in-memory-data
    CartComponent.prototype.deleteOne = function (item) {
        var _this = this;
        this.cartService
            .deleteItem_O(item)
            .subscribe(function () {
            _this.cartItems = _this.cartItems.filter(function (h) { return h !== item; });
        });
    };
    // add to in-Array-data
    CartComponent.prototype.addItemToArray = function (item) {
        //if (!item) { return; }
        this.cartItems.push(item);
    };
    // delete to in-Array-data
    CartComponent.prototype.deleteOneToArray = function (item) {
        this.cartItems = this.cartItems.filter(function (h) { return h !== item; });
    };
    // Clear remove cart and DB
    CartComponent.prototype.clearCart = function () {
        //console.log(this.cartItems);
        var item;
        // From Array to index to delete Memory items :
        while (item = this.cartItems.pop()) {
            this.deleteOne(item);
        }
        //console.log(this.cartItems);
    };
    CartComponent.prototype.reloadCart = function () {
        this.getCartItems();
    };
    //  For Create new order infor and order Goods items (two tables) to DB and go to order show page
    CartComponent.prototype.confirmAndSaveOrder = function () {
        if ((!this.cartItems) || (this.cartItems.length <= 0)) {
            alert(" Your cart is empty now !");
            return;
        }
        var newGoodsID = this.getOrdGoods_NewID();
        var newOrderID = this.getOrdGoods_NewID();
        var total_money = 0;
        for (var i = 0; i < this.cartItems.length; i++) {
            total_money += (this.cartItems[i].quantity * this.cartItems[i].shop_price);
            var item1 = {
                ordgoods_id: newGoodsID++,
                ordinfo_id: newOrderID,
                goods_id: this.cartItems[i].goods_id,
                goods_name: this.cartItems[i].goods_name,
                shop_price: this.cartItems[i].shop_price,
                quantity: this.cartItems[i].quantity
            };
            this.ordGoodsArray.push(item1);
            this.addOne_OrdGoodsItem(item1);
        }
        var m = new Date();
        var dateString = m.getUTCFullYear() + "-" +
            ("0" + (m.getUTCMonth() + 1)).slice(-2) + "-" +
            ("0" + m.getUTCDate()).slice(-2) + " " +
            ("0" + m.getUTCHours()).slice(-2) + ":" +
            ("0" + m.getUTCMinutes()).slice(-2) + ":" +
            ("0" + m.getUTCSeconds()).slice(-2);
        this.selectedOrder = {
            ordinfo_id: newOrderID,
            ord_sn: dateString,
            user_id: 1,
            mobile: "15966057988",
            money: total_money,
            note: "Order confirmed at " + dateString
        };
        this.addOne_OrdInforItem(this.selectedOrder);
        // Should go to order list ..., but does not know how to go ???????
        // Good Way !
        //this.router.navigate( ['order/order/', { id: 1 }] );
        //this.router.navigate( ['order/order'] );
        /*
         It calls the router's navigate method with a Link Parameters Array.
         This array is similar to the link parameters array
         we met earlier in an anchor tag while binding to the RouterLink directive.
         This time we see it in code rather than in HTML.
         */
        // Here should clear cart items . Ready confirm order:
        this.clearCart();
    };
    // Below For Order part :  ------------------------------------------
    CartComponent.prototype.getOrder = function () {
        var _this = this;
        return this.orderService.getOrdInforItems()
            .subscribe(function (orders) { return _this.ordersArray = orders; });
    };
    CartComponent.prototype.getOrdGoods = function () {
        var _this = this;
        return this.orderService.getOrdGoodsItems()
            .subscribe(function (orders) { return _this.ordGoodsArray = orders; });
    };
    CartComponent.prototype.getOrdGoods_NewID = function () {
        if (this.ordersArray.length <= 0)
            return 1; // first One
        this.ordersArray.sort(function (a, b) { return b.ordinfo_id - a.ordinfo_id; });
        return (this.ordersArray[0].ordinfo_id + 1);
    };
    // add to in-memory-data
    CartComponent.prototype.addOne_OrdInforItem = function (item) {
        //if (!item) { return; }
        this.orderService.create_OrdInforItem(item);
    };
    // add to in-memory-data
    CartComponent.prototype.addOne_OrdGoodsItem = function (item) {
        //if (!item) { return; }
        this.orderService.create_OrdGoodsItem(item);
    };
    CartComponent.prototype.goBack = function () {
        this.location.back();
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/views/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/views/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/views/detail/detail.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/detail/detail.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-type-page {\n    height: 700px;\n}\n\n.row {\n    margin-top: 1em;\n}\n\n.caption {\n\n    background-color: #BBD8DC;\n}\n\n.small_pic {\n\n    display: inline;\n\n    height: 100px;\n    width:  100px;\n}\n\n#myCarousel{\n\n    float: left;\n    display: inline;\n    margin-right: 10px;\n\n}\n\n\n"

/***/ }),

/***/ "./src/app/views/detail/detail.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/detail/detail.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default\">\n        <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n                  data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Ang Shop</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav\">\n            <li><a routerLink=\"/type-page/type-page/11\" routerLinkActive=\"active fluffy\"><span class=\"glyphicon glyphicon-screenshot\"></span> Shopping</a></li>\n          </ul>\n          <!--\n          <search></search>\n        -->\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a routerLink=\"/dashboard/dashboard\" routerLinkActive=\"active fluffy\"><span class=\"glyphicon glyphicon-pencil\"></span> Admin</a></li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a routerLink=\"/cart/cart\" routerLinkActive=\"active fluffy\"><span class=\"glyphicon glyphicon-shopping-cart\"></span> Cart</a></li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n    \n    \n    <div class=\"row\">\n      <div class=\"container\">\n          <!--  ??????? can not use structure \n        <div  *ngFor=\"let item of goodsArray\" >\n        -->\n            \n          <app-breadcrumb [goods]=\"goodsArray\"></app-breadcrumb>\n    \n          <!--<div id=\"myCarousel\" class=\"carousel slide col-xs-12 col-md-4 col-sm-5\" data-ride=\"carousel\">-->\n          <div id=\"myCarousel\" class=\"carousel slide col-xs-12 col-md-4 col-sm-5\" data-ride=\"carousel\" data-interval=\"3000\">\n            <ol class=\"carousel-indicators\">\n              <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n              <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n              <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n            </ol>\n            <div class=\"carousel-inner\">\n              <div  class=\"item active\" style=\"background:#FFF\">\n                <img  src={{thumb_img}} alt=\"1\" style=\"height: 460px; margin: 0 auto\">\n                                                    \n              </div>\n              <div  class=\"item\" style=\"background:#FFF;\">\n                <img  src={{goods_img}} alt=\"2\" style=\"height: 460px; margin: 0 auto\">\n              </div>\n              <div class=\"item\" style=\"background:#FFF;\">\n                <img  src={{ori_img}} alt=\"3\" style=\"height: 460px; margin: 0 auto\">\n              </div>\n            </div>\n            <a href=\"#myCarousel\" data-slide=\"prev\" class=\"carousel-control left\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n            <a href=\"#myCarousel\" data-slide=\"next\" class=\"carousel-control right\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n          </div>\n    \n        <div class=\"thumbnail col-xs-12 col-md-6 col-sm-6\">\n          <div class=\"caption\">\n            <h3>{{goods_name}}</h3>\n          </div>\n            <div class=\"table-responsive\">\n              <table class=\"table table-striped\">\n                <tr>\n                  <th>Goods ID :</th>\n                  <th>{{goods_id}}</th>\n                </tr>\n                <tr>\n                  <th>Goods SN : </th>\n                  <th>{{goods_sn}}</th>\n                </tr>\n    \n                <tr>\n                  <th>Market Price :</th>\n                  <th><s>{{market_price|currency:'USD':'symbol-narrow'}}</s></th>\n                </tr>\n    \n                <tr>\n                  <th>Shop Price :</th>\n                  <th>{{shop_price|currency:'NAS ':'code'}}</th>\n                </tr>\n    \n                <tr>\n                  <th>Stock Quantity: </th>\n                  <th>{{goods_quantity}}</th>\n                </tr>\n    \n                <tr>\n                  <th>Sold Quantity: </th>\n                  <th>{{sold_quantity}}</th>\n                </tr>\n    \n                <tr>\n                  <th>Product Weight : </th>\n                  <th>{{goods_weight}} kg</th>\n                </tr>\n    \n                <tr>\n                  <th>Product Details : </th>\n                  <th>{{goods_desc}}</th>\n                </tr>\n    \n              </table>\n    \n              <hr />\n              <div>\n                <button type=\"button\" class=\"btn btn-info  col-md-6 col-sm-6 col-xs-6\" (click)=\"goBack()\" >Go Back</button>\n    \n                <a routerLink=\"/cart/cart/{{goods_id}}/{{goods_name}}/{{shop_price}}\" class=\"btn btn-success col-md-6 col-sm-6 col-xs-6\" role=\"button\">Add to Cart</a>\n              </div>\n            </div>\n        </div>\n      </div>\n    \n    <script src=\"../imgs/jquery-1.10.2.min.js\"></script>\n    <script src=\"../imgs/bootstrap.min.js\"></script>\n    \n    <script type=\"text/javascript\">\n    \n          $('#myCarousel').carousel({\n              //自动4秒播放\n              interval : 2000,\n          });\n    \n        $(function () {\n    \n            alert(\"come in !\");\n    \n            //轮播自动播放\n            $('#myCarousel').carousel({\n                //自动4秒播放\n                interval : 2000,\n            });\n    \n            //设置垂直居中\n    //\n    //        $('.carousel-control').css('line-height', $('.carousel-inner img').height() + 'px');\n    //        $(window).resize(function () {\n    //            var $height = $('.carousel-inner img').eq(0).height() ||\n    //                $('.carousel-inner img').eq(1).height() ||\n    //                $('.carousel-inner img').eq(2).height();\n    //            $('.carousel-control').css('line-height', $height + 'px');\n    //        });\n    \n        });\n    </script>\n    \n    "

/***/ }),

/***/ "./src/app/views/detail/detail.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/detail/detail.component.ts ***!
  \**************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_goods_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/goods.service */ "./src/app/services/goods.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { DataService }              from '../../services/data-service.service';


var DetailComponent = /** @class */ (function () {
    function DetailComponent(
    //private dataService: DataService,
    goodsService, route, location) {
        this.goodsService = goodsService;
        this.route = route;
        this.location = location;
    }
    //ngOnInit(): void {
    DetailComponent.prototype.ngAfterContentInit = function () {
        //console.log(this);
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.parameterTab = +params['goods_id']; // (+) converts string 'id' to a number
        });
        console.log("this.route.params = " + this.parameterTab);
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) { return _this.goodsService.getOneGoodsByID(+params['goods_id']); }))
            .subscribe(function (oneGoods) {
            _this.goodsArray = oneGoods;
            _this.goods_id = oneGoods.goods_id;
            _this.goods_name = oneGoods.goods_name;
            _this.shop_price = oneGoods.shop_price;
            _this.thumb_img = oneGoods.thumb_img;
            _this.goods_img = oneGoods.goods_img;
            _this.ori_img = oneGoods.ori_img;
            _this.goods_sn = oneGoods.goods_sn;
            _this.market_price = oneGoods.market_price;
            _this.shop_price = oneGoods.shop_price;
            _this.sold_quantity = oneGoods.sold_quantity;
            _this.goods_weight = oneGoods.goods_weight;
            _this.goods_desc = oneGoods.goods_desc;
            console.log(oneGoods);
        });
    };
    /*   Good way , too
    ngOnInit() {
      this.route.params.forEach((params: Params) => {
        let localID = params['id'];
        this.id = localID;
      });
      this.teacher = this.getOneData(this.id);
    }
    */
    /*
    save(): void {
  
      this.dataService.updateFromWebApi(this.teacher)
          .then(() => this.goBack());
  
      //this.dataService.updateLocal(this.teacher);
      //this.location.back();
    }
  */
    DetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    DetailComponent.prototype.showCat = function () {
        console.log(" --------------- oneGoods :  " + this.oneGoods);
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/views/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/views/detail/detail.component.css")]
        })
        //使用@Component装饰器创建元数据
        // @Component({
        //   //moduleId: module.id,
        //   selector: 'app-detail',
        //   templateUrl: './detail.component.html',
        //   styleUrls: ['./detail.component.css']
        // })
        // 从ActivatedRoute服务的可观察对象params中取得id参数，
        ,
        __metadata("design:paramtypes", [_services_goods_service__WEBPACK_IMPORTED_MODULE_3__["GoodsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/views/order/order.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/order/order.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\n    background-color: #CFD8DC !important;\n    color: white;\n}\n.heroes {\n\n    margin: 0 0 0 0;\n    list-style-type: none;\n    padding: 0;\n    width: 18em;   /*  old : 15 em*/\n    align-content: center;\n}\n.heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    margin-left: 0em;\n    padding: .3em 0;\n\n    /* height: 1.6em; */\n    height: 1.85em;\n    border-radius: 4px;\n}\n.heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n}\n.heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n}\n.heroes .text {\n    position: relative;\n    top: -3px;\n}\n.heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n}\n.heroes button {\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n}\n.heroes button:hover {\n    background-color: #cfd8dc;\n}\n.heroes button.delete {\n    float:right;\n    margin-top: -2px;\n    margin-right: .8em;\n    background-color: gray !important;\n    color:white;\n}\n.heroes button, .heroes li, .heroes span {\n    box-sizing : content-box;\n    -webkit-box-sizing : content-box;\n}\n#list1 {\n\n    margin-top: 1em;\n}\n.caption {\n\n    background-color: #BBD8DC;\n}\n/*\nCopyright 2016 Google Inc. All Rights Reserved.\nUse of this source code is governed by an MIT-style license that\ncan be found in the LICENSE file at http://angular.io/license\n*/\n"

/***/ }),

/***/ "./src/app/views/order/order.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/order/order.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n              data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Angular 2</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/type-page/type-page/11\" routerLinkActive=\"active fluffy\"><span class=\"glyphicon glyphicon-screenshot\"></span> Shopping</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink=\"/dashboard/dashboard\" routerLinkActive=\"active fluffy\"><span class=\"glyphicon glyphicon-pencil\"></span> Admin</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row\" id=\"list1\">\n  <div class=\"container\">\n  <div class=\"ccol-xs-4 col-md-4 col-sm-4\" >\n    <div class=\"thumbnail\">\n      <div class=\"caption\">\n        <h4>Order Items Listing</h4>\n      </div>\n      <div class=\"container\">\n      <ul class=\"heroes\">\n      <li *ngFor=\"let order of ordersArray\"\n          [class.selected]=\"order === selectedOrder\"\n          (click)=\"onSelect(order)\">\n        <span class=\"badge\">{{order.ordinfo_id}}</span> {{order.ord_sn}}\n        <button class=\"delete\"\n                (click)=\"delete(order); $event.stopPropagation()\">x</button>\n      </li>\n      </ul>\n        </div>\n      <a routerLink=\"/type-page/type-page/1\" class=\"btn btn-primary\" role=\"button\">Continue shopping</a>\n      <a routerLink=\"/cart/cart\" class=\"btn btn-default\" role=\"button\">Check cart</a>\n    </div>\n  </div>\n\n  <div class=\"col-xs-12 col-sm-6\" >\n    <div class=\"thumbnail\" *ngIf=\"selectedOrder\">\n      <div class=\"caption\">\n        <h4>Order Information</h4>\n      </div>\n      <table class=\"table table-striped\">\n        <tr>\n          <th>Order ID :</th>\n          <th>{{selectedOrder.ordinfo_id}}</th>\n        </tr>\n        <tr>\n          <th>Order SN : </th>\n          <th>{{selectedOrder.ord_sn}}</th>\n        </tr>\n        <tr>\n          <th>User ID :</th>\n          <th>{{selectedOrder.user_id}}</th>\n        </tr>\n        <tr>\n          <th>Mobile :</th>\n          <th>{{selectedOrder.mobile}}</th>\n        </tr>\n        <tr>\n          <th>Total Cost : </th>\n          <th>{{selectedOrder.money | currency:'NAS ':'symbol-narrow'}}</th>\n        </tr>\n        <tr>\n          <th>Notes : </th>\n          <th>{{selectedOrder.note}}</th>\n        </tr>\n      </table>\n    </div>\n\n    <div class=\"thumbnail\" *ngIf=\"selectedOrder\">\n      <div class=\"caption\">\n        <h4>Order Goods Listing  </h4>\n      </div>\n        <div class=\"table-responsive\">\n            <table class=\"table table-striped\" >\n                <tr>\n                  <th>Order ID</th>\n                  <th>Goods ID</th>\n                  <th>Name</th>\n                  <th>Shop Price</th>\n                  <th>Account</th>\n                  <th>Total Cost</th>\n                </tr>\n\n                <tr *ngFor=\"let item of selectedOrdGoods\">\n                  <td align=\"center\">{{item.ordinfo_id}}</td>\n                  <td align=\"center\">{{item.goods_id}}</td>\n\n                  <td>{{item.goods_name}}</td>\n                  <td>{{item.shop_price | currency:'NAS ':'symbol-narrow'}}</td>\n                  <td align=\"center\">{{item.quantity}}</td>\n                  <td>{{(item.shop_price*item.quantity) | currency:'NAS ':'symbol-narrow'}}</td>\n                </tr>\n            </table>\n        </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/order/order.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/order/order.component.ts ***!
  \************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dataClass_defineClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataClass/defineClass */ "./src/app/dataClass/defineClass.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderComponent = /** @class */ (function () {
    function OrderComponent(orderService, cartService, location) {
        this.orderService = orderService;
        this.cartService = cartService;
        this.location = location;
    }
    OrderComponent.prototype.ngOnInit = function () {
        this.cartItem = new _dataClass_defineClass__WEBPACK_IMPORTED_MODULE_2__["CartItem"](10, 4, 'iPhone 6s88', 621.34, 2);
        // For test : 
        //this.realCartItem = this.cartItem;
        // this.cartService.addItem_P(this.cartItem)
        // .then( () => this.getCartItems() )
        // .then( () => this.cartService.updateItem_O(this.cartItem) 
        // .subscribe( () => this.getCartItems() ));   
        //this.getOrder_P();
        //  .then( orders => this.ordersArray = orders);
        //.then( () => this.getCartItems_P() )
        //.then( () => this.confirmAndSaveOrder()
        //.then( () => this.getOrder() )
        this.getOrder();
        //.then( () => this.getOrdGoods())
        //   .then( () => this.getCartItems_P() )
        //   //.then(cartItems => this.cartItems = cartItems)
        //   .then( () => this.confirmAndSaveOrder())
        //   .then( () => this.getOrder() )
        //   .then( () => this.getOrdGoods() );
        //this.getOrder();
        // .subscribe( () => this.newOrderID = this.ordersArray.length + 1)
        // .then();
        this.getOrdGoods();
    };
    // private AddOrderAfterGetCart(): void
    // {
    //   this.getCartItems_P()
    //       .then(() => this.addNewOrder())
    //       .then(() => null)
    // }
    // private addNewOrder() : void 
    // {
    //   if( this.cartItems.length <= 0 )
    //     return;  // No goods in cart
    //   for(let i = 0; i<this.cartItems.length; i++ )
    //   {
    //       console.log("new one, and add it! ID: " + item.goods_id);
    //       //this.cartItems.push(item);  do not need
    //       return this.cartService.addItem_P(this.cartItem)
    //         .then(() => this.getCartItems());
    //   }
    // }
    //*********** GET goods from the server **********
    OrderComponent.prototype.getCartItems = function () {
        var _this = this;
        this.cartService.getItems_P()
            .then(function (goodsArray) { return _this.cartItems = goodsArray; });
    };
    OrderComponent.prototype.getCartItems_P = function () {
        var _this = this;
        return this.cartService.getItems_P()
            .then(function (cartItems) { return _this.cartItems = cartItems; });
    };
    OrderComponent.prototype.getOrder = function () {
        var _this = this;
        this.orderService.getOrdInforItems()
            .subscribe(function (orders) { return _this.ordersArray = orders; });
    };
    OrderComponent.prototype.getOrder_P = function () {
        var _this = this;
        return this.orderService.getOrdInforItems_P()
            .then(function (orders) { return _this.ordersArray = orders; });
    };
    OrderComponent.prototype.getOrdGoods = function () {
        var _this = this;
        this.orderService.getOrdGoodsItems()
            .subscribe(function (orders) { return _this.ordGoodsArray = orders; });
    };
    OrderComponent.prototype.getOrdGoods_P = function () {
        var _this = this;
        return this.orderService.getOrdGoodsItems_P()
            .then(function (orders) { return _this.ordGoodsArray = orders; });
    };
    OrderComponent.prototype.onSelect = function (order) {
        this.selectedOrder = order;
        this.selectedOrdGoods = this.ordGoodsArray.filter(function (h) { return h.ordinfo_id === order.ordinfo_id; });
        //console.log(this.selectedOrdGoods);
    };
    OrderComponent.prototype.goBack = function () {
        this.location.back();
    };
    //  For Create new order infor and order Goods items (two tables) to DB and go to order show page
    OrderComponent.prototype.confirmAndSaveOrder = function () {
        if ((!this.cartItems) || (this.cartItems.length <= 0)) {
            alert(" Your cart is empty now !");
            return;
        }
        console.log("in order confirmAndSaveOrder... ");
        var newGoodsID = this.getOrdGoods_NewID();
        var newOrderID = this.getOrdGoods_NewID();
        console.log("newGoodsID: " + newGoodsID);
        console.log("newOrderID: " + newOrderID);
        var total_money = 0;
        for (var i = 0; i < this.cartItems.length; i++) {
            total_money += (this.cartItems[i].quantity * this.cartItems[i].shop_price);
            var item1 = {
                ordgoods_id: newGoodsID++,
                ordinfo_id: newOrderID,
                goods_id: this.cartItems[i].goods_id,
                goods_name: this.cartItems[i].goods_name,
                shop_price: this.cartItems[i].shop_price,
                quantity: this.cartItems[i].quantity
            };
            this.addOne_OrdGoodsItem(item1);
        }
        var m = new Date();
        var dateString = m.getUTCFullYear() + "-" +
            ("0" + (m.getUTCMonth() + 1)).slice(-2) + "-" +
            ("0" + m.getUTCDate()).slice(-2) + " " +
            ("0" + m.getUTCHours()).slice(-2) + ":" +
            ("0" + m.getUTCMinutes()).slice(-2) + ":" +
            ("0" + m.getUTCSeconds()).slice(-2);
        var newOrdInfoitem = {
            ordinfo_id: newOrderID,
            ord_sn: dateString,
            user_id: 1,
            mobile: "15966057988",
            money: total_money,
            note: "Order confirmed at " + dateString
        };
        console.log("add one new order info item, ordinfo_id: " + newOrdInfoitem.ordinfo_id);
        this.ordersArray.push(newOrdInfoitem);
        this.addOne_OrdInforItem(newOrdInfoitem);
        this.clearCart();
    };
    OrderComponent.prototype.getOrdGoods_NewID = function () {
        console.log("in getOrdGoods_NewID ....");
        if (!this.ordersArray || this.ordersArray.length <= 0) {
            console.log("in getOrdGoods_NewID, no order info  ....");
            return 1; // first 
        }
        this.ordersArray.sort(function (a, b) { return b.ordinfo_id - a.ordinfo_id; });
        return (this.ordersArray[0].ordinfo_id + 1);
    };
    // add to in-memory-data
    OrderComponent.prototype.addOne_OrdInforItem = function (item) {
        //if (!item) { return; }
        this.orderService.create_OrdInforItem(item);
    };
    // add to in-memory-data
    OrderComponent.prototype.addOne_OrdGoodsItem = function (item) {
        //if (!item) { return; }
        this.orderService.create_OrdGoodsItem(item);
    };
    // Clear remove cart and DB
    OrderComponent.prototype.clearCart = function () {
        var item;
        // From Array to index to delete Memory items :
        while (item = this.cartItems.pop()) {
            //this.deleteOne(item);
            this.cartService.deleteItem_O(item);
            // Why refresh by itself ?
        }
        //console.log(this.cartItems);
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/views/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/views/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/views/pay-bill/pay-bill.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/pay-bill/pay-bill.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/pay-bill/pay-bill.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/pay-bill/pay-bill.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n\n    <div class=\"container\">\n\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n                aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">\n                <img alt=\"Nebulas\" src=\"assets/imgs/icon_19.png\">\n            </a>\n            <a class=\"navbar-brand\" href=\"#\">NAS Shop</a>\n        </div>\n\n        <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n\n                <div class=\"form-group\" style=\"padding-top: 12px;\">\n                    <select class=\"form-control\" id=\"net\" required [(ngModel)]=\"netType\" (change)=\"onNetChange()\" name='net'>\n                        <option *ngFor=\"let item1 of netTypeArr\" [value]=\"item1.value\">{{item1.name}}</option>\n                    </select>\n                </div>\n\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n\n\n\n    </div>\n</nav>\n\n<div class=\"container\">\n\n    <div class=\"col-lg-10 col-md-10 col-sm-10  horizontal-center-row\">\n        <div class=\"form-group\">\n            <label for=\"pay-from\">From Address (Client)</label>\n            <input class=\"form-control\" name=\"pay-from\" [(ngModel)]=\"from\" placeholder=\"From Address\" />\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group col-lg-6 col-md-6 col-sm-6\">\n                <label for=\"pay-pw\">Your Wallet Password</label>\n                <input class=\"form-control\" name=\"pay-pw\" [(ngModel)]=\"password\" placeholder=\"Your Wallet Address\" />\n            </div>\n            <div class=\"form-group col-lg-6 col-md-6 col-sm-6\" style=\"display:online;\">\n                <label for=\"pay-balance\">Balance (NAS)</label>\n                <input class=\"form-control\" readonly name=\"pay-balance\" [(ngModel)]=\"balance\" placeholder=\"\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group  col-lg-12 col-md-12 col-sm-12\">\n                <button class=\"btn btn-info col-lg-12 col-md-12 col-sm-12\" (click)=\"unlock()\">Unlock From Address first</button>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group col-lg-6 col-md-6 col-sm-6\">\n                <label for=\"card-CardName\">To Address (Owner)</label>\n                <input class=\"form-control\" name=\"card-CardName\" [(ngModel)]=\"to\" placeholder=\"From Address\" />\n            </div>\n\n            <div class=\"form-group col-lg-6 col-md-6 col-sm-6\" style=\"display:online;\">\n                <label for=\"pay-to-balance\">Balance (NAS)</label>\n                <input class=\"form-control\" readonly name=\"pay-to-balance\" [(ngModel)]=\"toBalance\" placeholder=\"\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group  col-lg-12 col-md-12 col-sm-12\">\n                <button class=\"btn btn-info col-lg-12 col-md-12 col-sm-12\" (click)=\"checkOwner()\">Check To Address Info</button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-lg-6 col-md-6 col-sm-6\" style=\"display:online;\">\n                <label for=\"pay-value\">Pay Value / Amount to Send (NAS)</label>\n                <input class=\"form-control\" readonly name=\"pay-value\" [(ngModel)]=\"value\" placeholder=\"Amount\" />\n            </div>\n            <div class=\"form-group  col-lg-6 col-md-6 col-sm-6\" style=\"display:online;\">\n                <label for=\"pay-nonce\">Nonce</label>\n                <input class=\"form-control\" readonly name=\"pay-nonce\" [(ngModel)]=\"nonce\" placeholder=\"\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group  col-lg-6 col-md-6 col-sm-6\">\n                <label for=\"pay-limit\">Gas Limit</label>\n                <input class=\"form-control\" name=\"pay-limit\" [(ngModel)]=\"gasLimit\" placeholder=\"\" />\n            </div>\n            <div class=\"form-group  col-lg-6 col-md-6 col-sm-6\">\n                <label for=\"gasPrice\">Gas Price ( 1 NAS = 1EWei = 10 18 Wei )</label>\n                <input class=\"form-control\" name=\"gasPrice\" [(ngModel)]=\"gasPrice\" placeholder=\"\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group  col-lg-2 col-md-2 col-sm-2\">\n                <button class=\"btn btn-info col-lg-12 col-md-12 col-sm-12\" (click)=\"sendTransaction()\">Go Back</button>\n            </div>\n            <div class=\"form-group  col-lg-10 col-md-10 col-sm-10\">\n                <button class=\"btn btn-warning col-lg-12 col-md-12 col-sm-12\" *ngIf=\"balance\" (click)=\"sendTransaction()\">Generate Transaction</button>\n            </div>\n        </div>\n\n        <div class=\"row\">\n                <div class=\"form-group  col-lg-12 col-md-12 col-sm-12\">\n                    <a routerLink=\"/order/order\" class=\"btn btn-primary col-lg-12 col-md-12 col-sm-12\" role=\"button\">Check payment status</a>\n                </div>\n            </div>  \n    </div>"

/***/ }),

/***/ "./src/app/views/pay-bill/pay-bill.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/pay-bill/pay-bill.component.ts ***!
  \******************************************************/
/*! exports provided: Result, Account_Result, PayBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account_Result", function() { return Account_Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayBillComponent", function() { return PayBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_remote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/remote.service */ "./src/app/services/remote.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Result = /** @class */ (function () {
    function Result() {
    }
    return Result;
}());

var Account_Result = /** @class */ (function () {
    function Account_Result() {
    }
    return Account_Result;
}());

var PayBillComponent = /** @class */ (function () {
    function PayBillComponent(route, remoteService) {
        this.route = route;
        this.remoteService = remoteService;
        //private account_Result: Account_Result;
        this.from = 'n1FF1nz6tarkDVwWQkMnnwFPuPKUaQTdptE';
        this.to = 'n1MjR3J28LPYGSVNGYC8DWsM7VJaAqqPnWH'; // Made by Ming, pw : 1
        this.value = '1000000000000000000'; // same with balance
        this.nonce = 20;
        this.gasPrice = '1000000';
        this.gasLimit = '200000';
        this.password = 'passphrase';
        this.balance = ''; // Client balance
        this.toBalance = ''; // Owner Balance
        this.netTypeArr = [
            { value: '0', name: "Testnet" },
            { value: '1', name: "Local Nodes" },
            { value: '2', name: "Mainnet" },
        ];
        this.netType = '1';
    }
    PayBillComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.route.params);
        this.sub = this.route.params.subscribe(function (params) {
            _this.value = params['money'];
        });
        // For test : this.getAccountState(this.from);
    };
    PayBillComponent.prototype.getAccountState = function (address) {
        var _this = this;
        this.remoteService.getAccountState(address).then(function (cardBalance) {
            console.log("Got from cardService.refreashCard of card-details.ts ");
            console.log(cardBalance);
            console.log(cardBalance._body);
            var account_Result = JSON.parse(cardBalance._body);
            console.log(account_Result.result.balance);
            console.log(account_Result.result.nonce);
            var dataBalance = Number(account_Result.result.balance) / 1000000000000000000.0;
            if (!isNaN(dataBalance))
                _this.balance = dataBalance.toString();
            else
                _this.balance = '';
            _this.nonce = (Number(account_Result.result.nonce) + 1);
        });
    };
    PayBillComponent.prototype.sendTransaction = function () {
        var _this = this;
        console.log("getNebState ........ ");
        if (!this.value) {
            alert(" Please input send NAS amount !");
            return;
        }
        // Change from NAS
        var payValue = Number(this.value) * 1000000000000000000;
        // For Test sign of transaction
        this.remoteService.sign({ 'from': this.from, 'to': this.to, 'value': payValue.toString(), 'nonce': this.nonce, 'gasPrice': this.gasPrice, 'gasLimit': this.gasLimit, 'passphrase': this.password })
            .then(function (data) { console.log(data); _this.resultAPI = data; });
        /*
                this.remoteService.sendTransaction( { 'from': this.from, 'to': this.to, 'value': payValue.toString(), 'nonce': this.nonce, 'gasPrice': this.gasPrice, 'gasLimit': this.gasLimit })
                    //this.remoteService.sendTransaction({"from":"n1FF1nz6tarkDVwWQkMnnwFPuPKUaQTdptE","to":"n1MjR3J28LPYGSVNGYC8DWsM7VJaAqqPnWH", "value":"1000000000000000000","nonce":13,"gasPrice":"1000000","gasLimit":"2000000"})
                    //.subscribe(
                    .then(
                        data => { console.log(data); this.resultAPI = data });
        
                  */
    };
    PayBillComponent.prototype.unlock = function () {
        var _this = this;
        console.log("unlock ........ " + this.from + this.password);
        if (!this.from || !this.password) {
            alert(" Please input From Address and Password !");
            return;
        }
        // For test
        //this.getAccountState(this.from);        
        // {"address":"n1FF1nz6tarkDVwWQkMnnwFPuPKUaQTdptE","passphrase":"passphrase","duration":"30000000000000"}'
        this.remoteService.unlock({ "address": this.from, "passphrase": this.password, "duration": "30000000000000" })
            .then(function (data) {
            _this.resultAPI = data;
            _this.getAccountState(_this.from);
        });
    };
    PayBillComponent.prototype.checkOwner = function () {
        var _this = this;
        console.log("check Owner ........ " + this.to);
        if (!this.to) {
            alert(" Please input To Address!");
            return;
        }
        this.remoteService.getAccountState(this.to).then(function (cardBalance) {
            var account_Result = JSON.parse(cardBalance._body);
            var dataBalance = Number(account_Result.result.balance) / 1000000000000000000.0;
            if (!isNaN(dataBalance))
                _this.toBalance = dataBalance.toString();
            else
                _this.toBalance = '';
        });
    };
    PayBillComponent.prototype.onNetChange = function () {
        console.log(this.netType);
        switch (this.netType) {
            case '1':
                this.remoteService.site = 'http://localhost:8685';
                this.to = 'n1MjR3J28LPYGSVNGYC8DWsM7VJaAqqPnWH'; // Made by Ming, pw : 1
                this.password = 'passphrase';
                this.nonce = null;
                this.balance = '';
                this.toBalance = '';
                break;
            case '0':
                this.remoteService.site = 'https://testnet.nebulas.io';
                this.to = 'n1QvdfomX24brtcBrBypPDcPvt9Qwm9UBM9';
                this.from = 'n1L5AExWGCP299jB5RWmdo7t6qCRZ4MW8PW';
                this.password = 'Nas20180429';
                this.nonce = null;
                this.balance = '';
                this.toBalance = '';
                break;
            case '2':
                this.remoteService.site = 'https://mainnet.nebulas.io';
                this.to = '';
                this.from = '';
                this.password = '';
                this.nonce = null;
                this.balance = '';
                this.toBalance = '';
                break;
        }
    };
    PayBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pay-bill',
            template: __webpack_require__(/*! ./pay-bill.component.html */ "./src/app/views/pay-bill/pay-bill.component.html"),
            styles: [__webpack_require__(/*! ./pay-bill.component.css */ "./src/app/views/pay-bill/pay-bill.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_remote_service__WEBPACK_IMPORTED_MODULE_2__["RemoteService"]])
    ], PayBillComponent);
    return PayBillComponent;
}());



/***/ }),

/***/ "./src/app/views/search-result/search-result.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/search-result/search-result.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\n    background-color: #CFD8DC !important;\n    color: white;\n}\n.heroes {\n    margin: 0 0 0em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 19em;   /*  old : 15 em*/\n}\n.heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    margin-left: 0em;\n    padding: .3em 0;\n\n    /* height: 1.6em; */\n\n    height: 1.85em;\n\n    border-radius: 4px;\n\n}\n.heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n}\n.heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n}\n.heroes .text {\n    position: relative;\n    top: -3px;\n}\n.heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n}\nbutton {\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n}\nbutton:hover {\n    background-color: #cfd8dc;\n}\nbutton.delete {\n    float:right;\n    margin-top: -2px;\n    margin-right: .8em;\n    background-color: gray !important;\n    color:white;\n}\n.heroes button, .heroes li, .heroes span {\n    box-sizing : content-box;\n    -webkit-box-sizing : content-box;\n}\n#list1 {\n\n    margin-top: 5em;\n}\n/*\nCopyright 2016 Google Inc. All Rights Reserved.\nUse of this source code is governed by an MIT-style license that\ncan be found in the LICENSE file at http://angular.io/license\n*/\n"

/***/ }),

/***/ "./src/app/views/search-result/search-result.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/search-result/search-result.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default\">\n\n        <div class=\"container\">\n      \n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n                    data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n      \n            <a class=\"navbar-brand\" href=\"#\">Angular 2</a>\n      \n            <!--\n          <a class=\"navbar-brand\" href=\"#\">\n            <img alt=\"Ming\" src=\"./app/imgs/436631.jpg\">\n          </a>\n      \n          -->\n          </div>\n      \n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      \n            <ul class=\"nav navbar-nav\">\n      \n      \n              <li><a routerLink=\"/type-page/type-page/11\" routerLinkActive=\"active fluffy\"><span class=\"glyphicon glyphicon-screenshot\"></span> Shopping</a></li>\n            </ul>\n      \n      \n            <search></search>\n            <!--\n                  <ul class=\"nav navbar-nav navbar-right\">\n                    <li><a href=\"/login/login\">Login</a></li>\n                  </ul>\n            -->\n      \n            <ul class=\"nav navbar-nav navbar-right\">\n              <li><a routerLink=\"/dashboard/dashboard\" routerLinkActive=\"active fluffy\"><span class=\"glyphicon glyphicon-pencil\"></span> Admin</a></li>\n            </ul>\n      \n            <ul class=\"nav navbar-nav navbar-right\">\n              <li><a routerLink=\"/cart/cart\" routerLinkActive=\"active fluffy\"><span class=\"glyphicon glyphicon-shopping-cart\"></span> Cart</a></li>\n            </ul>\n      \n          </div>\n      \n        </div>\n      </nav>\n      \n      \n      <div class=\"row\" id=\"list1\">\n      \n        <div class=\"container\">\n      \n        <div class=\"col-xs-3 col-md-3 col-sm-3\" >\n      \n          <h4>Searching result: </h4>\n          <br />\n          <ul class=\"heroes\">\n            <li *ngFor=\"let hero of goodsArray\"\n                [class.selected]=\"hero === selectedHero\"\n                (click)=\"onSelect(hero)\">\n              <span class=\"badge\">{{hero.goods_id}}</span> {{hero.goods_name.slice(0, 15)}}\n              <button class=\"delete\"\n                      (click)=\"delete(hero); $event.stopPropagation()\">x</button>\n            </li>\n          </ul>\n\n          <div class=\"row col-xs-12 col-md-12 col-sm-12\">\n            <button type=\"button\" class=\"btn btn-primary col-xs-12 col-md-12 col-sm-12\" (click)=\"goBack()\" >Go Back</button>\n          </div>\n        </div>\n      \n      \n        <div class=\"ccol-xs-12 col-sm-6 col-md-6 col-lg-6\" ></div>\n      \n        <div class=\"ccol-xs-12 col-sm-6 col-md-6 col-lg-6\">\n            \n          <app-small-goods [hero]=\"selectedHero\"></app-small-goods>\n        \n        </div>\n      \n      </div>\n      \n      \n      "

/***/ }),

/***/ "./src/app/views/search-result/search-result.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/search-result/search-result.component.ts ***!
  \****************************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_goods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/goods.service */ "./src/app/services/goods.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent(goodsService, location, route) {
        this.goodsService = goodsService;
        this.location = location;
        this.route = route;
    }
    //实现了 Angular 的 ngOnInit 生命周期钩子，Angular 就会主动调用这个钩子。
    // Angular提供了一些接口，用来介入组件生命周期的几个关键时间点：刚创建时、每次变化时，以及最终被销毁时。
    SearchResultComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.parameterText = params['search_Text']; // (+) converts string 'id' to a number
            //console.log("init : get Param , search_Text =   " + this.parameterText);
            // Just GeT all Smart Phones : cat_id = 1;  and their parent_id: 0
            _this.goodsService
                .getGoods()
                .subscribe(function (goods) { return _this.goodsArray = goods.filter(function (good) { return good.goods_name.toLowerCase().includes(_this.parameterText.toLowerCase()); }); });
        });
    };
    SearchResultComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    SearchResultComponent.prototype.goBack = function () {
        this.location.back();
    };
    SearchResultComponent.prototype.delete = function (goods) {
        //console.log("Will delete id : " + goods.goods_id);
        var ts = [];
        var n = 0;
        for (var i = 0; i < this.goodsArray.length; i++) {
            var t = void 0;
            t = this.goodsArray[i];
            if (t.goods_id != goods.goods_id) {
                ts[n++] = t;
            }
        }
        this.goodsArray = ts;
    };
    SearchResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-result',
            template: __webpack_require__(/*! ./search-result.component.html */ "./src/app/views/search-result/search-result.component.html"),
            styles: [__webpack_require__(/*! ./search-result.component.css */ "./src/app/views/search-result/search-result.component.css")]
        }),
        __metadata("design:paramtypes", [_services_goods_service__WEBPACK_IMPORTED_MODULE_2__["GoodsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "./src/app/views/search/search.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/search/search.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/search/search.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/search/search.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-lg-3  col-md-3 hidden-sm hidden-xs navbar-form navbar-left clearfix\">\n        <!--<form class=\"\"  [formGroup]=\"myForm\" novalidate (ngSubmit)=\"startSearch(myForm.value, myForm.valid)\" >-->\n        <form class=\"\"  [formGroup]=\"myForm\" novalidate (ngSubmit)=\"startSearch()\" >\n          <div class=\"input-group\">\n            <div class=\"input-group\">\n              <!--<input type=\"text\" name=\"search\" class=\"form-control\" placeholder=\"Search for...\">-->\n              <input formControlName = \"searchText\" type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n              <div class=\"input-group-btn\">\n                <button class=\"btn btn-default\"><span class=\"glyphicon glyphicon-search\"></span></button>\n              </div>\n            </div>\n          </div>\n        </form>\n        </div>\n        "

/***/ }),

/***/ "./src/app/views/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/map';
// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// }
var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService, route, router) {
        this.searchService = searchService;
        this.route = route;
        this.router = router;
        // Subject（主题）是一个可观察的事件流中的生产者。
        // searchTerms生成一个产生字符串的Observable，用作按名称搜索时的过滤条件。
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // Push a search term into the observable stream.
    //search(term: string): void {
    // this.searchTerms.next(term);
    //}
    SearchComponent.prototype.ngOnInit = function () {
        // define a form:
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            // For default input
            searchText: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
            //searchText: new FormControl('iPhone')
        });
        /*
        this.teachers = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.searchService.search(term)
                // or the observable of empty heroes if no search term
                : Observable.of<Teacher[]>([]))
            .catch(error => {
              // TODO: real error handling
              console.log(error);
              return Observable.of<Teacher[]>([]);
            });
            */
    };
    /*
    private gotoDetail(teacher: Teacher): void {
  
      let link = ['/detail/detail', teacher.id];
      this.router.navigate(link);
    }
  */
    SearchComponent.prototype.startSearch = function () {
        var link = ['/search-result/search-result/', this.myForm.value.searchText];
        console.log("link : ", link);
        this.router.navigate(link);
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //moduleId: module.id,
            selector: 'search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/views/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/views/search/search.component.css")],
            providers: [_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]]
        }),
        __metadata("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());

/*

!!!!!! Important For Form *********


 https://scotch.io/tutorials/using-angular-2s-model-driven-forms-with-formgroup-and-formcontrol

 */


/***/ }),

/***/ "./src/app/views/small-goods/small-goods.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/small-goods/small-goods.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-type-page {\n    height: 700px;\n}\n\nimg {\n    height: 287px;\n\n}\n"

/***/ }),

/***/ "./src/app/views/small-goods/small-goods.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/small-goods/small-goods.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n        <div class=\"container\">\n        <div class=\"col-xs-12 col-sm-6\" >\n          <div class=\"thumbnail\" *ngIf=\"hero\">\n            <img src={{hero.thumb_img}} alt=\"{{hero.goods_name}}\">\n            <hr />\n            <div class=\"caption\">\n              <h3>{{hero.goods_name}}</h3>\n      \n              <p>{{hero.goods_id}} {{hero.goods_sn}} Shop Price: {{hero.shop_price|currency:'NAS ':\"code\"}}</p>\n              <p>{{hero.goods_desc}}</p>\n              <div class=\"row\">\n      \n                <p><a href=\"/detail/detail/{{hero.goods_id}}\" class=\"btn btn-primary col-lg-3 col-md-3 col-sm-3 col-xs-3\" role=\"button\" >Details</a>\n      \n                <a routerLink=\"/cart/cart/{{hero.goods_id}}/{{hero.goods_name}}/{{hero.shop_price}}\" class=\"btn btn-success col-lg-3 col-md-3 col-sm-3 col-xs-3\" role=\"button\">Add to Cart</a>\n      \n              </p>\n            </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n      \n      \n      \n      \n      \n      "

/***/ }),

/***/ "./src/app/views/small-goods/small-goods.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/small-goods/small-goods.component.ts ***!
  \************************************************************/
/*! exports provided: SmallGoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallGoodsComponent", function() { return SmallGoodsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_defineClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/defineClass */ "./src/app/models/defineClass.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmallGoodsComponent = /** @class */ (function () {
    function SmallGoodsComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_defineClass__WEBPACK_IMPORTED_MODULE_1__["Goods"])
    ], SmallGoodsComponent.prototype, "hero", void 0);
    SmallGoodsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-small-goods',
            template: __webpack_require__(/*! ./small-goods.component.html */ "./src/app/views/small-goods/small-goods.component.html"),
            styles: [__webpack_require__(/*! ./small-goods.component.css */ "./src/app/views/small-goods/small-goods.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-small-goods',
            template: __webpack_require__(/*! ./small-goods.component.html */ "./src/app/views/small-goods/small-goods.component.html"),
            styles: [__webpack_require__(/*! ./small-goods.component.css */ "./src/app/views/small-goods/small-goods.component.css")]
        })
    ], SmallGoodsComponent);
    return SmallGoodsComponent;
}());



/***/ }),

/***/ "./src/app/views/type-page/type-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/type-page/type-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.thumbnail img {\n    height: 260px;\n}\n\n.caption_h3 {\n    font-size: 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n"

/***/ }),

/***/ "./src/app/views/type-page/type-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/type-page/type-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n                aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">\n                <img alt=\"Nebulas\" src=\"assets/imgs/icon_19.png\"></a> \n            <a class=\"navbar-brand\" href=\"#\">NAS Shop</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li *ngFor=\"let item of menuMyItems\" class={{item.active}}>\n                    <a routerLink={{item.path}}{{item.parameterID}}{{item.random}} routerLinkActive=\"active fluffy\">{{item.linkName}}</a>\n                </li>\n                <!--<li  *ngFor=\"let item of menuMyItems\" class={{item.active}}><a routerLink={{item.path}}{{item.parameterID}} routerLinkActive=\"active fluffy\">{{item.linkName}}</a></li>-->\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a routerLink=\"/dashboard/dashboard\" routerLinkActive=\"active fluffy\">\n                        <span class=\"glyphicon glyphicon-pencil\"></span> Admin</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a routerLink=\"/cart/cart\" routerLinkActive=\"active fluffy\">\n                        <span class=\"glyphicon glyphicon-shopping-cart\"></span> Cart</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                \n              <search></search>\n            \n            </ul>\n        </div>\n    </div>\n</nav>\n\n<div class=\"row\">\n    <div class=\"container\">\n\n\n        <ul class=\"nav nav-tabs\">\n            <!--<li role=\"presentation\" *ngFor=\"let item of tabItems\" class={{item.active}}><a routerLink=\"{{item.path}}{{item.parameterID}}{{item.random}}\" routerLinkActive=\"active fluffy\">{{item.linkName}}</a></li>-->\n            <li role=\"presentation\" *ngFor=\"let item of tabItems\" class={{item.active}}>\n                <a routerLink=\"{{item.path}}{{item.parameterID}}\" routerLinkActive=\"active fluffy\">{{item.linkName}}</a>\n            </li>\n        </ul>\n        <br/>\n        <div class=\"container col-lg-3 col-md-4 col-sm-6\" *ngFor=\"let item of goodsArray\">\n            <div class=\"thumbnail\">\n                <img src={{item.thumb_img}} alt=\"goods image\">\n                <div class=\"caption\">\n                    <h3 class=\"caption_h3\">\n                        <strong>{{item.goods_name}}</strong>\n                    </h3>\n                    <p class=\"pull-right\">\n                        <s>{{item.market_price | currency:'USD':'symbol-narrow'}}</s>\n                    </p>\n                    <p>Market Price: </p>\n                    <p class=\"pull-right\">{{item.shop_price|currency:'NAS ':'code'}}</p>\n                    <p>Shop&nbsp;&nbsp;Price&nbsp;:</p>\n                    <div class=\"row\" style=\"padding: 3px 10px\">\n                        <p>\n                            <a routerLink=\"/detail/detail/{{item.goods_id}}\" class=\"btn btn-primary col-md-6 col-sm-6 col-xs-6\"\n                                role=\"button\">Details</a>\n                            <a routerLink=\"/cart/cart/{{item.goods_id}}/{{item.goods_name}}/{{item.shop_price}}\" class=\"btn btn-success col-md-6 col-sm-6 col-xs-6\"\n                                role=\"button\">Add to Cart</a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<script>\n        /*  ?? Role ??\n      $(\".nav a\").on(\"click\", function(){\n      $(\".nav\").find(\".active\").removeClass(\"active\");\n      $(this).parent().addClass(\"active\");\n      });\n      Test .............................. ???\n      */\n</script>"

/***/ }),

/***/ "./src/app/views/type-page/type-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/type-page/type-page.component.ts ***!
  \********************************************************/
/*! exports provided: TypePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypePageComponent", function() { return TypePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_goods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/goods.service */ "./src/app/services/goods.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/*
import { Component, OnInit } from '@angular/core';
import { Goods, Category, MenuItem } from '../../dataClass/defineClass';
import { GoodsService } from '../../services/goods.service';
import { RemoteService } from '../../services/remote.service';

@Component({
  selector: 'app-type-page',
  templateUrl: './type-page.component.html',
  styleUrls: ['./type-page.component.css']
})
export class TypePageComponent implements OnInit {

  private goodsArray: Goods[];
  private categories: Category[];
  private menuMyItems: MenuItem[];
  private tabItems:    MenuItem[];
  private oneGoods:    Goods;

  constructor(private goodsService: GoodsService,
              private remoteService: RemoteService
  ) { }

  ngOnInit() {

    //this.getGoodsByID(3);
    this.getHeroes();
  }

  getHeroes(): void {
    this.goodsService.getGoods()
    //this.remoteService.getProducts()
    .subscribe(goodsArray => this.goodsArray = goodsArray);
    //.then(goodsArray => this.goodsArray = goodsArray)
    //.then(goodsArray => console.log(goodsArray));
  }

  getGoodsByID(id : number): void {
    this.goodsService.getGood(id)
    .subscribe(goodsArray => this.oneGoods = goodsArray);
  }

  add(name: string): void {

    name = name.trim();
    if (!name) { return; }

    // ?????
    this.goodsService.addGoods( new Goods(
      111, 11, 1, 'ECS000001', 1,  'iPhone 6s',
      69.99,  869.60, 127,  6, 1.2,
          '', 'iPhone 6s 4.7-inch display',
      './app/imgs/iphone6s-silver-select.png' ,  './app/imgs/6s-1.jpeg',
      './app/imgs/6s-3.jpeg',  true,  true ,  true ,  true , true,
      new Date('October 13, 2015 11:13:00'),  new Date('October 15, 2016 11:13:00') ) )
      .subscribe(hero => {
        this.goodsArray.push(hero);
      });
  }
 
  delete(hero: Goods): void {
    this.goodsArray = this.goodsArray.filter(h => h !== hero);
    this.goodsService.deleteGoods(hero).subscribe();
  }
}
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TypePageComponent = /** @class */ (function () {
    function TypePageComponent(goodsService, 
    //private dataService: ProductService,
    route, router) {
        this.goodsService = goodsService;
        this.route = route;
        this.router = router;
        this.products = [];
        this.menuMyItems = new Array();
        this.tabItems = new Array();
    }
    TypePageComponent.prototype.ngOnInit = function () {
        // Meetup Test IProduct Interface is OK !!!
        // this.dataService
        //     .getProducts()
        //     .then(
        //       results => this.products = results
        //     );
    };
    TypePageComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // In page by Anchor, URL parameter changed  ... refresh page ..., not reload page
        this.sub = this.route.params.subscribe(function (params) {
            _this.parameterTab = +params['cat_id']; // (+) converts string 'id' to a number
            console.log("in init, get Param, cat_id = " + _this.parameterTab);
            // Create Menu Items Array by Category *****
            _this.getCategoryThenMenu();
            // For tab menu;
            _this.getCategoryThenTab(_this.parameterTab);
            // Get Goods data for Current Page to show .....................
            switch (_this.parameterTab) {
                case 1:
                    //console.log("in init switch, Param, cat_id = " + this.parameterTab);
                    // Just GeT all Smart Phones : cat_id = 1;  and their parent_id: 0
                    _this.goodsService
                        .getGoods()
                        .subscribe(function (goods) { return _this.goodsArray = goods.filter(function (good) { return ((good.cat_id === 11) ||
                        (good.cat_id === 12) ||
                        (good.cat_id === 13)); }); });
                    break;
                case 2:
                    //console.log("in init switch, Param, cat_id = " + this.parameterTab);
                    // Just GeT all Smart Phones : cat_id = 2;  and their parent_id: 0
                    _this.goodsService
                        .getGoods()
                        .subscribe(function (goods) { return _this.goodsArray = goods.filter(function (good) { return ((good.cat_id === 21) ||
                        (good.cat_id === 22) ||
                        (good.cat_id === 23)); }); });
                    break;
                case 3:
                    //console.log("in init switch, Param, cat_id = " + this.parameterTab);
                    // Just GeT all Smart Phones : cat_id = 3;  and their parent_id: 0
                    _this.goodsService
                        .getGoods()
                        .subscribe(function (goods) { return _this.goodsArray = goods.filter(function (good) { return ((good.cat_id === 31) ||
                        (good.cat_id === 32) ||
                        (good.cat_id === 33)); }); });
                    break;
                case 4:
                    // For future 
                    _this.goodsService
                        .getGoods()
                        .subscribe(function (goods) { return _this.goodsArray = goods.filter(function (good) { return ((good.cat_id === 41) ||
                        (good.cat_id === 42) ||
                        (good.cat_id === 43)); }); });
                    break;
                case 5:
                    // For future
                    _this.goodsService
                        .getGoods()
                        .subscribe(function (goods) { return _this.goodsArray = goods.filter(function (good) { return ((good.cat_id === 51) ||
                        (good.cat_id === 52) ||
                        (good.cat_id === 53)); }); });
                    break;
                default:
                    _this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) { return _this.goodsService.getGoodsByID(+params['cat_id']); }))
                        .subscribe(function (goods) { return _this.goodsArray = goods; });
                    break;
            }
        });
        //console.log(" parameterTab cat_id " + this.parameterTab);
    };
    // For Filter :
    //   get productsFiltered() {
    //   return this.products
    //             .filter(p => p.name
    //                           .toLowerCase()
    //                           .includes(this.searchName));
    // }
    TypePageComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TypePageComponent.prototype.getCategory = function () {
        var _this = this;
        return this.goodsService.getCategory()
            .then(function (categories) { return _this.categories = categories; });
    };
    TypePageComponent.prototype.getCategoryByID = function (id) {
        var _this = this;
        return this.goodsService
            .getCategory()
            .then(function (categories) { return _this.categories = categories.filter(function (item) { return item.parent_id === id; }); });
    };
    // In  then() ,  call a new function ************
    // private getCategoryThenMenu(): Promise<MenuItem[]> {
    TypePageComponent.prototype.getCategoryThenMenu = function () {
        var _this = this;
        return this.getCategoryByID(0)
            .then(function () { return _this.createMenuItems(); });
    };
    // In  then() ,  call a new function ************
    TypePageComponent.prototype.getCategoryThenTab = function (id) {
        var _this = this;
        return this.getCategory()
            .then(function () { return _this.createTabItems(id); });
    };
    TypePageComponent.prototype.showCat = function () {
        console.log("Cat[] length :  " + this.categories.length);
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log("cat_id : " + item.cat_id);
            console.log("cat_name : " + item.cat_name);
            console.log("intro : " + item.intro);
            console.log("parent_id : " + item.parent_id);
        }
    };
    // Create Menu string array ..........................
    TypePageComponent.prototype.createMenuItems = function () {
        //console.log("createMenuItems Method :  -----------------------");
        this.menuMyItems = [];
        for (var i = 0; i < this.categories.length; i++) {
            if (this.categories[i].parent_id == 0) {
                var t = this.categories[i];
                var item = {
                    id: 'menu' + i,
                    parameterID: i + 1,
                    path: '/type-page/type-page/',
                    linkName: t.cat_name,
                    active: '',
                    random: this.getRandomString(i + 1) // get random url tail for refresh
                };
                //let random = Math.random();
                if (this.getMenuActiveStatus(t.cat_id)) {
                    item.active = 'active';
                }
                this.menuMyItems.push(item);
                //console.log(item);
            }
        }
    };
    TypePageComponent.prototype.getRandomString = function (len) {
        var str = '';
        for (var i = 0; i < len; i++) {
            str += "/1";
        }
        //console.log(str);
        return str;
    };
    // Create tab string array ..........................
    TypePageComponent.prototype.createTabItems = function (id) {
        this.tabItems = [];
        //console.log("create Tab  Items Method :  ##################  ");
        var realID = id;
        var rootMenuNum = 0;
        // 11,12,13 => 1,2,3
        if (id > 10) {
            id = Math.floor(id / 10);
        }
        for (var i = 0; i < this.categories.length; i++) {
            if (this.categories[i].parent_id == id) {
                var t = this.categories[i];
                var item = {
                    id: 'tab' + t.cat_id,
                    parameterID: t.cat_id,
                    path: '/type-page/type-page/',
                    linkName: t.cat_name,
                    active: '',
                    // ?? + id , to add length for url ??
                    random: this.getRandomString(this.categories[i].cat_id % 10 + id) // get random url tail for refresh: because id is 11,12,13.. so %
                };
                if (this.getTabActiveStatus(t.cat_id)) {
                    item.active = 'active';
                }
                // **** !!!!
                this.tabItems.push(item);
                //console.log(item);
            }
        }
    };
    TypePageComponent.prototype.getMenuActiveStatus = function (id) {
        var i = this.parameterTab;
        // Take case  10 , one grade category can not greator than 10 !!!!!!!!!!!!!!!!!
        if (this.parameterTab >= 10)
            i = Math.floor(this.parameterTab / 10);
        if (i == id)
            return true;
        else
            return false;
    };
    TypePageComponent.prototype.getTabActiveStatus = function (id) {
        var i = this.parameterTab;
        // Take case  10 , one grade category can not greator than 10 !!!!!!!!!!!!!!!!!
        if (id < 10)
            return false; // By menu selected, show all types , no active
        if (i == id)
            return true;
        else
            return false;
    };
    TypePageComponent.prototype.detailOneGoods = function () {
        // Now by : <a href="/detail/detail/{{item.goods_id}}"  in html
        //console.log("router.navigate : /detail/detail : " + this.selectedTeacher.id);
        this.router.navigate(['/detail/detail', 1]);
    };
    TypePageComponent.prototype.showGoods = function () {
        console.log(this.goodsArray);
    };
    Object.defineProperty(TypePageComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.goodsArray); },
        enumerable: true,
        configurable: true
    });
    TypePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-type-page',
            template: __webpack_require__(/*! ./type-page.component.html */ "./src/app/views/type-page/type-page.component.html"),
            styles: [__webpack_require__(/*! ./type-page.component.css */ "./src/app/views/type-page/type-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_goods_service__WEBPACK_IMPORTED_MODULE_2__["GoodsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TypePageComponent);
    return TypePageComponent;
}());

/*

 Using Route Parameters

 Say we are creating an application that displays a product list. When the user clicks on a product in the list, we want to display a page showing the detailed information about that product. To do this you must:
 add a route parameter ID
 link the route to the parameter
 add the service that reads the parameter.
 Declaring Route Parameters

 The route for the component that displays the details for a specific product would need a route parameter for the ID of that product. We could implement this using the following Routes:
 export const routes: Routes = [
 { path: '', redirectTo: 'product-list', pathMatch: 'full' },
 { path: 'product-list', component: ProductList },
 { path: 'product-details/:id', component: ProductDetails }
 ];
 Note :id in the path of the product-details route, which places the parameter in the path. For example, to see the product details page for product with ID 5, you must use the following URL: localhost:3000/product-details/5
 Linking to Routes with Parameters

 In the ProductList component you could display a list of products. Each product would have a link to the product-details route, passing the ID of the product:
 <a *ngFor="let product of products"
 [routerLink]="['/product-details', product.id]">
 {{ product.name }}
 </a>
 Note that the routerLink directive passes an array which specifies the path and the route parameter. Alternatively we could navigate to the route programmatically:
 goToProductDetails(id) {
 this.router.navigate(['/product-details', id]);
 }


 Reading Route Parameters  -------------

 The ProductDetails component must read the parameter, then load the product based on the ID given in the parameter.
 The ActivatedRoute service provides a params Observable which we can subscribe to to get the route parameters (see Observables).1

 import { Component, OnInit, OnDestroy } from '@angular/core';
 import { ActivatedRoute } from '@angular/router';

 @Component({
 selector: 'product-details',
 template: `
 <div>
 Showing product details for product: {{id}}
 </div>
 `,
 })


 export class LoanDetailsPage implements OnInit, OnDestroy {
 id: number;
 private sub: any;

 constructor(private route: ActivatedRoute) {}

 ngOnInit() {
 this.sub = this.route.params.subscribe(params => {
 this.id = +params['id']; // (+) converts string 'id' to a number

 // In a real app: dispatch action to load the details here.
 });
 }

 ngOnDestroy() {
 this.sub.unsubscribe();
 }
 }
 The reason that the params property on ActivatedRoute is an Observable is that the router may not recreate the component when navigating to the same component. In this case the parameter may change without the component being recreated.
 View Basic Example
 View Example with Programmatic Route Navigation
 View examples running in full screen mode to see route changes in the URL.


 https://angular-2-training-book.rangle.io/handout/routing/routeparams.html

 ????!!!!!

install This : for routerLink -----------------------

 npm install --save @angular/router-deprecated

then , at : package.json has this item : -----------------------------

 "@angular/router-deprecated": "^2.0.0-rc.2",



 -----------------
 http://stackoverflow.com/questions/37619103/router-outlet-not-working-without-a-routerlink-on-the-main-template

 As Gunter said, this is a known bug with the current RC (here's one of several issues on it: https://github.com/angular/angular-cli/issues/989). The approach that the angular tutorial and many others are taking right now is to use @angular/router-deprecated. Starting from just after ng new myproj and ng g route user, you'll need to do the following:

 npm install --save @angular/router-deprecated
 In src/system-config.ts, change @angular/router to @angular/router-deprecated in the barrels array.
 In src//app/myproj.component.ts, change:
 Routes to RouteConfig in the import line
 '@angular/router' to '@angular/router-deprecated' in the import line
 @Routes to @RouteConfig for the decorator
 Add the property name: 'User' to the RouteConfig object for /user
 Also, note that for links in the pre-RC router you do <a [routerLink]="['User']">User Info</a> (i.e. reference the name rather than the path).



 */


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mingjing/Desktop/SSD/nas-shop for Git/NAS-Shop/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map