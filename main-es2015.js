(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Body/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/Body/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
    onWindowScroll(e) {
        let element = document.querySelector('.right');
        let element2 = document.querySelector('.left');
        if (window.pageYOffset < element.clientHeight) {
            element.classList.add('right1');
            element2.classList.add('left1');
        }
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], hostBindings: function AboutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AboutComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 51, vars: 0, consts: [[1, "head"], [1, "row"], [1, "left", "col-lg-6"], ["href", "https://doc-08-b8-docs.googleusercontent.com/docs/securesc/92ar9c2v095hjdqoc8tkgf8703q31hpg/m9kh4e4ggbo7aa3vo604tm3hmhin42dc/1597458225000/15517013115479879064/15517013115479879064/1JN8qGD-YOW2Zj-DVsMCKbqmkq6RmrpxT?e=download&authuser=0&nonce=vg89oeel44l7e&user=15517013115479879064&hash=bt2bim7q8d0p7teh1bsli8j8g2ljnbiq", 1, "btn", "btn-danger"], [1, "right", "col-lg-6"], [1, "text", "col-lg-6", "col-md-6", "col-sm-12"], [1, "form-group"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "few words");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Abouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "I am Professional Graphic designer and Web Developer provides the best afford to make you happy. best ipsum dolor sit amet, constetur adipiscin elit, sed usmod tempor incididunt ut labore et dolore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Always try to phic designer and Web Developer provides the best afford to ake you happy. best ipsum dolor sit amet, constetur adipiscing elit, sed usmod tempor incididunt ut labore et dolore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "DOWNLOAD CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PERSONAL INFORMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Full Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Hamza Ali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Date of Birth: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "15 November 1198");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Age : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "21 Years Old");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Email : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "hamzajava1998@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Phone : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "0790806234");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Live in : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Amman jordan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".head[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 70px;\r\n}\r\n\r\n\r\n.head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%]\r\n{\r\n    color: white;\r\n\r\n}\r\n\r\n\r\n.text[_ngcontent-%COMP%] \r\n{\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n.text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.left[_ngcontent-%COMP%]\r\n{\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.right[_ngcontent-%COMP%]\r\n{\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.left1[_ngcontent-%COMP%]\r\n{\r\n    position: relative;\r\n    -webkit-animation-name: left-place ;\r\n            animation-name: left-place ;\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n    \r\n}\r\n\r\n\r\n.right1[_ngcontent-%COMP%]\r\n{\r\n   \r\n    -webkit-animation-name: right-place ;\r\n   \r\n            animation-name: right-place ;\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n  \r\n}\r\n\r\n\r\n.text[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]\r\n{\r\n    color: white;\r\n}\r\n\r\n\r\n.text[_ngcontent-%COMP%] \r\n{\r\n    font-size: 15px;\r\n}\r\n\r\n\r\n@-webkit-keyframes right-place\r\n{\r\n    from{left: 10%;}\r\n    to{left: 0%;}\r\n}\r\n\r\n\r\n@keyframes right-place\r\n{\r\n    from{left: 10%;}\r\n    to{left: 0%;}\r\n}\r\n\r\n\r\n@-webkit-keyframes left-place\r\n{\r\n    from{right: 10%;}\r\n    to{right: 0%;}\r\n}\r\n\r\n\r\n@keyframes left-place\r\n{\r\n    from{right: 10%;}\r\n    to{right: 0%;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQm9keS9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGdCQUFnQjtBQUNwQjs7O0FBR0E7O0lBRUksWUFBWTs7QUFFaEI7OztBQUNBOztJQUVJLGdCQUFnQjtBQUNwQjs7O0FBQ0E7O0lBRUksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7O0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7O0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7O0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsOEJBQXNCO1lBQXRCLHNCQUFzQjs7QUFFMUI7OztBQUNBOzs7SUFHSSxvQ0FBNEI7O1lBQTVCLDRCQUE0QjtJQUM1Qiw4QkFBc0I7WUFBdEIsc0JBQXNCOztBQUUxQjs7O0FBQ0E7O0lBRUksWUFBWTtBQUNoQjs7O0FBQ0E7O0lBRUksZUFBZTtBQUNuQjs7O0FBRUE7O0lBRUksS0FBSyxTQUFTLENBQUM7SUFDZixHQUFHLFFBQVEsQ0FBQztBQUNoQjs7O0FBSkE7O0lBRUksS0FBSyxTQUFTLENBQUM7SUFDZixHQUFHLFFBQVEsQ0FBQztBQUNoQjs7O0FBQ0E7O0lBRUksS0FBSyxVQUFVLENBQUM7SUFDaEIsR0FBRyxTQUFTLENBQUM7QUFDakI7OztBQUpBOztJQUVJLEtBQUssVUFBVSxDQUFDO0lBQ2hCLEdBQUcsU0FBUyxDQUFDO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvQm9keS9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRcclxue1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxufVxyXG5cclxuXHJcbi5oZWFkIGgxLGgzLGg1LHBcclxue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4udGV4dCBcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4udGV4dCBzcGFuXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubGVmdFxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5yaWdodFxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5sZWZ0MVxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogbGVmdC1wbGFjZSA7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgXHJcbn1cclxuLnJpZ2h0MVxyXG57XHJcbiAgIFxyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJpZ2h0LXBsYWNlIDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbiAgXHJcbn1cclxuLnRleHQgbGFiZWxcclxue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi50ZXh0IFxyXG57XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmlnaHQtcGxhY2Vcclxue1xyXG4gICAgZnJvbXtsZWZ0OiAxMCU7fVxyXG4gICAgdG97bGVmdDogMCU7fVxyXG59XHJcbkBrZXlmcmFtZXMgbGVmdC1wbGFjZVxyXG57XHJcbiAgICBmcm9te3JpZ2h0OiAxMCU7fVxyXG4gICAgdG97cmlnaHQ6IDAlO31cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/Body/progress/progress.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Body/progress/progress.component.ts ***!
  \*****************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProgressComponent {
    constructor() { }
    ngOnInit() {
    }
    onWindowScroll(e) {
        let element = document.getElementById('r1');
        let element2 = document.getElementById('r2');
        let element3 = document.getElementById('r3');
        if (window.pageYOffset < element.clientHeight) {
            element.classList.add('row1');
            element2.classList.add('row2');
            element3.classList.add('row3');
        }
    }
}
ProgressComponent.ɵfac = function ProgressComponent_Factory(t) { return new (t || ProgressComponent)(); };
ProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressComponent, selectors: [["app-progress"]], hostBindings: function ProgressComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ProgressComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 81, vars: 0, consts: [[1, "ProgressWrapper"], ["id", "r1", 1, ""], [1, "row"], [1, "col-lg-4", "col-md-4", "col-sm-6"], [1, "progress", "blue"], [1, "progress-left"], [1, "progress-bar"], [1, "progress-right"], [1, "progress-value"], [1, "progress", "green"], [1, "progress", "yellow"], ["id", "r2", 1, ""], [1, "progress", "pink"], [1, "progress", "red"], ["id", "r3", 1, ""]], template: function ProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HTML 90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "CSS 80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "JS 70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "J2SE 90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Servlet 65%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "J2EE 50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "C# 90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "EF 80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Api 70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".ProgressWrapper[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    height: 60%;\r\n \r\n   \r\n}\r\n.row1[_ngcontent-%COMP%]\r\n{\r\n    position: relative;\r\n    -webkit-animation-name: right-left;\r\n            animation-name: right-left;\r\n    -webkit-animation-duration: 2s;\r\n            animation-duration: 2s;\r\n    \r\n}\r\n.row2[_ngcontent-%COMP%]\r\n{\r\n    position: relative;\r\n    -webkit-animation-name: left-right;\r\n            animation-name: left-right;\r\n    -webkit-animation-duration:2s ;\r\n            animation-duration:2s ;\r\n}\r\n.row3[_ngcontent-%COMP%]\r\n{\r\n    position: relative;\r\n    -webkit-animation-name: right-left;\r\n            animation-name: right-left;\r\n    -webkit-animation-duration: 2s;\r\n            animation-duration: 2s;\r\n}\r\n.ProgressWrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n{\r\n text-align: center;  \r\n color: white;\r\n}\r\n.ProgressWrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]\r\n{\r\nmargin-top: 50px;\r\n}\r\n.progress[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n    height: 150px;\r\n    line-height: 150px;\r\n    background: none;\r\n    margin: 0 auto;\r\n    box-shadow: none;\r\n    position: relative;\r\n}\r\n.progress[_ngcontent-%COMP%]:after{\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    border: 12px solid #fff;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n.progress[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n.progress[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]{\r\n    left: 0;\r\n}\r\n.progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    background: none;\r\n    border-width: 12px;\r\n    border-style: solid;\r\n    position: absolute;\r\n    top: 0;\r\n}\r\n.progress[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{\r\n    left: 100%;\r\n    border-top-right-radius: 80px;\r\n    border-bottom-right-radius: 80px;\r\n    border-left: 0;\r\n    transform-origin: center left;\r\n}\r\n.progress[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]{\r\n    right: 0;\r\n}\r\n.progress[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{\r\n    left: -100%;\r\n    border-top-left-radius: 80px;\r\n    border-bottom-left-radius: 80px;\r\n    border-right: 0;\r\n    transform-origin: center right;\r\n    -webkit-animation: loading-1 1.8s linear forwards;\r\n            animation: loading-1 1.8s linear forwards;\r\n}\r\n.progress[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    height: 90%;\r\n    border-radius: 50%;\r\n    background: #44484b;\r\n    font-size: 24px;\r\n    color: #fff;\r\n    line-height: 135px;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 5%;\r\n    left: 5%;\r\n}\r\n.progress.blue[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{\r\n    border-color: #049dff;\r\n}\r\n.progress.red[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{\r\n    border-color: red;\r\n}\r\n.progress.blue[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{\r\n    -webkit-animation: loading-2 1.5s linear forwards 1.8s;\r\n            animation: loading-2 1.5s linear forwards 1.8s;\r\n    \r\n}\r\n.progress.yellow[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{\r\n    border-color: #fdba04;\r\n}\r\n.progress.green[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{\r\n    border-color: green;\r\n}\r\n.progress.yellow[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{\r\n    -webkit-animation: loading-3 1s linear forwards 1.8s;\r\n            animation: loading-3 1s linear forwards 1.8s;\r\n}\r\n.progress.pink[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{\r\n    border-color: #ed687c;\r\n}\r\n.progress.pink[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{\r\n    -webkit-animation: loading-4 0.4s linear forwards 1.8s;\r\n            animation: loading-4 0.4s linear forwards 1.8s;\r\n}\r\n.progress.green[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{\r\n    border-color: #1abc9c;\r\n}\r\n.progress.green[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{\r\n    -webkit-animation: loading-5 1.2s linear forwards 1.8s;\r\n            animation: loading-5 1.2s linear forwards 1.8s;\r\n}\r\n@-webkit-keyframes loading-1{\r\n    0%{\r\n        transform: rotate(0deg);\r\n    }\r\n    100%{\r\n        transform: rotate(180deg);\r\n    }\r\n}\r\n@keyframes loading-1{\r\n    0%{\r\n        transform: rotate(0deg);\r\n    }\r\n    100%{\r\n        transform: rotate(180deg);\r\n    }\r\n}\r\n@-webkit-keyframes loading-2{\r\n    0%{\r\n        transform: rotate(0deg);\r\n    }\r\n    100%{\r\n        transform: rotate(144deg);\r\n    }\r\n}\r\n@keyframes loading-2{\r\n    0%{\r\n        transform: rotate(0deg);\r\n    }\r\n    100%{\r\n        transform: rotate(144deg);\r\n    }\r\n}\r\n@-webkit-keyframes loading-3{\r\n    0%{\r\n        transform: rotate(0deg);\r\n    }\r\n    100%{\r\n        transform: rotate(90deg);\r\n    }\r\n}\r\n@keyframes loading-3{\r\n    0%{\r\n        transform: rotate(0deg);\r\n    }\r\n    100%{\r\n        transform: rotate(90deg);\r\n    }\r\n}\r\n@-webkit-keyframes loading-4{\r\n    0%{\r\n        transform: rotate(0deg);\r\n    }\r\n    100%{\r\n        transform: rotate(36deg);\r\n    }\r\n}\r\n@keyframes loading-4{\r\n    0%{\r\n        transform: rotate(0deg);\r\n    }\r\n    100%{\r\n        transform: rotate(36deg);\r\n    }\r\n}\r\n@-webkit-keyframes loading-5{\r\n    0%{\r\n        transform: rotate(0deg);\r\n    }\r\n    100%{\r\n        transform: rotate(126deg);\r\n    }\r\n}\r\n@keyframes loading-5{\r\n    0%{\r\n        transform: rotate(0deg);\r\n    }\r\n    100%{\r\n        transform: rotate(126deg);\r\n    }\r\n}\r\n@-webkit-keyframes right-left\r\n{\r\nfrom\r\n{\r\n left: 10%;\r\n}\r\nto\r\n{\r\n left: 0%;\r\n}\r\n}\r\n@keyframes right-left\r\n{\r\nfrom\r\n{\r\n left: 10%;\r\n}\r\nto\r\n{\r\n left: 0%;\r\n}\r\n}\r\n@-webkit-keyframes left-right\r\n{\r\nfrom\r\n{\r\n right: 10%;\r\n}\r\nto\r\n{\r\n right: 0%;\r\n}\r\n}\r\n@keyframes left-right\r\n{\r\nfrom\r\n{\r\n right: 10%;\r\n}\r\nto\r\n{\r\n right: 0%;\r\n}\r\n}\r\n@media only screen and (max-width: 990px){\r\n    .progress[_ngcontent-%COMP%]{ margin-bottom: 20px; }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQm9keS9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFdBQVc7SUFDWCxXQUFXOzs7QUFHZjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLDhCQUFzQjtZQUF0QixzQkFBc0I7O0FBRTFCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsOEJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLDhCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsWUFBWTtBQUNiO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0FBQ1g7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sVUFBVTtBQUNkO0FBQ0E7SUFDSSxPQUFPO0FBQ1g7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE1BQU07QUFDVjtBQUNBO0lBQ0ksVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsY0FBYztJQUVkLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksUUFBUTtBQUNaO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixlQUFlO0lBRWYsOEJBQThCO0lBQzlCLGlEQUF5QztZQUF6Qyx5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0FBQ1o7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxzREFBOEM7WUFBOUMsOENBQThDOztBQUVsRDtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG9EQUE0QztZQUE1Qyw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksc0RBQThDO1lBQTlDLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxzREFBOEM7WUFBOUMsOENBQThDO0FBQ2xEO0FBQ0E7SUFDSTtRQUVJLHVCQUF1QjtJQUMzQjtJQUNBO1FBRUkseUJBQXlCO0lBQzdCO0FBQ0o7QUFUQTtJQUNJO1FBRUksdUJBQXVCO0lBQzNCO0lBQ0E7UUFFSSx5QkFBeUI7SUFDN0I7QUFDSjtBQUNBO0lBQ0k7UUFFSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUVJLHlCQUF5QjtJQUM3QjtBQUNKO0FBVEE7SUFDSTtRQUVJLHVCQUF1QjtJQUMzQjtJQUNBO1FBRUkseUJBQXlCO0lBQzdCO0FBQ0o7QUFDQTtJQUNJO1FBRUksdUJBQXVCO0lBQzNCO0lBQ0E7UUFFSSx3QkFBd0I7SUFDNUI7QUFDSjtBQVRBO0lBQ0k7UUFFSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUVJLHdCQUF3QjtJQUM1QjtBQUNKO0FBQ0E7SUFDSTtRQUVJLHVCQUF1QjtJQUMzQjtJQUNBO1FBRUksd0JBQXdCO0lBQzVCO0FBQ0o7QUFUQTtJQUNJO1FBRUksdUJBQXVCO0lBQzNCO0lBQ0E7UUFFSSx3QkFBd0I7SUFDNUI7QUFDSjtBQUNBO0lBQ0k7UUFFSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUVJLHlCQUF5QjtJQUM3QjtBQUNKO0FBVEE7SUFDSTtRQUVJLHVCQUF1QjtJQUMzQjtJQUNBO1FBRUkseUJBQXlCO0lBQzdCO0FBQ0o7QUFFQTs7QUFFQTs7Q0FFQyxTQUFTO0FBQ1Y7QUFDQTs7Q0FFQyxRQUFRO0FBQ1Q7QUFDQTtBQVZBOztBQUVBOztDQUVDLFNBQVM7QUFDVjtBQUNBOztDQUVDLFFBQVE7QUFDVDtBQUNBO0FBRUE7O0FBRUE7O0NBRUMsVUFBVTtBQUNYO0FBQ0E7O0NBRUMsU0FBUztBQUNWO0FBQ0E7QUFWQTs7QUFFQTs7Q0FFQyxVQUFVO0FBQ1g7QUFDQTs7Q0FFQyxTQUFTO0FBQ1Y7QUFDQTtBQUtBO0lBQ0ksV0FBVyxtQkFBbUIsRUFBRTtBQUNwQyIsImZpbGUiOiJzcmMvYXBwL0JvZHkvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Qcm9ncmVzc1dyYXBwZXJcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuIFxyXG4gICBcclxufVxyXG4ucm93MVxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcmlnaHQtbGVmdDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICBcclxufVxyXG4ucm93MlxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogbGVmdC1yaWdodDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoycyA7XHJcbn1cclxuLnJvdzNcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJpZ2h0LWxlZnQ7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG59XHJcblxyXG4uUHJvZ3Jlc3NXcmFwcGVyIGgxXHJcbntcclxuIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gY29sb3I6IHdoaXRlO1xyXG59XHJcbi5Qcm9ncmVzc1dyYXBwZXIgLnJvd1xyXG57XHJcbm1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLnByb2dyZXNze1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnByb2dyZXNzOmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxMnB4IHNvbGlkICNmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcbi5wcm9ncmVzcyA+IHNwYW57XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuLnByb2dyZXNzIC5wcm9ncmVzcy1sZWZ0e1xyXG4gICAgbGVmdDogMDtcclxufVxyXG4ucHJvZ3Jlc3MgLnByb2dyZXNzLWJhcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlci13aWR0aDogMTJweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuLnByb2dyZXNzIC5wcm9ncmVzcy1sZWZ0IC5wcm9ncmVzcy1iYXJ7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDgwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogODBweDtcclxuICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgbGVmdDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBsZWZ0O1xyXG59XHJcbi5wcm9ncmVzcyAucHJvZ3Jlc3MtcmlnaHR7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4ucHJvZ3Jlc3MgLnByb2dyZXNzLXJpZ2h0IC5wcm9ncmVzcy1iYXJ7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDgwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4MHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XHJcbiAgICBhbmltYXRpb246IGxvYWRpbmctMSAxLjhzIGxpbmVhciBmb3J3YXJkcztcclxufVxyXG4ucHJvZ3Jlc3MgLnByb2dyZXNzLXZhbHVle1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzQ0NDg0YjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIGxlZnQ6IDUlO1xyXG59XHJcbi5wcm9ncmVzcy5ibHVlIC5wcm9ncmVzcy1iYXJ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwNDlkZmY7XHJcbn1cclxuLnByb2dyZXNzLnJlZCAucHJvZ3Jlc3MtYmFye1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbn1cclxuLnByb2dyZXNzLmJsdWUgLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhcntcclxuICAgIGFuaW1hdGlvbjogbG9hZGluZy0yIDEuNXMgbGluZWFyIGZvcndhcmRzIDEuOHM7XHJcbiAgICBcclxufVxyXG4ucHJvZ3Jlc3MueWVsbG93IC5wcm9ncmVzcy1iYXJ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZGJhMDQ7XHJcbn1cclxuLnByb2dyZXNzLmdyZWVuIC5wcm9ncmVzcy1iYXJ7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuO1xyXG59XHJcbi5wcm9ncmVzcy55ZWxsb3cgLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhcntcclxuICAgIGFuaW1hdGlvbjogbG9hZGluZy0zIDFzIGxpbmVhciBmb3J3YXJkcyAxLjhzO1xyXG59XHJcbi5wcm9ncmVzcy5waW5rIC5wcm9ncmVzcy1iYXJ7XHJcbiAgICBib3JkZXItY29sb3I6ICNlZDY4N2M7XHJcbn1cclxuLnByb2dyZXNzLnBpbmsgLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhcntcclxuICAgIGFuaW1hdGlvbjogbG9hZGluZy00IDAuNHMgbGluZWFyIGZvcndhcmRzIDEuOHM7XHJcbn1cclxuLnByb2dyZXNzLmdyZWVuIC5wcm9ncmVzcy1iYXJ7XHJcbiAgICBib3JkZXItY29sb3I6ICMxYWJjOWM7XHJcbn1cclxuLnByb2dyZXNzLmdyZWVuIC5wcm9ncmVzcy1sZWZ0IC5wcm9ncmVzcy1iYXJ7XHJcbiAgICBhbmltYXRpb246IGxvYWRpbmctNSAxLjJzIGxpbmVhciBmb3J3YXJkcyAxLjhzO1xyXG59XHJcbkBrZXlmcmFtZXMgbG9hZGluZy0xe1xyXG4gICAgMCV7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBsb2FkaW5nLTJ7XHJcbiAgICAwJXtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE0NGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTQ0ZGVnKTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmctM3tcclxuICAgIDAle1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmctNHtcclxuICAgIDAle1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2ZGVnKTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmctNXtcclxuICAgIDAle1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTI2ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjZkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJpZ2h0LWxlZnRcclxue1xyXG5mcm9tXHJcbntcclxuIGxlZnQ6IDEwJTtcclxufVxyXG50b1xyXG57XHJcbiBsZWZ0OiAwJTtcclxufVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxlZnQtcmlnaHRcclxue1xyXG5mcm9tXHJcbntcclxuIHJpZ2h0OiAxMCU7XHJcbn1cclxudG9cclxue1xyXG4gcmlnaHQ6IDAlO1xyXG59XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpe1xyXG4gICAgLnByb2dyZXNzeyBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-progress',
                templateUrl: './progress.component.html',
                styleUrls: ['./progress.component.css']
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/Body/projects/projects.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Body/projects/projects.component.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ProjectsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Book Shop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "A web application completed during the university training period .Registers a group of libraries so that each library has its own books. So that any user can register for this site and see the books for each library and add books to the user cart .");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Madrasty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "(Graduation project) School system (mobile app / website app) that Students/teachers can login to this system and do their job(students : can see his schedule and marks), (teachers : can also see his schedule, and add students marks) and finally school manager can add and delete students and teachers to the system.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "covid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "A web application that displays all cases of virus corona in the world");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Book Shop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "A web application completed during the university training period .Registers a group of libraries so that each library has its own books. So that any user can register for this site and see the books for each library and add books to the user cart .");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Madrasty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "(Graduation project) School system (mobile app / website app) that Students/teachers can login to this system and do their job(students : can see his schedule and marks), (teachers : can also see his schedule, and add students marks) and finally school manager can add and delete students and teachers to the system.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active1": a0 }; };
class ProjectsComponent {
    constructor() {
        this.Wflag = true;
        this.isActive = true;
        this.Mbutton = document.getElementById("Mobile");
        this.Wbutton = document.getElementById("Web");
    }
    ngOnInit() {
    }
    changeW() {
        this.Wflag = true;
        this.Mflag = false;
    }
    changeM() {
        this.Mflag = true;
        this.Wflag = false;
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 13, vars: 8, consts: [[1, "Projects"], ["src", "../../../assets/list.png", "alt", ""], [1, "list"], [1, "link"], ["id", "Web", 3, "ngClass", "click"], ["id", "Mobile", 3, "ngClass", "click"], [4, "ngIf"], ["id", "ppList", 1, "pList"], [1, "row"], [1, "box", "box1", "col-lg-4"], [1, "flip-card-inner"], [1, "flip-card-front"], ["src", "../../../assets/book.png", "alt", "book", 2, "width", "300px", "height", "300px"], [1, "flip-card-back"], [1, "box", "box2", "col-lg-4"], ["src", "../../../assets/madrasty.png", "alt", "book", 2, "width", "300px", "height", "300px"], [1, "box", "box3", "col-lg-4"], ["src", "../../../assets/covid.png", "alt", "book", 2, "width", "300px", "height", "300px"], [1, "MList"], [1, "box", "box1", "col-lg-6"], [1, "box", "box2", "col-lg-6"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_7_listener() { return ctx.changeW(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Web app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_9_listener() { return ctx.changeM(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mobile App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectsComponent_div_11_Template, 30, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProjectsComponent_div_12_Template, 21, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.Wflag == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.Mflag == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Wflag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Mflag);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".Projects[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n{\r\n    color:white;\r\n    text-align: center;\r\n}\r\n.Projects[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]\r\n{\r\n    position: relative;\r\n    left: 45%;\r\n  \r\n}\r\n.list[_ngcontent-%COMP%]\r\n{\r\n    width: 98%;\r\n    height: 50px;\r\n    position: relative;\r\n}\r\n.list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]\r\n{\r\n   position: relative;\r\n   padding: 10px 30px;\r\n   color:white ;\r\n   transition-property: line-width;\r\n   transition-duration:3s ;\r\n   display: inline-block;\r\n}\r\n.list[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n    text-align: center;\r\n}\r\n.list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover\r\n{\r\n \r\n\r\n  cursor: pointer;\r\n}\r\n.pList[_ngcontent-%COMP%]\r\n{\r\n    width: 98%;\r\n    max-width: 100%;\r\n    height: 400px;\r\n    -webkit-animation-name: show_pop;\r\n            animation-name: show_pop;\r\n    -webkit-animation-duration: 4s;\r\n            animation-duration: 4s;\r\n   \r\n}\r\n.active1[_ngcontent-%COMP%]\r\n{\r\n    border-bottom: 3px solid red;\r\n    \r\n}\r\n.pList[_ngcontent-%COMP%], .MList[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 30px;\r\n}\r\n.MList[_ngcontent-%COMP%]\r\n{\r\n    width: 98%;\r\n    max-width: 100%;\r\n    height: 400px;\r\n    -webkit-animation-name: show_pop;\r\n            animation-name: show_pop;\r\n    -webkit-animation-duration: 4s;\r\n            animation-duration: 4s;\r\n   \r\n}\r\n.box[_ngcontent-%COMP%]:hover \r\n{\r\n    \r\n    transform: rotateY(180deg);\r\n}\r\n.box1[_ngcontent-%COMP%]\r\n{\r\n    width: 98%;\r\n    height: 70vh;\r\n    perspective: 1000px;\r\n}\r\n.box2[_ngcontent-%COMP%]\r\n{\r\n    width: 98%;\r\n    height: 70vh;\r\n    perspective: 1000px;\r\n}\r\n.box2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]\r\n{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n\r\n}\r\n.box[_ngcontent-%COMP%]\r\n {\r\n     transition-property:background ,transform ;\r\n     transition-duration: 0.5s;\r\n     transform-style: preserve-3d;\r\n     -webkit-animation-name:show_pop;\r\n             animation-name:show_pop;\r\n     -webkit-animation-direction: 3s;\r\n             animation-direction: 3s;\r\n }\r\n.box1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]\r\n{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n}\r\n.box3[_ngcontent-%COMP%]\r\n{\r\n    width: 98%;\r\n    height: 70vh;\r\n    perspective: 1000px;\r\n   \r\n}\r\n.box3[_ngcontent-%COMP%]:hover\r\n{\r\n    background-color:rgb(148, 7, 7);\r\n}\r\n.box1[_ngcontent-%COMP%]:hover\r\n{\r\n    background-color:rgb(196, 90, 3);\r\n}\r\n.box2[_ngcontent-%COMP%]:hover\r\n{\r\n    background-color:rgb(30, 66, 0);\r\n}\r\n.box3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]\r\n{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n}\r\n.flip-card[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    width: 300px;\r\n    height: 300px;\r\n    \r\n  }\r\n.flip-card-inner[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    transition: transform 0.6s;\r\n    transform-style: preserve-3d;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  }\r\n.flip-card[_ngcontent-%COMP%]:hover   .flip-card-inner[_ngcontent-%COMP%] {\r\n    transform: rotateY(180deg);\r\n  }\r\n.flip-card-front[_ngcontent-%COMP%], .flip-card-back[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n  }\r\n.flip-card-front[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\n.flip-card-back[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    color: white;\r\n    transform: rotateY(180deg);\r\n  }\r\n\r\n@-webkit-keyframes show_pop\r\n  {\r\n   from\r\n   {  \r\n     transform: scale(0)\r\n   }\r\n   to\r\n   {\r\n       transform: scale(1);\r\n   }\r\n\r\n  }\r\n@keyframes show_pop\r\n  {\r\n   from\r\n   {  \r\n     transform: scale(0)\r\n   }\r\n   to\r\n   {\r\n       transform: scale(1);\r\n   }\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQm9keS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsU0FBUzs7QUFFYjtBQUNBOztJQUVJLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7O0dBRUcsa0JBQWtCO0dBQ2xCLGtCQUFrQjtHQUNsQixZQUFZO0dBQ1osK0JBQStCO0dBQy9CLHVCQUF1QjtHQUN2QixxQkFBcUI7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFFQTs7OztFQUlFLGVBQWU7QUFDakI7QUFDQTs7SUFFSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGFBQWE7SUFDYixnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLDhCQUFzQjtZQUF0QixzQkFBc0I7O0FBRTFCO0FBQ0E7O0lBRUksNEJBQTRCOztBQUVoQztBQUNBOztJQUVJLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLFVBQVU7SUFDVixlQUFlO0lBQ2YsYUFBYTtJQUNiLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsOEJBQXNCO1lBQXRCLHNCQUFzQjs7QUFFMUI7QUFDQTs7O0lBR0ksMEJBQTBCO0FBQzlCO0FBQ0E7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTs7QUFFaEI7QUFDQzs7S0FFSSwwQ0FBMEM7S0FDMUMseUJBQXlCO0tBQ3pCLDRCQUE0QjtLQUM1QiwrQkFBdUI7YUFBdkIsdUJBQXVCO0tBQ3ZCLCtCQUF1QjthQUF2Qix1QkFBdUI7Q0FDM0I7QUFDRDs7SUFFSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7QUFDaEI7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjs7QUFFdkI7QUFDQTs7SUFFSSwrQkFBK0I7QUFDbkM7QUFDQTs7SUFFSSxnQ0FBZ0M7QUFDcEM7QUFDQTs7SUFFSSwrQkFBK0I7QUFDbkM7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7QUFDaEI7QUFJQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osYUFBYTs7RUFFZjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsdUNBQXVDO0VBQ3pDO0FBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUFtQztJQUNuQywyQkFBMkI7RUFDN0I7QUFFQTtJQUNFLFlBQVk7RUFDZDtBQUVBO01BQ0ksV0FBVztJQUNiLFlBQVk7SUFDWiwwQkFBMEI7RUFDNUI7QUFFQSxZQUFZO0FBQ1o7O0dBRUM7O0tBRUU7R0FDRjtHQUNBOztPQUVJLG1CQUFtQjtHQUN2Qjs7RUFFRDtBQVhBOztHQUVDOztLQUVFO0dBQ0Y7R0FDQTs7T0FFSSxtQkFBbUI7R0FDdkI7O0VBRUQiLCJmaWxlIjoic3JjL2FwcC9Cb2R5L3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUHJvamVjdHMgaDFcclxue1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLlByb2plY3RzIHNwYW5cclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNDUlO1xyXG4gIFxyXG59XHJcbi5saXN0XHJcbntcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxpc3QgYVxyXG57XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICBjb2xvcjp3aGl0ZSA7XHJcbiAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxpbmUtd2lkdGg7XHJcbiAgIHRyYW5zaXRpb24tZHVyYXRpb246M3MgO1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmxpc3QgLmxpbmsge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxpc3QgYTpob3ZlclxyXG57XHJcbiBcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5wTGlzdFxyXG57XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzaG93X3BvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XHJcbiAgIFxyXG59XHJcbi5hY3RpdmUxXHJcbntcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZWQ7XHJcbiAgICBcclxufVxyXG4ucExpc3QgLCAuTUxpc3Rcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uTUxpc3Rcclxue1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBhbmltYXRpb24tbmFtZTogc2hvd19wb3A7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xyXG4gICBcclxufVxyXG4uYm94OmhvdmVyIFxyXG57XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcbi5ib3gxXHJcbntcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG59XHJcbi5ib3gyXHJcbntcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG59XHJcbi5ib3gyIGltZ1xyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG59XHJcbiAuYm94XHJcbiB7XHJcbiAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTpiYWNrZ3JvdW5kICx0cmFuc2Zvcm0gO1xyXG4gICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICBhbmltYXRpb24tbmFtZTpzaG93X3BvcDtcclxuICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiAzcztcclxuIH1cclxuLmJveDEgaW1nXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmJveDNcclxue1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbiAgIFxyXG59XHJcbi5ib3gzOmhvdmVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE0OCwgNywgNyk7XHJcbn1cclxuLmJveDE6aG92ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTk2LCA5MCwgMyk7XHJcbn1cclxuLmJveDI6aG92ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMzAsIDY2LCAwKTtcclxufVxyXG4uYm94MyBpbWdcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcbi5mbGlwLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5mbGlwLWNhcmQtaW5uZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGlwLWNhcmQ6aG92ZXIgLmZsaXAtY2FyZC1pbm5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgLmZsaXAtY2FyZC1mcm9udCwgLmZsaXAtY2FyZC1iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGlwLWNhcmQtZnJvbnQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAuZmxpcC1jYXJkLWJhY2sge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gIH1cclxuIFxyXG4gIC8qQW5pbWF0aW9uKi9cclxuICBAa2V5ZnJhbWVzIHNob3dfcG9wXHJcbiAge1xyXG4gICBmcm9tXHJcbiAgIHsgIFxyXG4gICAgIHRyYW5zZm9ybTogc2NhbGUoMClcclxuICAgfVxyXG4gICB0b1xyXG4gICB7XHJcbiAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICB9XHJcblxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/nav/nav.component */ "./src/app/navbar/nav/nav.component.ts");
/* harmony import */ var _Body_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Body/about/about.component */ "./src/app/Body/about/about.component.ts");
/* harmony import */ var _Body_progress_progress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Body/progress/progress.component */ "./src/app/Body/progress/progress.component.ts");
/* harmony import */ var _Body_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Body/projects/projects.component */ "./src/app/Body/projects/projects.component.ts");






class AppComponent {
    constructor() {
        this.title = 'MyWebsite';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 0, consts: [[1, "HeaderImage"], [1, "wrapper"], [2, "color", "red", "font-style", "italic", "font-weight", "bold"], ["href", "", "data-period", "2000", "data-type", "[ \"Hamza Ali.\", \"a Full stack developer.\", \"a Java Developer.\" , \".Net Developer\" ]", 1, "typewrite"], [1, "wrap"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "HELLO THERE! I AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _Body_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], _Body_progress_progress_component__WEBPACK_IMPORTED_MODULE_3__["ProgressComponent"], _Body_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]], styles: [".HeaderImage[_ngcontent-%COMP%]\r\n{\r\n    \r\n    margin-top: -10px;\r\n    height: 650px;\r\n    width: 100%;\r\n    position: relative;\r\n    background-image: url('java.jpg');\r\n    background-size:cover ;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    color: white;\r\n}  \r\n.HeaderImage[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]\r\n{\r\n    -webkit-animation: left_center 3s ;\r\n            animation: left_center 3s ;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 30%;\r\n  \r\n}  \r\n.HeaderImage[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .typewrite[_ngcontent-%COMP%]\r\n{\r\ncolor: white;\r\ntext-decoration: none;  \r\ncursor: none;\r\nfont-size: 80px;\r\n-webkit-animation: left_center 3s ;\r\n        animation: left_center 3s ;\r\n}  \r\n.left[_ngcontent-%COMP%] \r\n{\r\n    position: absolute;\r\n    width: 120%;\r\n    height: 111vh;\r\n  \r\n\r\n}  \r\n.right[_ngcontent-%COMP%]\r\n{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 111vh;\r\n\r\n}  \r\n@-webkit-keyframes left_center\r\n{\r\n    from{left: -50%;}\r\n    to{left: 30%;}\r\n}  \r\n@keyframes left_center\r\n{\r\n    from{left: -50%;}\r\n    to{left: 30%;}\r\n}  \r\n@-webkit-keyframes right_center\r\n{\r\n    \r\n    from{right:100%;}\r\n    to{right: 0%;}\r\n}  \r\n@keyframes right_center\r\n{\r\n    \r\n    from{right:100%;}\r\n    to{right: 0%;}\r\n}  \r\n  \r\n@media only screen and (max-width: 768px) {\r\n    .HeaderImage[_ngcontent-%COMP%]\r\n    {\r\n        background-image: url('java2.jpg');\r\n    }\r\n    .HeaderImage[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .typewrite[_ngcontent-%COMP%]\r\n    {\r\n        font-size: 70px;\r\n        \r\n    }\r\n    .HeaderImage[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]\r\n    {\r\n        font-size: 30px;\r\n    }\r\n  }  \r\n@media only screen and (max-width: 600px) {\r\n    .HeaderImage[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]\r\n    {\r\n        font-size: 20px;\r\n    }\r\n    .HeaderImage[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .typewrite[_ngcontent-%COMP%]\r\n    {\r\n        font-size: 50px;\r\n    }\r\n  }  \r\n@media only screen and (max-width: 450px) {\r\n    .HeaderImage[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]\r\n    {\r\n        font-size: 10px;\r\n    }\r\n    .HeaderImage[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .typewrite[_ngcontent-%COMP%]\r\n    {\r\n        font-size: 25px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQ0FBMkM7SUFDM0Msc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjtBQUNBOztJQUVJLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTOztBQUViO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQixZQUFZO0FBQ1osZUFBZTtBQUNmLGtDQUEwQjtRQUExQiwwQkFBMEI7QUFDMUI7QUFDQzs7SUFFRyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7OztBQUdqQjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTs7QUFFakI7QUFDQTs7SUFFSSxLQUFLLFVBQVUsQ0FBQztJQUNoQixHQUFHLFNBQVMsQ0FBQztBQUNqQjtBQUpBOztJQUVJLEtBQUssVUFBVSxDQUFDO0lBQ2hCLEdBQUcsU0FBUyxDQUFDO0FBQ2pCO0FBQ0E7OztJQUdJLEtBQUssVUFBVSxDQUFDO0lBQ2hCLEdBQUcsU0FBUyxDQUFDO0FBQ2pCO0FBTEE7OztJQUdJLEtBQUssVUFBVSxDQUFDO0lBQ2hCLEdBQUcsU0FBUyxDQUFDO0FBQ2pCO0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0k7O1FBRUksa0NBQTRDO0lBQ2hEO0lBQ0E7O1FBRUksZUFBZTs7SUFFbkI7SUFDQTs7UUFFSSxlQUFlO0lBQ25CO0VBQ0Y7QUFDQTtJQUNFOztRQUVJLGVBQWU7SUFDbkI7SUFDQTs7UUFFSSxlQUFlO0lBQ25CO0VBQ0Y7QUFDQTtJQUNFOztRQUVJLGVBQWU7SUFDbkI7SUFDQTs7UUFFSSxlQUFlO0lBQ25CO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5IZWFkZXJJbWFnZVxyXG57XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2phdmEuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyIDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0gIFxyXG4uSGVhZGVySW1hZ2UgLndyYXBwZXJcclxue1xyXG4gICAgYW5pbWF0aW9uOiBsZWZ0X2NlbnRlciAzcyA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICBcclxufVxyXG4uSGVhZGVySW1hZ2UgLndyYXBwZXIgLnR5cGV3cml0ZVxyXG57XHJcbmNvbG9yOiB3aGl0ZTtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lOyAgXHJcbmN1cnNvcjogbm9uZTtcclxuZm9udC1zaXplOiA4MHB4O1xyXG5hbmltYXRpb246IGxlZnRfY2VudGVyIDNzIDtcclxufVxyXG4gLmxlZnQgXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMjAlO1xyXG4gICAgaGVpZ2h0OiAxMTF2aDtcclxuICBcclxuXHJcbn1cclxuLnJpZ2h0XHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMTF2aDtcclxuXHJcbn1cclxuQGtleWZyYW1lcyBsZWZ0X2NlbnRlclxyXG57XHJcbiAgICBmcm9te2xlZnQ6IC01MCU7fVxyXG4gICAgdG97bGVmdDogMzAlO31cclxufVxyXG5Aa2V5ZnJhbWVzIHJpZ2h0X2NlbnRlclxyXG57XHJcbiAgICBcclxuICAgIGZyb217cmlnaHQ6MTAwJTt9XHJcbiAgICB0b3tyaWdodDogMCU7fVxyXG59XHJcblxyXG4vKk1lZGlhIFF1ZXJpZXMqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuSGVhZGVySW1hZ2VcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvamF2YTIuanBnXCIpO1xyXG4gICAgfVxyXG4gICAgLkhlYWRlckltYWdlIC53cmFwcGVyIC50eXBld3JpdGVcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuSGVhZGVySW1hZ2UgLndyYXBwZXIgaDJcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5IZWFkZXJJbWFnZSAud3JhcHBlciBoMlxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5IZWFkZXJJbWFnZSAud3JhcHBlciAudHlwZXdyaXRlXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAuSGVhZGVySW1hZ2UgLndyYXBwZXIgaDJcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuSGVhZGVySW1hZ2UgLndyYXBwZXIgLnR5cGV3cml0ZVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuICB9XHJcbiAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/nav/nav.component */ "./src/app/navbar/nav/nav.component.ts");
/* harmony import */ var _Body_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Body/about/about.component */ "./src/app/Body/about/about.component.ts");
/* harmony import */ var _Body_progress_progress_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Body/progress/progress.component */ "./src/app/Body/progress/progress.component.ts");
/* harmony import */ var _Body_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Body/projects/projects.component */ "./src/app/Body/projects/projects.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _navbar_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"],
        _Body_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _Body_progress_progress_component__WEBPACK_IMPORTED_MODULE_5__["ProgressComponent"],
        _Body_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _navbar_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"],
                    _Body_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                    _Body_progress_progress_component__WEBPACK_IMPORTED_MODULE_5__["ProgressComponent"],
                    _Body_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/navbar/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/navbar/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavComponent {
    constructor() { }
    ngOnInit() {
    }
    onWindowScroll(e) {
        let element = document.querySelector('.navbar');
        if (window.pageYOffset > 60) {
            element.classList.add('shadow');
            element.classList.add('bg-dark');
            element.classList.remove('bg-transparent');
        }
        else {
            element.classList.remove('shadow');
            element.classList.remove('bg-dark');
            element.classList.add('bg-transparent');
        }
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], hostBindings: function NavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 23, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top", 3, "scroll"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "nav-item"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavComponent_Template_nav_scroll_1_listener($event) { return ctx.onWindowScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hamza Ali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".navbar[_ngcontent-%COMP%]\r\n{\r\n  transition-property: background;\r\n  transition: 1s;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] \r\n{\r\n    margin-left: 30px;\r\n}\r\n\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\r\n  padding: 10px 20px;\r\n  transition-property: color;\r\n  transition-duration: 1s;\r\n  \r\n}\r\n\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\r\n    background-image: url( \r\n        \"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 0, 0, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\"); \r\n               \r\n  }\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]\r\n  {\r\n      transition-property: transform , color;\r\n      transition-duration: 2s;\r\n      perspective: 100px;\r\n  }\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover\r\n  {\r\n      transform: rotateY(360deg);\r\n      color: red;\r\n      \r\n  }\r\n\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{\r\n    color: red;\r\n  }\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]\r\n  {\r\n    outline: none;\r\n    border: none;\r\n  }\r\n\r\n\r\n\r\n@media (max-width: 990px) {\r\n    .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n     \r\n      width:800px;\r\n     \r\n      text-align: center;\r\n      font-weight: bold;\r\n    }\r\n   \r\n    .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\r\n    color: white;\r\n    }\r\n  }\r\n\r\n@media (max-width: 768px) {\r\n    .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n      \r\n      width:600px;\r\n      \r\n      text-align: center;\r\n      font-weight: bold;\r\n    }\r\n   \r\n    .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\r\n    color: white;\r\n    }\r\n  }\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n   \r\n    width:500px;\r\n   \r\n    text-align: center;\r\n    font-weight: bold;\r\n  }\r\n \r\n  .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\r\n  color: white;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n  .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n   \r\n    width:400px;\r\n   \r\n    text-align: center;\r\n    font-weight: bold;\r\n  }\r\n \r\n  .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\r\n  color: white;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n  .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n   \r\n    width:300px;\r\n    \r\n    text-align: center;\r\n    font-weight: bold;\r\n  }\r\n \r\n  .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\r\n  color: white;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdi9uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSwrQkFBK0I7RUFDL0IsY0FBYztBQUNoQjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHVCQUF1Qjs7QUFFekI7O0FBRUE7SUFDSTt5UEFDcVA7O0VBRXZQOztBQUNBOztNQUVJLHNDQUFzQztNQUN0Qyx1QkFBdUI7TUFDdkIsa0JBQWtCO0VBQ3RCOztBQUNBOztNQUVJLDBCQUEwQjtNQUMxQixVQUFVOztFQUVkOztBQUNGO0lBQ0ksVUFBVTtFQUNaOztBQUVBOztJQUVFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0FBRUEsZ0JBQWdCOztBQUNoQjtJQUNFOztNQUVFLFdBQVc7O01BRVgsa0JBQWtCO01BQ2xCLGlCQUFpQjtJQUNuQjs7SUFFQTtJQUNBLFlBQVk7SUFDWjtFQUNGOztBQUNBO0lBQ0U7O01BRUUsV0FBVzs7TUFFWCxrQkFBa0I7TUFDbEIsaUJBQWlCO0lBQ25COztJQUVBO0lBQ0EsWUFBWTtJQUNaO0VBQ0Y7O0FBQ0Y7RUFDRTs7SUFFRSxXQUFXOztJQUVYLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7RUFDQSxZQUFZO0VBQ1o7QUFDRjs7QUFDQTtFQUNFOztJQUVFLFdBQVc7O0lBRVgsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtFQUNBLFlBQVk7RUFDWjtBQUNGOztBQUNBO0VBQ0U7O0lBRUUsV0FBVzs7SUFFWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0VBQ0EsWUFBWTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhclxyXG57XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcclxuICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLWJyYW5kIFxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmt7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gIFxyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCBcclxuICAgICAgICBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMiAzMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDI1NSwgMCwgMCwgMC44KScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgOGgyNE00IDE2aDI0TTQgMjRoMjQnLyUzRSUzQy9zdmclM0VcIik7IFxyXG4gICAgICAgICAgICAgICBcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWJyYW5kXHJcbiAge1xyXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0gLCBjb2xvcjtcclxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICAgIHBlcnNwZWN0aXZlOiAxMDBweDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWJyYW5kOmhvdmVyXHJcbiAge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgXHJcbiAgfVxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVye1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiBcclxuICAubmF2YmFyIC5uYXZiYXItdG9nZ2xlclxyXG4gIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKk1lZGlhIFF1ZXJpZXMqL1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gICAgLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IHtcclxuICAgICBcclxuICAgICAgd2lkdGg6ODAwcHg7XHJcbiAgICAgXHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGlua3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYge1xyXG4gICAgICBcclxuICAgICAgd2lkdGg6NjAwcHg7XHJcbiAgICAgIFxyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmt7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IHtcclxuICAgXHJcbiAgICB3aWR0aDo1MDBweDtcclxuICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiBcclxuICAubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5re1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5uYXZiYXItZGFyayAubmF2YmFyLW5hdiB7XHJcbiAgIFxyXG4gICAgd2lkdGg6NDAwcHg7XHJcbiAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gXHJcbiAgLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGlua3tcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYge1xyXG4gICBcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiBcclxuICAubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5re1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css']
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hamza\Desktop\My Protfolo\MyWebsite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map