var ac_main =
webpackJsonpac__name_([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(43);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(695);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(213);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(215);

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });



var PaginationComponent = (function () {
    function PaginationComponent(store) {
        this.store = store;
        this.model = { id: 5 };
        this.pages = 1;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
        // sorting
        this.key = 'name'; // set default
        this.reverse = false;
        // console.log(' value1 ' + this.model);
        // this.filteredItems = productList;
        this.filteredItems = this.exportTableList;
        // this.initz();
    }
    PaginationComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.exportTableList);
        this.exportTableData = this.store.select('exportPCD');
        this.exportTableData.subscribe(function (val) {
            if (!val) {
                return;
            }
            else {
                _this.exportTable = val;
            }
        });
        this.initz();
        // console.log("fgdddddjf");
        // console.log(this.exportTable);  
    };
    PaginationComponent.prototype.page = function () {
        this.pageItem(this.model);
    };
    PaginationComponent.prototype.pageItem = function (item) {
        this.pageSize = item.id;
        console.log(' value2 ' + this.pageSize);
        //this.filteredItems = productList;
        this.filteredItems = this.exportTableList;
        this.initz();
    };
    PaginationComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    PaginationComponent.prototype.initz = function () {
        this.filteredItems = this.exportTableList;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.pages = 4;
        if (this.filteredItems != undefined) {
            this.pageNumber = parseInt('' + (this.filteredItems.length / this.pageSize));
            if (this.filteredItems.length % this.pageSize !== 0) {
                this.pageNumber++;
            }
        }
        if (this.pageNumber < this.pages) {
            this.pages = this.pageNumber;
        }
        this.refreshItems();
        console.log('this.pageNumber:' + this.pageNumber);
    };
    PaginationComponent.prototype.FilterByName = function () {
        var _this = this;
        this.filteredItems = [];
        if (this.inputName !== '') {
            // productList.forEach(element => {
            this.exportTableList.forEach(function (element) {
                if (element.name.toUpperCase().indexOf(_this.inputName.toUpperCase()) >= 0) {
                    _this.filteredItems.push(element);
                }
            });
        }
        else {
            // this.filteredItems = productList;
            this.filteredItems = this.exportTableList;
        }
        console.log(this.filteredItems);
        this.initz();
    };
    PaginationComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    PaginationComponent.prototype.refreshItems = function () {
        this.filteredItems = this.exportTableList;
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    PaginationComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    PaginationComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    PaginationComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    PaginationComponent.prototype.ngOnChanges = function () {
        this.filteredItems = this.exportTableList;
        console.log(this.exportTableList);
        console.log(this.filteredItems);
    };
    PaginationComponent.prototype.getItems = function () {
        return this.items;
    };
    return PaginationComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", String)
], PaginationComponent.prototype, "appli", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('exportTableList'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], PaginationComponent.prototype, "exportTableList", void 0);
PaginationComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-pagination',
        template: __webpack_require__(197),
        styles: [__webpack_require__(221)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
], PaginationComponent);



/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(212);

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(68);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleExportService; });




var ScheduleExportService = (function () {
    /**
     *  constructor
     * @param http
     */
    function ScheduleExportService(http) {
        this.http = http;
        this.freq = ['ONLY ONCE', 'DAILY', 'WEEKLY', 'MONTHLY'];
        this.day = [];
        this.weeks = ['Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',
            '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '29', '30', 'MONTH END'];
        this.SCHEDULE_EXPORT_LIST_URI = 'http://cscvappnor088.fsg.amer.csc.com:9000/v1/parameter/mass-maintenance/schedules?type=export';
        this.TEMPLATE_LIST_URI = 'http://cscvappnor088.fsg.amer.csc.com:9000/v1/parameter/mass-maintenance/templates';
        this.SCHEDULE_BASE_URI = 'http://cscvappnor088.fsg.amer.csc.com:9000/v1/parameter/mass-maintenance/schedules';
    }
    /**
     *  get list of scedule exports by GET call
     */
    ScheduleExportService.prototype.getScheduledExports = function () {
        return this.http.get(this.SCHEDULE_EXPORT_LIST_URI).map(function (response) { return response.json()._embedded.scheduleBeanList; });
    };
    /**
     *  get list of templates by GET call
     */
    ScheduleExportService.prototype.getTemplates = function () {
        return this.http.get(this.TEMPLATE_LIST_URI).map(function (response) { return response.json()._embedded.templateBeanList; });
    };
    /**
     *  get parameter sets by template id
     * @param id
     */
    ScheduleExportService.prototype.getParameterSet = function (id) {
        var url = this.TEMPLATE_LIST_URI + "/" + id;
        return this.http.get(url).map(function (response) { return response.json().psets; });
    };
    /**
     *  create new schedule export
     * @param model
     */
    ScheduleExportService.prototype.createSheduleExport = function (model) {
        return this.http.post(this.SCHEDULE_BASE_URI, model);
    };
    /**
     *  update exsting schedule export by id
     * @param model
     * @param id
     */
    ScheduleExportService.prototype.updateScheduleExport = function (model, id) {
        var url = this.SCHEDULE_BASE_URI + "/" + id;
        console.log('url : ' + url);
        return this.http.put(url, model).toPromise();
    };
    /**
     * delete existing SheduleExport by id
     *
     * @param id
     */
    ScheduleExportService.prototype.deleteScheduleExport = function (id) {
        var url = this.SCHEDULE_BASE_URI + "/" + id;
        return this.http.delete(url).toPromise();
    };
    /**
     * populate dates or day's by selectedFrequency
     * @param selectedFrequency
     */
    ScheduleExportService.prototype.onSelect = function (selectedFrequency) {
        if (selectedFrequency === 'WEEKLY') {
            this.day = this.weeks;
        }
        else if (selectedFrequency === 'MONTHLY') {
            this.day = this.days;
        }
        else {
            this.day = null;
        }
    };
    return ScheduleExportService;
}());
ScheduleExportService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], ScheduleExportService);



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduledImportsService; });





/**
 *  this class for service implementation of shedule import view/create
 *
 */
var ScheduledImportsService = (function () {
    function ScheduledImportsService(http) {
        this.http = http;
        this.freq = ['ONLY ONCE', 'DAILY', 'WEEKLY', 'MONTHLY'];
        this.day = [];
        this.weeks = ['Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18',
            '19', '20', '21', '22', '23', '24', '25', '26', '27', '29', '30', 'MONTH END'];
        this.GET_SCHEDULE_IMPORTS = 'http://cscvappnor088.fsg.amer.csc.com:9000/v1/parameter/mass-maintenance/schedules?type=import';
        this.SCHEDULE_BASE_URI = 'http://cscvappnor088.fsg.amer.csc.com:9000/v1/parameter/mass-maintenance/schedules';
    }
    ScheduledImportsService.prototype.getScheduledImports = function () {
        return this.http.get(this.GET_SCHEDULE_IMPORTS).map(function (response) { return response.json()._embedded.scheduleBeanList; });
    };
    /**
     * This method for create new shedule import
     *
     * @param sheduleImport
     * @returns response
     */
    ScheduledImportsService.prototype.createSheduleImport = function (model) {
        console.log(' start Create Service...' + JSON.stringify(model));
        return this.http.post(this.SCHEDULE_BASE_URI, model);
    };
    /**
     * this method for update sheduleImport
     *
     * @param model
     * @param id
     */
    ScheduledImportsService.prototype.updateSheduleImport = function (model, id) {
        var url = this.SCHEDULE_BASE_URI + "/" + id;
        return this.http.put(url, model).toPromise();
    };
    /**
     * this method for delete existing SheduleImport
     *
     * @param id
     */
    ScheduledImportsService.prototype.deleteSheduleImport = function (id) {
        var url = this.SCHEDULE_BASE_URI + "/" + id;
        return this.http.delete(url).toPromise();
    };
    ScheduledImportsService.prototype.onSelect = function (selectedFrequency) {
        if (selectedFrequency === 'WEEKLY') {
            this.day = this.weeks;
        }
        else if (selectedFrequency === 'MONTHLY') {
            this.day = this.days;
        }
        else {
            this.day = null;
        }
    };
    return ScheduledImportsService;
}());
ScheduledImportsService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
], ScheduledImportsService);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateService; });





var TemplateService = (function () {
    // constructor(private httpClient : HttpClient) {   
    // }
    function TemplateService(http) {
        this.http = http;
        this.baseURL = "http://cscvappnor088.fsg.amer.csc.com:9000/v1/parameter/mass-maintenance/"; // Replace with actual API url
        this.TEMPLATE_LIST_URI = 'http://cscvappnor088.fsg.amer.csc.com:9000/v1/parameter/mass-maintenance/templates';
    }
    TemplateService.prototype.get_templates = function () {
        /* this.templates = [
              new Template(1, 'TemplateOne', '01/01/2018', 'Ravi', '08/08/2018'),
              new Template(2, 'TemplateTwo', '01/01/2018', 'Sam', '08/08/2018'),
              new Template(3, 'TemplateThree', '01/01/2018', 'Sebastian', '08/08/2018'),
              new Template(4, 'TemplateFour', '01/01/2018', 'Hari', '08/08/2018'),
              new Template(5, 'TemplateFove', '01/01/2018', 'Prasad', '08/08/2018')
        ]; */
        // return this.http.get(this.baseURL + '/templates');
        return this.http.get(this.TEMPLATE_LIST_URI).map(function (response) { return response.json()._embedded.templateBeanList; });
    };
    // get_parameterSets(): Observable<any>{
    //    return this.httpClient.get(this.baseURL + '/parameterSets').map((response: Response) => response.json());
    // }  
    /**
     *  get list of templates by GET call
     */
    TemplateService.prototype.get_parameterSets = function (uuid) {
        return this.http.get(this.TEMPLATE_LIST_URI + "/" + uuid).map(function (response) { return response.json(); });
    };
    TemplateService.prototype.get_parameterSetsFromFoundationJson = function () {
        return this.http.get("../../assets/utils/foundation.json");
    };
    TemplateService.prototype.get_parameterSetsFromDepositsJson = function () {
        return this.http.get("../assets/utils/deposit.json");
    };
    TemplateService.prototype.get_parameterSetsFromCustomerJson = function () {
        return this.http.get("../assets/utils/customer.json");
    };
    TemplateService.prototype.get_parameterSetsFromCardJson = function () {
        return this.http.get("../assets/utils/card.json");
    };
    TemplateService.prototype.get_parameterSetsFromLoanJson = function () {
        return this.http.get("../assets/utils/loan.json");
    };
    // create_template(template){
    //   // Replace with API Url here
    //   return this.httpClient.post(`${this.baseURL}/templates/`,template, {observe : 'response'});
    // }
    TemplateService.prototype.create_template = function (template) {
        return this.http.post(this.TEMPLATE_LIST_URI, template);
    };
    // update_template(template:Template){
    //   console.log(`${this.baseURL}/templates/`+template.id);
    //    // Replace with API Url here
    //    return this.httpClient.put(`${this.baseURL}/templates/`+template.id, template, {observe : 'response'});
    // }  
    TemplateService.prototype.update_template = function (template, uuid) {
        // Replace with API Url here
        return this.http.put(this.TEMPLATE_LIST_URI + "/" + uuid, template);
    };
    TemplateService.prototype.get_companyDetailsByParameterId = function (id) {
        // Replace with API URL to get company details 
        return this.http.get(this.baseURL + 'parameters/' + id + '/companies/').map(function (response) { return response.json(); });
    };
    /**
    * this method for delete existing SheduleImport
    *
    * @param id
    */
    TemplateService.prototype.deleteTemplate = function (id) {
        var url = this.TEMPLATE_LIST_URI + "/" + id;
        return this.http.delete(url).toPromise();
    };
    return TemplateService;
}());
TemplateService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]])
], TemplateService);



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(502);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(74);

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterSet; });
var ParameterSet = (function () {
    function ParameterSet() {
    }
    return ParameterSet;
}());



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Template; });
var Template = (function () {
    function Template() {
    }
    return Template;
}());



/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(553);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InprogressImportsService; });





/**
 *  this class for service implementation of shedule import view/create
 *
 */
var InprogressImportsService = (function () {
    function InprogressImportsService(http) {
        this.http = http;
        this.GET_INPROGRESS_IMPORTS = 'http://cscvappnor088.fsg.amer.csc.com:9000/v1/parameter/mass-maintenance/imports?status=inprogress';
    }
    InprogressImportsService.prototype.getInprogressImports = function () {
        return this.http.get(this.GET_INPROGRESS_IMPORTS).map(function (response) { return response.json()._embedded.importTaskBeanList; });
    };
    /**
     * this method for delete existing SheduleImport
     *
     * @param id
     */
    InprogressImportsService.prototype.deleteInprogressImport = function (id) {
        var url = 'http://cscvappnor088.fsg.amer.csc.com:9000/v1/parameter/mass-maintenance/imports' + "/" + id;
        return this.http.delete(url).toPromise();
    };
    return InprogressImportsService;
}());
InprogressImportsService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
], InprogressImportsService);



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportPcdService; });




var ImportPcdService = (function () {
    function ImportPcdService(http) {
        this.http = http;
        this.BASE_URI = 'http://cscvappnor088.fsg.amer.csc.com:9000/v1/parameter/mass-maintenance/imports';
    }
    /**
     * this mothod for creating the new import
     * @param model
     * @param file
     */
    ImportPcdService.prototype.importSubmit = function (model, file) {
        var url_upload = this.BASE_URI + '?taskName=' + model.name + '&taskType=web';
        var formdata = new FormData();
        formdata.append('file', file);
        formdata.append('name', model.name);
        formdata.append('inputFileName', model.inputFileName);
        // alert(' Form Data : ' + formdata);
        return this.http.post(url_upload, formdata).map(function (response) { return response.json(); });
    };
    /**
     * this mothod for updating the existing import
     * @param id
     * @param model
     * @param file
     */
    ImportPcdService.prototype.reloadSubmit = function (id, file) {
        var formdata = new FormData();
        formdata.append('file', file);
        var url_reload = this.BASE_URI + "/" + id;
        // alert(' Form Data : ' + formdata);
        return this.http.put(url_reload, formdata).map(function (response) { return response.json(); });
    };
    return ImportPcdService;
}());
ImportPcdService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], ImportPcdService);



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__import_pcd_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_xlsx__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ts_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_array__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es7_array__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es7_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es7_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pagination_pagination_component__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportPcdComponent; });



//TOdo import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, NgForm } from '@angular/forms';





var ImportPcdComponent = ImportPcdComponent_1 = (function () {
    /**
     * constructor
     * @param elementRef
     * @param uploadService
     * @param http
     * @param router
     */
    function ImportPcdComponent(uploadService) {
        this.uploadService = uploadService;
        this.classReference = ImportPcdComponent_1;
        this.model = {};
        this.failedItems = [];
        this.successItems = [];
        this.ImportTaskItem = [];
        this.importButtonclk = true;
        this.submitError = false;
        this.reloadSubmitError = false;
    }
    ImportPcdComponent.prototype.ngOnInit = function () {
        ImportPcdComponent_1.importPcdCount = [];
    };
    ImportPcdComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    /**
     * cancel the create import task
     * @param form
     */
    ImportPcdComponent.prototype.cancelImport = function () {
        this.model = {};
        ImportPcdComponent_1.importPcdCount = [];
        alert('Do you want to cancel?');
    };
    /**
     * this method for read uploaded .xls file
     * @param event
     */
    ImportPcdComponent.prototype.importFile = function (event) {
        var arrayBuffer;
        ImportPcdComponent_1.importPcdCount = [];
        this.importButtonclk = undefined;
        this.currentFileUpload = this.selectedFiles.item(0); //Get the files from Upload control
        var reader = new FileReader();
        var name = this.currentFileUpload.name;
        reader.onload = function (e) {
            arrayBuffer = reader.result;
            var data = new Uint8Array(arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i)
                arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = __WEBPACK_IMPORTED_MODULE_4_ts_xlsx__["read"](bstr, { type: 'binary' });
            var sheet_name_list = workbook.SheetNames; // get sheets from file
            sheet_name_list.forEach(function (y) {
                var row;
                var rowNum;
                var colNum;
                var range = __WEBPACK_IMPORTED_MODULE_4_ts_xlsx__["utils"].decode_range(workbook.Sheets[y]['!ref']); // range of rows and columns
                var pcdCount = 0;
                var pcd = {};
                var samePcd = {};
                for (rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
                    row = [];
                    for (colNum = range.s.c; colNum <= range.e.c; colNum++) {
                        var nextCell = workbook.Sheets[y][__WEBPACK_IMPORTED_MODULE_4_ts_xlsx__["utils"].encode_cell({ r: rowNum, c: colNum })];
                        if (typeof nextCell === 'undefined') {
                            row.push(void 0);
                        }
                        else {
                            row.push(nextCell.w);
                        }
                        if (rowNum == 0 && colNum == 0) {
                            var pcdValue = row[0].split("-", 2);
                            pcd.pSetNumber = pcdValue[0];
                            pcd.pSetName = pcdValue[1];
                        }
                    }
                    // parameter set count
                    if (rowNum > 2) {
                        if (row[0] === 'Add' || row[0] === 'Change' || row[0] === 'Delete') {
                            pcdCount++;
                        }
                    }
                    pcd.importCount = pcdCount;
                }
                if (pcd.importCount !== 0) {
                    if (ImportPcdComponent_1.importPcdCount.some(function (p) { return p.pSetNumber == pcdValue[0]; })) {
                        samePcd = ImportPcdComponent_1.importPcdCount.find(function (p) { return p.pSetNumber == pcdValue[0]; });
                        if (samePcd.pSetNumber == pcdValue[0]) {
                            samePcd.importCount += pcdCount;
                        }
                    }
                    else {
                        ImportPcdComponent_1.importPcdCount.push(pcd);
                    }
                }
            });
        };
        if (this.selectedFiles[0]) {
            reader.readAsArrayBuffer(this.selectedFiles[0]);
        }
        this.selectedFiles = undefined;
    };
    /**
     * mothod for create new import task
     */
    ImportPcdComponent.prototype.importSubmit = function () {
        var _this = this;
        this.failedItems = new Array();
        this.successItems = new Array();
        this.importButtonclk = true;
        var status = 'FAILED';
        this.uploadService.importSubmit(this.model, this.currentFileUpload).subscribe(function (response) {
            _this.pcdSavedData = response;
            _this.ImportTaskItem = _this.pcdSavedData.importTaskReviewDetails;
            console.log(' this.pcdSavedData ' + JSON.stringify(_this.pcdSavedData));
            _this.model = {
                name: _this.pcdSavedData.name,
                taskUUID: _this.pcdSavedData.uuid
            };
            console.log(' task Name : ' + JSON.stringify(_this.model));
            for (var _i = 0, _a = _this.ImportTaskItem; _i < _a.length; _i++) {
                var item = _a[_i];
                if (status === (item.status).toUpperCase()) {
                    _this.failedItems.push(item);
                    _this.submitError = false;
                }
                else {
                    _this.successItems.push(item);
                }
            }
        }, function (err) {
            console.log('Upload Error:', err);
        });
    };
    /**
     * mothod for updating the existing import
     */
    ImportPcdComponent.prototype.reloadSubmit = function () {
        var _this = this;
        this.failedItems = new Array();
        this.successItems = new Array();
        this.importButtonclk = true;
        var status = 'FAILED';
        this.uploadService.reloadSubmit(this.model.taskUUID, this.currentFileUpload).subscribe(function (response) {
            _this.pcdSavedData = response;
            _this.ImportTaskItem = _this.pcdSavedData.importTaskReviewDetails;
            console.log(' this.pcdSavedData ' + JSON.stringify(_this.pcdSavedData));
            for (var _i = 0, _a = _this.ImportTaskItem; _i < _a.length; _i++) {
                var item = _a[_i];
                if (status === (item.status).toUpperCase()) {
                    _this.failedItems.push(item);
                    _this.reloadSubmitError = true;
                }
                else {
                    _this.successItems.push(item);
                }
            }
        }, function (err) {
            console.log('Reload Failed:', err);
        });
    };
    // errorHandler(error) {
    //   console.log('error : ' + error);
    //   // this.router.navigate(['/importpcd']);
    //   return this.submitError = " Failed to get imported pcd data"
    // }
    ImportPcdComponent.prototype.getItems = function () {
        return this.paginationComponent.getItems();
    };
    return ImportPcdComponent;
}());
ImportPcdComponent.importPcdCount = [];
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__pagination_pagination_component__["a" /* PaginationComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], ImportPcdComponent.prototype, "paginationComponent", void 0);
ImportPcdComponent = ImportPcdComponent_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-import-pcd',
        template: __webpack_require__(196),
        styles: [__webpack_require__(220)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__import_pcd_service__["a" /* ImportPcdService */]]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__import_pcd_service__["a" /* ImportPcdService */]])
], ImportPcdComponent);

var ImportPcdComponent_1;


/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(128);

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcelStyleSettingsComponent; });


var ExcelStyleSettingsComponent = (function () {
    function ExcelStyleSettingsComponent() {
        this.sizes = [];
        this.fontTypes = ['Arial',
            'Calibri',
            'Cambria',
            'Courier New',
            'Times New Roman'];
        this.styles = ['Bold', 'Normal'];
    }
    ExcelStyleSettingsComponent.prototype.ngOnInit = function () {
        this.sizes = Array(72).fill(0).map(function (x, i) { return i + 1; });
    };
    return ExcelStyleSettingsComponent;
}());
ExcelStyleSettingsComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-excel-style-settings',
        template: __webpack_require__(191),
        styles: [__webpack_require__(215)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [])
], ExcelStyleSettingsComponent);



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__export_pcd_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_reducers_exportPCD_reducer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pagination_pagination_component__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportPcdComponent; });







var ExportPcdComponent = (function () {
    function ExportPcdComponent(http, exportService, store) {
        this.http = http;
        this.exportService = exportService;
        this.store = store;
        this.HTTP_GET_APPLICATION_JSON_FILE = '../../assets/utils/application.json';
        this.HTTP_GET_FOUNDATION_JSON_FILE = '../../assets/utils/foundation.json';
        this.HTTP_GET_CARD_JSON_FILE = '../../assets/utils/card.json';
        this.HTTP_GET_LOAN_JSON_FILE = '../../assets/utils/loan.json';
        this.HTTP_GET_CUSTOMER_JSON_FILE = '../../assets/utils/customer.json';
        this.HTTP_GET_DEPOSITE_JSON_FILE = '../../assets/utils/deposit.json';
        this.exportData = {};
        this.model = {};
        this.singleTab = false;
        this.buttonchecked = false;
        this.exportTable = [];
        this.selectedPsets = new Array();
        this.paramSets = [];
        this.selectedTemplatePset = new Array();
        // this.exportSelection = 0;
    }
    ExportPcdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onLoadDisable();
        this.getApplicationName();
        this.exportTableData = this.store.select('exportPCD');
        console.log(this.exportTableData);
        this.exportTableData.subscribe(function (val) {
            if (!val) {
                return;
            }
            else {
                _this.exportTable = val;
            }
        });
    };
    ExportPcdComponent.prototype.getTemplates = function () {
        var _this = this;
        this.exportService.getTemplates().subscribe(function (response) { return _this.templateList = response; }, function (error) { return _this.errorMessage = error; });
    };
    ExportPcdComponent.prototype.getPsets = function (psets) {
        var _this = this;
        var company;
        var _loop_1 = function (p) {
            this_1.tempPset = {};
            this_1.exportService.getcompanyDetailsByParameterId(p.number).subscribe(function (res) {
                company = res,
                    _this.tempPset = {
                        applicationID: p.applicationID,
                        number: p.number,
                        name: p.name,
                        companies: company,
                        companyID: p.companyID
                    };
                _this.selectedPsets.push(_this.tempPset);
                _this.paginationComponent.exportTableList = _this.selectedPsets;
                _this.paginationComponent.initz();
            });
        };
        var this_1 = this;
        for (var _i = 0, psets_1 = psets; _i < psets_1.length; _i++) {
            var p = psets_1[_i];
            _loop_1(p);
        }
    };
    ExportPcdComponent.prototype.getParameterSet = function (uuid) {
        var _this = this;
        this.selectedPsets = [];
        this.exportService.getParameterSet(uuid).subscribe(function (response) {
            _this.selectedTemplatePset = response, _this.getPsets(_this.selectedTemplatePset);
        });
    };
    ExportPcdComponent.prototype.getCompaniesByParamId = function (paramId) {
        var _this = this;
        this.companies = new Array();
        this.selectId(paramId);
        this.exportService.getcompanyDetailsByParameterId(paramId).subscribe(function (res) {
            _this.companies = res, _this.addExport(1);
        });
    };
    ExportPcdComponent.prototype.getCompaniesByParamName = function (paramName) {
        var _this = this;
        this.companies = new Array();
        this.selectName(paramName);
        this.exportService.getcompanyDetailsByParameterId(this.changedId).subscribe(function (res) {
            _this.companies = res, _this.addExport(2);
        });
    };
    // Reading Application Property File to display values in Application DropDown
    ExportPcdComponent.prototype.getApplicationName = function () {
        var _this = this;
        this.applicationList = [];
        var filePath = this.http.get(this.HTTP_GET_APPLICATION_JSON_FILE).subscribe(function (data) {
            var fileContentJSON = JSON.parse(data['_body']);
            var appli = fileContentJSON.Application;
            if (fileContentJSON) {
                for (var appId in fileContentJSON) {
                    if (appId) {
                        var applicationID = appId;
                        var applicationName = fileContentJSON[appId].name;
                        var applicationDetail = {
                            name: applicationName
                        };
                        _this.applicationList.push(applicationDetail);
                        console.log(_this.applicationList);
                    }
                }
            }
        });
    };
    // Based on Application Name Reading Corresponding PCD Property file
    ExportPcdComponent.prototype.appNameChange = function (applicationName) {
        if (this.application === undefined) {
            var paramDrpDwn = document.getElementById('parameterNumDrpdwn');
            var paramSetDrpDwn = document.getElementById('parameterNameDrpdwn');
            paramDrpDwn.disabled = false;
            paramSetDrpDwn.disabled = false;
        }
        if (applicationName === 'Foundation') {
            this.exportData.number = undefined;
            this.exportData.name = undefined;
            this.parameterSetList = null;
            this.getJSONData(applicationName, this.HTTP_GET_FOUNDATION_JSON_FILE);
        }
        else if (applicationName === 'Card') {
            this.parameterSetList = null;
            this.getJSONData(applicationName, this.HTTP_GET_CARD_JSON_FILE);
        }
        else if (applicationName === 'Loan') {
            this.parameterSetList = null;
            this.getJSONData(applicationName, this.HTTP_GET_LOAN_JSON_FILE);
        }
        else if (applicationName === 'Customer') {
            this.parameterSetList = null;
            this.getJSONData(applicationName, this.HTTP_GET_CUSTOMER_JSON_FILE);
        }
        else if (applicationName === 'Deposit') {
            this.exportData.number = undefined;
            this.exportData.name = undefined;
            this.parameterSetList = null;
            this.getJSONData(applicationName, this.HTTP_GET_DEPOSITE_JSON_FILE);
        }
    };
    // Reading JSON Property Files(PCD) to display Values in Parameter Name and Number dropdown
    ExportPcdComponent.prototype.getJSONData = function (name, url) {
        var _this = this;
        var filePath = this.http.get(url).subscribe(function (data) {
            _this.parameterSetList = [];
            var fileContentJSON = JSON.parse(data['_body']);
            if (fileContentJSON) {
                var owner = fileContentJSON.owner;
                _this.paramSet = fileContentJSON.ParamSet;
                _this.parameterSetList = _this.paramSet;
            }
        });
    };
    //Based on Parameter Number, Parameter Name Change
    ExportPcdComponent.prototype.selectId = function (selectedId) {
        for (var ind in this.paramSet) {
            if (this.paramSet[ind].id == selectedId) {
                this.selectedName = this.paramSet[ind].name;
                return this.selectedName;
            }
        }
    };
    //Based on Parameter Name, Parameter Number Change
    ExportPcdComponent.prototype.selectName = function (name) {
        for (var ind in this.paramSet) {
            if (name === this.paramSet[ind].name) {
                this.changedId = this.paramSet[ind].id;
                return this.changedId;
            }
        }
    };
    //Based on Radio Button Selection DropDown Enable Disbale Condition 
    ExportPcdComponent.prototype.enableDisbale = function (radioButton) {
        this.selectedPsets = [];
        this.paginationComponent.exportTableList = this.selectedPsets;
        this.paginationComponent.initz();
        var exportSelect = document.getElementById('existingDrpdwn');
        var appDrpDwn = document.getElementById('applicationDrpdwn');
        var paramDrpDwn = document.getElementById('parameterNumDrpdwn');
        var paramSetDrpDwn = document.getElementById('parameterNameDrpdwn');
        if (radioButton === 1) {
            exportSelect.disabled = true;
            appDrpDwn.disabled = false;
            paramDrpDwn.disabled = true;
            paramSetDrpDwn.disabled = true;
            if (this.application === undefined) {
                paramDrpDwn.disabled = true;
                paramSetDrpDwn.disabled = true;
            }
            else {
                paramDrpDwn.disabled = false;
                paramSetDrpDwn.disabled = false;
            }
        }
        else if (radioButton === 2) {
            appDrpDwn.disabled = true;
            paramDrpDwn.disabled = true;
            paramSetDrpDwn.disabled = true;
            exportSelect.disabled = false;
            this.exportData.application = null;
            this.exportData.number = null;
            this.exportData.name = null;
        }
    };
    //Based on Radio Button Selection DropDown Enable Disbale Condition 
    ExportPcdComponent.prototype.onLoadDisable = function () {
        var exportSelect = document.getElementById('existingDrpdwn');
        var appDrpDwn = document.getElementById('applicationDrpdwn');
        var paramDrpDwn = document.getElementById('parameterNumDrpdwn');
        var paramSetDrpDwn = document.getElementById('parameterNameDrpdwn');
        exportSelect.disabled = true;
        appDrpDwn.disabled = true;
        paramDrpDwn.disabled = true;
        paramSetDrpDwn.disabled = true;
    };
    // Based on Application, Parameter Set dropdown change Values Push into Table
    ExportPcdComponent.prototype.addExport = function (data) {
        if ((this.exportData.application != undefined) && (this.exportData.number != undefined || this.exportData.name != undefined)) {
            if (data == 0) {
                this.exportData.application = this.appNameChange(this.exportData.application);
            }
            else if (data == 1) {
                this.exportData.name = this.selectId(this.exportData.number);
            }
            else if (data == 2) {
                this.exportData.number = this.selectName(this.exportData.name);
            }
            // this.getCompaniesByParamId(this.exportData.number);
            var exportDatas = {
                applicationID: this.exportData.application,
                number: this.exportData.number,
                name: this.exportData.name,
                companies: this.companies
            };
            this.selectedPsets.push(exportDatas);
            console.log(' selected psets: ' + this.selectedPsets);
            this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__store_reducers_exportPCD_reducer__["b" /* ADD_EXPORTDATA */], payload: this.exportTable });
        }
        this.paginationComponent.page();
    };
    // Delete Particular Row In Table
    ExportPcdComponent.prototype.deleteFieldValue = function (index) {
        console.log('pageNumber: ' + this.paginationComponent.pageNumber);
        // console.log('index : '+ index * );
        this.selectedPsets.splice(index, 1);
        this.paginationComponent.page();
    };
    // SelectAll  Checkbox Table Header
    ExportPcdComponent.prototype.selectAll = function () {
        this.pSets = new Array();
        for (var i = 0; i < this.selectedPsets.length; i++) {
            this.selectedPsets[i].selected = this.selectedAll;
            this.pSet = {
                'applicationID': this.selectedPsets[i].applicationID,
                'number': this.selectedPsets[i].number,
                'name': this.selectedPsets[i].name,
                'companyID': this.selectedPsets[i].companyID,
                'effectiveDate': this.selectedPsets[i].effectiveDate
            };
            console.log(' selected all: ' + JSON.stringify(this.pSet));
            this.pSets.push(this.pSet);
        }
    };
    // Select Particular Checkbox, Inside Table
    ExportPcdComponent.prototype.checkIfAllSelected = function (i) {
        this.pSets = new Array();
        this.selectedAll = this.selectedPsets.every(function (item) {
            return item.selected == true;
        });
        for (var _i = 0, _a = this.selectedPsets; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.selected) {
                this.pSet = {
                    'applicationID': item.applicationID,
                    'number': item.number,
                    'name': item.name,
                    'companyID': item.companyID,
                    'effectiveDate': item.effectiveDate
                };
                this.pSets.push(this.pSet);
                console.log(' selected pSets : ' + JSON.stringify(this.pSets));
            }
        }
    };
    // Export Button Click
    ExportPcdComponent.prototype.exportExcelData = function (formData) {
        var _this = this;
        this.combineExcelTab = {
            "singleTab": formData.singleTab,
            "psets": this.pSets
        };
        this.exportService.exportData(JSON.stringify(this.combineExcelTab)).subscribe(function (res) { return res; }, function (error) { return _this.errorMessage = error; });
    };
    ExportPcdComponent.prototype.getItems = function () {
        return this.paginationComponent.getItems();
    };
    // selectedCompanyDp(company): any{
    //   this.companyId = company.id;
    // }
    ExportPcdComponent.prototype.editParamSet = function (i) {
        this.editRowId = i;
    };
    return ExportPcdComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__pagination_pagination_component__["a" /* PaginationComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], ExportPcdComponent.prototype, "paginationComponent", void 0);
ExportPcdComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-export-pcd',
        template: __webpack_require__(192),
        styles: [__webpack_require__(216)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1__export_pcd_service__["a" /* ExportPcdService */],
        __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */]])
], ExportPcdComponent);



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportPcdService; });





var ExportPcdService = (function () {
    function ExportPcdService(http) {
        this.http = http;
        this.baseURL = 'http://cscvappnor088.fsg.amer.csc.com:9000/v1/parameter/mass-maintenance/';
        this.POST_EXPORT_PCD = ' http://cscvappnor088.fsg.amer.csc.com:9000/v1/parameter/mass-maintenance/exports';
        this.GET_TEMPLATES = 'http://cscvappnor088.fsg.amer.csc.com:9000/v1/parameter/mass-maintenance/templates';
    }
    ExportPcdService.prototype.getTemplates = function () {
        console.log('getTemplates() Service..!');
        return this.http.get(this.GET_TEMPLATES).map(function (response) { return response.json()._embedded.templateBeanList; });
    };
    ExportPcdService.prototype.getParameterSet = function (id) {
        var url = this.GET_TEMPLATES + "/" + id;
        return this.http.get(url).map(function (response) { return response.json().psets; });
    };
    ExportPcdService.prototype.exportData = function (paramSets) {
        var url = this.POST_EXPORT_PCD;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, paramSets, { headers: headers, responseType: __WEBPACK_IMPORTED_MODULE_2__angular_http__["ResponseContentType"].Blob }).map(this.extractData).catch(this.handleError);
    };
    ExportPcdService.prototype.getcompanyDetailsByParameterId = function (id) {
        return this.http.get(this.baseURL + 'parameters/' + id + '/companies').map(function (response) { return response.json(); });
    };
    ExportPcdService.prototype.extractData = function (res) {
        console.log(' response : ' + res);
        __WEBPACK_IMPORTED_MODULE_4_file_saver__["saveAs"](new Blob([res.blob()], { type: 'application/vnd.ms-excel' }), "download.xls");
    };
    ExportPcdService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(errMsg);
    };
    return ExportPcdService;
}());
ExportPcdService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], ExportPcdService);



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__import_completed_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pagination_pagination_component__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportCompletedComponent; });






var ImportCompletedComponent = (function () {
    function ImportCompletedComponent(route, http, service, router) {
        this.route = route;
        this.http = http;
        this.service = service;
        this.router = router;
        this.uuid = "";
        this.model = {};
        this.completedImports = [];
        this.failedItems = [];
        this.successItems = [];
        this.ImportTaskItem = [];
        this.importButtonclk = true;
        this.submitError = false;
        this.reloadSubmitError = false;
        this.BASE_URI = 'http://cscvappnor088.fsg.amer.csc.com:9000/v1/parameter/mass-maintenance/imports';
    }
    ImportCompletedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCompletedImports().subscribe(function (response) { return _this.completedImports = response; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * delete import task by id
     * @param id
     */
    ImportCompletedComponent.prototype.deleteCompltedImport = function (id) {
        var _this = this;
        if (confirm(' Are you sure, you want to Delete?')) {
            this.service.deleteCompletedImport(id).then(function () {
                _this.service.getCompletedImports().subscribe(function (response) { return _this.completedImports = response; }, function (error) { return _this.errorMessage = error; });
            });
        }
        else {
            this.router.navigate(['/scheduleImport']);
        }
    };
    /**
     * get selected import from listing screen
     * @param item
     */
    ImportCompletedComponent.prototype.onSelectionChange = function (item) {
        this.selectedImport = item;
        this.uuid = this.selectedImport.uuid;
        console.log('selected import' + this.selectedImport);
    };
    /**
     * get all completed import details by id
     */
    ImportCompletedComponent.prototype.getCompletedImportDetails = function (id) {
        var _this = this;
        this.onClickContinueBtn = true;
        // this.route.params.subscribe(params => {
        //   this.id = params['id'];
        // });
        this.successItems = new Array();
        this.getCompletedImportById(id).subscribe(function (response) {
            _this.pcdSavedData = response;
            _this.ImportTaskItem = _this.pcdSavedData.importTaskReviewDetails;
            console.log(' this.pcdSavedData ' + JSON.stringify(_this.pcdSavedData));
            _this.taskName = _this.pcdSavedData.name;
            for (var _i = 0, _a = _this.ImportTaskItem; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.successItems.push(item);
            }
        }, function (err) {
            console.log('Reload Failed:', err);
        });
    };
    /**
     * get existing import task by id
     * @param id
     */
    ImportCompletedComponent.prototype.getCompletedImportById = function (id) {
        var url_reload = this.BASE_URI + "/" + id;
        return this.http.get(url_reload).map(function (response) { return response.json(); });
    };
    ImportCompletedComponent.prototype.onClickBack = function () {
        this.onClickContinueBtn = false;
        this.router.navigate(['/importcompleted']);
    };
    ImportCompletedComponent.prototype.getItems = function () {
        return this.paginationComponent.getItems();
    };
    return ImportCompletedComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__pagination_pagination_component__["a" /* PaginationComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], ImportCompletedComponent.prototype, "paginationComponent", void 0);
ImportCompletedComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-import-completed',
        template: __webpack_require__(193),
        styles: [__webpack_require__(217)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__import_completed_service__["a" /* CompletedImportsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
], ImportCompletedComponent);



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedImportsService; });





/**
 *  this class for service implementation of shedule import view/create
 *
 */
var CompletedImportsService = (function () {
    function CompletedImportsService(http) {
        this.http = http;
        this.GET_COMPLETED_IMPORTS = 'http://cscvappnor088.fsg.amer.csc.com:9000/v1/parameter/mass-maintenance/imports?status=complete';
        this.GET_DELETED_IMPORTS = 'http://cscvappnor088.fsg.amer.csc.com:9000/v1/parameter/mass-maintenance/imports';
    }
    CompletedImportsService.prototype.getCompletedImports = function () {
        return this.http.get(this.GET_COMPLETED_IMPORTS).map(function (response) { return response.json()._embedded.importTaskBeanList; });
    };
    /**
     * this method for delete existing SheduleImport
     *
     * @param id
     */
    CompletedImportsService.prototype.deleteCompletedImport = function (id) {
        var url = this.GET_DELETED_IMPORTS + "/" + id;
        return this.http.delete(url).toPromise();
    };
    return CompletedImportsService;
}());
CompletedImportsService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
], CompletedImportsService);



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__import_inprogress_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagination_pagination_component__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportInprogressListComponent; });





var ImportInprogressListComponent = (function () {
    function ImportInprogressListComponent(service, router) {
        this.service = service;
        this.router = router;
        this.InprogressImports = [];
        this.selectedImport = {};
        this.uuid = "";
        this.pageList = [];
    }
    ImportInprogressListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getInprogressImports().subscribe(function (response) {
            _this.InprogressImports = response,
                _this.paginationComponent.exportTableList = _this.InprogressImports;
            _this.paginationComponent.initz();
        });
    };
    ImportInprogressListComponent.prototype.deleteInprogressImport = function (id) {
        var _this = this;
        if (confirm(' Are you sure, you want to Delete?')) {
            this.service.deleteInprogressImport(id).then(function () {
                _this.service.getInprogressImports().subscribe(function (response) { return _this.InprogressImports = response; }, function (error) { return _this.errorMessage = error; });
            });
        }
        else {
            this.router.navigate(['/scheduleImport']);
        }
    };
    ImportInprogressListComponent.prototype.onSelectionChange = function (item) {
        this.selectedImport = item;
        this.uuid = this.selectedImport.uuid;
        console.log('selected import' + this.selectedImport);
    };
    ImportInprogressListComponent.prototype.getItems = function () {
        return this.paginationComponent.getItems();
    };
    return ImportInprogressListComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__pagination_pagination_component__["a" /* PaginationComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], ImportInprogressListComponent.prototype, "paginationComponent", void 0);
ImportInprogressListComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-import-inprogress-list',
        template: __webpack_require__(194),
        styles: [__webpack_require__(218)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__import_inprogress_service__["a" /* InprogressImportsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
], ImportInprogressListComponent);



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__import_inprogress_list_import_inprogress_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__import_pcd_import_pcd_component__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__import_pcd_import_pcd_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pagination_pagination_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ts_xlsx__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ts_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ts_xlsx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportInprogressComponent; });









var ImportInprogressComponent = (function () {
    function ImportInprogressComponent(http, service, router, route, uploadService) {
        this.http = http;
        this.service = service;
        this.router = router;
        this.route = route;
        this.uploadService = uploadService;
        this.InprogressImports = [];
        this.classReference = __WEBPACK_IMPORTED_MODULE_5__import_pcd_import_pcd_component__["a" /* ImportPcdComponent */];
        this.model = {};
        this.failedItems = [];
        this.successItems = [];
        this.ImportTaskItem = [];
        this.importButtonclk = true;
        this.submitError = false;
        this.reloadSubmitError = false;
        this.BASE_URI = 'http://cscvappnor088.fsg.amer.csc.com:9000/v1/parameter/mass-maintenance/imports';
    }
    ImportInprogressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.failedItems = new Array();
        this.successItems = new Array();
        this.importButtonclk = true;
        var status = 'FAILED';
        this.getInprogressImportById(this.id).subscribe(function (response) {
            _this.pcdSavedData = response;
            _this.ImportTaskItem = _this.pcdSavedData.importTaskReviewDetails;
            console.log(' this.pcdSavedData ' + JSON.stringify(_this.pcdSavedData));
            _this.taskName = _this.pcdSavedData.name;
            _this.importId = _this.pcdSavedData.uuid;
            for (var _i = 0, _a = _this.ImportTaskItem; _i < _a.length; _i++) {
                var item = _a[_i];
                if (status === (item.status).toUpperCase()) {
                    _this.failedItems.push(item);
                    _this.reloadSubmitError = true;
                }
                else {
                    _this.successItems.push(item);
                }
            }
        }, function (err) {
            console.log('Reload Failed:', err);
        });
    };
    ImportInprogressComponent.prototype.getInprogressImportById = function (id) {
        var url_reload = this.BASE_URI + "/" + id;
        return this.http.get(url_reload).map(function (response) { return response.json(); });
    };
    ImportInprogressComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    /**
     * this method for read uploaded .xls file
     * @param event
     */
    ImportInprogressComponent.prototype.importFile = function (event) {
        var arrayBuffer;
        __WEBPACK_IMPORTED_MODULE_5__import_pcd_import_pcd_component__["a" /* ImportPcdComponent */].importPcdCount = [];
        this.importButtonclk = undefined;
        this.currentFileUpload = this.selectedFiles.item(0); //Get the files from Upload control
        var reader = new FileReader();
        var name = this.currentFileUpload.name;
        reader.onload = function (e) {
            arrayBuffer = reader.result;
            var data = new Uint8Array(arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i)
                arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = __WEBPACK_IMPORTED_MODULE_8_ts_xlsx__["read"](bstr, { type: 'binary' });
            var sheet_name_list = workbook.SheetNames; // get sheets from file
            sheet_name_list.forEach(function (y) {
                var row;
                var rowNum;
                var colNum;
                var range = __WEBPACK_IMPORTED_MODULE_8_ts_xlsx__["utils"].decode_range(workbook.Sheets[y]['!ref']); // range of rows and columns
                var pcdCount = 0;
                var pcd = {};
                var samePcd = {};
                for (rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
                    row = [];
                    for (colNum = range.s.c; colNum <= range.e.c; colNum++) {
                        var nextCell = workbook.Sheets[y][__WEBPACK_IMPORTED_MODULE_8_ts_xlsx__["utils"].encode_cell({ r: rowNum, c: colNum })];
                        if (typeof nextCell === 'undefined') {
                            row.push(void 0);
                        }
                        else {
                            row.push(nextCell.w);
                        }
                        if (rowNum == 0 && colNum == 0) {
                            var pcdValue = row[0].split("-", 2);
                            pcd.pSetNumber = pcdValue[0];
                            pcd.pSetName = pcdValue[1];
                        }
                    }
                    // parameter set count
                    if (rowNum > 2) {
                        if (row[0] === 'Add' || row[0] === 'Change' || row[0] === 'Delete') {
                            pcdCount++;
                        }
                    }
                    pcd.importCount = pcdCount;
                }
                if (pcd.importCount !== 0) {
                    if (__WEBPACK_IMPORTED_MODULE_5__import_pcd_import_pcd_component__["a" /* ImportPcdComponent */].importPcdCount.some(function (p) { return p.pSetNumber == pcdValue[0]; })) {
                        samePcd = __WEBPACK_IMPORTED_MODULE_5__import_pcd_import_pcd_component__["a" /* ImportPcdComponent */].importPcdCount.find(function (p) { return p.pSetNumber == pcdValue[0]; });
                        if (samePcd.pSetNumber == pcdValue[0]) {
                            samePcd.importCount += pcdCount;
                        }
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_5__import_pcd_import_pcd_component__["a" /* ImportPcdComponent */].importPcdCount.push(pcd);
                    }
                }
            });
        };
        if (this.selectedFiles[0]) {
            reader.readAsArrayBuffer(this.selectedFiles[0]);
        }
        this.selectedFiles = undefined;
    };
    /**
     * mothod for updating the existing import
     */
    ImportInprogressComponent.prototype.reloadSubmit = function () {
        var _this = this;
        this.failedItems = new Array();
        this.successItems = new Array();
        this.importButtonclk = true;
        var status = 'FAILED';
        console.log('');
        this.uploadService.reloadSubmit(this.importId, this.currentFileUpload).subscribe(function (response) {
            _this.pcdSavedData = response;
            _this.ImportTaskItem = _this.pcdSavedData.importTaskReviewDetails;
            console.log(' this.pcdSavedData ' + JSON.stringify(_this.pcdSavedData));
            for (var _i = 0, _a = _this.ImportTaskItem; _i < _a.length; _i++) {
                var item = _a[_i];
                if (status === (item.status).toUpperCase()) {
                    _this.failedItems.push(item);
                    _this.reloadSubmitError = true;
                }
                else {
                    _this.successItems.push(item);
                }
            }
        }, function (err) {
            console.log('Reload Failed:', err);
        });
    };
    ImportInprogressComponent.prototype.getItems = function () {
        return this.paginationComponent.getItems();
    };
    return ImportInprogressComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__import_pcd_import_pcd_component__["a" /* ImportPcdComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", __WEBPACK_IMPORTED_MODULE_5__import_pcd_import_pcd_component__["a" /* ImportPcdComponent */])
], ImportInprogressComponent.prototype, "importpcdComponent", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__pagination_pagination_component__["a" /* PaginationComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], ImportInprogressComponent.prototype, "paginationComponent", void 0);
ImportInprogressComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-import-inprogress',
        template: __webpack_require__(195),
        styles: [__webpack_require__(219)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__import_inprogress_list_import_inprogress_service__["a" /* InprogressImportsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_6__import_pcd_import_pcd_service__["a" /* ImportPcdService */]])
], ImportInprogressComponent);



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduled_exports_schedule_export_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pagination_pagination_component__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleExportCopyComponent; });






var ScheduleExportCopyComponent = (function () {
    /**
     * injecting the schedule service
     */
    function ScheduleExportCopyComponent(service, router, route, http) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.http = http;
        this.scheduleExports = [];
        this.data = {};
        this.freq = [];
        this.day = [];
        this.errors = ' Failed to retrive Data... ';
        this.loading = false;
        this.currTemplate = {};
        this.freq = this.service.freq;
    }
    ScheduleExportCopyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.service.getScheduledExports().subscribe(function (res) {
            _this.scheduleExports = res;
            for (var _i = 0, _a = _this.scheduleExports; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry.uuid === _this.id) {
                    _this.getDayToExport(entry.frequency);
                    var sts = entry.status;
                    if (sts.toUpperCase() === 'ACTIVE') {
                        _this.status = true;
                    }
                    else {
                        _this.status = false;
                    }
                    _this.data = entry;
                    _this.service.getTemplates().subscribe(function (res) {
                        _this.templateList = res;
                        for (var _i = 0, _a = _this.templateList; _i < _a.length; _i++) {
                            var entry_1 = _a[_i];
                            if (entry_1.uuid === _this.data.templateUUID) {
                                _this.savedTemplate = entry_1;
                                _this.service.getParameterSet(entry_1.uuid).subscribe(function (res) {
                                    _this.parameterSet = res;
                                    // this.paginationComponent.exportTableList = this.parameterSet;
                                    // this.paginationComponent.initz(); 
                                });
                                break;
                            }
                        }
                    });
                    break;
                }
            }
        }, function (error) {
            _this.errors = error;
        }, function () {
            // No errors, route to new page
        });
    };
    /**
     * get existing templates
     */
    ScheduleExportCopyComponent.prototype.getTemplates = function () {
        var _this = this;
        this.service.getTemplates().subscribe(function (response) { return _this.templateList = response; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * get Parameter set from template
     * @param template
     */
    ScheduleExportCopyComponent.prototype.getParameterSet = function (template) {
        this.currTemplate = template;
        this.getCurrentTemplate(this.currTemplate.uuid);
        this.parameterSet = this.currTemplate.psets;
    };
    /**
     * get template by id
     * @param templateUUID
     */
    ScheduleExportCopyComponent.prototype.getCurrentTemplate = function (templateUUID) {
        var _this = this;
        console.log('templateUUID : ' + templateUUID);
        this.service.getParameterSet(templateUUID).subscribe(function (response) { return _this.parameterSet = response; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * create new schedule export
     * @param updatedFormData
     */
    ScheduleExportCopyComponent.prototype.createNewExport = function (updatedFormData) {
        var _this = this;
        this.model = {
            'name': updatedFormData.taskName,
            'templateUUID': updatedFormData.currTemplate.uuid,
            'effectiveDate': updatedFormData.startDate,
            'type': 'Export',
            'frequency': updatedFormData.frequency,
            'freqPattern': updatedFormData.dayToExport,
            'filePath': updatedFormData.fileLocation,
            'remarks': updatedFormData.remarks,
            'singleTab': updatedFormData.multipleExport,
            'createdBy': '',
            'status': this.acticateSchedule(updatedFormData.status)
        };
        this.service.createSheduleExport(this.model).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/scheduleExport']);
        }, function (err) {
            console.log(' Create SheduleImport Error:', err);
        });
    };
    /**
     * @param status
     */
    ScheduleExportCopyComponent.prototype.acticateSchedule = function (status) {
        if (status) {
            return 'Active';
        }
        else {
            return 'InActive';
        }
    };
    /**
     * cancel the new schedule export creation
     */
    ScheduleExportCopyComponent.prototype.cancelCopyExport = function () {
        if (confirm(' Are you sure, you to Cancel? ')) {
            this.router.navigate(['/scheduleExport']);
        }
        else {
            this.router.navigate(['/scheduleExport/copy']);
        }
    };
    /**
     * @param selectedFrequency
     */
    ScheduleExportCopyComponent.prototype.getDayToExport = function (selectedFrequency) {
        this.service.onSelect(selectedFrequency);
        this.day = this.service.day;
    };
    ScheduleExportCopyComponent.prototype.getItems = function () {
        return this.paginationComponent.getItems();
    };
    return ScheduleExportCopyComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__pagination_pagination_component__["a" /* PaginationComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], ScheduleExportCopyComponent.prototype, "paginationComponent", void 0);
ScheduleExportCopyComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-schedule-export-copy',
        template: __webpack_require__(198),
        styles: [__webpack_require__(222)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__scheduled_exports_schedule_export_service__["a" /* ScheduleExportService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]])
], ScheduleExportCopyComponent);



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduled_exports_schedule_export_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagination_pagination_component__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleExportCreateComponent; });





var ScheduleExportCreateComponent = (function () {
    /**
     *  injecting shedule import service
     */
    function ScheduleExportCreateComponent(router, service) {
        this.router = router;
        this.service = service;
        this.model = {};
        this.loading = false;
        this.freq = [];
        this.day = [];
        this.items = {};
        this.selectedPsets = new Array();
        this.data = [];
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'yyyy-mm-dd',
        };
        this.freq = this.service.freq;
    }
    /**
     *  this method for creating new shedule Export
     * @param newSheduleExport
     */
    ScheduleExportCreateComponent.prototype.createScheduleExport = function (newSheduleExport) {
        var _this = this;
        this.model = {
            'name': newSheduleExport.taskName,
            'templateUUID': newSheduleExport.template.uuid,
            'type': 'Export',
            'effectiveDate': newSheduleExport.startDate.formatted,
            'frequency': newSheduleExport.frequency,
            'freqPattern': newSheduleExport.dayToExport,
            'filePath': newSheduleExport.fileLocation,
            'remarks': newSheduleExport.remarks,
            'singleTab': newSheduleExport.multipleExport,
            'createdBy': '',
            'status': this.status(newSheduleExport.status)
        };
        this.loading = true;
        this.service.createSheduleExport(this.model).subscribe(function (data) {
            _this.router.navigate(['/scheduleExport']);
        }, function (err) {
            console.log(' Create SheduleImport Error:', err);
        });
    };
    /**
     * @param status
     */
    ScheduleExportCreateComponent.prototype.status = function (status) {
        if (status) {
            return 'Active';
        }
        else {
            return 'InActive';
        }
    };
    ScheduleExportCreateComponent.prototype.ngOnInit = function () {
        this.activateShedule = true;
        this.getTemplates();
    };
    /**
     * this method for cancel the schedule create
     */
    ScheduleExportCreateComponent.prototype.cancelExport = function () {
        if (confirm(' Are you sure, you want to Cancel? ')) {
            this.router.navigate(['/scheduleExport']);
        }
        else {
            this.router.navigate(['/scheduleExport/create']);
        }
    };
    /**
     * get existing templates
     */
    ScheduleExportCreateComponent.prototype.getTemplates = function () {
        var _this = this;
        this.service.getTemplates().subscribe(function (response) {
            _this.templateList = response,
                function (error) { return _this.errorMessage = error; };
        });
        console.log('this.templateList ' + this.templateList);
    };
    /**
     * get parameter Sets
     * @param template
     */
    ScheduleExportCreateComponent.prototype.getParameterSet = function (template) {
        var _this = this;
        this.currTemplate = template;
        this.service.getParameterSet(this.currTemplate.uuid).subscribe(function (response) {
            _this.selectedPsets = response,
                _this.paginationComponent.exportTableList = _this.selectedPsets;
            _this.paginationComponent.initz();
        });
    };
    /**
     * @param selectedFrequency
     */
    ScheduleExportCreateComponent.prototype.getDayToImport = function (selectedFrequency) {
        this.service.onSelect(selectedFrequency);
        this.day = this.service.day;
    };
    ScheduleExportCreateComponent.prototype.getItems = function () {
        return this.paginationComponent.getItems();
    };
    return ScheduleExportCreateComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__pagination_pagination_component__["a" /* PaginationComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], ScheduleExportCreateComponent.prototype, "paginationComponent", void 0);
ScheduleExportCreateComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-schedule-export-create',
        template: __webpack_require__(199),
        styles: [__webpack_require__(223)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__scheduled_exports_schedule_export_service__["a" /* ScheduleExportService */]])
], ScheduleExportCreateComponent);



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduled_exports_schedule_export_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pagination_pagination_component__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleExportEditComponent; });






var ScheduleExportEditComponent = (function () {
    function ScheduleExportEditComponent(service, router, route, http) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.http = http;
        this.scheduleExports = [];
        this.data = {};
        this.freq = [];
        this.day = [];
        this.errors = ' Failed to retrive Data... ';
        this.loading = false;
        this.freq = this.service.freq;
    }
    ScheduleExportEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.service.getScheduledExports().subscribe(function (res) {
            _this.scheduleExports = res;
            for (var _i = 0, _a = _this.scheduleExports; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry.uuid === _this.id) {
                    _this.getDayToExport(entry.frequency);
                    var sts = entry.status;
                    if (sts.toUpperCase() === 'ACTIVE') {
                        _this.status = true;
                    }
                    else {
                        _this.status = false;
                    }
                    _this.data = entry;
                    _this.service.getTemplates().subscribe(function (res) {
                        _this.templateList = res;
                        for (var _i = 0, _a = _this.templateList; _i < _a.length; _i++) {
                            var entry_1 = _a[_i];
                            if (entry_1.uuid === _this.data.templateUUID) {
                                _this.savedTemplate = entry_1;
                                _this.service.getParameterSet(entry_1.uuid).subscribe(function (res) {
                                    _this.parameterSet = res;
                                    // this.paginationComponent.exportTableList = this.parameterSet;
                                    // this.paginationComponent.initz();
                                });
                                break;
                            }
                        }
                    });
                    break;
                }
            }
        }, function (error) {
            _this.errors = error;
        });
    };
    /**
     * this method for getting existing templates
     */
    ScheduleExportEditComponent.prototype.getTemplates = function () {
        var _this = this;
        this.service.getTemplates().subscribe(function (response) { return _this.templateList = response; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * @param template
     */
    ScheduleExportEditComponent.prototype.getParameterSet = function (template) {
        this.currTemplate = template;
        this.getCurrentTemplate(this.currTemplate.uuid);
    };
    /**
     * @param templateUUID
     */
    ScheduleExportEditComponent.prototype.getCurrentTemplate = function (templateUUID) {
        var _this = this;
        this.service.getParameterSet(templateUUID).subscribe(function (response) { return _this.parameterSet = response; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * this method for edit the scheduled export
     * @param updatedFormData
     */
    ScheduleExportEditComponent.prototype.updateExport = function (updatedFormData) {
        var _this = this;
        this.model = {
            'name': updatedFormData.taskName,
            'templateUUID': updatedFormData.currTemplate.uuid,
            'type': 'Export',
            'effectiveDate': updatedFormData.startDate,
            'frequency': updatedFormData.frequency,
            'freqPattern': updatedFormData.dayToExport,
            'filePath': updatedFormData.fileLocation,
            'remarks': updatedFormData.remarks,
            'singleTab': updatedFormData.multipleExport,
            'modifiedBy': '',
            'status': this.activateShedule(updatedFormData.status)
        };
        console.log('model : ' + JSON.stringify(this.model));
        this.service.updateScheduleExport(this.model, this.id).then(function () {
            // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
            _this.router.navigate(['/scheduleExport']);
        });
    };
    /**
     * this method for cancel the schedule
     */
    ScheduleExportEditComponent.prototype.cancelEditExport = function () {
        if (confirm(' Are you sure, you to Cancel? ')) {
            this.router.navigate(['/scheduleExport']);
        }
        else {
            this.router.navigate(['/scheduleExport/edit']);
        }
    };
    /**
     * @param selectedFrequency
     */
    ScheduleExportEditComponent.prototype.getDayToExport = function (selectedFrequency) {
        this.service.onSelect(selectedFrequency);
        this.day = this.service.day;
    };
    /**
     * @param statusOnChange
     */
    ScheduleExportEditComponent.prototype.activateShedule = function (statusOnChange) {
        if (statusOnChange) {
            return 'Active';
        }
        else {
            return 'InActive';
        }
    };
    ScheduleExportEditComponent.prototype.getItems = function () {
        return this.paginationComponent.getItems();
    };
    return ScheduleExportEditComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__pagination_pagination_component__["a" /* PaginationComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], ScheduleExportEditComponent.prototype, "paginationComponent", void 0);
ScheduleExportEditComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-schedule-export-edit',
        template: __webpack_require__(200),
        styles: [__webpack_require__(224)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__scheduled_exports_schedule_export_service__["a" /* ScheduleExportService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]])
], ScheduleExportEditComponent);



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduled_exports_schedule_export_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagination_pagination_component__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleExportViewComponent; });





var ScheduleExportViewComponent = (function () {
    /**
     *  constructor
     * @param service
     * @param router
     * @param route
     * @param http
     */
    function ScheduleExportViewComponent(service, route) {
        this.service = service;
        this.route = route;
        this.scheduleExports = [];
        this.data = {};
        this.freq = [];
        this.day = [];
        this.errors = ' Failed to retrive Data... ';
        this.loading = false;
        this.currTemplate = {};
        this.freq = this.service.freq;
    }
    ScheduleExportViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.service.getScheduledExports().subscribe(function (res) {
            _this.scheduleExports = res;
            for (var _i = 0, _a = _this.scheduleExports; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry.uuid === _this.id) {
                    _this.getDayToExport(entry.frequency);
                    var sts = entry.status;
                    if (sts.toUpperCase() === 'ACTIVE') {
                        _this.status = true;
                    }
                    else {
                        _this.status = false;
                    }
                    _this.data = entry;
                    console.log('data: ' + JSON.stringify(_this.data));
                    _this.service.getTemplates().subscribe(function (res) {
                        _this.templateList = res;
                        for (var _i = 0, _a = _this.templateList; _i < _a.length; _i++) {
                            var entry_1 = _a[_i];
                            if (entry_1.uuid === _this.data.templateUUID) {
                                _this.savedTemplate = entry_1;
                                _this.service.getParameterSet(entry_1.uuid).subscribe(function (res) {
                                    _this.parameterSet = res;
                                    _this.paginationComponent.exportTableList = _this.parameterSet;
                                    _this.paginationComponent.initz();
                                });
                                break;
                            }
                        }
                    });
                    break;
                }
            }
        }, function (error) {
            _this.errors = error;
        }, function () {
            // No errors, route to new page
        });
    };
    /**
     * get template list
     */
    ScheduleExportViewComponent.prototype.getTemplates = function () {
        var _this = this;
        this.service.getTemplates().subscribe(function (response) { return _this.templateList = response; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * get parameter sets
     * @param template
     */
    ScheduleExportViewComponent.prototype.getParameterSet = function (template) {
        this.currTemplate = template;
        console.log('template.id' + this.currTemplate);
        this.getCurrentTemplate(this.currTemplate.uuid);
        this.parameterSet = this.currTemplate.psets;
    };
    /**
     * get template by templateid
     * @param templateUUID
     */
    ScheduleExportViewComponent.prototype.getCurrentTemplate = function (templateUUID) {
        var _this = this;
        console.log('templateUUID : ' + templateUUID);
        this.service.getParameterSet(templateUUID).subscribe(function (response) { return _this.parameterSet = response; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * populate dates or day's dropdown list
     * @param selectedFrequency
     */
    ScheduleExportViewComponent.prototype.getDayToExport = function (selectedFrequency) {
        this.service.onSelect(selectedFrequency);
        this.day = this.service.day;
    };
    ScheduleExportViewComponent.prototype.getItems = function () {
        return this.paginationComponent.getItems();
    };
    return ScheduleExportViewComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__pagination_pagination_component__["a" /* PaginationComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], ScheduleExportViewComponent.prototype, "paginationComponent", void 0);
ScheduleExportViewComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-schedule-export-view',
        template: __webpack_require__(201),
        styles: [__webpack_require__(225)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__scheduled_exports_schedule_export_service__["a" /* ScheduleExportService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]])
], ScheduleExportViewComponent);



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination_pagination_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_export_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduledExportsComponent; });





/**
 *  schedule-export-list component
 */
var ScheduledExportsComponent = (function () {
    /**
     *  constructor
     * @param service ScheduleExportService
     * @param router Router
     */
    function ScheduledExportsComponent(service, router) {
        this.service = service;
        this.router = router;
        this.scheduledExports = [];
    }
    ScheduledExportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getScheduledExports().subscribe(function (response) {
            _this.scheduledExports = response,
                _this.paginationComponent.exportTableList = _this.scheduledExports;
            _this.paginationComponent.initz();
            (function (error) { return _this.errorMessage = error; });
        });
        console.log(' Shedules ' + this.scheduledExports);
    };
    /**
     *  delete existing sxhedule export by id
     * @param id
     */
    ScheduledExportsComponent.prototype.deleteSheduleExport = function (id) {
        var _this = this;
        if (confirm(' Are you sure, you want to Delete?')) {
            this.service.deleteScheduleExport(id).then(function () {
                _this.service.getScheduledExports().subscribe(function (response) { return _this.scheduledExports = response; }, function (error) { return _this.errorMessage = error; });
            });
        }
        else {
            this.router.navigate(['/scheduleExport']);
        }
    };
    ScheduledExportsComponent.prototype.getItems = function () {
        return this.paginationComponent.getItems();
    };
    return ScheduledExportsComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__pagination_pagination_component__["a" /* PaginationComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], ScheduledExportsComponent.prototype, "paginationComponent", void 0);
ScheduledExportsComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-scheduled-exports',
        template: __webpack_require__(202),
        styles: [__webpack_require__(226)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__schedule_export_service__["a" /* ScheduleExportService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]])
], ScheduledExportsComponent);



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduled_imports_scheduled_imports_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleImportCopyComponent; });





var ScheduleImportCopyComponent = (function () {
    /**
     *  injecting shedule import service
     */
    function ScheduleImportCopyComponent(service, router, route, http) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.http = http;
        this.model = {};
        this.loading = false;
        this.freq = [];
        this.day = [];
        this.data = {};
        this.sheduleImports = [];
        this.errors = ' Failed to retrive Data... ';
        this.freq = this.service.freq;
    }
    /**
     *  this method for creating new shedule import
     */
    ScheduleImportCopyComponent.prototype.copySheduleImport = function (newSheduleImport) {
        var _this = this;
        this.model = {
            'name': newSheduleImport.taskName,
            'type': 'Import',
            'effectiveDate': newSheduleImport.startDate,
            'frequency': newSheduleImport.frequency,
            'freqPattern': newSheduleImport.dayToImport,
            'filePath': newSheduleImport.fileLocation,
            'remarks': newSheduleImport.remarks,
            'createdBy': '',
            'status': this.activateSchedule(newSheduleImport.status)
        };
        this.loading = true;
        this.service.createSheduleImport(this.model).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/scheduleImport']);
        }, function (err) {
            console.log(' Create SheduleImport Error:', err);
        });
    };
    ScheduleImportCopyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.service.getScheduledImports().subscribe(function (res) {
            _this.sheduleImports = res;
            for (var _i = 0, _a = _this.sheduleImports; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry.uuid === _this.id) {
                    _this.getDayToImport(entry.frequency);
                    var sts = entry.status;
                    if (sts.toUpperCase() === 'ACTIVE') {
                        _this.status = true;
                    }
                    else {
                        _this.status = false;
                    }
                    _this.data = entry;
                    break;
                }
            }
        }, function (error) {
            _this.errors = error;
        }, function () {
            // No errors, route to new page
        });
    };
    /**
     * cancel the import
     */
    ScheduleImportCopyComponent.prototype.cancelImport = function () {
        if (confirm(' Are you sure, you want to Cancel? ')) {
            this.router.navigate(['/scheduleImport']);
        }
        else {
            this.router.navigate(['/scheduleImport/copy']);
        }
    };
    /**
     *
     * @param selectedFrequency
     */
    ScheduleImportCopyComponent.prototype.getDayToImport = function (selectedFrequency) {
        this.service.onSelect(selectedFrequency);
        this.day = this.service.day;
    };
    /**
     * schedule status
     * @param status
     */
    ScheduleImportCopyComponent.prototype.activateSchedule = function (status) {
        if (status) {
            return 'Active';
        }
        else {
            return 'InActive';
        }
    };
    return ScheduleImportCopyComponent;
}());
ScheduleImportCopyComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-schedule-import-copy',
        template: __webpack_require__(203),
        styles: [__webpack_require__(227)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__scheduled_imports_scheduled_imports_service__["a" /* ScheduledImportsService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]])
], ScheduleImportCopyComponent);



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduled_imports_scheduled_imports_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleImportCreateComponent; });




/**
 *  This is angular component for create shedule import
 */
var ScheduleImportCreateComponent = (function () {
    /**
     *  injecting shedule import service
     */
    function ScheduleImportCreateComponent(router, service) {
        this.router = router;
        this.service = service;
        this.model = {};
        this.loading = false;
        this.freq = [];
        this.day = [];
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'yyyy-mm-dd',
        };
        this.freq = this.service.freq;
    }
    /**
     *  this method for creating new shedule import
     */
    ScheduleImportCreateComponent.prototype.createImport = function (newSheduleImport) {
        var _this = this;
        this.model = {
            'name': newSheduleImport.taskName,
            'effectiveDate': newSheduleImport.startDate.formatted,
            'type': 'Import',
            'frequency': newSheduleImport.frequency,
            'freqPattern': newSheduleImport.dayToImport,
            // 'dayToImport': newSheduleImport.dayToImport,
            'filePath': newSheduleImport.fileLocation,
            'remarks': newSheduleImport.remarks,
            'status': this.activateSchedule(newSheduleImport.status),
            'createdBy': ''
        };
        this.loading = true;
        this.service.createSheduleImport(this.model).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/scheduleImport']);
        }, function (err) {
            console.log(' Create SheduleImport Error:', err);
        });
    };
    ScheduleImportCreateComponent.prototype.ngOnInit = function () {
        this.activateShedule = true;
        this.freq = this.service.freq;
    };
    ScheduleImportCreateComponent.prototype.cancelImport = function () {
        if (confirm(' Are you sure, you want to Cancel? ')) {
            this.router.navigate(['/scheduleImport']);
        }
        else {
            this.router.navigate(['/scheduleImport/create']);
        }
    };
    ScheduleImportCreateComponent.prototype.getDayToImport = function (selectedFrequency) {
        this.service.onSelect(selectedFrequency);
        this.day = this.service.day;
    };
    ScheduleImportCreateComponent.prototype.activateSchedule = function (status) {
        if (status) {
            return 'Active';
        }
        else {
            return 'InActive';
        }
    };
    return ScheduleImportCreateComponent;
}());
ScheduleImportCreateComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-schedule-import-create',
        template: __webpack_require__(204),
        styles: [__webpack_require__(228)],
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__scheduled_imports_scheduled_imports_service__["a" /* ScheduledImportsService */]])
], ScheduleImportCreateComponent);



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduled_imports_scheduled_imports_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleImportEditComponent; });





var ScheduleImportEditComponent = (function () {
    /**
     * constructor
     * @param sheduleImportService
     * @param router
     * @param route
     * @param http
     */
    function ScheduleImportEditComponent(service, router, route, http) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.http = http;
        this.data = {};
        this.scheduleImports = [];
        this.freq = [];
        this.day = [];
        this.errors = ' Failed to retrive Data... ';
        this.freq = this.service.freq;
    }
    ScheduleImportEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.service.getScheduledImports().subscribe(function (res) {
            _this.scheduleImports = res;
            for (var _i = 0, _a = _this.scheduleImports; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry.uuid === _this.id) {
                    _this.getDayToImport(entry.frequency);
                    var sts = entry.status;
                    if (sts.toUpperCase() === 'ACTIVE') {
                        _this.status = true;
                    }
                    else {
                        _this.status = false;
                    }
                    _this.data = entry;
                    break;
                }
            }
        }, function (error) {
            _this.errors = error;
        }, function () {
            // No errors, route to new page
        });
    };
    /**
     * update the existing schedule import
     * @param updatedFormData
     */
    ScheduleImportEditComponent.prototype.updateImport = function (updatedFormData) {
        var _this = this;
        this.model = {
            'name': updatedFormData.taskName,
            'type': 'Import',
            'effectiveDate': updatedFormData.startDate,
            'frequency': updatedFormData.frequency,
            'freqPattern': updatedFormData.dayToImport,
            // 'dayToImport': updatedFormData.dayToImport,
            'filePath': updatedFormData.fileLocation,
            'remarks': updatedFormData.remarks,
            'modifiedBy': '',
            'status': this.activateSchedule(updatedFormData.status)
        };
        this.service.updateSheduleImport(this.model, this.id).then(function () {
            _this.router.navigate(['/scheduleImport']);
        });
    };
    /**
     * cancel the schedule updating
     */
    ScheduleImportEditComponent.prototype.cancelEditImport = function () {
        if (confirm(' Are you sure, you to Cancel? ')) {
            this.router.navigate(['/scheduleImport']);
        }
        else {
            this.router.navigate(['/scheduleImport/edit']);
        }
    };
    /**
     * populate the day's or dates as dropdown list
     * @param selectedFrequency
     */
    ScheduleImportEditComponent.prototype.getDayToImport = function (selectedFrequency) {
        this.service.onSelect(selectedFrequency);
        this.day = this.service.day;
    };
    /**
     * schedule status
     * @param status
     */
    ScheduleImportEditComponent.prototype.activateSchedule = function (status) {
        if (status) {
            return 'Active';
        }
        else {
            return 'InActive';
        }
    };
    return ScheduleImportEditComponent;
}());
ScheduleImportEditComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-schedule-import-edit',
        template: __webpack_require__(205),
        styles: [__webpack_require__(229)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__scheduled_imports_scheduled_imports_service__["a" /* ScheduledImportsService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]])
], ScheduleImportEditComponent);



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduled_imports_scheduled_imports_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleImportViewComponent; });




var ScheduleImportViewComponent = (function () {
    /**
     * constructor
     * @param sheduleImportService
     * @param route
     * @param http
     */
    function ScheduleImportViewComponent(service, route) {
        this.service = service;
        this.route = route;
        this.data = {};
        this.scheduleImports = [];
        this.freq = [];
        this.day = [];
        this.freq = this.service.freq;
    }
    ScheduleImportViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.service.getScheduledImports().subscribe(function (res) {
            _this.scheduleImports = res;
            for (var _i = 0, _a = _this.scheduleImports; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry.uuid === _this.id) {
                    var sts = entry.status;
                    if (sts.toUpperCase() === 'ACTIVE') {
                        _this.status = true;
                    }
                    else {
                        _this.status = false;
                    }
                    _this.data = entry;
                    _this.day = [_this.data.freqPattern];
                    break;
                }
            }
        });
    };
    return ScheduleImportViewComponent;
}());
ScheduleImportViewComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-schedule-import-view',
        template: __webpack_require__(206),
        styles: [__webpack_require__(230)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__scheduled_imports_scheduled_imports_service__["a" /* ScheduledImportsService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]])
], ScheduleImportViewComponent);



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduled_imports_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagination_pagination_component__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduledImportsComponent; });





var ScheduledImportsComponent = (function () {
    function ScheduledImportsComponent(service, router) {
        this.service = service;
        this.router = router;
        this.scheduledImports = [];
    }
    ScheduledImportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getScheduledImports().subscribe(function (response) {
            _this.scheduledImports = response,
                _this.paginationComponent.exportTableList = _this.scheduledImports;
            _this.paginationComponent.initz();
            (function (error) { return _this.errorMessage = error; });
        });
    };
    /**
     * delete existing import task by id
     * @param id
     */
    ScheduledImportsComponent.prototype.deleteScheduleImport = function (id) {
        var _this = this;
        if (confirm(' Are you sure, you want to Delete?')) {
            this.service.deleteSheduleImport(id).then(function () {
                _this.service.getScheduledImports().subscribe(function (response) { return _this.scheduledImports = response; }, function (error) { return _this.errorMessage = error; });
            });
        }
        else {
            this.router.navigate(['/scheduleImport']);
        }
    };
    ScheduledImportsComponent.prototype.getItems = function () {
        return this.paginationComponent.getItems();
    };
    return ScheduledImportsComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__pagination_pagination_component__["a" /* PaginationComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], ScheduledImportsComponent.prototype, "paginationComponent", void 0);
ScheduledImportsComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-scheduled-imports',
        template: __webpack_require__(207),
        styles: [__webpack_require__(231)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__scheduled_imports_service__["a" /* ScheduledImportsService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
], ScheduledImportsComponent);



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });


var SideMenuComponent = (function () {
    function SideMenuComponent() {
    }
    SideMenuComponent.prototype.ngOnInit = function () {
    };
    return SideMenuComponent;
}());
SideMenuComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-side-menu',
        template: __webpack_require__(208),
        styles: [__webpack_require__(232)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [])
], SideMenuComponent);



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LOAD_EXPORTDATA */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_EXPORTDATA; });
/* harmony export (immutable) */ __webpack_exports__["a"] = exportPCDReducer;
var LOAD_EXPORTDATA = 'LOAD_EXPORTDATA';
var ADD_EXPORTDATA = 'ADD_EXPORTDATA';
function exportPCDReducer(state, action) {
    // tslint:disable-next-line:indent
    switch (action.type) {
        case LOAD_EXPORTDATA:
            return action.payload;
        case ADD_EXPORTDATA:
            /* let a = [];
            state.forEach(element => {
                a.push(element);
            });
            a.push(action.payload); */
            return action.payload;
        default:
            return state;
    }
}


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_list_ParameterSet__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_list_template__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_list_template_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pagination_pagination_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateCopyComponent; });









var TemplateCopyComponent = (function () {
    function TemplateCopyComponent(formBuilder, templateService, route, http) {
        this.formBuilder = formBuilder;
        this.templateService = templateService;
        this.route = route;
        this.http = http;
        this.globalParameterSets = [];
        this.cacheParameterSets = [];
        this.selectedParameterSets = new Array();
        this.template = new __WEBPACK_IMPORTED_MODULE_3__templates_list_template__["a" /* Template */]();
        this.HTTP_GET_APPLICATION_JSON_FILE = '../../assets/utils/application.json';
        this.saveparamSets = new Array();
    }
    TemplateCopyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getApplicationName();
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.createForm = this.formBuilder.group({
            templateName: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(15)]],
            application: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(15)]]
        });
        console.log('uuid: ' + this.id);
        this.getParameterSetsByUUID(this.id);
    };
    TemplateCopyComponent.prototype.getApplicationName = function () {
        var _this = this;
        this.applicationList = [];
        var filePath = this.http.get(this.HTTP_GET_APPLICATION_JSON_FILE).subscribe(function (data) {
            var fileContentJSON = JSON.parse(data['_body']);
            if (fileContentJSON) {
                _this.applicationList = fileContentJSON;
            }
        });
    };
    TemplateCopyComponent.prototype.onApplicationChange = function () {
        console.log('appId: ' + this.appId);
        if (this.appId === 'FSS') {
            this.getParameterSetsFromJsonFile();
        }
        if (this.appId === 'IDS') {
            this.getParameterSetsFromDepositJsonFile();
        }
    };
    TemplateCopyComponent.prototype.createParamSetsArray = function () {
        return this.formBuilder.group({
            company: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            effectiveDate: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]]
        });
    };
    TemplateCopyComponent.prototype.getPsets = function (psets) {
        var _this = this;
        var company;
        var _loop_1 = function (p) {
            this_1.appId = p.applicationID;
            this_1.tempPset = {};
            this_1.templateService.get_companyDetailsByParameterId(p.number).subscribe(function (res) {
                company = res,
                    _this.tempPset = {
                        applicationID: p.applicationID,
                        number: p.number,
                        name: p.name,
                        companies: company,
                        companyID: p.companyID,
                        effectiveDate: p.effectiveDate,
                        createdBy: p.createdBy
                    };
                _this.selectedParameterSets.push(_this.tempPset);
                console.log('pset : ' + _this.selectedParameterSets);
            });
        };
        var this_1 = this;
        for (var _i = 0, psets_1 = psets; _i < psets_1.length; _i++) {
            var p = psets_1[_i];
            _loop_1(p);
        }
    };
    TemplateCopyComponent.prototype.getParameterSetsByUUID = function (uuid) {
        var _this = this;
        this.templateService.get_parameterSets(uuid).subscribe(function (response) {
            _this.template = response;
            console.log('template: ' + JSON.stringify(response));
            _this.getPsets(response.psets);
            _this.onApplicationChange();
            _this.statusCode = response.status;
        });
    };
    TemplateCopyComponent.prototype.getAppItems = function () {
        return this.paginationComponent.getItems();
    };
    TemplateCopyComponent.prototype.getPsetItems = function () {
        return this.paginationComponent.getItems();
    };
    TemplateCopyComponent.prototype.getParameterSetsFromJsonFile = function () {
        var _this = this;
        var owner;
        var data;
        var paramSetArray = new Array();
        // Read Parameter Sets from Foundation JSON
        this.templateService.get_parameterSetsFromFoundationJson().subscribe(function (res) {
            data = res.json(),
                owner = data['owner'];
            paramSetArray = data['ParamSet'];
            console.log(owner);
            console.log(paramSetArray);
            for (var i = 0; i < paramSetArray.length; i++) {
                console.log(paramSetArray[i].id);
                console.log(paramSetArray[i].name);
                var paramSet = new __WEBPACK_IMPORTED_MODULE_2__templates_list_ParameterSet__["a" /* ParameterSet */]();
                paramSet.number = paramSetArray[i].id;
                paramSet.name = paramSetArray[i].name;
                paramSet.application = owner;
                _this.cacheParameterSets.push(paramSet);
            }
            console.log(_this.cacheParameterSets.length);
        });
        // Read Parameter Sets from Deposits JSON
        // // Read Parameter Sets from Customer JSON
        // this.templateService.get_parameterSetsFromCustomerJson().subscribe(
        //   // (data) => {
        //     (res) => { data = res.json(),
        //     console.log('foundation '+ JSON.stringify(data));
        //     owner = data['owner'];
        //     paramSetArray = data['ParamSet'];
        //     console.log(owner);
        //     console.log(paramSetArray);
        //     for (var i = 0; i < paramSetArray.length; i++) {
        //       console.log(paramSetArray[i].id);
        //       console.log(paramSetArray[i].name);
        //       var paramSet = new ParameterSet();
        //       paramSet.number = paramSetArray[i].id;
        //       paramSet.name = paramSetArray[i].name;
        //       paramSet.application = owner;
        //       this.cacheParameterSets.push(paramSet);
        //     }
        //     console.log(this.cacheParameterSets.length);
        //   }
        // );
        // // Read Parameter Sets from Loan JSON
        // this.templateService.get_parameterSetsFromLoanJson().subscribe(
        //   // (data) => {
        //     (res) => { data = res.json(),
        //     owner = data['owner'];
        //     paramSetArray = data['ParamSet'];
        //     console.log(owner);
        //     console.log(paramSetArray);
        //     for (var i = 0; i < paramSetArray.length; i++) {
        //       console.log(paramSetArray[i].id);
        //       console.log(paramSetArray[i].name);
        //       var paramSet = new ParameterSet();
        //       paramSet.number = paramSetArray[i].id;
        //       paramSet.name = paramSetArray[i].name;
        //       paramSet.application = owner;
        //       this.cacheParameterSets.push(paramSet);
        //     }
        //     console.log(this.cacheParameterSets.length);
        //   }
        // );
        // // Read Parameter Sets from Card JSON
        // this.templateService.get_parameterSetsFromCardJson().subscribe(
        //   // (data) => {
        //     (res) => { data = res.json(),
        //     owner = data['owner'];
        //     paramSetArray = data['ParamSet'];
        //     console.log(owner);
        //     console.log(paramSetArray);
        //     for (var i = 0; i < paramSetArray.length; i++) {
        //       console.log(paramSetArray[i].id);
        //       console.log(paramSetArray[i].name);
        //       var paramSet = new ParameterSet();
        //       paramSet.number = paramSetArray[i].id;
        //       paramSet.name = paramSetArray[i].name;
        //       paramSet.application = owner;
        //       this.cacheParameterSets.push(paramSet);
        //     }
        //     console.log(this.cacheParameterSets.length);
        //   }
        // );
    };
    TemplateCopyComponent.prototype.getParameterSetsFromDepositJsonFile = function () {
        var _this = this;
        var owner;
        var data;
        var paramSetArray = new Array();
        this.cacheParameterSets = [];
        this.templateService.get_parameterSetsFromDepositsJson().subscribe(
        // (data) => {
        function (res) {
            data = res.json(),
                owner = data['owner'];
            paramSetArray = data['ParamSet'];
            console.log(owner);
            console.log(paramSetArray);
            for (var i = 0; i < paramSetArray.length; i++) {
                console.log(paramSetArray[i].id);
                console.log(paramSetArray[i].name);
                var paramSet = new __WEBPACK_IMPORTED_MODULE_2__templates_list_ParameterSet__["a" /* ParameterSet */]();
                paramSet.number = paramSetArray[i].id;
                paramSet.name = paramSetArray[i].name;
                paramSet.application = owner;
                _this.cacheParameterSets.push(paramSet);
            }
            console.log(_this.cacheParameterSets.length);
            // this.globalParameterSets = this.cacheParameterSets.filter(item => item.application == "Foundation");    // Filter Foundation param sets on load of page                              
        });
    };
    TemplateCopyComponent.prototype.addParameterSet = function (paramSet) {
        //paramSet.company = "TEST";
        paramSet.effectiveDate = "";
        //Get the company Data based on parameterId
        this.getCompanyDetailsByParameter(paramSet.number, paramSet);
    };
    TemplateCopyComponent.prototype.deleteParameterSet = function (index) {
        this.selectedParameterSets.splice(index, 1);
    };
    TemplateCopyComponent.prototype.getCompanyDetailsByParameter = function (paramId, paramSet) {
        var _this = this;
        this.companies = [];
        this.templateService.get_companyDetailsByParameterId(paramId).subscribe(function (data) {
            _this.companies = data;
            paramSet.companies = _this.companies;
            paramSet.createdBy = "user";
            console.log('adada' + _this.appId);
            paramSet.applicationID = _this.appId;
            _this.selectedParameterSets.push(paramSet);
            _this.selectedParamsNotExist = false;
        });
    };
    TemplateCopyComponent.prototype.onChangeOfApplication = function ($event) {
        var selectedApplication = $event.target.value;
        alert(selectedApplication);
        this.globalParameterSets = this.cacheParameterSets.filter(function (item) { return item.application == selectedApplication; });
    };
    TemplateCopyComponent.prototype.create_Template = function () {
        var _this = this;
        this.isSubmitted = true;
        this.saveTemplate = {};
        for (var _i = 0, _a = this.selectedParameterSets; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log('item : ' + JSON.stringify(item));
            var pset = {
                applicationID: item.applicationID,
                name: item.name,
                number: item.number,
                companyID: item.companyID,
                effectiveDate: item.effectiveDate,
                createdBy: item.createdBy
            };
            this.saveparamSets.push(pset);
        }
        this.template.createdBy = "user";
        this.saveTemplate = {
            name: this.template.name,
            createdBy: this.template.createdBy,
            psets: this.saveparamSets
        };
        console.log("template" + JSON.stringify(this.saveTemplate));
        this.templateService.create_template(this.saveTemplate).subscribe(function (response) {
            console.log(response);
            console.log(response.status);
            _this.statusCode = response.status;
        });
    };
    return TemplateCopyComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__pagination_pagination_component__["a" /* PaginationComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], TemplateCopyComponent.prototype, "paginationComponent", void 0);
TemplateCopyComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-template-copy',
        template: __webpack_require__(209),
        styles: [__webpack_require__(233)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__templates_list_template_service__["a" /* TemplateService */], __WEBPACK_IMPORTED_MODULE_8__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"]])
], TemplateCopyComponent);



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_list_ParameterSet__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_list_template__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templates_list_template_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pagination_pagination_component__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateCreateComponent; });








var TemplateCreateComponent = (function () {
    function TemplateCreateComponent(formBuilder, templateService, http) {
        this.formBuilder = formBuilder;
        this.templateService = templateService;
        this.http = http;
        this.globalParameterSets = [];
        this.cacheParameterSets = [];
        this.selectedParameterSets = new Array();
        this.template = new __WEBPACK_IMPORTED_MODULE_4__templates_list_template__["a" /* Template */]();
        this.HTTP_GET_APPLICATION_JSON_FILE = '../../assets/utils/application.json';
        this.saveparamSets = new Array();
    }
    TemplateCreateComponent.prototype.ngOnInit = function () {
        this.getApplicationName();
        this.createForm = this.formBuilder.group({
            templateName: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(15)]]
        });
    };
    TemplateCreateComponent.prototype.getItems = function () {
        return this.paginationComponent.getItems();
    };
    Object.defineProperty(TemplateCreateComponent.prototype, "templateName", {
        get: function () { return this.createForm.get('templateName'); },
        enumerable: true,
        configurable: true
    });
    TemplateCreateComponent.prototype.getApplicationName = function () {
        var _this = this;
        this.applicationList = [];
        var filePath = this.http.get(this.HTTP_GET_APPLICATION_JSON_FILE).subscribe(function (data) {
            var fileContentJSON = JSON.parse(data['_body']);
            if (fileContentJSON) {
                _this.applicationList = fileContentJSON;
            }
        });
    };
    TemplateCreateComponent.prototype.onApplicationChange = function () {
        if (this.appId === 'FSS') {
            this.getParameterSetsFromJsonFile();
        }
        if (this.appId === 'IDS') {
            this.getParameterSetsFromDepositJsonFile();
        }
    };
    TemplateCreateComponent.prototype.createParamSetsArray = function () {
        return this.formBuilder.group({
            company: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            effectiveDate: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]]
        });
    };
    TemplateCreateComponent.prototype.getParameterSetsFromJsonFile = function () {
        var _this = this;
        var owner;
        var data;
        var paramSetArray = new Array();
        // Read Parameter Sets from Foundation JSON
        this.templateService.get_parameterSetsFromFoundationJson().subscribe(function (res) {
            data = res.json(),
                owner = data['owner'];
            paramSetArray = data['ParamSet'];
            console.log(owner);
            console.log(paramSetArray);
            for (var i = 0; i < paramSetArray.length; i++) {
                console.log(paramSetArray[i].id);
                console.log(paramSetArray[i].name);
                var paramSet = new __WEBPACK_IMPORTED_MODULE_3__templates_list_ParameterSet__["a" /* ParameterSet */]();
                paramSet.number = paramSetArray[i].id;
                paramSet.name = paramSetArray[i].name;
                paramSet.application = owner;
                _this.cacheParameterSets.push(paramSet);
            }
            console.log(_this.cacheParameterSets.length);
        });
        // Read Parameter Sets from Deposits JSON
        // // Read Parameter Sets from Customer JSON
        // this.templateService.get_parameterSetsFromCustomerJson().subscribe(
        //   // (data) => {
        //     (res) => { data = res.json(),
        //     console.log('foundation '+ JSON.stringify(data));
        //     owner = data['owner'];
        //     paramSetArray = data['ParamSet'];
        //     console.log(owner);
        //     console.log(paramSetArray);
        //     for (var i = 0; i < paramSetArray.length; i++) {
        //       console.log(paramSetArray[i].id);
        //       console.log(paramSetArray[i].name);
        //       var paramSet = new ParameterSet();
        //       paramSet.number = paramSetArray[i].id;
        //       paramSet.name = paramSetArray[i].name;
        //       paramSet.application = owner;
        //       this.cacheParameterSets.push(paramSet);
        //     }
        //     console.log(this.cacheParameterSets.length);
        //   }
        // );
        // // Read Parameter Sets from Loan JSON
        // this.templateService.get_parameterSetsFromLoanJson().subscribe(
        //   // (data) => {
        //     (res) => { data = res.json(),
        //     owner = data['owner'];
        //     paramSetArray = data['ParamSet'];
        //     console.log(owner);
        //     console.log(paramSetArray);
        //     for (var i = 0; i < paramSetArray.length; i++) {
        //       console.log(paramSetArray[i].id);
        //       console.log(paramSetArray[i].name);
        //       var paramSet = new ParameterSet();
        //       paramSet.number = paramSetArray[i].id;
        //       paramSet.name = paramSetArray[i].name;
        //       paramSet.application = owner;
        //       this.cacheParameterSets.push(paramSet);
        //     }
        //     console.log(this.cacheParameterSets.length);
        //   }
        // );
        // // Read Parameter Sets from Card JSON
        // this.templateService.get_parameterSetsFromCardJson().subscribe(
        //   // (data) => {
        //     (res) => { data = res.json(),
        //     owner = data['owner'];
        //     paramSetArray = data['ParamSet'];
        //     console.log(owner);
        //     console.log(paramSetArray);
        //     for (var i = 0; i < paramSetArray.length; i++) {
        //       console.log(paramSetArray[i].id);
        //       console.log(paramSetArray[i].name);
        //       var paramSet = new ParameterSet();
        //       paramSet.number = paramSetArray[i].id;
        //       paramSet.name = paramSetArray[i].name;
        //       paramSet.application = owner;
        //       this.cacheParameterSets.push(paramSet);
        //     }
        //     console.log(this.cacheParameterSets.length);
        //   }
        // );
    };
    TemplateCreateComponent.prototype.getParameterSetsFromDepositJsonFile = function () {
        var _this = this;
        var owner;
        var data;
        var paramSetArray = new Array();
        this.cacheParameterSets = [];
        this.templateService.get_parameterSetsFromDepositsJson().subscribe(
        // (data) => {
        function (res) {
            data = res.json(),
                owner = data['owner'];
            paramSetArray = data['ParamSet'];
            console.log(owner);
            console.log(paramSetArray);
            for (var i = 0; i < paramSetArray.length; i++) {
                console.log(paramSetArray[i].id);
                console.log(paramSetArray[i].name);
                var paramSet = new __WEBPACK_IMPORTED_MODULE_3__templates_list_ParameterSet__["a" /* ParameterSet */]();
                paramSet.number = paramSetArray[i].id;
                paramSet.name = paramSetArray[i].name;
                paramSet.application = owner;
                _this.cacheParameterSets.push(paramSet);
            }
            console.log(_this.cacheParameterSets.length);
            // this.globalParameterSets = this.cacheParameterSets.filter(item => item.application == "Foundation");    // Filter Foundation param sets on load of page                              
        });
    };
    TemplateCreateComponent.prototype.addParameterSet = function (paramSet) {
        //paramSet.company = "TEST";
        paramSet.effectiveDate = "";
        //Get the company Data based on parameterId
        this.getCompanyDetailsByParameter(paramSet.number, paramSet);
    };
    TemplateCreateComponent.prototype.deleteParameterSet = function (index) {
        this.selectedParameterSets.splice(index, 1);
    };
    TemplateCreateComponent.prototype.getCompanyDetailsByParameter = function (paramId, paramSet) {
        var _this = this;
        this.companies = [];
        this.templateService.get_companyDetailsByParameterId(paramId).subscribe(function (data) {
            _this.companies = data;
            paramSet.companies = _this.companies;
            paramSet.createdBy = "user";
            paramSet.applicationID = _this.appId;
            _this.selectedParameterSets.push(paramSet);
            _this.selectedParamsNotExist = false;
        });
    };
    TemplateCreateComponent.prototype.onChangeOfApplication = function ($event) {
        var selectedApplication = $event.target.value;
        alert("On Change of Application Drop down : " + selectedApplication);
        this.globalParameterSets = this.cacheParameterSets.filter(function (item) { return item.application == selectedApplication; });
    };
    TemplateCreateComponent.prototype.createTemplate = function () {
        var _this = this;
        this.isSubmitted = true;
        for (var _i = 0, _a = this.selectedParameterSets; _i < _a.length; _i++) {
            var item = _a[_i];
            var pset = {
                applicationID: item.applicationID,
                name: item.name,
                number: item.number,
                companyID: item.companyID,
                effectiveDate: item.effectiveDate,
                createdBy: item.createdBy
            };
            this.saveparamSets.push(pset);
        }
        this.template.createdBy = "user";
        this.template.psets = this.saveparamSets;
        console.log("template" + JSON.stringify(this.template));
        this.templateService.create_template(this.template).subscribe(function (response) {
            console.log(response);
            console.log(response.status);
            _this.statusCode = response.status;
        });
    };
    return TemplateCreateComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__pagination_pagination_component__["a" /* PaginationComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], TemplateCreateComponent.prototype, "paginationComponent", void 0);
TemplateCreateComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-template-create',
        template: __webpack_require__(210),
        styles: [__webpack_require__(234)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5__templates_list_template_service__["a" /* TemplateService */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]])
], TemplateCreateComponent);



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_list_ParameterSet__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_list_template__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_list_template_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pagination_pagination_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateEditComponent; });









var TemplateEditComponent = (function () {
    function TemplateEditComponent(formBuilder, templateService, route, http) {
        this.formBuilder = formBuilder;
        this.templateService = templateService;
        this.route = route;
        this.http = http;
        this.globalParameterSets = [];
        this.cacheParameterSets = [];
        this.selectedParameterSets = new Array();
        this.template = new __WEBPACK_IMPORTED_MODULE_3__templates_list_template__["a" /* Template */]();
        this.applications = ["Foundation", "Deposits", "Foundation1", "Deposits1", "Foundation2", "Deposits2"];
        this.HTTP_GET_APPLICATION_JSON_FILE = '../../assets/utils/application.json';
        this.saveparamSets = new Array();
    }
    TemplateEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getApplicationName();
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.createForm = this.formBuilder.group({
            templateName: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(15)]],
            application: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(15)]]
        });
        console.log('uuid: ' + this.id);
        this.getParameterSetsByUUID(this.id);
    };
    TemplateEditComponent.prototype.getApplicationName = function () {
        var _this = this;
        this.applicationList = [];
        var filePath = this.http.get(this.HTTP_GET_APPLICATION_JSON_FILE).subscribe(function (data) {
            var fileContentJSON = JSON.parse(data['_body']);
            if (fileContentJSON) {
                _this.applicationList = fileContentJSON;
            }
        });
    };
    TemplateEditComponent.prototype.onApplicationChange = function () {
        console.log('appId: ' + this.appId);
        if (this.appId === 'FSS') {
            this.getParameterSetsFromJsonFile();
        }
        if (this.appId === 'IDS') {
            this.getParameterSetsFromDepositJsonFile();
        }
    };
    TemplateEditComponent.prototype.createParamSetsArray = function () {
        return this.formBuilder.group({
            company: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            effectiveDate: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]]
        });
    };
    TemplateEditComponent.prototype.getPsets = function (psets) {
        var _this = this;
        var company;
        var _loop_1 = function (p) {
            this_1.appId = p.applicationID;
            this_1.tempPset = {};
            this_1.templateService.get_companyDetailsByParameterId(p.number).subscribe(function (res) {
                company = res,
                    _this.tempPset = {
                        applicationID: p.applicationID,
                        number: p.number,
                        name: p.name,
                        companies: company,
                        companyID: p.companyID,
                        effectiveDate: p.effectiveDate
                    };
                _this.selectedParameterSets.push(_this.tempPset);
                console.log('pset : ' + _this.selectedParameterSets);
            });
        };
        var this_1 = this;
        for (var _i = 0, psets_1 = psets; _i < psets_1.length; _i++) {
            var p = psets_1[_i];
            _loop_1(p);
        }
    };
    TemplateEditComponent.prototype.getParameterSetsByUUID = function (uuid) {
        var _this = this;
        this.templateService.get_parameterSets(uuid).subscribe(function (response) {
            _this.template = response;
            console.log('template: ' + JSON.stringify(response));
            _this.getPsets(response.psets);
            _this.onApplicationChange();
            _this.statusCode = response.status;
        });
    };
    TemplateEditComponent.prototype.getAppItems = function () {
        return this.paginationComponent.getItems();
    };
    TemplateEditComponent.prototype.getPsetItems = function () {
        return this.paginationComponent.getItems();
    };
    TemplateEditComponent.prototype.getParameterSetsFromJsonFile = function () {
        var _this = this;
        var owner;
        var data;
        var paramSetArray = new Array();
        // Read Parameter Sets from Foundation JSON
        this.templateService.get_parameterSetsFromFoundationJson().subscribe(function (res) {
            data = res.json(),
                owner = data['owner'];
            paramSetArray = data['ParamSet'];
            console.log(owner);
            console.log(paramSetArray);
            for (var i = 0; i < paramSetArray.length; i++) {
                console.log(paramSetArray[i].id);
                console.log(paramSetArray[i].name);
                var paramSet = new __WEBPACK_IMPORTED_MODULE_2__templates_list_ParameterSet__["a" /* ParameterSet */]();
                paramSet.number = paramSetArray[i].id;
                paramSet.name = paramSetArray[i].name;
                paramSet.application = owner;
                _this.cacheParameterSets.push(paramSet);
            }
            console.log(_this.cacheParameterSets.length);
        });
        // Read Parameter Sets from Deposits JSON
        // // Read Parameter Sets from Customer JSON
        // this.templateService.get_parameterSetsFromCustomerJson().subscribe(
        //   // (data) => {
        //     (res) => { data = res.json(),
        //     console.log('foundation '+ JSON.stringify(data));
        //     owner = data['owner'];
        //     paramSetArray = data['ParamSet'];
        //     console.log(owner);
        //     console.log(paramSetArray);
        //     for (var i = 0; i < paramSetArray.length; i++) {
        //       console.log(paramSetArray[i].id);
        //       console.log(paramSetArray[i].name);
        //       var paramSet = new ParameterSet();
        //       paramSet.number = paramSetArray[i].id;
        //       paramSet.name = paramSetArray[i].name;
        //       paramSet.application = owner;
        //       this.cacheParameterSets.push(paramSet);
        //     }
        //     console.log(this.cacheParameterSets.length);
        //   }
        // );
        // // Read Parameter Sets from Loan JSON
        // this.templateService.get_parameterSetsFromLoanJson().subscribe(
        //   // (data) => {
        //     (res) => { data = res.json(),
        //     owner = data['owner'];
        //     paramSetArray = data['ParamSet'];
        //     console.log(owner);
        //     console.log(paramSetArray);
        //     for (var i = 0; i < paramSetArray.length; i++) {
        //       console.log(paramSetArray[i].id);
        //       console.log(paramSetArray[i].name);
        //       var paramSet = new ParameterSet();
        //       paramSet.number = paramSetArray[i].id;
        //       paramSet.name = paramSetArray[i].name;
        //       paramSet.application = owner;
        //       this.cacheParameterSets.push(paramSet);
        //     }
        //     console.log(this.cacheParameterSets.length);
        //   }
        // );
        // // Read Parameter Sets from Card JSON
        // this.templateService.get_parameterSetsFromCardJson().subscribe(
        //   // (data) => {
        //     (res) => { data = res.json(),
        //     owner = data['owner'];
        //     paramSetArray = data['ParamSet'];
        //     console.log(owner);
        //     console.log(paramSetArray);
        //     for (var i = 0; i < paramSetArray.length; i++) {
        //       console.log(paramSetArray[i].id);
        //       console.log(paramSetArray[i].name);
        //       var paramSet = new ParameterSet();
        //       paramSet.number = paramSetArray[i].id;
        //       paramSet.name = paramSetArray[i].name;
        //       paramSet.application = owner;
        //       this.cacheParameterSets.push(paramSet);
        //     }
        //     console.log(this.cacheParameterSets.length);
        //   }
        // );
    };
    TemplateEditComponent.prototype.getParameterSetsFromDepositJsonFile = function () {
        var _this = this;
        var owner;
        var data;
        var paramSetArray = new Array();
        this.cacheParameterSets = [];
        this.templateService.get_parameterSetsFromDepositsJson().subscribe(
        // (data) => {
        function (res) {
            data = res.json(),
                owner = data['owner'];
            paramSetArray = data['ParamSet'];
            console.log(owner);
            console.log(paramSetArray);
            for (var i = 0; i < paramSetArray.length; i++) {
                console.log(paramSetArray[i].id);
                console.log(paramSetArray[i].name);
                var paramSet = new __WEBPACK_IMPORTED_MODULE_2__templates_list_ParameterSet__["a" /* ParameterSet */]();
                paramSet.number = paramSetArray[i].id;
                paramSet.name = paramSetArray[i].name;
                paramSet.application = owner;
                _this.cacheParameterSets.push(paramSet);
            }
            console.log(_this.cacheParameterSets.length);
            // this.globalParameterSets = this.cacheParameterSets.filter(item => item.application == "Foundation");    // Filter Foundation param sets on load of page                              
        });
    };
    TemplateEditComponent.prototype.addParameterSet = function (paramSet) {
        //paramSet.company = "TEST";
        paramSet.effectiveDate = "";
        //Get the company Data based on parameterId
        this.getCompanyDetailsByParameter(paramSet.number, paramSet);
    };
    TemplateEditComponent.prototype.deleteParameterSet = function (index) {
        this.selectedParameterSets.splice(index, 1);
    };
    TemplateEditComponent.prototype.getCompanyDetailsByParameter = function (paramId, paramSet) {
        var _this = this;
        this.companies = [];
        this.templateService.get_companyDetailsByParameterId(paramId).subscribe(function (data) {
            _this.companies = data;
            paramSet.companies = _this.companies;
            paramSet.modifiedBy = "user";
            console.log('adada' + _this.appId);
            paramSet.applicationID = _this.appId;
            _this.selectedParameterSets.push(paramSet);
            _this.selectedParamsNotExist = false;
        });
    };
    TemplateEditComponent.prototype.onChangeOfApplication = function ($event) {
        var selectedApplication = $event.target.value;
        alert(selectedApplication);
        this.globalParameterSets = this.cacheParameterSets.filter(function (item) { return item.application == selectedApplication; });
    };
    TemplateEditComponent.prototype.updateTemplate = function () {
        var _this = this;
        this.saveTemplate = {};
        for (var _i = 0, _a = this.selectedParameterSets; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log('item : ' + JSON.stringify(item));
            var pset = {
                applicationID: item.applicationID,
                name: item.name,
                number: item.number,
                companyID: item.companyID,
                effectiveDate: item.effectiveDate,
                modifiedBy: item.modifiedBy
            };
            this.saveparamSets.push(pset);
        }
        this.template.modifiedBy = "user";
        this.saveTemplate = {
            name: this.template.name,
            modifiedBy: this.template.modifiedBy,
            psets: this.saveparamSets
        };
        console.log("template" + JSON.stringify(this.saveTemplate));
        this.templateService.update_template(this.saveTemplate, this.id).subscribe(function (response) {
            console.log(response);
            console.log(response.status);
            _this.statusCode = response.status;
        });
    };
    return TemplateEditComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__pagination_pagination_component__["a" /* PaginationComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], TemplateEditComponent.prototype, "paginationComponent", void 0);
TemplateEditComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-template-edit',
        template: __webpack_require__(211),
        styles: [__webpack_require__(235)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__templates_list_template_service__["a" /* TemplateService */], __WEBPACK_IMPORTED_MODULE_8__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"]])
], TemplateEditComponent);



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_list_ParameterSet__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_list_template__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_list_template_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pagination_pagination_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateViewComponent; });









var TemplateViewComponent = (function () {
    function TemplateViewComponent(formBuilder, templateService, route, http) {
        this.formBuilder = formBuilder;
        this.templateService = templateService;
        this.route = route;
        this.http = http;
        this.globalParameterSets = [];
        this.cacheParameterSets = [];
        this.selectedParameterSets = new Array();
        this.template = new __WEBPACK_IMPORTED_MODULE_3__templates_list_template__["a" /* Template */]();
        this.applications = ["Foundation", "Deposits", "Foundation1", "Deposits1", "Foundation2", "Deposits2"];
        this.HTTP_GET_APPLICATION_JSON_FILE = '../../assets/utils/application.json';
        this.saveparamSets = new Array();
        this.application = {};
    }
    TemplateViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getApplicationName();
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.createForm = this.formBuilder.group({
            templateName: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(15)]],
            application: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(15)]]
        });
        console.log('uuid: ' + this.id);
        this.getParameterSetsByUUID(this.id);
    };
    TemplateViewComponent.prototype.getApplicationName = function () {
        var _this = this;
        this.applicationList = [];
        var filePath = this.http.get(this.HTTP_GET_APPLICATION_JSON_FILE).subscribe(function (data) {
            var fileContentJSON = JSON.parse(data['_body']);
            if (fileContentJSON) {
                _this.applicationList = fileContentJSON;
            }
        });
    };
    TemplateViewComponent.prototype.onApplicationChange = function () {
        console.log('appId: ' + this.application.id);
        if (this.application.id === 'FSS') {
            this.getParameterSetsFromJsonFile();
        }
        if (this.application.id === 'IDS') {
            this.getParameterSetsFromDepositJsonFile();
        }
    };
    TemplateViewComponent.prototype.createParamSetsArray = function () {
        return this.formBuilder.group({
            company: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            effectiveDate: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]]
        });
    };
    TemplateViewComponent.prototype.getPsets = function (psets) {
        var _this = this;
        var company;
        var _loop_1 = function (p) {
            console.log('appId : ' + p.applicationID);
            this_1.appId = p.applicationID;
            this_1.tempPset = {};
            this_1.templateService.get_companyDetailsByParameterId(p.number).subscribe(function (res) {
                company = res,
                    _this.tempPset = {
                        applicationID: p.applicationID,
                        number: p.number,
                        name: p.name,
                        companies: company,
                        companyID: p.companyID,
                        effectiveDate: p.effectiveDate
                    };
                _this.selectedParameterSets.push(_this.tempPset);
                console.log('pset : ' + _this.selectedParameterSets);
            });
        };
        var this_1 = this;
        for (var _i = 0, psets_1 = psets; _i < psets_1.length; _i++) {
            var p = psets_1[_i];
            _loop_1(p);
        }
    };
    TemplateViewComponent.prototype.getParameterSetsByUUID = function (uuid) {
        var _this = this;
        this.templateService.get_parameterSets(uuid).subscribe(function (response) {
            _this.template = response;
            console.log('template: ' + JSON.stringify(response));
            _this.getPsets(response.psets);
            // this.onApplicationChange();
            _this.statusCode = response.status;
        });
    };
    TemplateViewComponent.prototype.getAppItems = function () {
        return this.paginationComponent.getItems();
    };
    TemplateViewComponent.prototype.getPsetItems = function () {
        return this.paginationComponent.getItems();
    };
    TemplateViewComponent.prototype.getParameterSetsFromJsonFile = function () {
        var _this = this;
        var owner;
        var data;
        var paramSetArray = new Array();
        // Read Parameter Sets from Foundation JSON
        this.templateService.get_parameterSetsFromFoundationJson().subscribe(function (res) {
            data = res.json(),
                owner = data['owner'];
            paramSetArray = data['ParamSet'];
            console.log(owner);
            console.log(paramSetArray);
            for (var i = 0; i < paramSetArray.length; i++) {
                console.log(paramSetArray[i].id);
                console.log(paramSetArray[i].name);
                var paramSet = new __WEBPACK_IMPORTED_MODULE_2__templates_list_ParameterSet__["a" /* ParameterSet */]();
                paramSet.number = paramSetArray[i].id;
                paramSet.name = paramSetArray[i].name;
                paramSet.application = owner;
                _this.cacheParameterSets.push(paramSet);
            }
            console.log(_this.cacheParameterSets.length);
        });
        // Read Parameter Sets from Deposits JSON
        // // Read Parameter Sets from Customer JSON
        // this.templateService.get_parameterSetsFromCustomerJson().subscribe(
        //   // (data) => {
        //     (res) => { data = res.json(),
        //     console.log('foundation '+ JSON.stringify(data));
        //     owner = data['owner'];
        //     paramSetArray = data['ParamSet'];
        //     console.log(owner);
        //     console.log(paramSetArray);
        //     for (var i = 0; i < paramSetArray.length; i++) {
        //       console.log(paramSetArray[i].id);
        //       console.log(paramSetArray[i].name);
        //       var paramSet = new ParameterSet();
        //       paramSet.number = paramSetArray[i].id;
        //       paramSet.name = paramSetArray[i].name;
        //       paramSet.application = owner;
        //       this.cacheParameterSets.push(paramSet);
        //     }
        //     console.log(this.cacheParameterSets.length);
        //   }
        // );
        // // Read Parameter Sets from Loan JSON
        // this.templateService.get_parameterSetsFromLoanJson().subscribe(
        //   // (data) => {
        //     (res) => { data = res.json(),
        //     owner = data['owner'];
        //     paramSetArray = data['ParamSet'];
        //     console.log(owner);
        //     console.log(paramSetArray);
        //     for (var i = 0; i < paramSetArray.length; i++) {
        //       console.log(paramSetArray[i].id);
        //       console.log(paramSetArray[i].name);
        //       var paramSet = new ParameterSet();
        //       paramSet.number = paramSetArray[i].id;
        //       paramSet.name = paramSetArray[i].name;
        //       paramSet.application = owner;
        //       this.cacheParameterSets.push(paramSet);
        //     }
        //     console.log(this.cacheParameterSets.length);
        //   }
        // );
        // // Read Parameter Sets from Card JSON
        // this.templateService.get_parameterSetsFromCardJson().subscribe(
        //   // (data) => {
        //     (res) => { data = res.json(),
        //     owner = data['owner'];
        //     paramSetArray = data['ParamSet'];
        //     console.log(owner);
        //     console.log(paramSetArray);
        //     for (var i = 0; i < paramSetArray.length; i++) {
        //       console.log(paramSetArray[i].id);
        //       console.log(paramSetArray[i].name);
        //       var paramSet = new ParameterSet();
        //       paramSet.number = paramSetArray[i].id;
        //       paramSet.name = paramSetArray[i].name;
        //       paramSet.application = owner;
        //       this.cacheParameterSets.push(paramSet);
        //     }
        //     console.log(this.cacheParameterSets.length);
        //   }
        // );
    };
    TemplateViewComponent.prototype.getParameterSetsFromDepositJsonFile = function () {
        var _this = this;
        var owner;
        var data;
        var paramSetArray = new Array();
        this.cacheParameterSets = [];
        this.templateService.get_parameterSetsFromDepositsJson().subscribe(
        // (data) => {
        function (res) {
            data = res.json(),
                owner = data['owner'];
            paramSetArray = data['ParamSet'];
            console.log(owner);
            console.log(paramSetArray);
            for (var i = 0; i < paramSetArray.length; i++) {
                console.log(paramSetArray[i].id);
                console.log(paramSetArray[i].name);
                var paramSet = new __WEBPACK_IMPORTED_MODULE_2__templates_list_ParameterSet__["a" /* ParameterSet */]();
                paramSet.number = paramSetArray[i].id;
                paramSet.name = paramSetArray[i].name;
                paramSet.application = owner;
                _this.cacheParameterSets.push(paramSet);
            }
            console.log(_this.cacheParameterSets.length);
            // this.globalParameterSets = this.cacheParameterSets.filter(item => item.application == "Foundation");    // Filter Foundation param sets on load of page                              
        });
    };
    return TemplateViewComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__pagination_pagination_component__["a" /* PaginationComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], TemplateViewComponent.prototype, "paginationComponent", void 0);
TemplateViewComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-template-view',
        template: __webpack_require__(212),
        styles: [__webpack_require__(236)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__templates_list_template_service__["a" /* TemplateService */], __WEBPACK_IMPORTED_MODULE_8__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"]])
], TemplateViewComponent);



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagination_pagination_component__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesListComponent; });





var TemplatesListComponent = (function () {
    function TemplatesListComponent(router, templateService) {
        this.router = router;
        this.templateService = templateService;
        this.templates = [];
    }
    TemplatesListComponent.prototype.ngOnInit = function () {
        this.getTemplates();
    };
    TemplatesListComponent.prototype.getTemplates = function () {
        var _this = this;
        this.templateService.get_templates().subscribe(function (data) {
            _this.templates = data;
            _this.paginationComponent.exportTableList = _this.templates;
            _this.paginationComponent.initz();
            console.log(data);
        });
    };
    TemplatesListComponent.prototype.onClickUpdate = function (template) {
        console.log(template.uuid);
        console.log(template.name);
        localStorage.removeItem("templateToUpdate");
        localStorage.setItem("templateToUpdate", JSON.stringify(template));
        this.router.navigate(['templates/edit']);
    };
    /**
   * delete existing import task by id
   * @param id
   */
    TemplatesListComponent.prototype.onClickDelete = function (id) {
        var _this = this;
        if (confirm(' Are you sure, you want to Delete?')) {
            this.templateService.deleteTemplate(id).then(function () {
                _this.templateService.get_templates().subscribe(function (response) {
                    _this.templates = response,
                        _this.paginationComponent.exportTableList = _this.templates;
                    _this.paginationComponent.initz();
                });
            });
        }
        else {
            this.router.navigate(['/templates']);
        }
    };
    TemplatesListComponent.prototype.getItems = function () {
        return this.paginationComponent.getItems();
    };
    return TemplatesListComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__pagination_pagination_component__["a" /* PaginationComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], TemplatesListComponent.prototype, "paginationComponent", void 0);
TemplatesListComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-templates-list',
        template: __webpack_require__(213),
        styles: [__webpack_require__(237)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__template_service__["a" /* TemplateService */]])
], TemplatesListComponent);



/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(0);

/***/ }),
/* 72 */,
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(134);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(136);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(189);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(2);

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(203);

/***/ }),
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(636);

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(647);

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(673);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routing_module__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__export_pcd_export_pcd_component__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__export_pcd_export_pcd_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pagination_pagination_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__excel_style_settings_excel_style_settings_component__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__import_pcd_import_pcd_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__import_pcd_import_pcd_component__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__schedule_export_schedule_export_create_schedule_export_create_component__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__schedule_export_schedule_export_edit_schedule_export_edit_component__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__schedule_export_scheduled_exports_schedule_export_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__schedule_import_schedule_import_copy_schedule_import_copy_component__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__schedule_import_schedule_import_create_schedule_import_create_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__schedule_import_schedule_import_edit_schedule_import_edit_component__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__schedule_import_schedule_import_view_schedule_import_view_component__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__schedule_import_scheduled_imports_scheduled_imports_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__schedule_import_scheduled_imports_scheduled_imports_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__side_menu_side_menu_component__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__store_reducers_exportPCD_reducer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__schedule_export_scheduled_exports_scheduled_exports_component__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__schedule_export_schedule_export_copy_schedule_export_copy_component__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__schedule_export_schedule_export_view_schedule_export_view_component__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ngrx_store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ngrx_store_devtools__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ngrx_store_log_monitor__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__import_completed_import_completed_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__import_completed_import_completed_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__import_inprogress_import_inprogress_list_import_inprogress_list_component__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__import_inprogress_import_task_inprogress_import_task_inprogress_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__import_inprogress_import_inprogress_list_import_inprogress_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__templates_list_templates_list_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__template_create_template_create_component__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__templates_list_template_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__template_edit_template_edit_component__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__template_view_template_view_component__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__template_copy_template_copy_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_mydatepicker__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ngx_order_pipe__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43_ngx_order_pipe__);
/* unused harmony export instrumentOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });




















// import { Ng2OrderModule } from 'ng2-order-pipe';





//Todo import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



















function instrumentOptions() {
    return {
        monitor: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_30__ngrx_store_log_monitor__["a" /* useLogMonitor */])({ visible: true, position: 'right' })
    };
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__export_pcd_export_pcd_component__["a" /* ExportPcdComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pagination_pagination_component__["a" /* PaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_20__side_menu_side_menu_component__["a" /* SideMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_17__schedule_import_schedule_import_view_schedule_import_view_component__["a" /* ScheduleImportViewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__schedule_import_schedule_import_create_schedule_import_create_component__["a" /* ScheduleImportCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_16__schedule_import_schedule_import_edit_schedule_import_edit_component__["a" /* ScheduleImportEditComponent */],
            __WEBPACK_IMPORTED_MODULE_18__schedule_import_scheduled_imports_scheduled_imports_component__["a" /* ScheduledImportsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__schedule_import_schedule_import_copy_schedule_import_copy_component__["a" /* ScheduleImportCopyComponent */],
            __WEBPACK_IMPORTED_MODULE_11__schedule_export_schedule_export_create_schedule_export_create_component__["a" /* ScheduleExportCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_12__schedule_export_schedule_export_edit_schedule_export_edit_component__["a" /* ScheduleExportEditComponent */],
            __WEBPACK_IMPORTED_MODULE_25__schedule_export_scheduled_exports_scheduled_exports_component__["a" /* ScheduledExportsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__schedule_export_schedule_export_copy_schedule_export_copy_component__["a" /* ScheduleExportCopyComponent */],
            __WEBPACK_IMPORTED_MODULE_27__schedule_export_schedule_export_view_schedule_export_view_component__["a" /* ScheduleExportViewComponent */],
            __WEBPACK_IMPORTED_MODULE_10__import_pcd_import_pcd_component__["a" /* ImportPcdComponent */],
            __WEBPACK_IMPORTED_MODULE_33__import_inprogress_import_inprogress_list_import_inprogress_list_component__["a" /* ImportInprogressListComponent */],
            __WEBPACK_IMPORTED_MODULE_34__import_inprogress_import_task_inprogress_import_task_inprogress_component__["a" /* ImportInprogressComponent */],
            __WEBPACK_IMPORTED_MODULE_8__excel_style_settings_excel_style_settings_component__["a" /* ExcelStyleSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_31__import_completed_import_completed_component__["a" /* ImportCompletedComponent */],
            __WEBPACK_IMPORTED_MODULE_36__templates_list_templates_list_component__["a" /* TemplatesListComponent */],
            __WEBPACK_IMPORTED_MODULE_37__template_create_template_create_component__["a" /* TemplateCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_39__template_edit_template_edit_component__["a" /* TemplateEditComponent */],
            __WEBPACK_IMPORTED_MODULE_40__template_view_template_view_component__["a" /* TemplateViewComponent */],
            __WEBPACK_IMPORTED_MODULE_41__template_copy_template_copy_component__["a" /* TemplateCopyComponent */]
        ],
        //Todo NgbModule.forRoot()
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_24__angular_router__["RouterModule"], __WEBPACK_IMPORTED_MODULE_1__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_22__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_23__angular_http__["HttpModule"], __WEBPACK_IMPORTED_MODULE_22__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_28__ngrx_store__["a" /* StoreModule */].provideStore({
                exportPCD: __WEBPACK_IMPORTED_MODULE_21__store_reducers_exportPCD_reducer__["a" /* exportPCDReducer */],
            }),
            __WEBPACK_IMPORTED_MODULE_29__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentStore(instrumentOptions),
            __WEBPACK_IMPORTED_MODULE_30__ngrx_store_log_monitor__["b" /* StoreLogMonitorModule */], __WEBPACK_IMPORTED_MODULE_42_mydatepicker__["MyDatePickerModule"], __WEBPACK_IMPORTED_MODULE_43_ngx_order_pipe__["OrderModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__export_pcd_export_pcd_service__["a" /* ExportPcdService */], __WEBPACK_IMPORTED_MODULE_19__schedule_import_scheduled_imports_scheduled_imports_service__["a" /* ScheduledImportsService */], __WEBPACK_IMPORTED_MODULE_13__schedule_export_scheduled_exports_schedule_export_service__["a" /* ScheduleExportService */], __WEBPACK_IMPORTED_MODULE_9__import_pcd_import_pcd_service__["a" /* ImportPcdService */], __WEBPACK_IMPORTED_MODULE_35__import_inprogress_import_inprogress_list_import_inprogress_service__["a" /* InprogressImportsService */], __WEBPACK_IMPORTED_MODULE_32__import_completed_import_completed_service__["a" /* CompletedImportsService */], __WEBPACK_IMPORTED_MODULE_38__templates_list_template_service__["a" /* TemplateService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(214);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(216);

/***/ }),
/* 109 */,
/* 110 */,
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app',
        template: __webpack_require__(190),
        styles: [__webpack_require__(214)]
    })
], AppComponent);



/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__excel_style_settings_excel_style_settings_component__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__export_pcd_export_pcd_component__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__import_pcd_import_pcd_component__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_export_schedule_export_copy_schedule_export_copy_component__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedule_export_schedule_export_create_schedule_export_create_component__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schedule_export_schedule_export_edit_schedule_export_edit_component__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__schedule_export_schedule_export_view_schedule_export_view_component__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__schedule_export_scheduled_exports_scheduled_exports_component__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__schedule_import_schedule_import_copy_schedule_import_copy_component__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__schedule_import_schedule_import_create_schedule_import_create_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__schedule_import_schedule_import_edit_schedule_import_edit_component__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__schedule_import_schedule_import_view_schedule_import_view_component__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__schedule_import_scheduled_imports_scheduled_imports_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__side_menu_side_menu_component__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__import_completed_import_completed_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__import_inprogress_import_inprogress_list_import_inprogress_list_component__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__import_inprogress_import_task_inprogress_import_task_inprogress_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__templates_list_templates_list_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__template_create_template_create_component__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__template_view_template_view_component__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__template_edit_template_edit_component__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__template_copy_template_copy_component__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });

/**
 * App routing module class
 */
























var routes = [
    { path: 'sidemenu/exportPcd', component: __WEBPACK_IMPORTED_MODULE_2__export_pcd_export_pcd_component__["a" /* ExportPcdComponent */] },
    { path: 'sidemenu', component: __WEBPACK_IMPORTED_MODULE_14__side_menu_side_menu_component__["a" /* SideMenuComponent */] },
    { path: 'importinprogress', component: __WEBPACK_IMPORTED_MODULE_18__import_inprogress_import_inprogress_list_import_inprogress_list_component__["a" /* ImportInprogressListComponent */] },
    { path: 'importcompleted', component: __WEBPACK_IMPORTED_MODULE_17__import_completed_import_completed_component__["a" /* ImportCompletedComponent */] },
    { path: 'exportpcd', component: __WEBPACK_IMPORTED_MODULE_2__export_pcd_export_pcd_component__["a" /* ExportPcdComponent */] },
    { path: 'excelStyleSettings', component: __WEBPACK_IMPORTED_MODULE_1__excel_style_settings_excel_style_settings_component__["a" /* ExcelStyleSettingsComponent */] },
    { path: 'scheduleImport', component: __WEBPACK_IMPORTED_MODULE_13__schedule_import_scheduled_imports_scheduled_imports_component__["a" /* ScheduledImportsComponent */] },
    { path: 'scheduleImport/create', component: __WEBPACK_IMPORTED_MODULE_10__schedule_import_schedule_import_create_schedule_import_create_component__["a" /* ScheduleImportCreateComponent */] },
    { path: 'scheduleImport/edit/:id', component: __WEBPACK_IMPORTED_MODULE_11__schedule_import_schedule_import_edit_schedule_import_edit_component__["a" /* ScheduleImportEditComponent */] },
    { path: 'scheduleImport/view/:id', component: __WEBPACK_IMPORTED_MODULE_12__schedule_import_schedule_import_view_schedule_import_view_component__["a" /* ScheduleImportViewComponent */] },
    { path: 'scheduleImport/copy/:id', component: __WEBPACK_IMPORTED_MODULE_9__schedule_import_schedule_import_copy_schedule_import_copy_component__["a" /* ScheduleImportCopyComponent */] },
    { path: 'scheduleExport', component: __WEBPACK_IMPORTED_MODULE_8__schedule_export_scheduled_exports_scheduled_exports_component__["a" /* ScheduledExportsComponent */] },
    { path: 'scheduleExport/create', component: __WEBPACK_IMPORTED_MODULE_5__schedule_export_schedule_export_create_schedule_export_create_component__["a" /* ScheduleExportCreateComponent */] },
    { path: 'scheduleExport/edit/:id', component: __WEBPACK_IMPORTED_MODULE_6__schedule_export_schedule_export_edit_schedule_export_edit_component__["a" /* ScheduleExportEditComponent */] },
    { path: 'scheduleExport/view/:id', component: __WEBPACK_IMPORTED_MODULE_7__schedule_export_schedule_export_view_schedule_export_view_component__["a" /* ScheduleExportViewComponent */] },
    { path: 'scheduleExport/copy/:id', component: __WEBPACK_IMPORTED_MODULE_4__schedule_export_schedule_export_copy_schedule_export_copy_component__["a" /* ScheduleExportCopyComponent */] },
    { path: 'importpcd', component: __WEBPACK_IMPORTED_MODULE_3__import_pcd_import_pcd_component__["a" /* ImportPcdComponent */] },
    { path: 'importinprogress/:id', component: __WEBPACK_IMPORTED_MODULE_19__import_inprogress_import_task_inprogress_import_task_inprogress_component__["a" /* ImportInprogressComponent */] },
    { path: "templates", component: __WEBPACK_IMPORTED_MODULE_20__templates_list_templates_list_component__["a" /* TemplatesListComponent */] },
    // { path: "template/:id", component: TemplateViewComponent },
    { path: "templates/create", component: __WEBPACK_IMPORTED_MODULE_21__template_create_template_create_component__["a" /* TemplateCreateComponent */] },
    { path: "templates/view/:id", component: __WEBPACK_IMPORTED_MODULE_22__template_view_template_view_component__["a" /* TemplateViewComponent */] },
    { path: "templates/edit/:id", component: __WEBPACK_IMPORTED_MODULE_23__template_edit_template_edit_component__["a" /* TemplateEditComponent */] },
    { path: "templates/copy/:id", component: __WEBPACK_IMPORTED_MODULE_24__template_copy_template_copy_component__["a" /* TemplateCopyComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_16__angular_router__["RouterModule"].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_16__angular_router__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(86);
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/*
 * Angular bootstraping
 */

// import { decorateModuleRef } from './app/environment';

/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then()
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__["bootloader"])(main);


/***/ }),
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "/* .tab {\r\n    height: 100%; */\r\n/*     width: 500px; */\r\n/*     position: fixed; */\r\n    /* z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n}\r\n\r\n.tab-color {\r\n color: white;\r\n} */\r\n", ""]);

// exports


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 0px;\r\n    border-width: 3px;\r\n}\r\n\r\n.header {\r\n     height: 50px;\r\n}\r\n\r\n.content {\r\n vertical-align: middle;\r\n}\r\n\r\n", ""]);

// exports


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "/* body > .row {\r\n    width: 100%;\r\n}\r\n\r\n.row .export-pcd{\r\n\tfont-family: serif;\r\n}\r\n\r\n.content {\r\n\tpadding-left: 150px;\r\n}\r\n.label {\r\n    color:#337ab7;\r\n    display:flex;\r\n    align-items: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.existingTemplateLabel {\r\n    margin-left: 85px;\r\n    font-weight: normal;\r\n}\r\n.option {\r\n width:150px;   \r\n}\r\n\r\n.line { \r\nborder-color: #337ab7;\r\nborder-width: 3px;\r\nwidth: 95%;\r\nmargin-left: 0px;\r\n}\r\n\r\n.exportSelectDisable {\r\n    background: #dddddd;\r\n    cursor:none;\r\n} */\r\n", ""]);

// exports


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "/* \r\n.required label:before {\r\n    color: red;\r\n    content: ' *';\r\n    display:inline;\r\n}\r\n#bloc1, #bloc2, #bloc3\r\n{\r\n    display:inline;\r\n}\r\n\r\n#table {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\n#table td, #table th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\n#table tr:nth-child(even){background-color: #F8FAFB;}\r\n\r\n\r\n\r\n#table th {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    text-align: left;\r\n    background-color: #f2f2f2;\r\n    color: #79B9E1;\r\n} */", ""]);

// exports


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "/* .pagination {\r\n margin: 0px !important; \r\n }\r\n \r\n.table .header {\r\n    color:#337ab7;\r\n}\r\n\r\n.panel-default>.panel-heading {\r\n    background-color: #ccc;\r\n} */", ""]);

// exports


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".line { \r\nborder-color: #337ab7;\r\nborder-width: 3px;\r\nwidth: 100%;\r\nmargin-left: 0px;\r\n}\r\n\r\n.required label:before {\r\n    color: red;\r\n    content: ' *';\r\n    display:inline;\r\n}\r\n#bloc1, #bloc2, #bloc3\r\n{\r\n    display:inline;\r\n}\r\n\r\n#table {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\n#table td, #table th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\n#table tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#table tr:hover {background-color: #ddd;}\r\n\r\n#table th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #f2f2f2;\r\n    color: black;\r\n}", ""]);

// exports


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".line { \r\nborder-color: #337ab7;\r\nborder-width: 3px;\r\nwidth: 100%;\r\nmargin-left: 0px;\r\n}\r\n\r\n.required label:before {\r\n    color: red;\r\n    content: ' *';\r\n    display:inline;\r\n}\r\n#bloc1, #bloc2, #bloc3\r\n{\r\n    display:inline;\r\n}\r\n\r\n#table {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\n#table td, #table th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\n#table tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#table tr:hover {background-color: #ddd;}\r\n\r\n#table th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #f2f2f2;\r\n    color: black;\r\n}", ""]);

// exports


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".line { \r\nborder-color: #337ab7;\r\nborder-width: 3px;\r\nwidth: 100%;\r\nmargin-left: 0px;\r\n}\r\n\r\n.required label:before {\r\n    color: red;\r\n    content: ' *';\r\n    display:inline;\r\n}\r\n#bloc1, #bloc2, #bloc3\r\n{\r\n    display:inline;\r\n}\r\n\r\n#table {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\n#table td, #table th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\n#table tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#table tr:hover {background-color: #ddd;}\r\n\r\n#table th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #f2f2f2;\r\n    color: black;\r\n}", ""]);

// exports


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".line { \r\nborder-color: #337ab7;\r\nborder-width: 3px;\r\nwidth: 100%;\r\nmargin-left: 0px;\r\n}\r\n\r\n.required label:before {\r\n    color: red;\r\n    content: ' *';\r\n    display:inline;\r\n}\r\n#bloc1, #bloc2, #bloc3\r\n{\r\n    display:inline;\r\n}\r\n\r\n#table {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\n#table td, #table th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\n#table tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#table tr:hover {background-color: #ddd;}\r\n\r\n#table th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #f2f2f2;\r\n    color: black;\r\n}", ""]);

// exports


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "#table {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\n#table td, #table th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\n#table tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#table tr:hover {background-color: #ddd;}\r\n\r\n#table th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #f2f2f2;\r\n    color: black;\r\n}", ""]);

// exports


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\r\n.required label:before {\r\n    color: red;\r\n    content: ' *';\r\n    display:inline;\r\n}\r\n#bloc1, #bloc2, #bloc3\r\n{\r\n    display:inline;\r\n}", ""]);

// exports


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".row{\r\n\tdisplay: flex\r\n}\r\n\r\n.required label:before {\r\n    color: red;\r\n    content: ' *';\r\n    display:inline;\r\n}\r\n#bloc1, #bloc2, #bloc3\r\n{\r\n    display:inline;\r\n}", ""]);

// exports


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\r\n.required label:before {\r\n    color: red;\r\n    content: ' *';\r\n    display:inline;\r\n}\r\n#bloc1, #bloc2, #bloc3\r\n{\r\n    display:inline;\r\n}", ""]);

// exports


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "#bloc1, #bloc2, #bloc3\r\n{\r\n    display:inline;\r\n}", ""]);

// exports


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "#table {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\n#table td, #table th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\n#table tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#table tr:hover {background-color: #ddd;}\r\n\r\n#table th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #f2f2f2;\r\n    color: black;\r\n}", ""]);

// exports


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "body {\r\n    font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n.sidenav {\r\n    height: 100%;\r\n    width: 200px;\r\n    position: relative;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n/*     background-color: #111; */\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 15px 8px 6px 4px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: #337ab7;\r\n    display: block;\r\n    text-decoration: underline;\r\n}\r\n\r\n.sidenav a:hover {\r\n    color: #f1f1f1;\r\n}\r\n\r\n.main {\r\n    margin-left: 160px; /* Same as the width of the sidenav */\r\n    font-size: 28px; /* Increased text to enable scrolling */\r\n    padding: 0px 10px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}", ""]);

// exports


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul> -->\r\n\r\n\r\n<!-- <div class=\"container\">\r\n  <h3> Test Tabs With  Menu</h3>\r\n  <ul class=\"nav nav-tabs\">\r\n    <li><a href=\"#\">TestTabMenu 1</a></li>\r\n    <li><a href=\"#\">TestTabMenu 2</a></li>\r\n    <li class=\"dropdown\">\r\n      <a class=\"dropdown-toggle active\" data-toggle=\"dropdown\" href=\"#\">MASS MAINTENANCE  \r\n        </a>-->\r\n      <!--<span class=\"caret\"></span>  --> \r\n      <!-- <ul class=\"dropdown-menu\"> -->\r\n        <!-- <li><a href=\"#\">Manage Template</a></li> -->\r\n        <!-- li><a href=\"sidemenu\">Perform Mass Maintenance</a></li-->\r\n        <!-- <li><a [routerLink]=\"['sidemenu']\">Perform Mass Maintenance</a></li>                   \r\n      </ul>\r\n    </li>\r\n  </ul>\r\n</div> -->\r\n\r\n<div id=\"wrapper\">\r\n<div id=\"header\"> \r\n  <!-- start header -->\r\n  <div class=\"headermenu\">\r\n    <div class=\"logo\"><img src=\"../../assets/images_icons/logo.png\" alt=\"Logo\"  height=\"60\" width=\"171\"/></div>\r\n    <div class=\"navigation\">\r\n      <ul class=\"main_navigation\">\r\n      <!--  <li><a href=\"#\">Home</a></li>\r\n        <li><a href=\"#\">Customer</a></li>\r\n        <li><a href=\"#\">Deposits</a></li> -->\r\n        <li><a href=\"#\" class=\"active\">Product &amp; Parameter Master</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"headercontent\">\r\n    <div class=\"headercontent_area\">\r\n      <div class=\"header_username\"> <img src=\"../../assets/images_icons/user_image.png\" width=\"20px\" height=\"20px\" alt=\"Username\"> <span>John Doe</span> </div>\r\n      <div class=\"header_help\"> <img src=\"../../assets/images_icons/help_icon.png\" height=\"16\" width=\"16\" alt=\"Help\"> </div>\r\n      <div class=\"header_logout\">Logout</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"headersubmenu\">\r\n    <div class=\"navigation\" style=\"margin-left: -33px;\">\r\n      <ul class=\"main_navigation\">\r\n        <li><a href=\"#\" class=\"width240\">Mass Maintenance</a>\r\n          <ul>\r\n            <li><a [routerLink]=\"['templates']\">Manage Template</a></li>\r\n            <li><a [routerLink]=\"['importinprogress']\">Perform Mass Maintenance</a></li>\r\n             </ul>\r\n                </li>\r\n               \r\n              </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- end header -->\r\n\r\n <router-outlet></router-outlet>\r\n"

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = "\r\n<head>\r\n<style>\r\n.color-select {\r\n\tposition: relative;\r\n\tfont-family: Arial;\r\n\tclear:inherit !important\r\n}\r\n.color-select_area {\r\n\tfont-family: Arial;\r\n\tfont-size: 14px;\r\n\tpadding:5px;\r\n\tbox-sizing: border-box;\r\n\tborder: 1px solid #ccc;\r\n}\r\n\r\n.color-picker {\r\n\tfloat:right;\r\n\twidth: 10px;\r\n\theight: 20px;\r\n\tmargin-right:16px;\r\n\tbackground:#A82D2F;\r\n\tborder: 1px solid #cccccc;\r\n\tbottom: 2px;\r\n}\r\n.color-select_area:after {\r\n\tposition: absolute;\r\n\tcontent: \"\";\r\n\ttop: 18px;\r\n\tright: 14px;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder: 5px solid transparent;\r\n\tborder-color: #979797 transparent transparent transparent;\r\n}\r\n.bcPicker-picker {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n}\r\n.bcPicker-palette {\r\n\twidth: 160px;\r\n\tposition: absolute;\r\n\ttop: 30px;\r\n\tright:15px;\r\n\tpadding: 5px;\r\n\tborder: 10px solid #ececec;\r\n\tbackground-color: #fdfdfd;\r\n\tz-index: 10;\r\n\tdisplay: none;\r\n}\r\n.bcPicker-palette > .bcPicker-color {\r\n\twidth: 14px;\r\n\theight: 14px;\r\n\tmargin: 2px;\r\n\tdisplay: inline-block;\r\n\tborder: 1px solid #efefef;\r\n}\r\n.middle-hex span {\r\n\tcolor: #292929;\r\n\tmargin-left: 10px;\r\n}\r\n.bcPicker-palette {\r\n\ttop: 25px !important;\r\n}\r\n\r\n.display-inline {\r\n\tdisplay: inline-block;\r\n}\r\n\r\n</style>\r\n</head>\r\n\r\n<!-- start wrapper -->\r\n\r\n\r\n  <!-- end header -->\r\n  <div class=\"container\">\r\n    <app-side-menu></app-side-menu>\r\n    <!-- end left panel -->\r\n  \r\n    <!-- start right panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li>Perform Mass Maintenance</li>\r\n          <li>Excel Style Setting</li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <h1>Excel Style Setting</h1>\r\n        <div class=\"content_area\">\r\n          <div class=\"datatable\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\" width=\"10%\"><a href=\"#\">Location</a></th>\r\n                  <th scope=\"col\" width=\"44%\"><a href=\"#\">Information</a></th>\r\n                  <th scope=\"col\" width=\"10%\"><a href=\"#\">Font Type</a></th>\r\n                  <th scope=\"col\" width=\"10%\"><a href=\"#\">Style</a></th>\r\n                  <th scope=\"col\" width=\"6%\"><a href=\"#\">Size</a></th>\r\n                  <th scope=\"col\" width=\"10%\"><a href=\"#\">Foreground Font Color</a></th>\r\n                  <th scope=\"col\"  width=\"10%\"><a href=\"#\">Background Cell Color</a></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td>Title Row</td>\r\n                  <td>Parameter Set Name and Address</td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">Calibiri</option>\r\n                      </select>\r\n                    </div></td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">Normal</option>\r\n                        <option value=\"0\">Bold</option>\r\n                        <option value=\"0\">Italic</option>\r\n                      </select>\r\n                    </div></td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">11</option>\r\n                        <option value=\"0\">12</option>\r\n                        <option value=\"0\">13</option>\r\n                        <option value=\"0\">14</option>\r\n                        <option value=\"0\">15</option>\r\n                      </select>\r\n                    </div></td>\r\n                  <td class=\"color-select\" style=\"clear:both\"><div class=\"color-select_area\"> Color<span id=\"bcPicker1\" class=\"color-picker\"></span>\r\n                      <div class=\"middle-hex display-inline\"></div>\r\n                    </div></td>\r\n                  <td class=\"color-select\" style=\"clear:both\"><div class=\"color-select_area\"> Color<span id=\"bcPicker2\" class=\"color-picker\"></span>\r\n                      <div class=\"middle-hex display-inline\"></div>\r\n                    </div></td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Heading Row</td>\r\n                  <td>Keys - Mandatory</td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">Calibiri</option>\r\n                      </select>\r\n                    </div></td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">Normal</option>\r\n                        <option value=\"0\">Bold</option>\r\n                        <option value=\"0\">Italic</option>\r\n                      </select>\r\n                    </div></td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">11</option>\r\n                        <option value=\"0\">12</option>\r\n                        <option value=\"0\">13</option>\r\n                        <option value=\"0\">14</option>\r\n                        <option value=\"0\">15</option>\r\n                      </select>\r\n                    </div></td>\r\n                   <td class=\"color-select\"><div class=\"color-select_area\" > Color<span id=\"bcPicker3\" class=\"color-picker\"></span>\r\n                      <div class=\"middle-hex display-inline\"></div>\r\n                    </div></td>\r\n                  <td class=\"color-select\"><div class=\"color-select_area\"> Color<span id=\"bcPicker4\" class=\"color-picker\"></span>\r\n                      <div class=\"middle-hex display-inline\"></div>\r\n                    </div></td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Heading Row</td>\r\n                  <td>Keys - Optional</td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">Calibiri</option>\r\n                      </select>\r\n                    </div></td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">Normal</option>\r\n                        <option value=\"0\">Bold</option>\r\n                        <option value=\"0\">Italic</option>\r\n                      </select>\r\n                    </div></td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">11</option>\r\n                        <option value=\"0\">12</option>\r\n                        <option value=\"0\">13</option>\r\n                        <option value=\"0\">14</option>\r\n                        <option value=\"0\">15</option>\r\n                      </select>\r\n                    </div></td>\r\n                  <td class=\"color-select\"><div class=\"color-select_area\"> Color<span id=\"bcPicker5\" class=\"color-picker\"></span>\r\n                      <div class=\"middle-hex display-inline\"></div>\r\n                    </div></td>\r\n                  <td class=\"color-select\"><div class=\"color-select_area\"> Color<span id=\"bcPicker6\" class=\"color-picker\"></span>\r\n                      <div class=\"middle-hex display-inline\"></div>\r\n                    </div></td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Data Row</td>\r\n                  <td>Odd Numbered</td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">Calibiri</option>\r\n                      </select>\r\n                    </div></td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">Normal</option>\r\n                        <option value=\"0\">Bold</option>\r\n                        <option value=\"0\">Italic</option>\r\n                      </select>\r\n                    </div></td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">11</option>\r\n                        <option value=\"0\">12</option>\r\n                        <option value=\"0\">13</option>\r\n                        <option value=\"0\">14</option>\r\n                        <option value=\"0\">15</option>\r\n                      </select>\r\n                    </div></td>\r\n                  <td class=\"color-select\"><div class=\"color-select_area\"> Color<span id=\"bcPicker7\" class=\"color-picker\"></span>\r\n                      <div class=\"middle-hex display-inline\"></div>\r\n                    </div></td>\r\n                  <td class=\"color-select\"><div class=\"color-select_area\"> Color<span id=\"bcPicker8\" class=\"color-picker\"></span>\r\n                      <div class=\"middle-hex display-inline\"></div>\r\n                    </div></td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Data Row</td>\r\n                  <td>Even Numbered</td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">Calibiri</option>\r\n                      </select>\r\n                    </div></td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">Normal</option>\r\n                        <option value=\"0\">Bold</option>\r\n                        <option value=\"0\">Italic</option>\r\n                      </select>\r\n                    </div></td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">11</option>\r\n                        <option value=\"0\">12</option>\r\n                        <option value=\"0\">13</option>\r\n                        <option value=\"0\">14</option>\r\n                        <option value=\"0\">15</option>\r\n                      </select>\r\n                    </div></td>\r\n                  <td class=\"color-select\"><div class=\"color-select_area\"> Color<span id=\"bcPicker9\" class=\"color-picker\"></span>\r\n                      <div class=\"middle-hex display-inline\"></div>\r\n                    </div></td>\r\n                  <td class=\"color-select\"><div class=\"color-select_area\"> Color<span id=\"bcPicker10\" class=\"color-picker\"></span>\r\n                      <div class=\"middle-hex display-inline\"></div>\r\n                    </div></td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Heading Row</td>\r\n                  <td>Interested Rate Matrix - Extended Tier Data Cells</td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">Calibiri</option>\r\n                      </select>\r\n                    </div></td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">Normal</option>\r\n                        <option value=\"0\">Bold</option>\r\n                        <option value=\"0\">Italic</option>\r\n                      </select>\r\n                    </div></td>\r\n                  <td><div class=\"custom-select\">\r\n                      <select>\r\n                        <option value=\"0\">11</option>\r\n                        <option value=\"0\">12</option>\r\n                        <option value=\"0\">13</option>\r\n                        <option value=\"0\">14</option>\r\n                        <option value=\"0\">15</option>\r\n                      </select>\r\n                    </div></td>\r\n                  <td class=\"color-select\"><div class=\"color-select_area\"> Color<span id=\"bcPicker11\" class=\"color-picker\"></span>\r\n                      <div class=\"middle-hex display-inline\"></div>\r\n                    </div></td>\r\n                  <td class=\"color-select\"><div class=\"color-select_area\"> Color<span id=\"bcPicker12\" class=\"color-picker\"></span>\r\n                      <div class=\"middle-hex display-inline\"></div>\r\n                    </div></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <!-- end content --> \r\n    </div>\r\n    <!-- end right panel --> \r\n  </div>\r\n  <!-- end container --> \r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer --> \r\n  \r\n\r\n<!-- end wrapper --> \r\n"

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n  \r\n  <!-- end header -->\r\n  <div class=\"container\">\r\n    <app-side-menu></app-side-menu>\r\n    <!-- end left panel -->\r\n\r\n    <!-- start right panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li>Perform Mass Maintenance</li>\r\n          <li>Export Tasks</li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <h1>Real time-Export</h1>\r\n        <div class=\"content_box_new\">\r\n          <div class=\"column_spacing\">\r\n            <div class=\"floatLeft\">\r\n              <label class=\"radio\">\r\n                <input [(ngModel)]=\"exportSelection\" type=\"radio\" id=\"newExportRadioBtn\" name=\"exportSelection\" value=\"new\"\r\n                (click)='enableDisbale(1)'>\r\n                Your Selection <span class=\"check_mark \"></span></label>\r\n            </div>\r\n            <div class=\"floatLeft marginleft20\">\r\n              <label class=\"radio\">\r\n                <input [(ngModel)]=\"exportSelection\" type=\"radio\" id=\"existExportRadioBtn\" name=\"exportSelection\" (change)=\"getTemplates()\" value=\"exist\" \r\n                (click)='enableDisbale(2)'>\r\n                <span class=\"check_mark \"></span>Use Existing Template</label>\r\n            </div>\r\n            <div class=\"custom-select custom_select_width50 marginleft60\" style=\"margin-top: -5px\">\r\n              <select ngModel (ngModelChange)=\"getParameterSet($event)\" id=\"existingDrpdwn\" class=\"option\" name=\"existingTemplate\"\r\n              value=\"exportSelection\">\r\n                <option *ngFor=\"let templates of templateList\" [value]=\"templates.uuid\">{{templates.name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <form action=\"\" (ngSubmit)=\"exportExcelData(formData.value)\" #formData=\"ngForm\" novalidate=\"novalidate\">\r\n          <div class=\"form_area\">\r\n            <div class=\"form_column\">\r\n              <div class=\"column_spacing1\">\r\n                <div class=\"column_text_drop\">\r\n                  <label for=\"name\">Application</label>\r\n                </div>\r\n                <div class=\"custom-select custom_select_width50 disable_item\">\r\n                  <select id=\"applicationDrpdwn\" class=\"option\" name=\"appName\" (change)=\"appNameChange(appName.value);addExport(0)\"\r\n                  [(ngModel)]=\"exportData.application\" #appName=\"ngModel\" ngModel>\r\n                    <option disabled hidden [value]=\"undefined\"></option>\r\n                    <option *ngFor=\"let application of applicationList\" [value]=\"application.name\">{{application.name}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form_column\">\r\n              <div class=\"column_text_drop\">\r\n                <label for=\"name\">Parameter Set</label>\r\n              </div>\r\n              <div class=\"custom-select custom_select_width30 disable_item \">\r\n                <select id=\"parameterNumDrpdwn\" class=\"option\" name=\"parameterSetNumber\" [(ngModel)]=\"exportData.number\"\r\n                (change)=\"getCompaniesByParamId($event.target.value)\">\r\n                <option disabled hidden [value]=\"undefined\"></option>\r\n                  <option *ngFor=\"let paramSet of parameterSetList\" [value]=\"paramSet.id\" [selected]=\"paramSet.id==changedId\">{{paramSet.id}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"custom-select custom_select_width50 marginleft5 disable_item \">\r\n                <select id=\"parameterNameDrpdwn\" class=\"option\" name=\"parameterSetName\" [(ngModel)]=\"exportData.name\" (change)=\"getCompaniesByParamName($event.target.value)\">\r\n                  <option disabled hidden [value]=\"undefined\"></option>\r\n                  <option *ngFor=\"let paramSet of parameterSetList\" [value]=\"paramSet.name\" [selected]=\"paramSet.name==selectedName\">{{paramSet.name}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form_area\">\r\n            <div class=\"form_column_text\">\r\n              <div class=\"column_spacing2\">\r\n                <label class=\"check_box checkbox_radio_text marginTop10\">Combine multiple company data in Single tab\r\n                  <input type=\"checkbox\" name=\"singleTab\" checked ngModel [(ngModel)]=\"singleTab\">\r\n                  <span class=\"checkmark\"></span> </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"button_lightgrey floatRight\">\r\n              <button type=\"submit\" class=\"width100 marginTop0\">Export</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div class=\"content_border marginTop10\">\r\n          <h1 class=\"marginTop20\">Selected Parameter Sets</h1>\r\n          <div class=\"datatable\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\" width=\"1%\"><a href=\"#\"></a></th>\r\n                  <th scope=\"col\"><label class=\"check_box\"><input type=\"checkbox\" name=\"selectAll\" value=\"\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\">\r\n                  <span class=\"checkmark\"></span></label></th>\r\n                  <th scope=\"col\">Application</th>\r\n                  <th scope=\"col\">Parameter Set Number</th>\r\n                  <th scope=\"col\">Parameter Set Name</th>\r\n                  <th scope=\"col\" class=\"colorBlack\">Company</th>\r\n                  <th scope=\"col\" class=\"colorBlack\">Effective Date</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let paramSet of getItems(); let i = index\">\r\n                  <td><a (click)=\"deleteFieldValue(i)\"> <img src=\"../../assets/images_icons/delete_icon.png\" width=\"20\" height=\"20\"\r\n                        title=\"delete\" alt=\"delete\" style=\"cursor:pointer\"></a></td>\r\n                  <td><label class=\"check_box\">\r\n                      <input type=\"checkbox\" name=\"selectAll\" value=\"\" [(ngModel)]=\"paramSet.selected\" (change)=\"checkIfAllSelected(i);\">\r\n                      <span class=\"checkmark\"></span></label></td>\r\n                  <td>{{paramSet.applicationID}}</td>\r\n                  <td>{{paramSet.number}}</td>\r\n                  <td>{{paramSet.name}}</td>\r\n                  <td *ngIf=\" i === editRowId\">\r\n                    <!-- (ngModelChange)=\"selectedCompanyDp($event)\" -->\r\n                    <select ngModel [(ngModel)]=\"paramSet.companyID\">\r\n                      <!-- <option>All</option> -->\r\n                      <option *ngFor=\"let company of paramSet.companies\" [value]=\"company.id\">{{company.name}}</option>\r\n                    </select>\r\n                  </td>\r\n                  <td *ngIf=\" i !== editRowId\">\r\n                    <select [(ngModel)]=\"paramSet.companyID\">\r\n                      <!-- <option>All</option> -->\r\n                      <option *ngFor=\"let company of paramSet.companies\" [value]=\"company.id\">{{company.name}}</option>\r\n                    </select>\r\n                  </td>\r\n                  <td *ngIf=\" i === editRowId\">\r\n                    <input type=\"text\" id=\"effectiveDate\" name=\"effectiveDate\" class=\"form-control\" [(ngModel)]=\"paramSet.effectiveDate\"\r\n                      ngModel />\r\n                  </td>\r\n                  <td *ngIf=\" i !== editRowId\">\r\n                    <input type=\"text\" id=\"effectiveDate\" name=\"effectiveDate\" class=\"form-control\" [(ngModel)]=\"paramSet.effectiveDate\"\r\n                      ngModel placeholder=\"yyyy-mm-dd\"/>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <p class=\"no_data_desc\" *ngIf=\"!selectedPsets.length > 0\">No Data Available</p>\r\n            <app-pagination [exportTableList]=\"selectedPsets\">Loading...</app-pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- end content -->\r\n    </div>\r\n    <!-- end right panel -->\r\n  </div>\r\n  <!-- end container -->\r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer -->\r\n\r\n<!-- end wrapper -->"

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n  <div class=\"container\">\r\n    <!-- start left panel -->\r\n    <app-side-menu></app-side-menu>\r\n    <!-- end left panel -->\r\n\r\n    <!-- start right panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li>Perform Mass Maintenance</li>\r\n          <li>Import Tasks</li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <h1>Completed</h1>\r\n        <div class=\"content_area\">\r\n          <div class=\"datatable\" *ngIf=\"!onClickContinueBtn\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th width=\"2%\">&nbsp;</th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Task Name</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Task Type</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Created On</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Last Updated By</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Last Updated On</a></th>\r\n                  <th width=\"2%\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let import of completedImports\">\r\n                  <td><label class=\"radio radio_padding_td\">\r\n                      <input type=\"radio\" checked=\"checked\" name=\"radio\" [checked]=\"idx === 0\"  \r\n                      (change)=\"onSelectionChange(import)\">\r\n                      <span class=\"check_mark\"></span> </label></td>\r\n                <td>{{import.name}}</td>\r\n                  <td>{{import.type}}</td>\r\n                  <td>{{import.createdOn}}</td>\r\n                  <td>{{import.modifiedBy}}</td>\r\n                  <td>{{import.modifiedOn}}</td>\r\n                  <td><nav><a class=\"bootstrap-link\" role=\"button\" routerLinkActive=\"active\" (click)=\"deleteCompltedImport(import.uuid)\"><img src=\"../../assets/images_icons/delete_icon.png\" width=\"16\" height=\"16\" alt=\"Delete\"></a></nav></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <!-- <div class=\"pagination\">\r\n              <div class=\"floatLeft\">\r\n                <div class=\"custom-select floatLW120\">\r\n                  <select>\r\n                    <option value=\"0\">Show 5 items</option>\r\n                    <option value=\"1\">5</option>\r\n                    <option value=\"2\">10</option>\r\n                    <option value=\"3\">15</option>\r\n                    <option value=\"4\">20</option>\r\n                    <option value=\"5\">25</option>\r\n                    <option value=\"6\">30</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"pagination_text\">1 to 5 of 30 </div>\r\n              </div>\r\n              <div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\">1</a> <a href=\"#\"\r\n                  class=\"active\">2</a> <a href=\"#\">3</a> <a href=\"#\">4</a> <a href=\"#\">5</a> <a href=\"#\">6</a> <a href=\"#\"\r\n                  class=\"pagination_next\">&raquo;</a> </div>\r\n            </div> -->\r\n            <p class=\"no_data_desc\" *ngIf=\"!completedImports.length > 0\">No Data Available</p>\r\n            <app-pagination [exportTableList]=\"completedImports\">Loading...</app-pagination>\r\n          </div>\r\n          <div class=\"floatRight\" *ngIf=\"!onClickContinueBtn\">\r\n            <div class=\"button_lightgrey floatLeft\">\r\n              <button type=\"button\" routerLinkActive=\"active\" (click)=\"getCompletedImportDetails(selectedImport.uuid)\">Continue</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"floatRight\" *ngIf=\"onClickContinueBtn\">\r\n            <div class=\"button_lightgrey floatLeft\">\r\n              <button type=\"button\" routerLinkActive=\"active\" (click)=\"onClickBack()\">Back</button>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"onClickContinueBtn\">\r\n            <div class=\"content\">\r\n\r\n              <p style=\"color:green\">All Records has been updated successfully.</p>\r\n              <div class=\"column_text form_column_one\">\r\n                <label for=\"name\" class=\"required\">Task Name</label>\r\n                <input type=\"text\" size=\"90\" placeholder=\"Task Name\" id=\"name\" name=\"taskName\" #name=\"ngModel\" [(ngModel)]=\"taskName\"/>\r\n              </div>\r\n              \r\n              <h1>Success Items</h1>\r\n              <div class=\"content_area\" id=\"review\">\r\n                <div class=\"datatable\">\r\n                  <table>\r\n                    <thead>\r\n                      <tr>\r\n                        <th scope=\"col\">Application</th>\r\n                        <th scope=\"col\">PSet Number</th>\r\n                        <th scope=\"col\">PSet Name</th>\r\n                        <th scope=\"col\">Company</th>\r\n                        <th scope=\"col\">PSet Key</th>\r\n                        <th scope=\"col\">Effective Date</th>\r\n                        <th scope=\"col\">Expiry Date</th>\r\n                        <th scope=\"col\">Action</th>\r\n                        <th scope=\"col\">Result</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let param of successItems\">\r\n                          <td>{{param.applicationID}}</td>\r\n                          <td>{{param.psetNumber}}</td>\r\n                          <td>{{param.psetName}}</td>\r\n                          <td>{{param.companyID}}</td>\r\n                          <td>{{param.psetKey}}</td>\r\n                          <td>{{param.effectiveDate}}</td>\r\n                          <td>{{param.expiryDate}}</td>\r\n                        <td class=\"colorBlue\"><a her=\"#\">{{param.action}}</a></td>\r\n                        <td>{{param.result}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                  <!-- <div class=\"pagination\">\r\n                    <div class=\"floatLeft\">\r\n                      <div class=\"custom-select floatLW120\">\r\n                        <select>\r\n                          <option value=\"0\">Show 5 items</option>\r\n                          <option value=\"1\">5</option>\r\n                          <option value=\"2\">10</option>\r\n                          <option value=\"3\">15</option>\r\n                          <option value=\"4\">20</option>\r\n                          <option value=\"5\">25</option>\r\n                          <option value=\"6\">30</option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"pagination_text\">1 to 1 of 1 </div>\r\n                    </div>\r\n                    <div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\" class=\"active\">1</a> <a href=\"#\" class=\"pagination_next\">&raquo;</a>\r\n                    </div>\r\n                  </div> -->\r\n                  <p class=\"no_data_desc\" *ngIf=\"!successItems.length > 0\">No Data Available</p>\r\n                  <app-pagination [exportTableList]=\"successItems\">Loading...</app-pagination>\r\n                </div>\r\n                \r\n              </div>\r\n              <!-- end content page-1 Success-->\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- end content -->\r\n    </div>\r\n    <!-- end right panel -->\r\n  </div>\r\n  <!-- end container -->\r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer -->\r\n\r\n\r\n<!-- end wrapper -->"

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n  <div class=\"container\">\r\n    <!-- start left panel -->\r\n    <app-side-menu></app-side-menu>\r\n    <!-- end left panel -->\r\n\r\n    <!-- start right panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li>Perform Mass Maintenance</li>\r\n          <li>Import Tasks</li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <h1>In Progress</h1>\r\n        <div class=\"content_area\">\r\n          <div class=\"datatable\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th width=\"2%\">&nbsp;</th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Task Name</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Task Type</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Created On</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Last Updated By</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Last Updated On</a></th>\r\n                  <th width=\"2%\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let import of getItems()\">\r\n                  <td><label class=\"radio radio_padding_td\">\r\n                      <input type=\"radio\" checked=\"checked\" name=\"radio\" [checked]=\"idx === 0\"  \r\n                      (change)=\"onSelectionChange(import)\">\r\n                      <span class=\"check_mark\"></span> </label></td>\r\n                <td>{{import.name}}</td>\r\n                  <td>{{import.type}}</td>\r\n                  <td>{{import.createdOn}}</td>\r\n                  <td>{{import.modifiedBy}}</td>\r\n                  <td>{{import.modifiedOn}}</td>\r\n                  <td><nav><a class=\"bootstrap-link\" role=\"button\" routerLinkActive=\"active\" (click)=\"deleteInprogressImport(import.uuid)\"><img src=\"../../assets/images_icons/delete_icon.png\" width=\"16\" height=\"16\" alt=\"Delete\"></a></nav></td>\r\n                </tr>\r\n                \r\n              </tbody>\r\n            </table>\r\n            <!-- <div class=\"pagination\">\r\n              <div class=\"floatLeft\">\r\n                <div class=\"custom-select floatLW120\">\r\n                  <select>\r\n                    <option value=\"0\">Show 5 items</option>\r\n                    <option value=\"1\">5</option>\r\n                    <option value=\"2\">10</option>\r\n                    <option value=\"3\">15</option>\r\n                    <option value=\"4\">20</option>\r\n                    <option value=\"5\">25</option>\r\n                    <option value=\"6\">30</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"pagination_text\">1 to 5 of 30 </div>\r\n              </div>\r\n              <div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\">1</a> <a href=\"#\"\r\n                  class=\"active\">2</a> <a href=\"#\">3</a> <a href=\"#\">4</a> <a href=\"#\">5</a> <a href=\"#\">6</a> <a href=\"#\"\r\n                  class=\"pagination_next\">&raquo;</a> </div>\r\n            </div> -->\r\n            <p class=\"no_data_desc\" *ngIf=\"!InprogressImports.length > 0\">No Data Available</p>\r\n              <app-pagination [exportTableList]=\"InprogressImports\">Loading...</app-pagination>\r\n            \r\n          </div>\r\n          <div class=\"floatRight\">\r\n            <div class=\"button_lightgrey floatLeft\">\r\n              <button type=\"button\" [routerLink]=\"[uuid]\" routerLinkActive=\"active\">Continue</button>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- end content -->\r\n    </div>\r\n    <!-- end right panel -->\r\n  </div>\r\n  <!-- end container -->\r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer -->\r\n\r\n\r\n<!-- end wrapper -->"

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n\t<div class=\"container\">\r\n\t\t<app-side-menu></app-side-menu>\r\n\t\t<!-- end left panel -->\r\n\r\n\t\t<!-- start right panel -->\r\n\t\t<div class=\"right_panel\">\r\n\t\t\t<div class=\"breadcrumbs_area\">\r\n\t\t\t\t<ul class=\"breadcrumb\">\r\n\t\t\t\t\t<li>Mass Maintenance</li>\r\n\t\t\t\t\t<li>Perform Mass Maintenance</li>\r\n\t\t\t\t\t<li>Import Tasks</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<!-- start content Page-1 upload-->\r\n\t\t\t<div class=\"content\">\r\n\t\t\t\t<h1>Real Time-Import</h1>\r\n\t\t\t</div>\r\n\r\n\t\t\t<!-- start content page-2 Reload -->\r\n\t\t\t<div class=\"content\" *ngIf=\"!(failedItems.length == 0)\">\r\n\t\t\t\t<!-- <div class=\"content_area\" id=\"realtime\"> -->\r\n\t\t\t\t\t<form \r\n\t\t\t\t\t\t(ngSubmit)=\"formData.valid && reloadSubmit()\"\r\n\t\t\t\t\t\t#formData=\"ngForm\" novalidate=\"novalidate\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"column_text form_column_one\">\r\n\t\t\t\t\t\t<!-- <h5 style=\"color: red; align-self: left\">Some records has been failed. Please review and submit the failed items.</h5> -->\r\n\t\t\t\t\t\t<label for=\"name\" class=\"required\">Task Name</label>\r\n\t\t\t\t\t\t<input type=\"text\" size=\"90\" name=\"\" placeholder=\"Task Name\" id=\"name\" name=\"taskName\" #name=\"ngModel\" [(ngModel)]=\"taskName\" readonly=\"readonly\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"content_box\">\r\n\t\t\t\t\t\t<div class=\"floatLeft\"><label for=\"avatar\">Please select a file to upload</label><span class=\"button_green marginRL5\">\r\n\t\t\t\t\t\t\t\t<input class=\"font_bold\" type=\"file\" id=\"avatar\" (change)=\"selectFile($event)\" name=\"filePath\" #inputFileName=\"ngModel\"\r\n\t\t\t\t\t\t\t\taccept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\r\n\t\t\t\t\t\t\t\tngModel>\r\n\t\t\t\t\t\t\t</span></div>\r\n\t\t\t\t\t\t<div class=\"button_lightgrey floatRight\">\r\n\t\t\t\t\t\t\t<button class=\"width100\" type=\"button\" [disabled]=\"!selectedFiles\" class=\"btn btn-md btn-default\" (click)=\"importFile($event)\">Reload</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\t<!--  <div class=\"datatable_header\">Slected Record (Deposits - 1643 - Plan Subproducts Default) -->\r\n\r\n\t\t\t\t\t<div class=\"datatable\" *ngIf=\"!importButtonclk\">\r\n\r\n\t\t\t\t\t\t<table>\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\"><a href=\"#\">Parameter Set Number</a></th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\"><a href=\"#\">Parameter Set Name</a></th>\r\n\t\t\t\t\t\t\t\t\t<th colspan=\"4\"><a href=\"#\">Import count</a></th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let parameter of classReference.importPcdCount\">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{parameter.pSetNumber}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{parameter.pSetName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{parameter.importCount}}</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<p class=\"no_data_desc\" *ngIf=\"!classReference.importPcdCount.length > 0\">No Data Available</p>\r\n\t\t\t\t\t\t<!-- <div class=\"pagination\">\r\n\t\t\t\t\t\t\t<div class=\"floatLeft\">\r\n\t\t\t\t\t\t\t\t<div class=\"custom-select floatLW120\">\r\n\t\t\t\t\t\t\t\t\t<select>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Show 5 items</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"1\">5</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"2\">10</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"3\">15</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"4\">20</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"5\">25</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"6\">30</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"pagination_text\">1 to 1 of 1 </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\" class=\"active\">1</a> <a href=\"#\" class=\"pagination_next\">&raquo;</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t<app-pagination [exportTableList]=\"classReference.importPcdCount\">Loading...</app-pagination>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t<div class=\"floatRight\">\r\n\t\t\t\t\t\t\t<div class=\"button_green marginRL5 floatLeft\" *ngIf=\"!importButtonclk && classReference.importPcdCount.length > 0\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\">Submit</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--                 <div class=\"button_green floatRight marginleft10\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"width130\">Cancel</button>\r\n\t\t\t\t\t  </div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<br> <br>\r\n\t\t\t\t\t\t<h1>Failed Items</h1>\r\n\t\t\t\t\t\t<div class=\"datatable\" >\r\n\t\t\t\t\t\t<table class=\"marginTop10\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Application</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Number</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Name</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Company</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Key</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Effective Date</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Expiry Date</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Action</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Result</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let param of failedItems\">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.applicationID}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.psetNumber}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.psetName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.companyID}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.psetKey}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.effectiveDate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.expiryDate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"colorBlue\"><a her=\"#\">{{param.action}}</a></td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.result}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<!-- <div class=\"pagination\">\r\n\t\t\t\t\t\t\t<div class=\"floatLeft\">\r\n\t\t\t\t\t\t\t\t<div class=\"custom-select floatLW120\">\r\n\t\t\t\t\t\t\t\t\t<select>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Show 5 items</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"1\">5</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"2\">10</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"3\">15</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"4\">20</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"5\">25</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"6\">30</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"pagination_text\">1 to 1 of 1 </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\" class=\"active\">1</a> <a href=\"#\" class=\"pagination_next\">&raquo;</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t<app-pagination [exportTableList]=\"failedItems\">Loading...</app-pagination>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<br> <br> <br>\r\n\t\t\t\t\t\t<h1>Success Items</h1>\r\n\t\t\t\t\t\t<div class=\"datatable\" >\r\n\t\t\t\t\t\t<table class=\"marginTop10\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Application</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Number</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Name</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Company</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Key</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Effective Date</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Expiry Date</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Action</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Result</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let param of successItems\">\r\n\t\t\t\t\t\t\t\t\t<td>{{param.applicationID}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{param.psetNumber}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{param.psetName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{param.companyID}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{param.psetKey}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{param.effectiveDate}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{param.expiryDate}}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"colorBlue\"><a her=\"#\">{{param.action}}</a></td>\r\n\t\t\t\t\t\t\t\t\t<td>{{param.result}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- <div class=\"pagination\">\r\n\t\t\t\t\t\t<div class=\"floatLeft\">\r\n\t\t\t\t\t\t\t<div class=\"custom-select floatLW120\">\r\n\t\t\t\t\t\t\t\t<select>\r\n\t\t\t\t\t\t\t\t\t<option value=\"0\">Show 5 items</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"1\">5</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"2\">10</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"3\">15</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"4\">20</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"5\">25</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"6\">30</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"pagination_text\">1 to 5 of 30 </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\">1</a> <a href=\"#\" class=\"pagination_next\">&raquo;</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t\t<app-pagination [exportTableList]=\"successItems\">Loading...</app-pagination>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- </div> -->\r\n\t\t\t</form>\r\n\t\t\t\t<!-- end content page-2 Reload-->\r\n\t\t\t</div>\r\n\r\n\t\t\t<!-- start content Page-3 Success -->\r\n\t\t\t<div class=\"content\" *ngIf=\"submitError && reloadSubmitError && failedItems.length == 0 \">\r\n\r\n\t\t\t\t<p style=\"color:green\">All Records has been updated successfully.</p>\r\n\t\t\t\t<div class=\"column_text form_column_one\">\r\n\t\t\t\t\t<label for=\"name\" class=\"required\">Task Name</label>\r\n\t\t\t\t\t<input type=\"text\" size=\"90\" placeholder=\"Task Name\" id=\"name\" name=\"taskName\" #name=\"ngModel\" [(ngModel)]=\"model.name\"/>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--         <div class=\"content_box\">\r\n\t\t\t\t\t\t\t\t\t  <div class=\"floatLeft\"><span>Please select a file to upload</span><span class=\"button_green marginRL5\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\">Choose File</button>\r\n\t\t\t\t\t\t\t\t\t\t</span><span class=\"font_bold\">download.xls</span></div>\r\n\t\t\t\t\t\t\t\t\t  <div class=\"button_lightgrey floatRight\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"width100\">Import</button>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t<h1>Success Items</h1>\r\n\t\t\t\t<div class=\"content_area\" id=\"review\">\r\n\t\t\t\t\t<div class=\"datatable\">\r\n\t\t\t\t\t\t<table>\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Application</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Number</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Name</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Company</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Key</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Effective Date</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Expiry Date</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Action</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Result</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let param of successItems\">\r\n\t\t\t\t\t\t\t\t\t<td>{{param.applicationID}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{param.psetNumber}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{param.psetName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{param.companyID}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{param.psetKey}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{param.effectiveDate}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{param.expiryDate}}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"colorBlue\"><a her=\"#\">{{param.action}}</a></td>\r\n\t\t\t\t\t\t\t\t\t<td>{{param.result}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<!-- <div class=\"pagination\">\r\n\t\t\t\t\t\t\t<div class=\"floatLeft\">\r\n\t\t\t\t\t\t\t\t<div class=\"custom-select floatLW120\">\r\n\t\t\t\t\t\t\t\t\t<select>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Show 5 items</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"1\">5</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"2\">10</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"3\">15</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"4\">20</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"5\">25</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"6\">30</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"pagination_text\">1 to 1 of 1 </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\" class=\"active\">1</a> <a href=\"#\" class=\"pagination_next\">&raquo;</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t<p class=\"no_data_desc\" *ngIf=\"!successItems.length > 0\">No Data Available</p>\r\n\t\t\t\t\t\t<app-pagination [exportTableList]=\"successItems\">Loading...</app-pagination>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--               <div class=\"floatRight\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"button_lightgrey floatLeft\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\">Submit</button>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t <div class=\"button_green floatRight marginleft10\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"width130\">Cancel</button>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\t  </div> -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- end content page-1 Success-->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end right panel -->\r\n\t</div>\r\n\t<!-- end container -->\r\n\t<!-- Footer start -->\r\n\t<div class=\"push_footer\">&nbsp;</div>\r\n\t<div id=\"footer\">\r\n\t\t<div class=\"footer_area\">\r\n\t\t\t<ul>\r\n\t\t\t\t<li><a href=\"#news\">Contact us</a></li>\r\n\t\t\t\t<li><a href=\"#contact\">Search Center</a></li>\r\n\t\t\t\t<li><a href=\"#about\">Site Map</a></li>\r\n\t\t\t</ul>\r\n\t\t\t<p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n\t\t\t<p> &copy; CeleritiFinTech. All rights reserved</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- end footer -->\r\n\r\n\r\n<!-- end wrapper -->"

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n\t<div class=\"container\">\r\n\t\t<app-side-menu></app-side-menu>\r\n\t\t<!-- end left panel -->\r\n\r\n\t\t<!-- start right panel -->\r\n\t\t<div class=\"right_panel\">\r\n\t\t\t<div class=\"breadcrumbs_area\">\r\n\t\t\t\t<ul class=\"breadcrumb\">\r\n\t\t\t\t\t<li>Mass Maintenance</li>\r\n\t\t\t\t\t<li>Perform Mass Maintenance</li>\r\n\t\t\t\t\t<li>Import Tasks</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<!-- start content Page-1 upload-->\r\n\t\t\t<div class=\"content\">\r\n\t\t\t\t<h1>Real Time-Import</h1>\r\n\t\t\t\t<form (ngSubmit)=\"formData.valid && importSubmit()\" #formData=\"ngForm\" novalidate=\"novalidate\">\r\n\t\t\t\t\t<div *ngIf=\"!formData.submitted\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"column_text form_column_one\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\" class=\"required\">Task Name</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" size=\"90\" placeholder=\"Task Name\" id=\"name\" name=\"taskName\" #name=\"ngModel\" [(ngModel)]=\"model.name\"/>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"content_box\">\r\n\t\t\t\t\t\t\t\t<div class=\"floatLeft\"><label for=\"avatar\">Please select a file to upload</label><span class=\"button_green marginRL5\">\r\n\t\t\t\t\t\t\t\t\t\t<input class=\"font_bold\" type=\"file\" id=\"avatar\" (change)=\"selectFile($event)\" name=\"filePath\" #inputFileName=\"ngModel\" [(ngModel)]=\"model.inputFileName\"\r\n\t\t\t\t\t\t\t\t\t\taccept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\r\n\t\t\t\t\t\t\t\t\t\tngModel style=\"font-size: 14px;\">\r\n\t\t\t\t\t\t\t\t\t</span></div>\r\n\t\t\t\t\t\t\t\t<div class=\"button_lightgrey floatRight\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"!selectedFiles\" (click)=\"importFile($event)\" class=\"width100\">Import</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"content_area\" id=\"review\">\r\n\t\t\t\t\t\t\t<div class=\"datatable\">\r\n\t\t\t\t\t\t\t\t<table>\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th scope=\"col\"><a href=\"#\">Parameter Set Number</a></th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th scope=\"col\"><a href=\"#\">Parameter Set Name</a></th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th colspan=\"4\"><a href=\"#\">Import count</a></th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let parameter of classReference.importPcdCount\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{parameter.pSetNumber}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{parameter.pSetName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{parameter.importCount}} Records imported</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t<p class=\"no_data_desc\" *ngIf=\"!classReference.importPcdCount.length > 0\">No Data Available</p>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"pagination\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"floatLeft\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"custom-select floatLW120\">\r\n\t\t\t\t\t\t\t\t\t\t\t<select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Show 5 items</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">5</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">10</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">15</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">20</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"5\">25</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"6\">30</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"pagination_text\">1 to 1 of 1 </div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\" class=\"active\">1</a>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"pagination_next\">&raquo;</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t<app-pagination [exportTableList]=\"classReference.importPcdCount\">Loading...</app-pagination>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"floatRight\">\r\n\t\t\t\t\t\t\t\t<div class=\"button_green marginRL5 floatLeft\" *ngIf=\"!importButtonclk && classReference.importPcdCount.length > 0\" id=\"bloc1\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"submit\">Submit</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!--         <div class=\"button_green floatRight marginleft10\">\r\n            <button type=\"submit\" class=\"width130\">Cancel</button>\r\n          </div> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t\t<!-- end content page-1 Upload-->\r\n\t\t\t</div>\r\n\r\n\t\t\t<!-- start content page-2 Reload -->\r\n\t\t\t<div class=\"content\" *ngIf=\"formData.submitted && !(failedItems.length == 0)\">\r\n\t\t\t\t<!-- <div class=\"content_area\" id=\"realtime\"> -->\r\n\t\t\t\t\t<form \r\n\t\t\t\t\t\t(ngSubmit)=\"formData.valid && reloadSubmit()\"\r\n\t\t\t\t\t\t#formData=\"ngForm\" novalidate=\"novalidate\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"column_text form_column_one\">\r\n\t\t\t\t\t\t<h5 style=\"color: red; align-self: left\">Some records has been failed. Please review and submit the failed items.</h5>\r\n\t\t\t\t\t\t<label for=\"name\" class=\"required\">Task Name</label>\r\n\t\t\t\t\t\t<input type=\"text\" size=\"90\" name=\"\" placeholder=\"Task Name\" id=\"name\" name=\"taskName\" #name=\"ngModel\" [(ngModel)]=\"model.name\" readonly=\"readonly\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"content_box\">\r\n\t\t\t\t\t\t<div class=\"floatLeft\"><label for=\"avatar\">Please select a file to upload</label><span class=\"button_green marginRL5\">\r\n\t\t\t\t\t\t\t\t<input class=\"font_bold\" type=\"file\" id=\"avatar\" (change)=\"selectFile($event)\" name=\"filePath\" #inputFileName=\"ngModel\"\r\n\t\t\t\t\t\t\t\taccept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\r\n\t\t\t\t\t\t\t\tngModel>\r\n\t\t\t\t\t\t\t</span></div>\r\n\t\t\t\t\t\t<div class=\"button_lightgrey floatRight\">\r\n\t\t\t\t\t\t\t<button class=\"width100\" type=\"button\" [disabled]=\"!selectedFiles\" class=\"btn btn-md btn-default\" (click)=\"importFile($event)\">Reload</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\t<!--  <div class=\"datatable_header\">Slected Record (Deposits - 1643 - Plan Subproducts Default) -->\r\n\r\n\t\t\t\t\t<div class=\"datatable\" *ngIf=\"!importButtonclk\">\r\n\r\n\t\t\t\t\t\t<table>\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\"><a href=\"#\">Parameter Set Number</a></th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\"><a href=\"#\">Parameter Set Name</a></th>\r\n\t\t\t\t\t\t\t\t\t<th colspan=\"4\"><a href=\"#\">Import count</a></th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let parameter of classReference.importPcdCount\">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{parameter.pSetNumber}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{parameter.pSetName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{parameter.importCount}}</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<p class=\"no_data_desc\" *ngIf=\"!classReference.importPcdCount.length > 0\">No Data Available</p>\r\n\t\t\t\t\t\t<!-- <div class=\"pagination\">\r\n\t\t\t\t\t\t\t<div class=\"floatLeft\">\r\n\t\t\t\t\t\t\t\t<div class=\"custom-select floatLW120\">\r\n\t\t\t\t\t\t\t\t\t<select>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Show 5 items</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"1\">5</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"2\">10</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"3\">15</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"4\">20</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"5\">25</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"6\">30</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"pagination_text\">1 to 1 of 1 </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\" class=\"active\">1</a> <a href=\"#\" class=\"pagination_next\">&raquo;</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t<app-pagination [exportTableList]=\"classReference.importPcdCount\">Loading...</app-pagination>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t<div class=\"floatRight\">\r\n\t\t\t\t\t\t\t<div class=\"button_green marginRL5 floatLeft\" *ngIf=\"!importButtonclk && classReference.importPcdCount.length > 0\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\">Submit</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--                 <div class=\"button_green floatRight marginleft10\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"width130\">Cancel</button>\r\n\t\t\t\t\t  </div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<br> <br>\r\n\t\t\t\t\t\t<h1>Failed Items</h1>\r\n\t\t\t\t\t\t<div class=\"datatable\" >\r\n\t\t\t\t\t\t<table class=\"marginTop10\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Application</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Number</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Name</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Company</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Key</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Effective Date</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Expiry Date</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Action</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Result</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let param of failedItems\">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.applicationID}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.psetNumber}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.psetName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.companyID}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.psetKey}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.effectiveDate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.expiryDate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"colorBlue\"><a her=\"#\">{{param.action}}</a></td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.result}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<!-- <div class=\"pagination\">\r\n\t\t\t\t\t\t\t<div class=\"floatLeft\">\r\n\t\t\t\t\t\t\t\t<div class=\"custom-select floatLW120\">\r\n\t\t\t\t\t\t\t\t\t<select>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Show 5 items</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"1\">5</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"2\">10</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"3\">15</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"4\">20</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"5\">25</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"6\">30</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"pagination_text\">1 to 1 of 1 </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\" class=\"active\">1</a> <a href=\"#\" class=\"pagination_next\">&raquo;</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t<p class=\"no_data_desc\" *ngIf=\"!failedItems.length > 0\">No Data Available</p>\r\n\t\t\t\t\t\t<app-pagination [exportTableList]=\"failedItems\">Loading...</app-pagination>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<br> <br> <br>\r\n\t\t\t\t\t\t<h1>Success Items</h1>\r\n\t\t\t\t\t\t<div class=\"datatable\" >\r\n\t\t\t\t\t\t<table class=\"marginTop10\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Application</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Number</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Name</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Company</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Key</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Effective Date</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Expiry Date</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Action</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Result</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let param of successItems\">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.applicationID}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.psetNumber}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.psetName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.companyID}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.psetKey}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.effectiveDate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.expiryDate}}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"colorBlue\"><a her=\"#\">{{param.action}}</a></td>\r\n\t\t\t\t\t\t\t\t\t<td>{{param.result}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- <div class=\"pagination\">\r\n\t\t\t\t\t\t<div class=\"floatLeft\">\r\n\t\t\t\t\t\t\t<div class=\"custom-select floatLW120\">\r\n\t\t\t\t\t\t\t\t<select>\r\n\t\t\t\t\t\t\t\t\t<option value=\"0\">Show 5 items</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"1\">5</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"2\">10</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"3\">15</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"4\">20</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"5\">25</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"6\">30</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"pagination_text\">1 to 5 of 30 </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\">1</a> <a href=\"#\" class=\"pagination_next\">&raquo;</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t\t<p class=\"no_data_desc\" *ngIf=\"!successItems.length > 0\">No Data Available</p>\r\n\t\t\t\t\t<app-pagination [exportTableList]=\"successItems\">Loading...</app-pagination>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- </div> -->\r\n\t\t\t</form>\r\n\t\t\t\t<!-- end content page-2 Reload-->\r\n\t\t\t</div>\r\n\r\n\t\t\t<!-- start content Page-3 Success -->\r\n\t\t\t<div class=\"content\" *ngIf=\"formData.submitted && successItems.length > 0 && failedItems.length == 0 \">\r\n\r\n\t\t\t\t<p style=\"color:green\">All Records has been updated successfully.</p>\r\n\t\t\t\t<div class=\"column_text form_column_one\">\r\n\t\t\t\t\t<label for=\"name\" class=\"required\">Task Name</label>\r\n\t\t\t\t\t<input type=\"text\" size=\"90\" placeholder=\"Task Name\" id=\"name\" name=\"taskName\" #name=\"ngModel\" [(ngModel)]=\"model.name\"/>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--         <div class=\"content_box\">\r\n\t\t\t\t\t\t\t\t\t  <div class=\"floatLeft\"><span>Please select a file to upload</span><span class=\"button_green marginRL5\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\">Choose File</button>\r\n\t\t\t\t\t\t\t\t\t\t</span><span class=\"font_bold\">download.xls</span></div>\r\n\t\t\t\t\t\t\t\t\t  <div class=\"button_lightgrey floatRight\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"width100\">Import</button>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t<h1>Success Items</h1>\r\n\t\t\t\t<div class=\"content_area\" id=\"review\">\r\n\t\t\t\t\t<div class=\"datatable\">\r\n\t\t\t\t\t\t<table>\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Application</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Number</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Name</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Company</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">PSet Key</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Effective Date</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Expiry Date</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Action</th>\r\n\t\t\t\t\t\t\t\t\t<th scope=\"col\">Result</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let param of successItems\">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.applicationID}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.psetNumber}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.psetName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.companyID}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.psetKey}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.effectiveDate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{param.expiryDate}}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"colorBlue\"><a her=\"#\">{{param.action}}</a></td>\r\n\t\t\t\t\t\t\t\t\t<td>{{param.result}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<!-- <div class=\"pagination\">\r\n\t\t\t\t\t\t\t<div class=\"floatLeft\">\r\n\t\t\t\t\t\t\t\t<div class=\"custom-select floatLW120\">\r\n\t\t\t\t\t\t\t\t\t<select>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Show 5 items</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"1\">5</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"2\">10</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"3\">15</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"4\">20</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"5\">25</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"6\">30</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"pagination_text\">1 to 1 of 1 </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\" class=\"active\">1</a> <a href=\"#\" class=\"pagination_next\">&raquo;</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t<p class=\"no_data_desc\" *ngIf=\"!successItems.length > 0\">No Data Available</p>\r\n\t\t\t\t\t\t<app-pagination [exportTableList]=\"successItems\">Loading...</app-pagination>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--               <div class=\"floatRight\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"button_lightgrey floatLeft\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\">Submit</button>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t <div class=\"button_green floatRight marginleft10\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"width130\">Cancel</button>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\t  </div> -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- end content page-1 Success-->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end right panel -->\r\n\t</div>\r\n\t<!-- end container -->\r\n\t<!-- Footer start -->\r\n\t<div class=\"push_footer\">&nbsp;</div>\r\n\t<div id=\"footer\">\r\n\t\t<div class=\"footer_area\">\r\n\t\t\t<ul>\r\n\t\t\t\t<li><a href=\"#news\">Contact us</a></li>\r\n\t\t\t\t<li><a href=\"#contact\">Search Center</a></li>\r\n\t\t\t\t<li><a href=\"#about\">Site Map</a></li>\r\n\t\t\t</ul>\r\n\t\t\t<p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n\t\t\t<p> &copy; CeleritiFinTech. All rights reserved</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- end footer -->\r\n\r\n\r\n<!-- end wrapper -->"

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = "   <!-- <div class='row' style=\"margin-right: 30px; margin-left: 230px;\">\r\n    <div class=\"panel panel-default\">\r\n\r\n         <div class=\"btn-toolbar panel-heading\" role=\"toolbar\" style=\"margin: 0;\">\r\n\r\n            <div class=\"btn-group\">\r\n            <select [(ngModel)]=\"model.id \"name=\"id\" (change)=\"page()\" style=\"margin-top:10px; cursor:pointer\">\r\n            <option value=\"5\">show 5 items</option>\r\n            <option value=\"10\">show 10 items</option>\r\n            <option value=\"15\">show 15 items</option>\r\n            <option value=\"50\">show 50 items</option>\r\n            </select> \r\n            </div>\r\n\r\n            <div class=\"btn-group\">\r\n            <label class=\"btn-group\" style=\"margin-top:5px; margin-left:250px\">Page &nbsp; </label>\r\n               <ul class=\"pagination\" >\r\n                   <li *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\r\n                  <a (click)=\"setPage(page)\" >{{page}}</a></li>\r\n               </ul>\r\n            </div>\r\n            \r\n             <div class=\"btn-group\">\r\n               <label style=\"margin-top:10px; margin-left:225px\"> {{currentIndex}}-{{pageNumber}} of {{pageNumber}}</label>\r\n            </div>\r\n            \r\n            <div class=\"btn-group pull-right\">\r\n               <ul class=\"pagination\" >\r\n               \r\n                  <li [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" >\r\n                  <a (click)=\"prevPage()\">Previous</a></li>\r\n                  <li [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" >\r\n                  <a (click)=\"nextPage()\" class=\"pagination_next\">&raquo;</a>\r\n               </ul>\r\n            </div>\r\n\r\n\r\n            <div class=\"pagination_item\">\r\n               <ul>\r\n                  <li [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\">\r\n                  <a (click)=\"prevPage()\" class=\"pagination_pre\">&laquo;</a> </li>\r\n                  <li [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\">\r\n                  <a href=\"#\" class=\"pagination_next\">&raquo;</a></li>\r\n               </ul>\r\n            </div>\r\n\r\n\r\n\r\n         </div>\r\n      </div>\r\n   </div> -->\r\n\r\n   <div class=\"pagination\">\r\n    <div class=\"floatLeft\">\r\n      <div class=\"custom-select floatLW120\">\r\n        <select [(ngModel)]=\"model.id \"name=\"id\" (change)=\"page()\">\r\n          <option value=\"5\" selected>show 5 items</option>\r\n          <option value=\"10\">show 10 items</option>\r\n          <option value=\"15\">show 15 items</option>\r\n          <option value=\"50\">show 50 items</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"pagination_text\">{{currentIndex}} to {{pageNumber}} of {{pageNumber}} </div>\r\n    </div>\r\n   <div class=\"pagination_item\">\r\n      <ul>\r\n         <li [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\">\r\n            <a (click)=\"prevPage()\" class=\"pagination_pre\">&laquo;</a> </li>\r\n         <li *ngFor=\"let page of pagesIndex\" [ngClass]=\"{'active': (currentIndex == page)}\">\r\n            <a (click)=\"setPage(page)\">{{page}}</a></li>\r\n         <li [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\">\r\n            <a (click)=\"nextPage()\" class=\"pagination_next\">&raquo;</a></li>\r\n      </ul>\r\n   </div>\r\n  </div>"

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n\r\n  <div class=\"container\">\r\n    <!-- start left panel -->\r\n    <app-side-menu></app-side-menu>\r\n    <!-- end left panel -->\r\n\r\n    <!-- start right panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li>Perform Mass Maintenance</li>\r\n          <li>Export Tasks</li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <h1>Scheduled-Export</h1>\r\n        <form action=\"\" (ngSubmit)=\"formData.valid && createNewExport(formData.value)\" #formData=\"ngForm\" novalidate>\r\n          <!-- <div class=\"form_area\">\r\n            <form action=\"\" class=\"width_70\"> -->\r\n              <div class=\"column_text form_column_one\">\r\n                <label for=\"taskName\" class=\"required\">Task Name</label>\r\n                <input type=\"text\" size=\"98\" placeholder=\"Task Name\" name=\"taskName\" #taskName=\"ngModel\" ngModel\r\n                  [(ngModel)]=\"data.name\" required />\r\n                <div *ngIf=\"formData.submitted && !taskName.valid\" style=\"color: red; size: 20px;\">Task Name is\r\n                  required</div>\r\n              </div>\r\n              <div class=\"column_text form_column_one\">\r\n                <div class=\"column_text\">\r\n                  <label for=\"currTemplate\" class=\"required_grey\" style=\"width:200px\">Select an Existing Template</label>\r\n                </div>\r\n                <div class=\"custom-select custom_select_width50\">\r\n                  <select name=\"currTemplate\" #currTemplate=\"ngModel\" (ngModelChange)=\"getParameterSet($event)\" ngModel\r\n                    [(ngModel)]=\"savedTemplate\" required>\r\n                    <option *ngFor=\"let templates of templateList\" [ngValue]=\"templates\">{{templates.name}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"formData.submitted && !currTemplate.valid\" style=\"color: red; size: 20px;\">Please select\r\n                    template</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form_column_text marginleft10\">\r\n                <label class=\"check_box checkbox_radio_text marginTop10\">Combine multiple company in a Single tab\r\n                  <input type=\"checkbox\" checked=\"checked\" [(ngModel)]=\"data.sheetTb\" name=\"multipleExport\" value=\"true\">\r\n                  <span class=\"checkmark\"></span> </label>\r\n              </div>\r\n            <!-- </form>\r\n          </div> -->\r\n\r\n          <div class=\"datatable\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">Application</th>\r\n                  <th scope=\"col\"><a href=\"#\">Parameter Set Number</a></th>\r\n                  <th scope=\"col\"><a href=\"#\">Parameter Set Name</a></th>\r\n                  <th scope=\"col\" class=\"colorBlack\"><a href=\"#\">Company</a></th>\r\n                  <th scope=\"col\" class=\"colorBlack\"><a href=\"#\">Effective Date</a></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of parameterSet \">\r\n                  <td>{{item.applicationID}}</td>\r\n                  <td>{{item.number}}</td>\r\n                  <td>{{item.name}}</td>\r\n                  <td>{{item.companyID}}</td>\r\n                  <td>{{item.effectiveDate}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <p class=\"no_data_desc\" *ngIf=\"!parameterSet\">No Data Available</p>\r\n            <!-- <div class=\"pagination\">\r\n              <div class=\"floatLeft\">\r\n                <div class=\"custom-select floatLW120\">\r\n                  <select>\r\n                    <option value=\"0\">Show 5 items</option>\r\n                    <option value=\"1\">5</option>\r\n                    <option value=\"2\">10</option>\r\n                    <option value=\"3\">15</option>\r\n                    <option value=\"4\">20</option>\r\n                    <option value=\"5\">25</option>\r\n                    <option value=\"6\">30</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"pagination_text\">1 to 1 of 1 </div>\r\n              </div>\r\n              <div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\" class=\"active\">1</a>\r\n                <a href=\"#\" class=\"pagination_next\">&raquo;</a> </div>\r\n            </div> -->\r\n            <!-- <app-pagination [exportTableList]=\"parameterSet\">Loading...</app-pagination> -->\r\n          </div>\r\n          <!-- <div class=\"form_area marginTop20\">\r\n            <form action=\"\" class=\"width_70\"> -->\r\n              <div>\r\n                <div class=\"column_text form_column3\">\r\n                  <label for=\"startDate\" class=\"required_grey\">Start Date</label>\r\n                  <input type=\"text\" size=\"11\" name=\"startDate\" placeholder=\"yyyy-mm-dd\" #startDate=\"ngModel\" ngModel\r\n                    [(ngModel)]=\"data.effectiveDate\" required />\r\n                  <span> <img src=\"../../assets/images_icons/calander_icon.png\" width=\"24\" height=\"24\" alt=\"Date\"></span>\r\n                  <!-- <button class=\"btn btn-outline-secondary calendar\"\r\n                (click)=\"d.toggle()\" type=\"button\"></button> -->\r\n                </div>\r\n                <div id=\"bloc1\" class=\"form_column3\">\r\n                  <div class=\"column_text\">\r\n                    <label for=\"frequency\" class=\"required_grey\">Frequency</label>\r\n                  </div>\r\n                  <div class=\"custom-select custom_select_width50\">\r\n                    <select name=\"frequency\" #frequency=\"ngModel\" ngModel (change)=\"getDayToExport(frequency.value)\"\r\n                      [(ngModel)]=\"data.frequency\" required>\r\n                      <option *ngFor=\"let freqs of freq\" [value]=\"freqs\">{{freqs}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div id=\"bloc1\" *ngIf=\"frequency.value === 'WEEKLY' || frequency.value === 'MONTHLY'\" class=\"form_column3\">\r\n                  <div id=\"bloc2\" class=\"column_text\" *ngIf=\"frequency.value === 'MONTHLY'\" class=\"column_text\">\r\n                      <label for=\"name\" class=\"required_grey\">Date to Import</label>\r\n                  </div>\r\n                  <div id=\"bloc2\" class=\"column_text\" *ngIf=\"frequency.value === 'WEEKLY'\"><label for=\"dayToExport\">Day To Export </label>\r\n                  </div>\r\n                  <div id=\"bloc3\" class=\"custom-select custom_select_width50\">\r\n                    <select name=\"dayToExport\" #dayToExport=\"ngModel\" ngModel required [(ngModel)]=\"data.frepattern\">\r\n                      <option *ngFor=\"let item of day\" [value]=\"item\">{{item}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"formData.submitted && !dayToExport.valid\" style=\"color: red;\">please select DayToImport</div>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"formData.submitted && !startDate.valid\" style=\"color: red;\">Start Date required</div>\r\n                <div *ngIf=\"formData.submitted && !frequency.valid\" style=\"color: red;\">please select Frequency</div>\r\n              </div>\r\n              <div class=\"column_text form_column_one\">\r\n                <label for=\"fileLocation\" class=\"required_grey\">File Name</label>\r\n                <input type=\"text\" size=\"100\" placeholder=\"File Name\" name=\"fileLocation\" [(ngModel)]=\"data.filePath\"\r\n                  #location=\"ngModel\" ngModel required />\r\n                <div *ngIf=\"formData.submitted && !location.valid\" style=\"color: red;\">File location is required</div>\r\n              </div>\r\n              <div class=\"column_text form_column_one\">\r\n                <label for=\"remarks\">Remarks</label>\r\n                <input type=\"text\" size=\"100\" name=\"remarks\" placeholder=\"Remarks\" ngModel [(ngModel)]=\"data.remarks\"\r\n                  required />\r\n              </div>\r\n\r\n              <div class=\"form_area_section marginTop20\">\r\n                <div class=\"form_column\"><span style=\"padding:10px 10px 0 0\">Activate Schedule?</span>\r\n                  <label class=\"switch\">\r\n                    <input type=\"checkbox\" checked name=\"status\" [(ngModel)]=\"status\" ngModel>\r\n                    <span class=\"slider round\"></span> </label>\r\n                </div>\r\n                <div class=\"form_column\" style=\"padding-right:12px\">\r\n                  <div class=\"floatRight\">\r\n                    <div class=\"button_green floatLeft\">\r\n                      <button type=\"submit\" class=\"width100\">Save</button>\r\n                    </div>\r\n                    <div class=\"button_lightgrey floatLeft marginleft10\">\r\n                      <button type=\"button\" class=\"width100\" routerLink=\"cancel\" (click)=\"cancelCopyExport()\">Cancel</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            <!-- </form>\r\n          </div> -->\r\n        </form>\r\n      </div>\r\n\r\n      <!-- end content -->\r\n    </div>\r\n    <!-- end right panel -->\r\n  </div>\r\n  <!-- end container -->\r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer -->\r\n\r\n\r\n<!-- end wrapper -->"

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n<!-- Start container --> \r\n  <div class=\"container\">\r\n    <!-- Start left panel -->\r\n    <app-side-menu></app-side-menu>\r\n    <!-- end left panel -->\r\n\r\n    <!-- start right panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li>Perform Mass Maintenance</li>\r\n          <li>Export Tasks</li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <h1>Scheduled-Export</h1>\r\n        <form action=\"\" (ngSubmit)=\"formData.valid && createScheduleExport(formData.value)\"\r\n        #formData=\"ngForm\" novalidate>\r\n        <div class=\"form_area marginTop20\"></div>\r\n        <div class=\"form_area\">\r\n          <div class=\"column_text form_column_one\">\r\n            <label for=\"taskName\" class=\"required\">Task Name</label>\r\n            <input type=\"text\" size=\"98\" name=\"taskName\" #taskName=\"ngModel\" ngModel\r\n            required placeholder=\"Task Name\"/>\r\n            <div *ngIf=\"formData.submitted && !taskName.valid\"\r\n\t\t\t\t\t\tstyle=\"color: red; size: 20px;\">Task Name is required</div>\r\n          </div>\r\n          <div class=\"column_text form_column_one\">\r\n            <div class=\"column_text\" >\r\n              <label for=\"template\" class=\"required_grey\" style=\"width:200px\">Select an Existing Template</label>\r\n            </div>\r\n            <div class=\"custom-select custom_select_width50\">\r\n              <select name=\"template\"\r\n              #template=\"ngModel\" ngModel (ngModelChange)=\"getParameterSet($event)\" (ngModel)=\"templateList\"\r\n             required>\r\n                <option *ngFor=\"let templates of templateList\" [ngValue]=\"templates\">{{templates.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"formData.submitted && !template.valid\" style=\"color: red; size: 20px;\">Please select template</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form_column_text marginleft10\">\r\n            <label class=\"check_box checkbox_radio_text marginTop10\">Combine multiple company in a Single tab\r\n              <input type=\"checkbox\" checked=\"checked\" [(ngModel)]=\"model.multipleExport\"\r\n              name=\"multipleExport\" value=\"true\">\r\n              <span class=\"checkmark\"></span> </label>\r\n          </div>\r\n      \r\n      <div class=\"datatable\">\r\n        <table>\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">Application</th>\r\n              <th scope=\"col\"><a href=\"#\">Parameter Set Number</a></th>\r\n              <th scope=\"col\"><a href=\"#\">Parameter Set Name</a></th>\r\n              <th scope=\"col\" class=\"colorBlack\"><a href=\"#\">Company</a></th>\r\n              <th scope=\"col\" class=\"colorBlack\"><a href=\"#\">Effective Date</a></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n              <tr *ngFor=\"let item of getItems()\">\r\n                <td>{{item.applicationID}}</td>\r\n                <td>{{item.number}}</td>\r\n                <td>{{item.name}}</td>\r\n                <td>{{item.companyID}}</td>\r\n                <td>{{item.effectiveDate}}</td>\r\n              </tr>\r\n            </tbody>\r\n        </table>\r\n        <p class=\"no_data_desc\" *ngIf=\"!selectedPsets\">No Data Available</p>\r\n        <!-- <div class=\"pagination\">\r\n          <div class=\"floatLeft\">\r\n            <div class=\"custom-select floatLW120\">\r\n              <select>\r\n                <option value=\"0\">Show 5 items</option>\r\n                <option value=\"1\">5</option>\r\n                <option value=\"2\">10</option>\r\n                <option value=\"3\">15</option>\r\n                <option value=\"4\">20</option>\r\n                <option value=\"5\">25</option>\r\n                <option value=\"6\">30</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"pagination_text\">1 to 1 of 1 </div>\r\n          </div>\r\n          <div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\" class=\"active\">1</a> <a href=\"#\" class=\"pagination_next\">&raquo;</a> </div>\r\n        </div> -->\r\n        <app-pagination [exportTableList]=\"selectedPsets\">Loading...</app-pagination>\r\n      </div>\r\n      \r\n          <div class=\"form_column3\">\r\n            <div class=\"column_text\">\r\n              <label for=\"startDate\" class=\"required_grey\">Start Date</label>\r\n            </div>\r\n            <div class=\"custom-select custom_select_width50\">\r\n              <my-date-picker [options]=\"myDatePickerOptions\" placeholder=\"yyyy-mm-dd\" name=\"startDate\"   #startDate=\"ngModel\"\r\n                 ngModel [selDate]=\"selectedDate\"></my-date-picker>\r\n            </div>\r\n          </div>\r\n            <div id=\"bloc1\" class=\"form_column3\">\r\n            <div class=\"column_text\">\r\n              <label for=\"frequency\" class=\"required_grey\">Frequency</label>\r\n            </div>\r\n            <div class=\"custom-select custom_select_width50\">\r\n              <select name=\"frequency\"\r\n              #frequency=\"ngModel\" ngModel (change)=\"getDayToImport(frequency.value)\"\r\n             required>\r\n                <option *ngFor=\"let freqs of freq\" [value]=\"freqs\">{{freqs}}</option>\r\n              </select>\r\n            </div>\r\n            </div>\r\n            <div class=\"form_column3\" id=\"bloc1\" *ngIf=\"frequency.value === 'WEEKLY' || frequency.value === 'MONTHLY'\">\r\n                <div class=\"column_text\" id=\"bloc2\" *ngIf=\"frequency.value === 'MONTHLY'\">\r\n                  <label for=\"dayToExport\" class=\"required_grey\">Date to Export</label>\r\n                </div>\r\n                <div id=\"bloc2\" class=\"column_text\" *ngIf=\"frequency.value === 'WEEKLY'\">\r\n                  <label for=\"dayToExport\" class=\"required_grey\">Day To Export </label>\r\n                </div>\r\n                <div id=\"bloc3\" class=\"custom-select custom_select_width50\">\r\n                  <select name=\"dayToExport\" #dayToExport=\"ngModel\" ngModel required [(ngModel)]=\"data.dayToExport\">\r\n                    <option *ngFor=\"let item of day\" [value]=\"item\">{{item}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"formData.submitted && !dayToExport.valid\" style=\"color: red;\">please select DayToImport</div>\r\n                </div>\r\n              </div>\r\n          <div *ngIf=\"formData.submitted && !startDate.valid\"\r\n          style=\"color: red;\">Start Date required</div>\r\n        <div *ngIf=\"formData.submitted && !frequency.valid\"\r\n          style=\"color: red;\">please select Frequency</div>\r\n\r\n          <div class=\"column_text form_column_one required\">\r\n            <label for=\"name\" class=\"required_grey\">File Name</label>\r\n            <input type=\"text\" size=\"100\" placeholder=\"File Name\" name=\"fileLocation\" #location=\"ngModel\" ngModel required />\r\n            <div *ngIf=\"formData.submitted && !location.valid\"\r\n\t\t\t\t\t\t\tstyle=\"color: red;\">File location is required</div>\r\n          </div>\r\n          <div class=\"column_text form_column_one\">\r\n            <label for=\"remarks\">Remarks</label>\r\n            <input type=\"text\" size=\"100\" name=\"remarks\" placeholder=\"Remarks\" ngModel\r\n            required />\r\n          </div>\r\n          \r\n          <div class=\"form_area_section marginTop20\">\r\n            <div class=\"form_column\"><span style=\"padding:10px 10px 0 0\">Activate Schedule?</span>\r\n              <label class=\"switch\">\r\n                <input type=\"checkbox\" checked name=\"status\" \r\n                ngModel [(ngModel)]=\"activateShedule\">\r\n                <span class=\"slider round\"></span> </label>\r\n            </div>\r\n            <div class=\"form_column\" style=\"padding-right:12px\">\r\n              <div class=\"floatRight\">\r\n                <div class=\"button_green floatLeft\">\r\n                  <button type=\"submit\" class=\"width100\">Save</button>\r\n                </div>\r\n                <div class=\"button_lightgrey floatLeft marginleft10\">\r\n                  <button type=\"submit\" class=\"width100\" routerLink=\"cancel\"(click)=\"cancelExport()\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </form>\r\n    </div>\r\n    \r\n    <!-- end content --> \r\n  </div>\r\n  <!-- end right panel --> \r\n</div>\r\n<!-- end container --> \r\n<!-- Footer start -->\r\n<div class=\"push_footer\">&nbsp;</div>\r\n<div id=\"footer\">\r\n  <div class=\"footer_area\">\r\n    <ul>\r\n      <li><a href=\"#news\">Contact us</a></li>\r\n      <li><a href=\"#contact\">Search Center</a></li>\r\n      <li><a href=\"#about\">Site Map</a></li>\r\n    </ul>\r\n    <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n    <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n  </div>\r\n</div>\r\n<!-- end footer -->\r\n\r\n\r\n<!-- end wrapper -->\r\n\r\n"

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n\r\n  <!-- end header -->\r\n  <div class=\"container\">\r\n    <!-- start left panel -->\r\n    <app-side-menu></app-side-menu>\r\n    <!-- end left panel -->\r\n\r\n    <!-- start right panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li>Perform Mass Maintenance</li>\r\n          <li>Export Tasks</li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <h1>Scheduled-Export</h1>\r\n        <form (ngSubmit)=\"formData.valid && updateExport(formData.value)\" #formData=\"ngForm\" novalidate>\r\n          <!-- <div class=\"form_area\"> -->\r\n            <!-- <form action=\"\" class=\"width_70\"> -->\r\n              <div class=\"column_text form_column_one\">\r\n                <label for=\"taskName\" class=\"required\">Task Name</label>\r\n                <input type=\"text\" size=\"98\" name=\"taskName\" placeholder=\"Task Name\" #taskName=\"ngModel\" ngModel\r\n                  [(ngModel)]=\"data.name\" readonly=\"readonly\" />\r\n                <div *ngIf=\"formData.submitted && !taskName.valid\" style=\"color: red; size: 20px;\">Task Name is\r\n                  required</div>\r\n              </div>\r\n              <div class=\"column_text form_column_one\">\r\n                <div class=\"column_text\">\r\n                  <label for=\"currTemplate\" class=\"required_grey\" style=\"width:200px\">Select an Existing Template</label>\r\n                </div>\r\n                <div class=\"custom-select custom_select_width50\">\r\n                  <select name=\"currTemplate\" #currTemplate=\"ngModel\" ngValue=\"op1\" (ngModelChange)=\"getParameterSet($event)\"\r\n                    ngModel [(ngModel)]=\"savedTemplate\" required>\r\n                    <option *ngFor=\"let templates of templateList\" [ngValue]=\"templates\">{{templates.name}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"formData.submitted && !currTemplate.valid\" style=\"color: red; size: 20px;\">Please select\r\n                    template</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form_column_text marginleft10\">\r\n                <label class=\"check_box checkbox_radio_text marginTop10\">Combine multiple company in a Single tab\r\n                  <input type=\"checkbox\" checked=\"checked\" [(ngModel)]=\"data.taskOptions\" name=\"multipleExport\" value=\"true\">\r\n                  <span class=\"checkmark\"></span> </label>\r\n              </div>\r\n            <!-- </form> -->\r\n          <!-- </div> -->\r\n\r\n          <div class=\"datatable\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">Application</th>\r\n                  <th scope=\"col\"><a href=\"#\">Parameter Set Number</a></th>\r\n                  <th scope=\"col\"><a href=\"#\">Parameter Set Name</a></th>\r\n                  <th scope=\"col\" class=\"colorBlack\"><a href=\"#\">Company</a></th>\r\n                  <th scope=\"col\" class=\"colorBlack\"><a href=\"#\">Effective Date</a></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of parameterSet\">\r\n                  <!-- <td><input type=\"checkbox\" name=\"selectAll\" value=\"\"></td> -->\r\n                  <td>{{item.applicationID}}</td>\r\n                  <td>{{item.number}}</td>\r\n                  <td>{{item.name}}</td>\r\n                  <td>{{item.companyID}}</td>\r\n                  <td>{{item.effectiveDate}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <p class=\"no_data_desc\" *ngIf=\"!parameterSet\">No Data Available</p>\r\n            <!-- <div class=\"pagination\">\r\n              <div class=\"floatLeft\">\r\n                <div class=\"custom-select floatLW120\">\r\n                  <select>\r\n                    <option value=\"0\">Show 5 items</option>\r\n                    <option value=\"1\">5</option>\r\n                    <option value=\"2\">10</option>\r\n                    <option value=\"3\">15</option>\r\n                    <option value=\"4\">20</option>\r\n                    <option value=\"5\">25</option>\r\n                    <option value=\"6\">30</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"pagination_text\">1 to 1 of 1 </div>\r\n              </div>\r\n              <div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\" class=\"active\">1</a>\r\n                <a href=\"#\" class=\"pagination_next\">&raquo;</a> </div>\r\n            </div> -->\r\n            <!-- <app-pagination [exportTableList]=\"parameterSet\">Loading...</app-pagination> -->\r\n          </div>\r\n          <!-- <div class=\"form_area marginTop20\"> -->\r\n            <!-- <form action=\"\" class=\"width_70\"> -->\r\n              <div>\r\n                <div class=\"column_text form_column3\">\r\n                  <label for=\"startDate\" class=\"required_grey\">Start Date</label>\r\n                  <input type=\"text\" size=\"11\" name=\"startDate\" placeholder=\"yyyy-mm-dd\" #startDate=\"ngModel\" ngModel\r\n                    [(ngModel)]=\"data.effectiveDate\" required />\r\n                  <span> <img src=\"../../assets/images_icons/calander_icon.png\" width=\"24\" height=\"24\" alt=\"Date\"></span>\r\n                  <!-- <button class=\"btn btn-outline-secondary calendar\"\r\n                (click)=\"d.toggle()\" type=\"button\"></button> -->\r\n                </div>\r\n                <div id=\"bloc1\" class=\"form_column3\">\r\n                  <div class=\"column_text\">\r\n                    <label for=\"frequency\" class=\"required_grey\">Frequency</label>\r\n                  </div>\r\n                  <div class=\"custom-select custom_select_width50\">\r\n                    <select name=\"frequency\" #frequency=\"ngModel\" ngModel (change)=\"getDayToExport(frequency.value)\"\r\n                      [(ngModel)]=\"data.frequency\" required>\r\n                      <option *ngFor=\"let freqs of freq\" [value]=\"freqs\">{{freqs}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form_column3\" id=\"bloc1\" *ngIf=\"frequency.value === 'WEEKLY' || frequency.value === 'MONTHLY'\">\r\n                  <div class=\"column_text\" id=\"bloc2\" *ngIf=\"frequency.value === 'MONTHLY'\">\r\n                    <label for=\"dayToExport\" class=\"required_grey\">Date to Export</label>\r\n                  </div>\r\n                  <div class=\"column_text\" id=\"bloc2\" *ngIf=\"frequency.value === 'WEEKLY'\">\r\n                    <label for=\"dayToExport\" class=\"required_grey\">Day To Export </label>\r\n                  </div>\r\n                  <div id=\"bloc3\" class=\"custom-select custom_select_width50\">\r\n                    <select name=\"dayToExport\" #dayToExport=\"ngModel\" ngModel required [(ngModel)]=\"data.freqPattern\">\r\n                      <option *ngFor=\"let item of day\" [value]=\"item\">{{item}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"formData.submitted && !dayToExport.valid\" style=\"color: red;\">please select DayToImport</div>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"formData.submitted && !startDate.valid\" style=\"color: red;\">Start Date required</div>\r\n                <div *ngIf=\"formData.submitted && !frequency.valid\" style=\"color: red;\">please select Frequency</div>\r\n              </div>\r\n              <div class=\"column_text form_column_one\">\r\n                <label for=\"name\" class=\"required_grey\">File Name</label>\r\n                <input type=\"text\" size=\"100\" placeholder=\"File Name\" name=\"fileLocation\" [(ngModel)]=\"data.filePath\"\r\n                  #location=\"ngModel\" ngModel required />\r\n                <div *ngIf=\"formData.submitted && !location.valid\" style=\"color: red;\">File location is required</div>\r\n              </div>\r\n              <div class=\"column_text form_column_one\">\r\n                <label for=\"remarks\">Remarks</label>\r\n                <input type=\"text\" size=\"100\" name=\"remarks\" placeholder=\"Remarks\" ngModel [(ngModel)]=\"data.remarks\"\r\n                  required />\r\n              </div>\r\n\r\n              <div class=\"form_area_section marginTop20\">\r\n                <div class=\"form_column\"><span style=\"padding:10px 10px 0 0\">Activate Schedule?</span>\r\n                  <label class=\"switch\">\r\n                    <input type=\"checkbox\" checked name=\"status\" [(ngModel)]=\"status\" ngModel>\r\n                    <span class=\"slider round\"></span> </label>\r\n                </div>\r\n                <div class=\"form_column\" style=\"padding-right:12px\">\r\n                  <div class=\"floatRight\">\r\n                    <div class=\"button_green floatLeft\">\r\n                      <button type=\"submit\" class=\"width100\">Save</button>\r\n                    </div>\r\n                    <div class=\"button_lightgrey floatLeft marginleft10\">\r\n                      <button type=\"button\" class=\"width100\" routerLink=\"cancel\" (click)=\"cancelEditExport()\">Cancel</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            <!-- </form> -->\r\n          <!-- </div> -->\r\n        </form>\r\n      </div>\r\n\r\n      <!-- end content -->\r\n    </div>\r\n    <!-- end right panel -->\r\n  </div>\r\n  <!-- end container -->\r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer -->\r\n\r\n\r\n<!-- end wrapper -->"

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n\r\n  <div class=\"container\">\r\n    <!-- start left panel -->\r\n    <app-side-menu></app-side-menu>\r\n    <!-- end left panel -->\r\n\r\n    <!-- start right panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li>Perform Mass Maintenance</li>\r\n          <li>Export Tasks</li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <h1>Scheduled-Export</h1>\r\n        <fieldset disabled=\"disabled\">\r\n          <form action=\"\" (ngSubmit)=\"formData.valid\" #formData=\"ngForm\" novalidate>\r\n            \r\n                <div class=\"column_text form_column_one\">\r\n                  <label for=\"taskName\" class=\"required\">Task Name</label>\r\n                  <input type=\"text\" size=\"98\" name=\"\" placeholder=\"Task Name\" name=\"taskName\" #taskName=\"ngModel\"\r\n                    ngModel [(ngModel)]=\"data.name\" required />\r\n                  <div *ngIf=\"formData.submitted && !taskName.valid\" style=\"color: red; size: 20px;\">Task Name is\r\n                    required</div>\r\n                </div>\r\n\r\n                <!-- <div class=\"required\">\r\n                  <label for=\"template\">Select an Existing Template\r\n                  </label> <select style=\"display: inline-block; width: 60% !important\" name=\"template\" #template=\"ngModel\"\r\n                    ngModel (ngModelChange)=\"getParameterSet($event)\" [(ngModel)]=\"savedTemplate\" required>\r\n                    <option *ngFor=\"let templates of templateList\" [ngValue]=\"templates\">{{templates.name}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"formData.submitted && !template.valid\" style=\"color: red; size: 20px;\">Please select\r\n                    template</div>\r\n                </div> -->\r\n                <div class=\"column_text form_column_one\">\r\n                  <div class=\"column_text\">\r\n                    <label for=\"template\" class=\"required_grey\" style=\"width:200px\">Select an Existing Template</label>\r\n                  </div>\r\n                  <div class=\"custom-select custom_select_width50\">\r\n                    <select name=\"template\" #template=\"ngModel\" ngModel (ngModelChange)=\"getParameterSet($event)\"\r\n                      [(ngModel)]=\"savedTemplate\" required>\r\n                      <option *ngFor=\"let templates of templateList\" [ngValue]=\"templates\">{{templates.name}}</option>\r\n                    </select>\r\n                  </div>\r\n                  <div *ngIf=\"formData.submitted && !template.valid\" style=\"color: red; size: 20px;\">Please select\r\n                    template</div>\r\n                </div>\r\n                <div class=\"form_column_text marginleft10\">\r\n                  <label class=\"check_box checkbox_radio_text marginTop10\">Combine multiple company in a Single tab\r\n                    <input type=\"checkbox\" checked=\"checked\" [(ngModel)]=\"data.taskOptions\" name=\"multipleExport\" value=\"true\">\r\n                    <span class=\"checkmark\"></span> </label>\r\n                </div>\r\n              \r\n\r\n            <div class=\"datatable\">\r\n              <table>\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\">Application</th>\r\n                    <th scope=\"col\"><a href=\"#\">Parameter Set Number</a></th>\r\n                    <th scope=\"col\"><a href=\"#\">Parameter Set Name</a></th>\r\n                    <th scope=\"col\" class=\"colorBlack\"><a href=\"#\">Company</a></th>\r\n                    <th scope=\"col\" class=\"colorBlack\"><a href=\"#\">Effective Date</a></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let item of parameterSet\">\r\n                    <!-- <td><input type=\"checkbox\" name=\"selectAll\" value=\"\"></td> -->\r\n                    <td>{{item.applicationID}}</td>\r\n                    <td>{{item.number}}</td>\r\n                    <td>{{item.name}}</td>\r\n                    <td>{{item.companyID}}</td>\r\n                    <td>{{item.effectiveDate}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <p class=\"no_data_desc\" *ngIf=\"!parameterSet\">No Data Available</p>\r\n              <!-- <div class=\"pagination\">\r\n                <div class=\"floatLeft\">\r\n                  <div class=\"custom-select floatLW120\">\r\n                    <select>\r\n                      <option value=\"0\">Show 5 items</option>\r\n                      <option value=\"1\">5</option>\r\n                      <option value=\"2\">10</option>\r\n                      <option value=\"3\">15</option>\r\n                      <option value=\"4\">20</option>\r\n                      <option value=\"5\">25</option>\r\n                      <option value=\"6\">30</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"pagination_text\">1 to 1 of 1 </div>\r\n                </div>\r\n                <div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\" class=\"active\">1</a>\r\n                  <a href=\"#\" class=\"pagination_next\">&raquo;</a> </div>\r\n              </div> -->\r\n              <!-- <app-pagination [exportTableList]=\"parameterSet\">Loading...</app-pagination> -->\r\n            </div>\r\n              \r\n                <div>\r\n                  <div class=\"column_text form_column3\">\r\n                    <label for=\"startDate\" class=\"required_grey\">Start Date</label>\r\n                    <input type=\"text\" size=\"11\" name=\"startDate\" placeholder=\"yyyy-mm-dd\" #startDate=\"ngModel\" ngModel\r\n                      [(ngModel)]=\"data.effectiveDate\" required />\r\n                    <span> <img src=\"../../../assets/images_icons/calander_icon.png\" width=\"24\" height=\"24\" alt=\"Date\"></span>\r\n                    <!-- <button class=\"btn btn-outline-secondary calendar\"\r\n              (click)=\"d.toggle()\" type=\"button\"></button> -->\r\n                  </div>\r\n                  <div id=\"bloc1\" class=\"form_column3\">\r\n                    <div class=\"column_text\">\r\n                      <label for=\"frequency\" class=\"required_grey\">Frequency</label>\r\n                    </div>\r\n                    <div class=\"custom-select custom_select_width50\">\r\n                      <select name=\"frequency\" #frequency=\"ngModel\" ngModel (change)=\"getDayToExport(frequency.value)\"\r\n                        [(ngModel)]=\"data.frequency\" required>\r\n                        <option *ngFor=\"let freqs of freq\" [value]=\"freqs\">{{freqs}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form_column3\" id=\"bloc1\" *ngIf=\"frequency.value === 'WEEKLY' || frequency.value === 'MONTHLY'\">\r\n                    <div class=\"column_text\" id=\"bloc2\" *ngIf=\"frequency.value === 'MONTHLY'\">\r\n                      <label for=\"dayToExport\" class=\"required_grey\">Date to Import</label>\r\n                    </div>\r\n                    <div class=\"column_text\" id=\"bloc2\" *ngIf=\"frequency.value === 'WEEKLY'\"><label for=\"dayToExport\">Day To Export </label>\r\n                    </div>\r\n                    <div id=\"bloc3\" class=\"custom-select custom_select_width50\">\r\n                      <select name=\"dayToExport\" #dayToExport=\"ngModel\" ngModel required [(ngModel)]=\"data.freqPattern\">\r\n                        <option *ngFor=\"let item of day\" [value]=\"item\">{{item}}</option>\r\n                      </select>\r\n                      <div *ngIf=\"formData.submitted && !dayToExport.valid\" style=\"color: red;\">please select\r\n                        DayToImport</div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"formData.submitted && !startDate.valid\" style=\"color: red;\">Start Date required</div>\r\n                  <div *ngIf=\"formData.submitted && !frequency.valid\" style=\"color: red;\">please select Frequency</div>\r\n                </div>\r\n                <div class=\"column_text form_column_one\">\r\n                  <label for=\"name\" class=\"required_grey\">File Name</label>\r\n                  <input type=\"text\" size=\"100\" placeholder=\"File Name\" name=\"fileLocation\" [(ngModel)]=\"data.filePath\"\r\n                    #location=\"ngModel\" ngModel required />\r\n                  <div *ngIf=\"formData.submitted && !location.valid\" style=\"color: red;\">File location is required</div>\r\n\r\n                </div>\r\n                <div class=\"column_text form_column_one\">\r\n                  <label for=\"remarks\">Remarks</label>\r\n                  <input type=\"text\" size=\"100\" name=\"remarks\" placeholder=\"Remarks\" ngModel [(ngModel)]=\"data.remarks\"\r\n                    required />\r\n                </div>\r\n\r\n                <div class=\"form_area_section marginTop20\">\r\n                  <div class=\"form_column\"><span style=\"padding:10px 10px 0 0\">Activate Schedule?</span>\r\n                    <label class=\"switch\">\r\n                      <input type=\"checkbox\" checked name=\"status\" [(ngModel)]=\"status\" ngModel>\r\n                      <span class=\"slider round\"></span> </label>\r\n                  </div>\r\n                  <div class=\"form_column\" style=\"padding-right:12px\">\r\n                    <div class=\"floatRight\">\r\n                      <div class=\"button_green floatLeft\">\r\n                        <button type=\"submit\" class=\"width100\">Save</button>\r\n                      </div>\r\n                      <div class=\"button_lightgrey floatLeft marginleft10\">\r\n                        <button type=\"button\" class=\"width100\" routerLink=\"cancel\" (click)=\"cancelEditExport()\">Cancel</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              \r\n          </form>\r\n        </fieldset>\r\n      </div>\r\n\r\n      <!-- end content -->\r\n    </div>\r\n    <!-- end right panel -->\r\n  </div>\r\n  <!-- end container -->\r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer -->\r\n\r\n\r\n<!-- end wrapper -->"

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <!-- end header -->\r\n  <div class=\"container\">\r\n      <app-side-menu></app-side-menu>\r\n    <!-- end left panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li>Perform Mass Maintenance</li>\r\n          <li>Export Tasks</li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <div  class=\"content_area\" id=\"new\">\r\n          <div class=\"button_lightgreen floatRight\">\r\n            <nav>\r\n            <button [routerLink]=\"['create']\" class=\"btn\" role=\"button\" type=\"submit\"><img src=\"../../assets/images_icons/icon_plus.png\" alt=\"New\">New</button>\r\n            </nav>\r\n          </div>\r\n\t\t  <br>\r\n\t\t   <h1>Your Scheduled Exports</h1>\r\n          <div class=\"datatable\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Task Name</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Status</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Created On</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Last Updated By</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Changed On</a></th>\r\n                  <th colspan=\"4\" ><a href=\"#\" >Action</a></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n\r\n                <tr *ngFor=\"let sheduleExport of getItems() \">\r\n                  <td>{{sheduleExport.name}}</td>\r\n\t\t\t\t          <td>{{sheduleExport.status}}</td>\r\n                  <td>{{sheduleExport.createdOn}}</td>\r\n                  <td>{{sheduleExport.ModifiedBy}}</td>\r\n                  <td>{{sheduleExport.ModifiedOn}}</td>\r\n                  <td><nav>\r\n                      <a [routerLink]=\"['view',sheduleExport.uuid]\" class=\"bootstrap-link\" role=\"button\" routerLinkActive=\"active\"><img src=\"../../assets/images_icons/view_icon.png\"\r\n                          width=\"16\" height=\"16\" alt=\"View\"></a></nav></td>\r\n                          <td><nav>    <a [routerLink]=\"['edit',sheduleExport.uuid]\" class=\"bootstrap-link\" role=\"button\" routerLinkActive=\"active\"><img src=\"../../assets/images_icons/edit_icon.png\"\r\n                          width=\"16\" height=\"16\" alt=\"Edit\"></a></nav></td>\r\n                          <td><nav>    <a [routerLink]=\"['copy',sheduleExport.uuid]\" class=\"bootstrap-link\" role=\"button\" routerLinkActive=\"active\"><img src=\"../../assets/images_icons/copy_icon.png\"\r\n                          width=\"16\" height=\"18\" alt=\"Copy\"></a></nav></td>\r\n                          <td><nav>    <a class=\"bootstrap-link\" role=\"button\" (click)=\"deleteSheduleExport(sheduleExport.uuid)\" routerLinkActive=\"active\"><img\r\n                          src=\"../../assets/images_icons/delete_icon.png\" width=\"16\" height=\"16\" alt=\"Delete\"></a></nav></td>\r\n                </tr>\r\n                \r\n              </tbody>\r\n            </table>\r\n            <!-- <div class=\"pagination\">\r\n              <div class=\"floatLeft\">\r\n                <div class=\"custom-select floatLW120\">\r\n                  <select>\r\n                    <option value=\"0\">Show 5 items</option>\r\n                    <option value=\"1\">5</option>\r\n                    <option value=\"2\">10</option>\r\n                    <option value=\"3\">15</option>\r\n                    <option value=\"4\">20</option>\r\n                    <option value=\"5\">25</option>\r\n                    <option value=\"6\">30</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"pagination_text\">1 to 5 of 30 </div>\r\n              </div>\r\n              <div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\">1</a> <a href=\"#\" class=\"active\">2</a> <a href=\"#\">3</a> <a href=\"#\">4</a> <a href=\"#\">5</a> <a href=\"#\">6</a> <a href=\"#\" class=\"pagination_next\">&raquo;</a> </div>\r\n            </div> -->\r\n            <p class=\"no_data_desc\" *ngIf=\"!scheduledExports.length > 0\">No Data Available</p>\r\n            <app-pagination [exportTableList]=\"scheduledExports\">Loading...</app-pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end content --> \r\n    </div>\r\n    <!-- end right panel --> \r\n  </div>\r\n  <!-- end container --> \r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer --> \r\n  \r\n\r\n<!-- end wrapper --> \r\n\r\n"

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n\r\n  <!-- end header -->\r\n  <div class=\"container\">\r\n    <!-- start left panel -->\r\n    <app-side-menu></app-side-menu>\r\n    <!-- end left panel -->\r\n\r\n    <!-- start right panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li>Perform Mass Maintenance</li>\r\n          <li>Import Tasks</li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <h1>Scheduled Import</h1>\r\n        <div class=\"form_area\">\r\n          <form action=\"\" class=\"width_70\" (ngSubmit)=\"formData.valid && copySheduleImport(formData.value)\" #formData=\"ngForm\"\r\n            novalidate>\r\n            <div class=\"column_text form_column_one\">\r\n              <label for=\"taskName\" class=\"required\">Task Name</label>\r\n              <input type=\"text\" size=\"100\" placeholder=\"Task Name\" name=\"taskName\" #taskName=\"ngModel\" ngModel\r\n                [(ngModel)]=\"data.name\" required />\r\n              <div *ngIf=\"formData.submitted && !taskName.valid\" style=\"color: red; size: 20px;\">Task Name is required</div>\r\n            </div>\r\n            <div class=\"column_text form_column3\">\r\n              <label for=\"startDate\" class=\"required_grey\">Start Date</label>\r\n              <input type=\"text\" size=\"11\" name=\"startDate\" placeholder=\"yyyy-mm-dd\" #startDate=\"ngModel\" ngModel\r\n                [(ngModel)]=\"data.effectiveDate\" required />\r\n              <span> <img src=\"../../assets/images_icons/calander_icon.png\" width=\"24\" height=\"24\" alt=\"Date\"></span>\r\n            </div>\r\n              <!-- <button class=\"btn btn-outline-secondary calendar\"\r\n\t\t\t\t\t\t\t(click)=\"d.toggle()\" type=\"button\"></button></div> -->\r\n              <div class=\"form_column3\" id=\"bloc1\">\r\n                <div class=\"column_text\">\r\n                  <label for=\"frequency\" class=\"required_grey\">Frequency</label>\r\n                </div>\r\n                <div class=\"custom-select custom_select_width50\">\r\n                  <select name=\"frequency\" (change)=\"getDayToImport(frequency.value)\" #frequency=\"ngModel\" ngModel\r\n                    [(ngModel)]=\"data.frequency\" required>\r\n                    <option *ngFor=\"let freqs of freq\" [value]=\"freqs\">{{freqs}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form_column3\" id=\"bloc1\" *ngIf=\"frequency.value === 'WEEKLY' || frequency.value === 'MONTHLY'\">\r\n                <div class=\"column_text\" id=\"bloc2\" *ngIf=\"frequency.value === 'MONTHLY'\">\r\n                  <label for=\"dayToImport\" class=\"required_grey\">Date to Import</label>\r\n                </div>\r\n                <div class=\"column_text\" id=\"bloc2\" *ngIf=\"frequency.value === 'WEEKLY'\"><label for=\"dayToImport\">Day To Import </label>\r\n                </div>\r\n                <div id=\"bloc3\" class=\"custom-select custom_select_width50\">\r\n                  <select name=\"dayToImport\" #dayToImport=\"ngModel\" ngModel [(ngModel)]=\"data.freqPattern\" required>\r\n                    <option *ngFor=\"let item of day\" [value]=\"item\">{{item}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"formData.submitted && !dayToImport.valid\" style=\"color: red;\">please select DayToImport</div>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"formData.submitted && !startDate.valid\" style=\"color: red;\">Start Date required</div>\r\n              <div *ngIf=\"formData.submitted && !frequency.valid\" style=\"color: red;\">please select Frequency</div>\r\n            \r\n            <div class=\"column_text form_column_one\">\r\n              <div *ngIf=\"formData.submitted && !location.valid\" style=\"color: red;\">File location is required</div>\r\n              <label for=\"name\" class=\"required_grey\">File Name</label>\r\n              <input type=\"text\" size=\"100\" placeholder=\"File Name\" name=\"fileLocation\" #location=\"ngModel\" ngModel\r\n                [(ngModel)]=\"data.filePath\" required />\r\n              <!-- <div><h6>(please provide the full path of the file with file name as C:\\\\users\\\\smanickam2\\\\CISimport.xls)</h6></div> -->\r\n            </div>\r\n            <div class=\"column_text form_column_one\">\r\n              <label for=\"remarks\">Remarks</label>\r\n              <input type=\"text\" size=\"100\" name=\"remarks\" placeholder=\"\" ngModel [(ngModel)]=\"data.remarks\" required />\r\n            </div>\r\n\r\n            <div class=\"form_area_section marginTop20\">\r\n              <div class=\"form_column\"><span style=\"padding:10px 10px 0 0\">Activate Schedule?</span>\r\n                <label class=\"switch\">\r\n                  <input type=\"checkbox\" checked name=\"status\" ngModel checked [(ngModel)]=\"status\">\r\n                  <span class=\"slider round\"></span> </label>\r\n              </div>\r\n              <div class=\"form_column\" style=\"padding-right:12px\">\r\n                <div class=\"floatRight\">\r\n                  <div class=\"button_green floatLeft\">\r\n                    <button type=\"submit\" class=\"width100\">Save</button>\r\n                  </div>\r\n                  <div class=\"button_lightgrey floatLeft marginleft10\">\r\n                    <button type=\"submit\" class=\"width100\" routerLink=\"cancel\" (click)=\"cancelImport()\">Cancel</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- end content -->\r\n    </div>\r\n    <!-- end right panel -->\r\n  </div>\r\n  <!-- end container -->\r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer -->\r\n\r\n\r\n<!-- end wrapper -->"

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n  <!-- start container -->\r\n  <div class=\"container\">\r\n\r\n    <!-- Start left panel -->\r\n    <app-side-menu></app-side-menu>\r\n    <!-- end left panel -->\r\n\r\n    <!-- start right panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li>Perform Mass Maintenance</li>\r\n          <li>Import Tasks</li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <h1>Scheduled Import</h1>\r\n        <div class=\"form_area\">\r\n          <form action=\"\" class=\"width_70\" (ngSubmit)=\"formData.valid && createImport(formData.value)\"\r\n\t\t\t\t\t#formData=\"ngForm\" novalidate>\r\n            <div class=\"column_text form_column_one\">\r\n              <label for=\"taskName\" class=\"required\">Task Name</label>\r\n              <input type=\"text\" size=\"100\" placeholder=\"Task Name\" name=\"taskName\" #taskName=\"ngModel\" ngModel\r\n              required/>\r\n              <div *ngIf=\"formData.submitted && !taskName.valid\"\r\n\t\t\t\t\t\t\tstyle=\"color: red; size: 20px;\">Task Name is required</div>\r\n            </div>\r\n            <!-- <div class=\"column_text form_column3\">\r\n              <label for=\"startDate\" class=\"required_grey\">Start Date</label>\r\n              <input type=\"text\" size=\"11\" name=\"startDate\" placeholder=\"yyyy-mm-dd\" #startDate=\"ngModel\" ngModel\t\t\t\t\t\t\trequired />\r\n              <span> <img src=\"../../assets/images_icons/calander_icon.png\" width=\"24\" height=\"24\" alt=\"Date\"></span> </div> -->\r\n              <div class=\"form_column3\">\r\n                <div class=\"column_text\">\r\n                  <label for=\"startDate\" class=\"required_grey\">Start Date</label>\r\n                </div>\r\n                <div class=\"custom-select custom_select_width50\">\r\n                  <my-date-picker [options]=\"myDatePickerOptions\" placeholder=\"yyyy-mm-dd\" name=\"startDate\"   #startDate=\"ngModel\"\r\n                     ngModel [selDate]=\"selectedDate\"></my-date-picker>\r\n                </div>\r\n              </div>\r\n            <div class=\"form_column3\" id=\"bloc1\">\r\n              <div class=\"column_text\">\r\n                <label for=\"name\" class=\"required_grey\">Frequency</label>\r\n              </div>\r\n              <div class=\"custom-select custom_select_width50\">\r\n                <select name=\"frequency\"\r\n                (change)=\"getDayToImport(frequency.value)\" #frequency=\"ngModel\" ngModel\r\n                required>\r\n                  <option  *ngFor=\"let freqs of freq\" [value]=\"freqs\">{{freqs}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"form_column3\" id=\"bloc1\" *ngIf=\"frequency.value === 'WEEKLY' || frequency.value === 'MONTHLY'\">\r\n              <div class=\"column_text\" id=\"bloc2\" *ngIf=\"frequency.value === 'MONTHLY'\">\r\n                <label for=\"dayToImport\" class=\"required_grey\">Date to Import</label></div>\r\n              <div class=\"column_text\" id=\"bloc2\" *ngIf=\"frequency.value === 'WEEKLY'\"><label for=\"dayToImport\" class=\"required_grey\">Day To Import </label> </div>\r\n              <div class=\"custom-select custom_select_width50\" id=\"bloc3\">\r\n                <select name=\"dayToImport\"  #dayToImport=\"ngModel\" ngModel required>\r\n                  <option *ngFor=\"let item of day\" [value]=\"item\">{{item}}</option>\r\n                </select>\r\n                <div *ngIf=\"formData.submitted && !dayToImport.valid\"\r\n                style=\"color: red;\">please select DayToImport</div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"formData.submitted && !startDate.valid\"\r\n\t\t\t\t\t\t\tstyle=\"color: red;\">Start Date required</div>\r\n\t\t\t\t\t\t<div *ngIf=\"formData.submitted && !frequency.valid\"\r\n\t\t\t\t\t\t\tstyle=\"color: red;\">please select Frequency</div>\r\n            <div class=\"column_text form_column_one\">\r\n              <label for=\"name\" class=\"required_grey\">File Name</label>\r\n              <input type=\"text\" size=\"100\" placeholder=\"File Name\" \r\n              name=\"fileLocation\" #location=\"ngModel\" ngModel required />\r\n              <div *ngIf=\"formData.submitted && !location.valid\"\r\n\t\t\t\t\t\t\tstyle=\"color: red;\">File location is required</div>\r\n\t\t\t\t\t\t<!-- <div><h6>(please provide the full path of the file with file name as C:\\\\users\\\\smanickam2\\\\CISimport.xls)</h6></div> -->\r\n            </div>\r\n            <div class=\"column_text form_column_one\">\r\n              <label for=\"remarks\">Remarks</label>\r\n              <input type=\"text\" size=\"100\" name=\"remarks\" placeholder=\"\" ngModel />\r\n            </div>\r\n\r\n            <div class=\"form_area_section marginTop20\">\r\n              <div class=\"form_column\"><span style=\"padding:10px 10px 0 0\">Activate Schedule?</span>\r\n                <label class=\"switch\">\r\n                  <input type=\"checkbox\" checked name=\"status\" \r\n                  ngModel [(ngModel)]=\"activateShedule\">\r\n                  <span class=\"slider round\"></span> </label>\r\n              </div>\r\n              <div class=\"form_column\" style=\"padding-right:12px\">\r\n                <div class=\"floatRight\">\r\n                  <div class=\"button_green floatLeft\">\r\n                    <button type=\"submit\" class=\"width100\">Save</button>\r\n                  </div>\r\n                  <div class=\"button_lightgrey floatLeft marginleft10\">\r\n                    <button class=\"width100\" type=\"button\" routerLink=\"cancel\" (click)=\"cancelImport()\">Cancel</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- end content -->\r\n    </div>\r\n    <!-- end right panel -->\r\n  </div>\r\n  <!-- end container -->\r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer -->\r\n\r\n\r\n<!-- end wrapper -->"

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n\r\n  <div class=\"container\">\r\n    <!-- start left panel -->\r\n    <app-side-menu></app-side-menu>\r\n    <!-- end left panel -->\r\n\r\n    <!-- start right panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li>Perform Mass Maintenance</li>\r\n          <li>Import Tasks</li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <h1>Scheduled Import</h1>\r\n        <div class=\"form_area\">\r\n          <form action=\"\" class=\"width_70\" (ngSubmit)=\"formData.valid && updateImport(formData.value)\" #formData=\"ngForm\"\r\n            novalidate>\r\n            <div class=\"column_text form_column_one\">\r\n              <label for=\"taskName\" class=\"required\">Task Name</label>\r\n              <input type=\"text\" size=\"100\" placeholder=\"Task Name\" name=\"taskName\" #taskName=\"ngModel\" ngModel\r\n                [(ngModel)]=\"data.name\" required readonly=\"readonly\" />\r\n            </div>\r\n            <div *ngIf=\"formData.submitted && !startDate.valid\" style=\"color: red;\">Start Date required</div>\r\n            <div *ngIf=\"formData.submitted && !frequency.valid\" style=\"color: red;\">please select Frequency</div>\r\n            <div class=\"column_text form_column3\">\r\n              <label for=\"startDate\" class=\"required_grey\">Start Date</label>\r\n              <input type=\"text\" size=\"11\" name=\"startDate\" placeholder=\"yyyy-mm-dd\" #startDate=\"ngModel\" ngModel\r\n                [(ngModel)]=\"data.effectiveDate\" required />\r\n              <span> <img src=\"../../assets/images_icons/calander_icon.png\" width=\"24\" height=\"24\" alt=\"Date\"></span>\r\n            </div>\r\n            <!-- <button class=\"btn btn-outline-secondary calendar\"\r\n\t\t\t\t\t\t\t(click)=\"d.toggle()\" type=\"button\"></button> -->\r\n            <div class=\"form_column3\" id=\"bloc1\">\r\n              <div class=\"column_text\">\r\n                <label for=\"frequency\" class=\"required_grey\">Frequency</label>\r\n              </div>\r\n              <div class=\"custom-select custom_select_width50\">\r\n                <select name=\"frequency\" (change)=\"getDayToImport(frequency.value)\" #frequency=\"ngModel\" ngModel\r\n                  [(ngModel)]=\"data.frequency\" required>\r\n                  <option *ngFor=\"let freqs of freq\" [value]=\"freqs\">{{freqs}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form_column3\" id=\"bloc1\" *ngIf=\"frequency.value === 'WEEKLY' || frequency.value === 'MONTHLY'\">\r\n              <div class=\"column_text\" id=\"bloc2\" *ngIf=\"frequency.value === 'MONTHLY'\">\r\n                <label for=\"dayToImport\" class=\"required_grey\">Date to Import</label>\r\n              </div>\r\n              <div class=\"column_text\" id=\"bloc2\" *ngIf=\"frequency.value === 'WEEKLY'\"><label for=\"dayToImport\">Day To Import </label>\r\n              </div>\r\n              <div class=\"custom-select custom_select_width50\" id=\"bloc3\">\r\n                <select name=\"dayToImport\" #dayToImport=\"ngModel\" ngModel [(ngModel)]=\"data.freqPattern\" required>\r\n                  <option *ngFor=\"let item of day\" [value]=\"item\">{{item}}</option>\r\n                </select>\r\n                <div *ngIf=\"formData.submitted && !dayToImport.valid\" style=\"color: red;\">please select DayToImport</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"column_text form_column_one\">\r\n              <label for=\"name\" class=\"required_grey\">File Name</label>\r\n              <input type=\"text\" id=\"ctrl\" size=\"100\" name=\"fileLocation\" placeholder=\"File Name\" #location=\"ngModel\"\r\n                ngModel [(ngModel)]=\"data.filePath\" required />\r\n                <div *ngIf=\"formData.submitted && !location.valid\" style=\"color: red;\">File path is required</div>\r\n              <!-- <div><h6>(please provide the full path of the file with file name as C:\\\\users\\\\smanickam2\\\\CISimport.xls)</h6></div> -->\r\n            </div>\r\n            <div class=\"column_text form_column_one\">\r\n              <label for=\"remarks\">Remarks</label>\r\n              <input type=\"text\" size=\"100\" name=\"remarks\" placeholder=\"\" [(ngModel)]=\"data.remarks\" required />\r\n            </div>\r\n\r\n            <div class=\"form_area_section marginTop20\">\r\n              <div class=\"form_column\"><span style=\"padding:10px 10px 0 0\">Activate Schedule?</span>\r\n                <label class=\"switch\">\r\n                  <input type=\"checkbox\" checked name=\"status\" ngModel checked [(ngModel)]=\"status\">\r\n                  <span class=\"slider round\"></span> </label>\r\n              </div>\r\n              <div class=\"form_column\" style=\"padding-right:12px\">\r\n                <div class=\"floatRight\">\r\n                  <div class=\"button_green floatLeft\">\r\n                    <button type=\"submit\" class=\"width100\">Save</button>\r\n                  </div>\r\n                  <div class=\"button_lightgrey floatLeft marginleft10\">\r\n                    <button type=\"button\" class=\"width100\" routerLink=\"cancel\" (click)=\"cancelEditImport()\">Cancel</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- end content -->\r\n    </div>\r\n    <!-- end right panel -->\r\n  </div>\r\n  <!-- end container -->\r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer -->\r\n\r\n\r\n<!-- end wrapper -->"

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n\r\n  <div class=\"container\">\r\n    <!-- start left panel -->\r\n    <app-side-menu></app-side-menu>\r\n    <!-- end left panel -->\r\n\r\n    <!-- start right panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li>Perform Mass Maintenance</li>\r\n          <li>Import Tasks</li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <h1>Scheduled Import</h1>\r\n        <div class=\"form_area\">\r\n          <form action=\"\" class=\"width_70\" (ngSubmit)=\"formData.valid\" #formData=\"ngForm\" novalidate>\r\n            <fieldset [disabled]=\"true\">\r\n              <div class=\"column_text form_column_one\">\r\n                <div *ngIf=\"formData.submitted && !taskName.valid\" style=\"color: red; size: 20px;\">Task Name is\r\n                  required</div>\r\n                <label for=\"taskName\" class=\"required\">Task Name</label>\r\n                <input type=\"text\" size=\"100\" name=\"\" placeholder=\"Task Name\" name=\"taskName\" #taskName=\"ngModel\"\r\n                  ngModel [(ngModel)]=\"data.name\" required />\r\n              </div>\r\n              <div class=\"column_text form_column3\">\r\n                <div *ngIf=\"formData.submitted && !startDate.valid\" style=\"color: red;\">Start Date required</div>\r\n                <div *ngIf=\"formData.submitted && !frequency.valid\" style=\"color: red;\">please select Frequency</div>\r\n                <div *ngIf=\"formData.submitted && !dayToImport.valid\" style=\"color: red;\">please select DayToImport</div>\r\n                <label for=\"startDate\" class=\"required_grey\">Start Date</label>\r\n                <input type=\"text\" size=\"11\" name=\"startDate\" placeholder=\"yyyy-mm-dd\" #startDate=\"ngModel\" ngModel\r\n                  [(ngModel)]=\"data.effectiveDate\" required />\r\n                <span> <img src=\"../../assets/images_icons/calander_icon.png\" width=\"24\" height=\"24\" alt=\"Date\"></span>\r\n                <!-- <button class=\"btn btn-outline-secondary calendar\"\r\n\t\t\t\t\t\t\t(click)=\"d.toggle()\" type=\"button\"></button> -->\r\n              </div>\r\n              <div class=\"form_column3\" id=\"bloc1\">\r\n                <div class=\"column_text\">\r\n                  <label for=\"frequency\" class=\"required_grey\">Frequency</label>\r\n                </div>\r\n                <div class=\"custom-select custom_select_width50\">\r\n                  <select name=\"frequency\" #frequency=\"ngModel\" ngModel\r\n                   [(ngModel)]=\"data.frequency\" required>\r\n                    <option *ngFor=\"let freqs of freq\" [value]=\"freqs\">{{freqs}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form_column3\" id=\"bloc1\" *ngIf=\"frequency.value === 'WEEKLY' || frequency.value === 'MONTHLY'\">\r\n                <div class=\"column_text\" id=\"bloc2\" *ngIf=\"frequency.value === 'MONTHLY'\">\r\n                  <label for=\"dayToImport\" class=\"required_grey\">Date to Import</label>\r\n                </div>\r\n                <div class=\"column_text\" id=\"bloc2\" *ngIf=\"frequency.value === 'WEEKLY'\"><label for=\"dayToImport\">Day To Import </label>\r\n                </div>\r\n                <div id=\"bloc3\" class=\"custom-select custom_select_width50\">\r\n                  <select name=\"dayToImport\" #dayToImport=\"ngModel\" ngModel [(ngModel)]=\"data.freqPattern\" required>\r\n                    <option *ngFor=\"let item of day\" [value]=\"item\">{{item}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"column_text form_column_one\">\r\n                <div *ngIf=\"formData.submitted && !location.valid\" style=\"color: red;\">File location is required</div>\r\n                <label for=\"name\" class=\"required_grey\">File Name</label>\r\n                <input type=\"text\" size=\"100\" placeholder=\"File Name\" name=\"fileLocation\" #location=\"ngModel\" ngModel\r\n                  [(ngModel)]=\"data.filePath\" required />\r\n                <!-- <div><h6>(please provide the full path of the file with file name as C:\\\\users\\\\smanickam2\\\\CISimport.xls)</h6></div> -->\r\n              </div>\r\n              <div class=\"column_text form_column_one\">\r\n                <label for=\"name\">Remarks</label>\r\n                <input type=\"text\" size=\"100\" name=\"remarks\" placeholder=\"\" ngModel [(ngModel)]=\"data.remarks\" required />\r\n              </div>\r\n\r\n              <div class=\"form_area_section marginTop20\">\r\n                <div class=\"form_column\"><span style=\"padding:10px 10px 0 0\">Activate Schedule?</span>\r\n                  <label class=\"switch\">\r\n                    <input type=\"checkbox\" checked name=\"status\" ngModel checked [(ngModel)]=\"status\">\r\n                    <span class=\"slider round\"></span> </label>\r\n                </div>\r\n                <!-- <div class=\"form_column\" style=\"padding-right:12px\">\r\n                <div class=\"floatRight\">\r\n                  <div class=\"button_green floatLeft\">\r\n                    <button type=\"submit\" class=\"width100\">Save</button>\r\n                  </div>\r\n                  <div class=\"button_lightgrey floatLeft marginleft10\">\r\n                    <button type=\"submit\" class=\"width100\">Cancel</button>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n              </div>\r\n            </fieldset>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- end content -->\r\n    </div>\r\n    <!-- end right panel -->\r\n  </div>\r\n  <!-- end container -->\r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer -->\r\n\r\n\r\n<!-- end wrapper -->"

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <!-- end header -->\r\n  <div class=\"container\">\r\n      <app-side-menu></app-side-menu>\r\n    <!-- end left panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li>Perform Mass Maintenance</li>\r\n          <li>Import Tasks</li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <div  class=\"content_area\" id=\"new\">\r\n          <div class=\"button_lightgreen floatRight\">\r\n            <nav>\r\n            <button [routerLink]=\"['create']\" class=\"btn\" role=\"button\" type=\"submit\"><img src=\"../../assets/images_icons/icon_plus.png\" alt=\"New\">New</button>\r\n            </nav>\r\n          </div>\r\n\t\t  <br>\r\n\t\t   <h1>Your Scheduled Imports</h1>\r\n          <div class=\"datatable\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Task Name</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Status</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Created On</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Last Updated By</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Changed On</a></th>\r\n                  <th colspan=\"4\" ><a href=\"#\" >Action</a></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let scheduleImport of getItems()\">\r\n                  <td>{{scheduleImport.name}}</td>\r\n\t\t\t\t          <td>{{scheduleImport.status}}</td>\r\n                  <td>{{scheduleImport.createdOn}}</td>\r\n                  <td>{{scheduleImport.modifiedBy}}</td>\r\n                  <td>{{scheduleImport.modifiedOn}}</td>\r\n                  <td><nav>\r\n                      <a [routerLink]=\"['view',scheduleImport.uuid]\" class=\"bootstrap-link\" role=\"button\" routerLinkActive=\"active\"><img src=\"../../../assets/images_icons/view_icon.png\"\r\n                          width=\"16\" height=\"16\" alt=\"View\"></a> </nav></td>\r\n                  <td><nav>   <a [routerLink]=\"['edit',scheduleImport.uuid]\" class=\"bootstrap-link\" role=\"button\" routerLinkActive=\"active\"><img src=\"../../../assets/images_icons/edit_icon.png\"\r\n                          width=\"16\" height=\"16\" alt=\"Edit\"></a></nav></td>\r\n                  <td><nav>    <a [routerLink]=\"['copy',scheduleImport.uuid]\" class=\"bootstrap-link\" role=\"button\" routerLinkActive=\"active\"><img src=\"../../../assets/images_icons/copy_icon.png\"\r\n                          width=\"16\" height=\"18\" alt=\"Copy\"></a></nav></td>\r\n                  <td><nav>  <a class=\"bootstrap-link\" role=\"button\" (click)=\"deleteScheduleImport(scheduleImport.uuid)\" routerLinkActive=\"active\"><img\r\n                          src=\"../../../assets/images_icons/delete_icon.png\" width=\"16\" height=\"16\" alt=\"Delete\"></a>\r\n                  </nav></td>\r\n                </tr>\r\n                \r\n              </tbody>\r\n            </table>\r\n            <p class=\"no_data_desc\" *ngIf=\"!scheduledImports.length > 0\">No Data Available</p>\r\n            <!-- <div class=\"pagination\">\r\n\r\n              <div class=\"floatLeft\">\r\n                <div class=\"custom-select floatLW120\">\r\n                  <select>\r\n                    <option value=\"0\">Show 5 items</option>\r\n                    <option value=\"1\">5</option>\r\n                    <option value=\"2\">10</option>\r\n                    <option value=\"3\">15</option>\r\n                    <option value=\"4\">20</option>\r\n                    <option value=\"5\">25</option>\r\n                    <option value=\"6\">30</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"pagination_text\">1 to 5 of 30 </div>\r\n              </div>\r\n              <div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\">1</a> <a href=\"#\" class=\"active\">2</a> <a href=\"#\">3</a> <a href=\"#\">4</a> <a href=\"#\">5</a> <a href=\"#\">6</a> <a href=\"#\" class=\"pagination_next\">&raquo;</a> </div>\r\n            </div> -->\r\n            <app-pagination [exportTableList]=\"scheduledImports\">Loading...</app-pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end content --> \r\n    </div>\r\n    <!-- end right panel --> \r\n  </div>\r\n  <!-- end container --> \r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer --> \r\n  \r\n\r\n<!-- end wrapper --> \r\n\r\n"

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"sidenav\">\r\n  <h3 style=\"color: #337ab7;\r\n      padding: 15px 8px 6px 4px;\r\n      font-size: 20px;\">Your Tasks</h3>\r\n  <h3 style=\"background-color: #337ab7 !important; color: #f1f1f1;\r\n      padding: 15px 8px 6px 4px;\r\n      font-size: 20px;\">Import Tasks</h3>\r\n   <a routerLink=\"/inprogress\">In Progress</a> \r\n  <a href=\"#completed\">Completed</a>\r\n  <a href=\"#real-time-import\">Real time-Import</a>\r\n  <a href=\"#scheduled-import\">Scheduled-Import</a>\r\n  <h3 style=\"background-color: #337ab7 !important; color: #f1f1f1; \r\n      padding: 15px 8px 6px 4px;\r\n      font-size: 20px;\">Export Tasks</h3>\r\n  <a routerLink=\"/exportpcd\">Real time-Export</a> -->\r\n<!--   <a routerLink=\"eportPcd\" routerLinkActive=\"active\" class=\"bootstrapLink\" >Real time-Export</a>\r\n --> \r\n <!-- <a href=\"#scheduled-export\">Scheduled-Export</a>\r\n  <a routerLink=\"/excelStyleSettings\" style=\"background-color: #337ab7 !important; color: #f1f1f1;\">Excel Style Setting</a>\r\n</div> -->\r\n\r\n<div class=\"container\">\r\n    <div class=\"left_panel\">\r\n      <div id=\"sidemenu\">\r\n        <ul>\r\n          <li class=\"active\"><a><span>Your Tasks</span></a></li>\r\n          <li class=\"sidemenu-submenu\"><a><span>Import Tasks</span></a>\r\n            <ul>\r\n              <li><a routerLink=\"/importinprogress\"><span>In Progress</span></a></li>\r\n              <li><a routerLink=\"/importcompleted\"><span>Completed</span></a></li>\r\n              <li><a routerLink=\"/importpcd\"><span>Real time-Import</span></a></li>\r\n              <li><a routerLink=\"/scheduleImport\"><span>Scheduled-Import</span></a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"sidemenu-submenu\"><a><span>Export Tasks</span></a>\r\n            <ul style=\"display:block\">\r\n              <li><a routerLink=\"/exportpcd\"><span>Real time-Export</span></a></li>\r\n              <li><a routerLink=\"/scheduleExport\"><span>Scheduled-Export</span></a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"last\"><a routerLink=\"/excelStyleSettings\"><span>Excel Style Setting</span></a></li>\r\n        </ul>\r\n      </div>\r\n    </div>"

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n  <!-- end header -->\r\n  <div class=\"container\">\r\n    <div class=\"left_panel\">\r\n      <div id=\"sidemenu\" style=\"opacity:.3; pointer-events: none\">\r\n        <ul>\r\n          <li class=\"active\"><a href=\"#\"><span>Your Tasks</span></a></li>\r\n          <li class=\"sidemenu-submenu\"><a href=\"#\"><span>Import Tasks</span></a>\r\n            <ul>\r\n              <li class=\"selected\"><a href=\"#\"><span>In Progress</span></a></li>\r\n              <li><a href=\"#\"><span>Completed</span></a></li>\r\n              <li><a href=\"#\"><span>Real time-Import</span></a></li>\r\n              <li><a href=\"#\"><span>Scheduled-Import</span></a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"sidemenu-submenu\"><a href=\"#\"><span>Export Tasks</span></a>\r\n            <ul>\r\n              <li><a href=\"#\"><span>Real time-Export</span></a></li>\r\n              <li class=\"last\"><a href=\"#\"><span>Scheduled-Export</span></a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"last\"><a href=\"#\"><span>Excel Style Setting</span></a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <!-- end left panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li><a href=\"#\">Manage Template</a></li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <h1> copy</h1>\r\n        <div class=\"content_area\">\r\n          <div class=\"button_area marginTop10\">\r\n            <div class=\"button_lightgrey floatLeft marginBottom10\">\r\n              <button type=\"submit\" routerLink=\"/templates\" routerLinkActive=\"active\"><img src=\"../../assets/images_icons/back_icon.png\"\r\n                  alt=\"Back\">Back</button>\r\n            </div>\r\n            <div class=\"form_area\">\r\n              <form action=\"\" [formGroup]=\"createForm\">\r\n                <div class=\"column_text form_column\">\r\n                  <label for=\"name\" class=\"required\">Template Name</label>\r\n                  <input type=\"text\" id=\"templateName\" size=\"50\" name=\"\" formControlName='templateName' required\r\n                    placeholder=\"Template Name\" [(ngModel)]=\"template.name\" />\r\n                </div>\r\n                <div class=\"form_column\">\r\n                  <div class=\"column_text\">\r\n                    <label for=\"name\">Application</label>\r\n                  </div>\r\n                  <div class=\"custom-select custom_select_width60\">\r\n                    <select [(ngModel)]=\"appId\" class=\"from-control\" formControlName='application' (change)=\"onApplicationChange()\" required>\r\n                      <!-- <option disabled hidden [value]=\"application.id\"></option> -->\r\n                      <option *ngFor=\"let application of applicationList\" [value]=\"application.id\">{{application.name}}</option>\r\n                      </select> \r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <div class=\"datatable\">\r\n              <table>\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Parameter Set Number</a></th>\r\n                    <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Parameter Set Name</a></th>\r\n                    <th width=\"3%\"><a href=\"#\">Select</a></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let pSet of cacheParameterSets\">\r\n                    <td>{{pSet.number}}</td>\r\n                    <td>{{pSet.name}}</td>\r\n                    <td align=\"center\"><img (click)=addParameterSet(pSet) src=\"../../assets/images_icons/select_icon.png\"\r\n                        width=\"16\" height=\"16\" alt=\"Selected Move\"></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <!-- <app-pagination [exportTableList]=\"cacheParameterSets\">Loading...</app-pagination> -->\r\n              <div class=\"pagination\">\r\n                <div class=\"floatLeft\">\r\n                  <div class=\"custom-select floatLW120\">\r\n                    <select>\r\n                      <option value=\"0\">Show 5 items</option>\r\n                      <option value=\"1\">5</option>\r\n                      <option value=\"2\">10</option>\r\n                      <option value=\"3\">15</option>\r\n                      <option value=\"4\">20</option>\r\n                      <option value=\"5\">25</option>\r\n                      <option value=\"6\">30</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"pagination_text\">1 to 5 of 30 </div>\r\n                </div>\r\n                <div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\">1</a> <a href=\"#\"\r\n                    class=\"active\">2</a> <a href=\"#\">3</a> <a href=\"#\">4</a> <a href=\"#\">5</a> <a href=\"#\">6</a> <a\r\n                    href=\"#\" class=\"pagination_next\">&raquo;</a> </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"content_border marginTop30\">\r\n              <h1 class=\"marginTop20\">Selected Parameter Sets</h1>\r\n              <div class=\"datatable\">\r\n                <table>\r\n                  <thead>\r\n                    <tr>\r\n                      <th cope=\"col\" width=\"7%\">Application</th>\r\n                      <th scope=\"col\" width=\"20%\">Parameter Set Number</th>\r\n                      <th scope=\"col\" width=\"20%\">Parameter Set Name</th>\r\n                      <th scope=\"col\" width=\"20%\">Company</th>\r\n                      <th scope=\"col\" width=\"20%\">Effective Date</th>\r\n                      <th colspan=\"4\" width=\"3%\">&nbsp;</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let paramSet of selectedParameterSets; let i = index;\">\r\n                      <td>{{paramSet.applicationID}}</td>\r\n                      <td>{{paramSet.number}}</td>\r\n                      <td>{{paramSet.name}}</td>\r\n                      <td *ngIf=\" i === editRowId\">\r\n                        <!-- (ngModelChange)=\"selectedCompanyDp($event)\" -->\r\n                        <select ngModel [(ngModel)]=\"paramSet.companyID\">\r\n                          <!-- <option>All</option> -->\r\n                          <option *ngFor=\"let company of paramSet.companies\" [value]=\"company.id\">{{company.name}}</option>\r\n                        </select>\r\n                      </td>\r\n                      <td *ngIf=\" i !== editRowId\">\r\n                        <select [(ngModel)]=\"paramSet.companyID\">\r\n                          <!-- <option>All</option> -->\r\n                          <option *ngFor=\"let company of paramSet.companies\" [value]=\"company.id\">{{company.name}}</option>\r\n                        </select>\r\n                      </td>\r\n                      <td *ngIf=\" i === editRowId\">\r\n                        <input type=\"text\" id=\"effectiveDate\" name=\"effectiveDate\" class=\"form-control\" [(ngModel)]=\"paramSet.effectiveDate\"\r\n                      ngModel placeholder=\"yyyy-mm-dd\"/>\r\n                      </td>\r\n                      <td *ngIf=\" i !== editRowId\" >\r\n                        <input type=\"text\" id=\"effectiveDate\" name=\"effectiveDate\" class=\"form-control\" [(ngModel)]=\"paramSet.effectiveDate\"\r\n                      ngModel placeholder=\"yyyy-mm-dd\"/>\r\n                      </td>\r\n                      <td width=\"16px\"><img src=\"../../assets/images_icons/delete_icon.png\" width=\"16\" height=\"16\" alt=\"Delete\"\r\n                          (click)=deleteParameterSet(i)></td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <!-- <app-pagination [exportTableList]=\"selectedParameterSets\">Loading...</app-pagination> -->\r\n                <div class=\"pagination\">\r\n                  <div class=\"floatLeft\">\r\n                    <div class=\"custom-select floatLW120\">\r\n                      <select>\r\n                        <option value=\"0\">Show 5 items</option>\r\n                        <option value=\"1\">5</option>\r\n                        <option value=\"2\">10</option>\r\n                        <option value=\"3\">15</option>\r\n                        <option value=\"4\">20</option>\r\n                        <option value=\"5\">25</option>\r\n                        <option value=\"6\">30</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"pagination_text\">1 to 5 of 30 </div>\r\n                  </div>\r\n                  <div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\">1</a> <a\r\n                      href=\"#\" class=\"active\">2</a> <a href=\"#\">3</a> <a href=\"#\">4</a> <a href=\"#\">5</a> <a href=\"#\">6</a>\r\n                    <a href=\"#\" class=\"pagination_next\">&raquo;</a> </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"button_green floatRight marginTop10\">\r\n              <button type=\"submit\" (click)=create_Template()><img src=\"../../assets/images_icons/save_icon.png\" alt=\"Save\">Save</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- end content -->\r\n    </div>\r\n    <!-- end right panel -->\r\n  </div>\r\n  <!-- end container -->\r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer -->\r\n\r\n\r\n<!-- end wrapper -->"

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n  <!-- end header -->\r\n  <div class=\"container\">\r\n    <div class=\"left_panel\">\r\n      <div id=\"sidemenu\" style=\"opacity:.3; pointer-events: none\">\r\n        <ul>\r\n          <li class=\"active\"><a href=\"#\"><span>Your Tasks</span></a></li>\r\n          <li class=\"sidemenu-submenu\"><a href=\"#\"><span>Import Tasks</span></a>\r\n            <ul>\r\n              <li class=\"selected\"><a href=\"#\"><span>In Progress</span></a></li>\r\n              <li><a href=\"#\"><span>Completed</span></a></li>\r\n              <li><a href=\"#\"><span>Real time-Import</span></a></li>\r\n              <li><a href=\"#\"><span>Scheduled-Import</span></a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"sidemenu-submenu\"><a href=\"#\"><span>Export Tasks</span></a>\r\n            <ul>\r\n              <li><a href=\"#\"><span>Real time-Export</span></a></li>\r\n              <li class=\"last\"><a href=\"#\"><span>Scheduled-Export</span></a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"last\"><a href=\"#\"><span>Excel Style Setting</span></a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <!-- end left panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li><a href=\"#\">Manage Template</a></li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <h1> New</h1>\r\n        <div class=\"content_area\">\r\n          <div class=\"button_area marginTop10\">\r\n            <div class=\"button_lightgrey floatLeft marginBottom10\">\r\n              <button type=\"submit\" routerLink=\"/templates\" routerLinkActive=\"active\"><img src=\"../../assets/images_icons/back_icon.png\"\r\n                  alt=\"Back\">Back</button>\r\n            </div>\r\n            <div class=\"form_area\">\r\n              <form action=\"\" [formGroup]=\"createForm\">\r\n                <div class=\"column_text form_column\">\r\n                  <label for=\"name\" class=\"required\">Template Name</label>\r\n                  <input type=\"text\" id=\"templateName\" size=\"50\" name=\"\" formControlName='templateName' required\r\n                    placeholder=\"Template Name\" [(ngModel)]=\"template.name\" />\r\n                </div>\r\n                <div class=\"form_column\">\r\n                  <div class=\"column_text\">\r\n                    <label for=\"name\">Application</label>\r\n                  </div>\r\n                  <div class=\"custom-select custom_select_width60\">\r\n                    <select [(ngModel)]=\"appId\" class=\"from-control\" formControlName='templateName' (change)=\"onApplicationChange()\" required>\r\n                      <option disabled hidden [value]=\"undefined\"></option>\r\n                      <option *ngFor=\"let application of applicationList\" [value]=\"application.id\">{{application.name}}</option>\r\n                      </select> \r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <div class=\"datatable\">\r\n              <table>\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Parameter Set Number</a></th>\r\n                    <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Parameter Set Name</a></th>\r\n                    <th width=\"3%\"><a href=\"#\">Select</a></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let pSet of getItems()\">\r\n                    <td>{{pSet.number}}</td>\r\n                    <td>{{pSet.name}}</td>\r\n                    <td align=\"center\"><img (click)=addParameterSet(pSet) src=\"../../assets/images_icons/select_icon.png\"\r\n                        width=\"16\" height=\"16\" alt=\"Selected Move\"></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <app-pagination [exportTableList]=\"cacheParameterSets\">Loading...</app-pagination>\r\n              <!-- <div class=\"pagination\">\r\n                <div class=\"floatLeft\">\r\n                  <div class=\"custom-select floatLW120\">\r\n                    <select>\r\n                      <option value=\"0\">Show 5 items</option>\r\n                      <option value=\"1\">5</option>\r\n                      <option value=\"2\">10</option>\r\n                      <option value=\"3\">15</option>\r\n                      <option value=\"4\">20</option>\r\n                      <option value=\"5\">25</option>\r\n                      <option value=\"6\">30</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"pagination_text\">1 to 5 of 30 </div>\r\n                </div>\r\n                <div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\">1</a> <a href=\"#\"\r\n                    class=\"active\">2</a> <a href=\"#\">3</a> <a href=\"#\">4</a> <a href=\"#\">5</a> <a href=\"#\">6</a> <a\r\n                    href=\"#\" class=\"pagination_next\">&raquo;</a> </div>\r\n              </div> -->\r\n            </div>\r\n            <div class=\"content_border marginTop30\">\r\n              <h1 class=\"marginTop20\">Selected Parameter Sets</h1>\r\n              <div class=\"datatable\">\r\n                <table>\r\n                  <thead>\r\n                    <tr>\r\n                      <th cope=\"col\" width=\"7%\">Application</th>\r\n                      <th scope=\"col\" width=\"20%\">Parameter Set Number</th>\r\n                      <th scope=\"col\" width=\"20%\">Parameter Set Name</th>\r\n                      <th scope=\"col\" width=\"20%\">Company</th>\r\n                      <th scope=\"col\" width=\"20%\">Effective Date</th>\r\n                      <th colspan=\"4\" width=\"3%\">&nbsp;</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let paramSet of selectedParameterSets; let i = index;\">\r\n                      <td>{{paramSet.application}}</td>\r\n                      <td>{{paramSet.number}}</td>\r\n                      <td>{{paramSet.name}}</td>\r\n                      <td *ngIf=\" i === editRowId\">\r\n                        <!-- (ngModelChange)=\"selectedCompanyDp($event)\" -->\r\n                        <select ngModel [(ngModel)]=\"paramSet.companyID\">\r\n                          <!-- <option>All</option> -->\r\n                          <option *ngFor=\"let company of paramSet.companies\" [value]=\"company.id\">{{company.name}}</option>\r\n                        </select>\r\n                      </td>\r\n                      <td *ngIf=\" i !== editRowId\">\r\n                        <select [(ngModel)]=\"paramSet.companyID\">\r\n                          <!-- <option>All</option> -->\r\n                          <option *ngFor=\"let company of paramSet.companies\" [value]=\"company.id\">{{company.name}}</option>\r\n                        </select>\r\n                      </td>\r\n                      <td *ngIf=\" i === editRowId\">\r\n                        <input type=\"text\" id=\"effectiveDate\" name=\"effectiveDate\" class=\"form-control\" [(ngModel)]=\"paramSet.effectiveDate\"\r\n                          ngModel />\r\n                      </td>\r\n                      <td *ngIf=\" i !== editRowId\" >\r\n                        <input type=\"text\" id=\"effectiveDate\" name=\"effectiveDate\" class=\"form-control\" [(ngModel)]=\"paramSet.effectiveDate\"\r\n                          ngModel placeholder=\"yyyy-mm-dd\"/>\r\n                      </td>\r\n                      <td width=\"16px\"><img src=\"../../assets/images_icons/delete_icon.png\" width=\"16\" height=\"16\" alt=\"Delete\"\r\n                          (click)=deleteParameterSet(i)></td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <app-pagination [exportTableList]=\"selectedParameterSets\">Loading...</app-pagination>\r\n                <!-- <div class=\"pagination\">\r\n                  <div class=\"floatLeft\">\r\n                    <div class=\"custom-select floatLW120\">\r\n                      <select>\r\n                        <option value=\"0\">Show 5 items</option>\r\n                        <option value=\"1\">5</option>\r\n                        <option value=\"2\">10</option>\r\n                        <option value=\"3\">15</option>\r\n                        <option value=\"4\">20</option>\r\n                        <option value=\"5\">25</option>\r\n                        <option value=\"6\">30</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"pagination_text\">1 to 5 of 30 </div>\r\n                  </div>\r\n                  <div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\">1</a> <a\r\n                      href=\"#\" class=\"active\">2</a> <a href=\"#\">3</a> <a href=\"#\">4</a> <a href=\"#\">5</a> <a href=\"#\">6</a>\r\n                    <a href=\"#\" class=\"pagination_next\">&raquo;</a> </div>\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"button_green floatRight marginTop10\">\r\n              <button type=\"submit\" (click)=createTemplate()><img src=\"../../assets/images_icons/save_icon.png\" alt=\"Save\">Save</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- end content -->\r\n    </div>\r\n    <!-- end right panel -->\r\n  </div>\r\n  <!-- end container -->\r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer -->\r\n\r\n\r\n<!-- end wrapper -->"

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n  <!-- end header -->\r\n  <div class=\"container\">\r\n    <div class=\"left_panel\">\r\n      <div id=\"sidemenu\" style=\"opacity:.3; pointer-events: none\">\r\n        <ul>\r\n          <li class=\"active\"><a href=\"#\"><span>Your Tasks</span></a></li>\r\n          <li class=\"sidemenu-submenu\"><a href=\"#\"><span>Import Tasks</span></a>\r\n            <ul>\r\n              <li class=\"selected\"><a href=\"#\"><span>In Progress</span></a></li>\r\n              <li><a href=\"#\"><span>Completed</span></a></li>\r\n              <li><a href=\"#\"><span>Real time-Import</span></a></li>\r\n              <li><a href=\"#\"><span>Scheduled-Import</span></a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"sidemenu-submenu\"><a href=\"#\"><span>Export Tasks</span></a>\r\n            <ul>\r\n              <li><a href=\"#\"><span>Real time-Export</span></a></li>\r\n              <li class=\"last\"><a href=\"#\"><span>Scheduled-Export</span></a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"last\"><a href=\"#\"><span>Excel Style Setting</span></a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <!-- end left panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li><a href=\"#\">Manage Template</a></li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <h1> Change</h1>\r\n        <div class=\"content_area\">\r\n          <div class=\"button_area marginTop10\">\r\n            <div class=\"button_lightgrey floatLeft marginBottom10\">\r\n              <button type=\"submit\" routerLink=\"/templates\" routerLinkActive=\"active\"><img src=\"../../assets/images_icons/back_icon.png\"\r\n                  alt=\"Back\">Back</button>\r\n            </div>\r\n            <div class=\"form_area\">\r\n              <form action=\"\" [formGroup]=\"createForm\">\r\n                <div class=\"column_text form_column\">\r\n                  <label for=\"name\" class=\"required\">Template Name</label>\r\n                  <input type=\"text\" id=\"templateName\" size=\"50\" name=\"\" formControlName='templateName' required\r\n                    placeholder=\"Template Name\" [(ngModel)]=\"template.name\" />\r\n                </div>\r\n                <div class=\"form_column\">\r\n                  <div class=\"column_text\">\r\n                    <label for=\"name\">Application</label>\r\n                  </div>\r\n                  <div class=\"custom-select custom_select_width60\">\r\n                    <select [(ngModel)]=\"appId\" class=\"from-control\" formControlName='application' (change)=\"onApplicationChange()\" required>\r\n                      <!-- <option disabled hidden [value]=\"application.id\"></option> -->\r\n                      <option *ngFor=\"let application of applicationList\" [value]=\"application.id\">{{application.name}}</option>\r\n                      </select> \r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <div class=\"datatable\">\r\n              <table>\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Parameter Set Number</a></th>\r\n                    <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Parameter Set Name</a></th>\r\n                    <th width=\"3%\"><a href=\"#\">Select</a></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let pSet of cacheParameterSets\">\r\n                    <td>{{pSet.number}}</td>\r\n                    <td>{{pSet.name}}</td>\r\n                    <td align=\"center\"><img (click)=addParameterSet(pSet) src=\"../../assets/images_icons/select_icon.png\"\r\n                        width=\"16\" height=\"16\" alt=\"Selected Move\"></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <!-- <app-pagination [exportTableList]=\"cacheParameterSets\">Loading...</app-pagination> -->\r\n              <div class=\"pagination\">\r\n                <div class=\"floatLeft\">\r\n                  <div class=\"custom-select floatLW120\">\r\n                    <select>\r\n                      <option value=\"0\">Show 5 items</option>\r\n                      <option value=\"1\">5</option>\r\n                      <option value=\"2\">10</option>\r\n                      <option value=\"3\">15</option>\r\n                      <option value=\"4\">20</option>\r\n                      <option value=\"5\">25</option>\r\n                      <option value=\"6\">30</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"pagination_text\">1 to 5 of 30 </div>\r\n                </div>\r\n                <div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\">1</a> <a href=\"#\"\r\n                    class=\"active\">2</a> <a href=\"#\">3</a> <a href=\"#\">4</a> <a href=\"#\">5</a> <a href=\"#\">6</a> <a\r\n                    href=\"#\" class=\"pagination_next\">&raquo;</a> </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"content_border marginTop30\">\r\n              <h1 class=\"marginTop20\">Selected Parameter Sets</h1>\r\n              <div class=\"datatable\">\r\n                <table>\r\n                  <thead>\r\n                    <tr>\r\n                      <th cope=\"col\" width=\"7%\">Application</th>\r\n                      <th scope=\"col\" width=\"20%\">Parameter Set Number</th>\r\n                      <th scope=\"col\" width=\"20%\">Parameter Set Name</th>\r\n                      <th scope=\"col\" width=\"20%\">Company</th>\r\n                      <th scope=\"col\" width=\"20%\">Effective Date</th>\r\n                      <th colspan=\"4\" width=\"3%\">&nbsp;</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let paramSet of selectedParameterSets; let i = index;\">\r\n                      <td>{{paramSet.applicationID}}</td>\r\n                      <td>{{paramSet.number}}</td>\r\n                      <td>{{paramSet.name}}</td>\r\n                      <td *ngIf=\" i === editRowId\">\r\n                        <!-- (ngModelChange)=\"selectedCompanyDp($event)\" -->\r\n                        <select ngModel [(ngModel)]=\"paramSet.companyID\">\r\n                          <!-- <option>All</option> -->\r\n                          <option *ngFor=\"let company of paramSet.companies\" [value]=\"company.id\">{{company.name}}</option>\r\n                        </select>\r\n                      </td>\r\n                      <td *ngIf=\" i !== editRowId\">\r\n                        <select [(ngModel)]=\"paramSet.companyID\">\r\n                          <!-- <option>All</option> -->\r\n                          <option *ngFor=\"let company of paramSet.companies\" [value]=\"company.id\">{{company.name}}</option>\r\n                        </select>\r\n                      </td>\r\n                      <td *ngIf=\" i === editRowId\">\r\n                        <input type=\"text\" id=\"effectiveDate\" name=\"effectiveDate\" class=\"form-control\" [(ngModel)]=\"paramSet.effectiveDate\"\r\n                          ngModel />\r\n                      </td>\r\n                      <td *ngIf=\" i !== editRowId\" >\r\n                        <input type=\"text\" id=\"effectiveDate\" name=\"effectiveDate\" class=\"form-control\" [(ngModel)]=\"paramSet.effectiveDate\"\r\n                          ngModel placeholder=\"yyyy-mm-dd\"/>\r\n                      </td>\r\n                      <td width=\"16px\"><img src=\"../../assets/images_icons/delete_icon.png\" width=\"16\" height=\"16\" alt=\"Delete\"\r\n                          (click)=deleteParameterSet(i)></td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <!-- <app-pagination [exportTableList]=\"selectedParameterSets\">Loading...</app-pagination> -->\r\n                <div class=\"pagination\">\r\n                  <div class=\"floatLeft\">\r\n                    <div class=\"custom-select floatLW120\">\r\n                      <select>\r\n                        <option value=\"0\">Show 5 items</option>\r\n                        <option value=\"1\">5</option>\r\n                        <option value=\"2\">10</option>\r\n                        <option value=\"3\">15</option>\r\n                        <option value=\"4\">20</option>\r\n                        <option value=\"5\">25</option>\r\n                        <option value=\"6\">30</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"pagination_text\">1 to 5 of 30 </div>\r\n                  </div>\r\n                  <div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\">1</a> <a\r\n                      href=\"#\" class=\"active\">2</a> <a href=\"#\">3</a> <a href=\"#\">4</a> <a href=\"#\">5</a> <a href=\"#\">6</a>\r\n                    <a href=\"#\" class=\"pagination_next\">&raquo;</a> </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"button_green floatRight marginTop10\">\r\n              <button type=\"submit\" (click)=updateTemplate()><img src=\"../../assets/images_icons/save_icon.png\" alt=\"Save\">Save</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- end content -->\r\n    </div>\r\n    <!-- end right panel -->\r\n  </div>\r\n  <!-- end container -->\r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer -->\r\n\r\n\r\n<!-- end wrapper -->"

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n  <!-- end header -->\r\n  <div class=\"container\">\r\n    <div class=\"left_panel\">\r\n      <div id=\"sidemenu\" style=\"opacity:.3; pointer-events: none\">\r\n        <ul>\r\n          <li class=\"active\"><a href=\"#\"><span>Your Tasks</span></a></li>\r\n          <li class=\"sidemenu-submenu\"><a href=\"#\"><span>Import Tasks</span></a>\r\n            <ul>\r\n              <li class=\"selected\"><a href=\"#\"><span>In Progress</span></a></li>\r\n              <li><a href=\"#\"><span>Completed</span></a></li>\r\n              <li><a href=\"#\"><span>Real time-Import</span></a></li>\r\n              <li><a href=\"#\"><span>Scheduled-Import</span></a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"sidemenu-submenu\"><a href=\"#\"><span>Export Tasks</span></a>\r\n            <ul>\r\n              <li><a href=\"#\"><span>Real time-Export</span></a></li>\r\n              <li class=\"last\"><a href=\"#\"><span>Scheduled-Export</span></a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"last\"><a href=\"#\"><span>Excel Style Setting</span></a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <!-- end left panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li><a href=\"#\">Manage Template</a></li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <h1> View</h1>\r\n        <div class=\"content_area\">\r\n          <div class=\"button_area marginTop10\">\r\n            <div class=\"button_lightgrey floatLeft marginBottom10\">\r\n              <button type=\"submit\" routerLink=\"/templates\" routerLinkActive=\"active\"><img src=\"../../assets/images_icons/back_icon.png\"\r\n                  alt=\"Back\">Back</button>\r\n            </div><br>\r\n            <div> \r\n            <fieldset disabled>\r\n            <div class=\"form_area\">\r\n              <form action=\"\" [formGroup]=\"createForm\">\r\n                <div class=\"column_text form_column\">\r\n                  <label for=\"name\" class=\"required\">Template Name</label>\r\n                  <input type=\"text\" id=\"templateName\" size=\"50\" name=\"\" formControlName='templateName' required\r\n                    placeholder=\"Template Name\" [(ngModel)]=\"template.name\" />\r\n                </div>\r\n                <div class=\"form_column\">\r\n                  <div class=\"column_text\">\r\n                    <label for=\"name\">Application</label>\r\n                  </div>\r\n                  <div class=\"custom-select custom_select_width60\">\r\n                    <select  class=\"from-control\" formControlName='application' \r\n                    [(ngModel)]=\"appId\" ngModel required>\r\n                      <!-- <option disabled hidden [value]=\"application.id\"></option> -->\r\n                      <option *ngFor=\"let application of applicationList\" [value]=\"application.id\">{{application.name}}</option>\r\n                      </select> \r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <!-- <div class=\"datatable\">\r\n              <table>\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Parameter Set Number</a></th>\r\n                    <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Parameter Set Name</a></th>\r\n                    <th width=\"3%\"><a href=\"#\">Select</a></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let pSet of cacheParameterSets\">\r\n                    <td>{{pSet.number}}</td>\r\n                    <td>{{pSet.name}}</td>\r\n                    <td align=\"center\"><img (click)=addParameterSet(pSet) src=\"../../assets/images_icons/select_icon.png\"\r\n                        width=\"16\" height=\"16\" alt=\"Selected Move\"></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n               <app-pagination [exportTableList]=\"cacheParameterSets\">Loading...</app-pagination>\r\n              \r\n            </div> -->\r\n            <div class=\"content_border marginTop30\">\r\n              <h1 class=\"marginTop20\">Selected Parameter Sets</h1>\r\n              <div class=\"datatable\">\r\n                <table>\r\n                  <thead>\r\n                    <tr>\r\n                      <th cope=\"col\" width=\"7%\">Application</th>\r\n                      <th scope=\"col\" width=\"20%\">Parameter Set Number</th>\r\n                      <th scope=\"col\" width=\"20%\">Parameter Set Name</th>\r\n                      <th scope=\"col\" width=\"20%\">Company</th>\r\n                      <th scope=\"col\" width=\"20%\">Effective Date</th>\r\n                      <!-- <th colspan=\"4\" width=\"3%\">&nbsp;</th> -->\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let paramSet of selectedParameterSets; let i = index;\">\r\n                      <td>{{paramSet.applicationID}}</td>\r\n                      <td>{{paramSet.number}}</td>\r\n                      <td>{{paramSet.name}}</td>\r\n                      <td *ngIf=\" i === editRowId\">\r\n                        <!-- (ngModelChange)=\"selectedCompanyDp($event)\" -->\r\n                        <select ngModel [(ngModel)]=\"paramSet.companyID\">\r\n                          <!-- <option>All</option> -->\r\n                          <option *ngFor=\"let company of paramSet.companies\" [value]=\"company.id\">{{company.name}}</option>\r\n                        </select>\r\n                      </td>\r\n                      <td *ngIf=\" i !== editRowId\">\r\n                        <select [(ngModel)]=\"paramSet.companyID\">\r\n                          <!-- <option>All</option> -->\r\n                          <option *ngFor=\"let company of paramSet.companies\" [value]=\"company.id\">{{company.name}}</option>\r\n                        </select>\r\n                      </td>\r\n                      <td *ngIf=\" i === editRowId\">\r\n                        <input type=\"text\" id=\"effectiveDate\" name=\"effectiveDate\" class=\"form-control\" [(ngModel)]=\"paramSet.effectiveDate\"\r\n                          ngModel />\r\n                      </td>\r\n                      <td *ngIf=\" i !== editRowId\" >\r\n                        <input type=\"text\" id=\"effectiveDate\" name=\"effectiveDate\" class=\"form-control\" [(ngModel)]=\"paramSet.effectiveDate\"\r\n                          ngModel placeholder=\"yyyy-mm-dd\"/>\r\n                      </td>\r\n                      <!-- <td width=\"16px\"><img src=\"../../assets/images_icons/delete_icon.png\" width=\"16\" height=\"16\" alt=\"Delete\"\r\n                          (click)=deleteParameterSet(i)></td> -->\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <!-- <app-pagination [exportTableList]=\"selectedParameterSets\">Loading...</app-pagination> -->\r\n                <div class=\"pagination\">\r\n                  <div class=\"floatLeft\">\r\n                    <div class=\"custom-select floatLW120\">\r\n                      <select>\r\n                        <option value=\"0\">Show 5 items</option>\r\n                        <option value=\"1\">5</option>\r\n                        <option value=\"2\">10</option>\r\n                        <option value=\"3\">15</option>\r\n                        <option value=\"4\">20</option>\r\n                        <option value=\"5\">25</option>\r\n                        <option value=\"6\">30</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"pagination_text\">1 to 5 of 30 </div>\r\n                  </div>\r\n                  <div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\">1</a> <a\r\n                      href=\"#\" class=\"active\">2</a> <a href=\"#\">3</a> <a href=\"#\">4</a> <a href=\"#\">5</a> <a href=\"#\">6</a>\r\n                    <a href=\"#\" class=\"pagination_next\">&raquo;</a> </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n          </div>\r\n            <!-- <div class=\"button_green floatRight marginTop10\">\r\n              <button type=\"submit\" (click)=updateTemplate()><img src=\"../../assets/images_icons/save_icon.png\" alt=\"Save\">Save</button>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- end content -->\r\n    </div>\r\n    <!-- end right panel -->\r\n  </div>\r\n  <!-- end container -->\r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer -->\r\n\r\n\r\n<!-- end wrapper -->"

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = "<!-- start wrapper -->\r\n\r\n  <div class=\"container\">\r\n    <!-- start left panel -->\r\n    <div class=\"left_panel\">\r\n      <div id=\"sidemenu\" style=\"opacity:.3; pointer-events: none\">\r\n        <ul>\r\n          <li class=\"active\"><a href=\"#\"><span>Your Tasks</span></a></li>\r\n          <li class=\"sidemenu-submenu\"><a href=\"#\"><span>Import Tasks</span></a>\r\n            <ul>\r\n              <li class=\"selected\"><a href=\"#\"><span>In Progress</span></a></li>\r\n              <li><a href=\"#\"><span>Completed</span></a></li>\r\n              <li><a href=\"#\"><span>Real time-Import</span></a></li>\r\n              <li><a href=\"#\"><span>Scheduled-Import</span></a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"sidemenu-submenu\"><a href=\"#\"><span>Export Tasks</span></a>\r\n            <ul>\r\n              <li><a href=\"#\"><span>Real time-Export</span></a></li>\r\n              <li class=\"last\"><a href=\"#\"><span>Scheduled-Export</span></a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"last\"><a href=\"#\"><span>Excel Style Setting</span></a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <!-- end left panel -->\r\n\r\n    <!-- start right panel -->\r\n    <div class=\"right_panel\">\r\n      <div class=\"breadcrumbs_area\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>Mass Maintenance</li>\r\n          <li>Manage Template</li>\r\n        </ul>\r\n      </div>\r\n      <!-- start content -->\r\n      <div class=\"content\">\r\n        <h1>Your Configurations</h1>\r\n        <div class=\"content_area\">\r\n          <div class=\"button_lightgreen floatRight\">\r\n            <nav>\r\n              <button type=\"submit\" routerLink=\"create\" routerLinkActive=\"active\"><img src=\"../../assets/images_icons/icon_plus.png\"\r\n                  alt=\"New\">New</button>\r\n            </nav>\r\n          </div>\r\n          <div class=\"datatable\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Template Name</a></th>\r\n                  <!--              <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Template ID</a></th> -->\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Created On</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Last Updated By</a></th>\r\n                  <th scope=\"col\"><a href=\"#\" class=\"sort-by\">Changed On</a></th>\r\n                  <th colspan=\"4\"><a href=\"#\">Action</a></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let template of getItems()\">\r\n                  <td>{{template.name}}</td>\r\n                  <!--              td>data</td> -->\r\n                  <td>{{template.createdOn}}</td>\r\n                  <td>{{template.modifiedBy}}</td>\r\n                  <td>{{template.modifiedOn}}</td>\r\n                  <!-- <td width=\"16px\"><img src=\"../../assets/images_icons/view_icon.png\" width=\"16\" height=\"16\" alt=\"View\"></td>\r\n                  <td width=\"16px\"><img src=\"../../assets/images_icons/edit_icon.png\" width=\"16\" height=\"16\" alt=\"Edit\"></td>\r\n                  <td width=\"16px\"><img src=\"../../assets/images_icons/copy_icon.png\" width=\"16\" height=\"18\" alt=\"Copy\"></td>\r\n                  <td width=\"16px\"><img src=\"../../assets/images_icons/delete_icon.png\" width=\"16\" height=\"16\" alt=\"Delete\"></td> -->\r\n\r\n                  <td>\r\n                    <nav>\r\n                      <a [routerLink]=\"['view',template.uuid]\" role=\"button\" routerLinkActive=\"active\"><img src=\"../../../assets/images_icons/view_icon.png\"\r\n                          width=\"16\" height=\"16\" alt=\"View\"></a> </nav>\r\n                  </td>\r\n                  <td>\r\n                    <nav> <a [routerLink]=\"['edit',template.uuid]\" role=\"button\" routerLinkActive=\"active\"\r\n                        role=\"button\" routerLinkActive=\"active\"><img src=\"../../../assets/images_icons/edit_icon.png\"\r\n                          width=\"16\" height=\"16\" alt=\"Edit\"></a></nav>\r\n                  </td>\r\n                  <td>\r\n                    <nav> <a [routerLink]=\"['copy',template.uuid]\" role=\"button\" routerLinkActive=\"active\"><img src=\"../../../assets/images_icons/copy_icon.png\"\r\n                          width=\"16\" height=\"18\" alt=\"Copy\"></a></nav>\r\n                  </td>\r\n                  <td>\r\n                    <nav> <a class=\"bootstrap-link\" role=\"button\" (click)=\"onClickDelete(template.uuid)\"\r\n                        routerLinkActive=\"active\"><img src=\"../../../assets/images_icons/delete_icon.png\" width=\"16\"\r\n                          height=\"16\" alt=\"Delete\"></a>\r\n                    </nav>\r\n                  </td>\r\n\r\n\r\n                </tr>\r\n\r\n              </tbody>\r\n            </table>\r\n            <p class=\"no_data_desc\" *ngIf=\"!templates.length > 0\">No Data Available</p>\r\n            <app-pagination [exportTableList]=\"templates\">Loading...</app-pagination>\r\n            <!-- <div class=\"pagination\">\r\n              <div class=\"floatLeft\">\r\n                <div class=\"custom-select floatLW120\">\r\n                  <select>\r\n                    <option value=\"0\">Show 5 items</option>\r\n                    <option value=\"1\">5</option>\r\n                    <option value=\"2\">10</option>\r\n                    <option value=\"3\">15</option>\r\n                    <option value=\"4\">20</option>\r\n                    <option value=\"5\">25</option>\r\n                    <option value=\"6\">30</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"pagination_text\">1 to 5 of 30 </div>\r\n              </div>\r\n              <div class=\"pagination_item\"> <a href=\"#\" class=\"pagination_pre\">&laquo;</a> <a href=\"#\">1</a> <a href=\"#\"\r\n                  class=\"active\">2</a> <a href=\"#\">3</a> <a href=\"#\">4</a> <a href=\"#\">5</a> <a href=\"#\">6</a> <a href=\"#\"\r\n                  class=\"pagination_next\">&raquo;</a> </div>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end content -->\r\n    </div>\r\n    <!-- end right panel -->\r\n  </div>\r\n  <!-- end container -->\r\n  <!-- Footer start -->\r\n  <div class=\"push_footer\">&nbsp;</div>\r\n  <div id=\"footer\">\r\n    <div class=\"footer_area\">\r\n      <ul>\r\n        <li><a href=\"#news\">Contact us</a></li>\r\n        <li><a href=\"#contact\">Search Center</a></li>\r\n        <li><a href=\"#about\">Site Map</a></li>\r\n      </ul>\r\n      <p> Powered by Intelligent SOA <sup>TM</sup></p>\r\n      <p> &copy; CeleritiFinTech. All rights reserved</p>\r\n    </div>\r\n  </div>\r\n  <!-- end footer -->\r\n\r\n\r\n<!-- end wrapper -->"

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(141);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(142);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(143);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(144);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(145);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(146);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(147);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(148);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(149);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(150);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(151);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(152);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(153);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(154);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(155);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(156);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(157);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(158);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(159);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(160);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(161);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(162);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(163);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(164);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(129);

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(140);

/***/ }),
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(184);

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(194);

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(198);

/***/ }),
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(372);

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(373);

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(374);

/***/ }),
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(469);

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(588);

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(63);

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(650);

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(656);

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(660);

/***/ })
],[113]);
//# sourceMappingURL=main.bundle.js.map