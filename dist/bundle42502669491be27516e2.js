/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createElement = function createElement(title, attribute) {
  var element = document.createElement(title);

  for (var key in attribute) {
    element.setAttribute(key, attribute[key]);
  }

  return element;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);

/***/ }),

/***/ "./src/modules/ToDoStorage/ToDo.js":
/*!*****************************************!*\
  !*** ./src/modules/ToDoStorage/ToDo.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../forms */ "./src/modules/forms.js");


var ToDo = function ToDo(chore, description, date, priority) {
  var getChore = function getChore() {
    return chore;
  };

  var getDesc = function getDesc() {
    return description;
  };

  var getDate = function getDate() {
    return date;
  };

  var getPriority = function getPriority() {
    return priority;
  };

  return {
    chore: getChore(),
    description: getDesc(),
    date: getDate(),
    priority: getPriority()
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDo);

/***/ }),

/***/ "./src/modules/editModal.js":
/*!**********************************!*\
  !*** ./src/modules/editModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElement */ "./src/createElement.js");


function editModal() {
  var EDITDIV = document.querySelector('.editCon');
  var createEdit = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'editModal',
    id: 'editModal'
  });
  var editModalContent = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'editCon',
    id: 'editCon'
  });
  var editSpan = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', {
    "class": 'closeEdit'
  });
  var editTask = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', {
    "class": 'editDesc'
  });
  var myTODOLabel = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
    "class": 'TODOLabel',
    id: 'TODOLab',
    "for": 'TODO'
  });
  var myTODO = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', {
    "class": 'TODOp',
    id: 'TODOIn',
    "for": 'TODO',
    type: 'text'
  });
  var TODODescLabel = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
    "class": 'TODODescLabel',
    id: 'TODOdesc',
    "for": 'TODO'
  });
  var TODODescription = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', {
    "class": 'TODODescrip',
    id: 'TODOdesc',
    "for": 'TODO'
  });
  var dueDateLabel = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
    "class": "dateLabel",
    id: "TODODate",
    "for": "TODO"
  });
  var dueDate = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', {
    "class": 'dateP',
    id: 'TODODate',
    "for": 'TODO',
    type: 'date'
  });
  var priLabel = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
    "class": 'priLabel',
    id: 'TODOPri',
    "for": 'TODO'
  });
  var priInput = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
    "class": 'priInput',
    id: 'TODOPri',
    "for": 'TODO',
    list: 'pri',
    name: 'pri'
  });
  var priorityList = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('datalist', {
    "class": 'TODOPri',
    id: 'pri'
  });
  var pri = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', {
    "class": 'priP'
  });
  var lowPri = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('option', {
    value: 'low',
    "class": 'selectPri'
  });
  var medPri = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('option', {
    value: 'medium',
    "class": 'selectPri'
  });
  var highPri = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('option', {
    value: 'high',
    "class": 'selectPri'
  });
  EDITDIV.appendChild(createEdit);
  createEdit.appendChild(editModalContent);
  editModalContent.appendChild(editSpan);
  editModalContent.appendChild(editTask);
  editModalContent.appendChild(myTODO);
  editModalContent.appendChild(TODODescription);
  editModalContent.appendChild(dueDateLabel);
  editModalContent.appendChild(dueDate);
  editModalContent.appendChild(priorityList);
  editModalContent.appendChild(pri);
  editSpan.textContent = "X";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editModal);

/***/ }),

/***/ "./src/modules/forms.js":
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElement */ "./src/createElement.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/modal */ "./src/modules/modal.js");



function forms() {
  var myModalContent = document.querySelector('.modalCon'); //uncomment if needed
  //const formsContainer = createElement('div',{class:'formContainer', id: 'formContainer'})

  var forms = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('form', {
    "class": 'form',
    id: 'form'
  });
  var myTODODiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'TODOdiv',
    id: 'TODO'
  });
  var TODODesc = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'TODODescDiv',
    id: 'TODO'
  });
  var TODODate = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'TODODateDiv',
    id: 'TODO'
  });
  var dataDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'dataDiv',
    id: 'TODO'
  });
  var submitDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'submitDiv',
    id: 'TODO'
  });
  var myTODOLabel = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
    "class": 'TODOLabel',
    id: 'TODOLab',
    "for": 'TODO'
  });
  var myTODO = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
    "class": 'TODOinput',
    id: 'TODOIn',
    "for": 'TODO',
    type: 'text'
  });
  var TODODescLabel = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
    "class": 'TODODescLabel',
    id: 'TODOdesc',
    "for": 'TODO'
  });
  var TODODescription = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('textArea', {
    "class": 'TODODesc',
    id: 'TODOdesc',
    "for": 'TODO'
  });
  var dueDateLabel = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
    "class": "dateLabel",
    id: "TODODate",
    "for": "TODO"
  });
  var dueDate = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
    "class": 'dateInput',
    id: 'TODODate',
    "for": 'TODO',
    type: 'date'
  });
  var priLabel = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
    "class": 'priLabel',
    id: 'TODOPri',
    "for": 'TODO'
  });
  var priInput = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
    "class": 'priInput',
    id: 'TODOPri',
    "for": 'TODO',
    list: 'pri',
    name: 'pri'
  });
  var priorityList = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('datalist', {
    "class": 'TODOPri',
    id: 'pri'
  });
  var lowPri = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('option', {
    value: 'low',
    "class": 'selectPri'
  });
  var medPri = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('option', {
    value: 'medium',
    "class": 'selectPri'
  });
  var highPri = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('option', {
    value: 'high',
    "class": 'selectPri'
  });
  var submitBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', {
    "class": 'submit',
    id: 'btn',
    "for": 'TODO',
    type: 'submit'
  });
  myModalContent.appendChild(forms);
  forms.appendChild(myTODODiv);
  forms.appendChild(TODODesc);
  forms.appendChild(TODODate);
  forms.appendChild(dataDiv);
  forms.appendChild(submitDiv);
  myTODODiv.appendChild(myTODOLabel);
  myTODODiv.appendChild(myTODO);
  TODODesc.appendChild(TODODescLabel);
  TODODesc.appendChild(TODODescription);
  TODODate.appendChild(dueDateLabel);
  TODODate.appendChild(dueDate);
  submitDiv.appendChild(submitBtn);
  dataDiv.appendChild(priLabel);
  dataDiv.appendChild(priInput);
  dataDiv.appendChild(priorityList);
  priorityList.appendChild(lowPri);
  priorityList.appendChild(medPri);
  priorityList.appendChild(highPri);
  myTODOLabel.textContent = "Chore: ";
  TODODescLabel.textContent = "Description: ";
  dueDateLabel.textContent = "Due Date:";
  submitBtn.textContent = "Submit";
  priLabel.textContent = "Priority: ";
  lowPri.textContent = 'low';
  medPri.textContent = 'medium';
  highPri.textContent = 'high';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./src/modules/heading.js":
/*!********************************!*\
  !*** ./src/modules/heading.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElement */ "./src/createElement.js");


function heading() {
  var container = document.querySelector('.container');
  var headingDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'headingDiv',
    id: 'headingDiv'
  });
  var h1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('h1', {
    "class": "heading"
  });
  container.appendChild(headingDiv);
  headingDiv.appendChild(h1);
  h1.textContent = "To-Do List";
  return {
    h1: h1,
    headingDiv: headingDiv
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (heading);

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElement */ "./src/createElement.js");


function modal() {
  var sidebar = document.querySelector('.sidebar');
  var modalPopUp = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'modal',
    id: 'modal'
  });
  var exitOut = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', {
    "class": 'close',
    id: 'modal'
  });
  var modalCon = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'modalCon',
    id: 'modal'
  });
  sidebar.appendChild(modalPopUp);
  modalPopUp.appendChild(modalCon);
  modalCon.appendChild(exitOut);
  exitOut.textContent = "&times;";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/modules/openEdit.js":
/*!*********************************!*\
  !*** ./src/modules/openEdit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function openEdit() {
  var editModal = document.querySelector('.editModal');
  var button = document.querySelector('.edit');
  var span = document.querySelector('.closeEdit');
  editModal.style.display = "block";

  span.onclick = function () {
    editModal.style.display = "none";
  };

  window.onclick = function (e) {
    if (e.target == modal) {
      editModal.style.display = "none";
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openEdit);

/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElement */ "./src/createElement.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modules/modal.js");

 //didn't select sidebar and yet it appended to sidebar probably has to do with index

function popUp() {
  var myModal = document.querySelector('.modal');
  var span = document.querySelector('.close');
  var sidebar = document.querySelector('.sidebar');
  var popUpButton = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', {
    "class": 'modalBtn',
    id: 'modalBtn'
  });
  sidebar.appendChild(popUpButton);
  popUpButton.textContent = "+";
  popUpButton.addEventListener('click', function () {
    myModal.style.display = "block";
  });
  span.addEventListener('click', function () {
    myModal.style.display = "none";
  });

  window.onclick = function (e) {
    if (e.target === myModal) {
      myModal.style.display = "none";
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUp);

/***/ }),

/***/ "./src/modules/sidebar.js":
/*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElement */ "./src/createElement.js");


function sidebar() {
  var container = document.querySelector('.container');
  var sidebarDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'sidebar',
    id: 'sidebar'
  });
  var Today = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', {
    "class": 'Today',
    id: 'TODOWhen'
  });
  var Week = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', {
    "class": 'Week',
    id: 'TODOWhen'
  });
  var Projects = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', {
    "class": 'Projects',
    id: 'TODOWhen'
  });
  container.appendChild(sidebarDiv);
  sidebarDiv.appendChild(Today);
  sidebarDiv.appendChild(Week);
  sidebarDiv.appendChild(Projects);
  Today.textContent = "Today";
  Week.textContent = "Week";
  Projects.textContent = "Projects";
  return sidebarDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar); //if id === today if id === week if id === project ect. append blah blah

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/main.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/main.scss ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  padding: 0;\n  margin: 0;\n}\n\n.container {\n  display: grid;\n  height: 100vh;\n  width: 100vw;\n  grid-template: 1fr 1fr 1fr 5fr/1fr 5fr 1fr;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  grid-row-start: 2;\n  grid-row-end: 5;\n  grid-column: 1;\n  height: 100%;\n  border-right: 2px solid black;\n}\n\n.sidebar Button {\n  border: none;\n  font-size: 24px;\n  transition: 0.5s;\n}\n\n.sidebar Button:hover {\n  color: #ef4444;\n  text-decoration: none;\n  cursor: pointer;\n  transform: translateY(20%);\n  font-size: 36px;\n}\n\n.headingDiv {\n  grid-area: 1/5/1/1;\n  background-color: #C38D9E;\n  width: 100%;\n}\n\n.heading {\n  color: rgb(243, 242, 242);\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modalCon {\n  background-color: #fefefe;\n  margin: 15% atuo;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: #ef4444;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.listOfToDos {\n  grid-area: 2/5/2/5;\n  display: flex;\n  flex-direction: column;\n  grid-row-start: 2;\n  grid-column-start: 2;\n}\n\n.taskDiv {\n  display: flex;\n  flex-direction: row;\n}\n\n.editModal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.editCon {\n  background-color: #fefefe;\n  margin: 15% atuo;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n}\n\n.closeEdit {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.closeEdit:hover,\n.closeEdit:focus {\n  color: #ef4444;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.trashCon {\n  display: flex;\n  border: none;\n}\n\n.editCon {\n  border: none;\n}\n\n.taskCard {\n  width: 100px;\n  height: 300px;\n}", "",{"version":3,"sources":["webpack://./styles/main.scss"],"names":[],"mappings":"AAIA;EACI,UAAA;EACA,SAAA;AAHJ;;AAMA;EACI,aAAA;EACA,aAAA;EACA,YAAA;EACA,0CAAA;AAHJ;;AAMA;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,iBAAA;EACA,eAAA;EACA,cAAA;EACA,YAAA;EACA,6BAAA;AAHJ;;AAMA;EACI,YAAA;EACA,eAAA;EACA,gBAAA;AAHJ;;AAMA;EACI,cAAA;EACA,qBAAA;EACA,eAAA;EACA,0BAAA;EACA,eAAA;AAHJ;;AAMA;EACI,kBAAA;EACA,yBAAA;EACA,WAAA;AAHJ;;AAKA;EACI,yBAAA;AAFJ;;AAKA;EACI,aAAA;EACA,eAAA;EACA,UAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,8BAAA;EACA,oCAAA;AAFJ;;AAKA;EACI,yBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,UAAA;AAFJ;;AAKA;EACI,WAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;AAFJ;;AAKA;;EAEI,cAAA;EACA,qBAAA;EACA,eAAA;AAFJ;;AAKA;EACI,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,oBAAA;AAFJ;;AAKA;EACI,aAAA;EACA,mBAAA;AAFJ;;AAMA;EACI,aAAA;EACA,eAAA;EACA,UAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,8BAAA;EACA,oCAAA;AAHJ;;AAMA;EACI,yBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,UAAA;AAHJ;;AAMA;EACI,WAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;AAHJ;;AAMA;;EAEI,cAAA;EACA,qBAAA;EACA,eAAA;AAHJ;;AAMA;EACI,aAAA;EACA,YAAA;AAHJ;;AAMA;EACI,YAAA;AAHJ;;AAMA;EACI,YAAA;EACA,aAAA;AAHJ","sourcesContent":["$low-Prority: #28a745;\n$med-priority: #ffc107;\n$high-priority: #dc3545;\n\nbody{\n    padding:0;\n    margin:0;\n\n}\n.container{\n    display:grid;\n    height:100vh;\n    width:100vw;\n    grid-template: 1fr 1fr 1fr 5fr / 1fr 5fr 1fr;\n}\n\n.sidebar{\n    display:flex;\n    flex-direction:column;\n    justify-content:space-around;\n    grid-row-start:2;\n    grid-row-end:5;\n    grid-column:1;\n    height:100%;\n    border-right:2px solid black;\n}\n\n.sidebar Button{\n    border:none;\n    font-size:24px;\n    transition:.5s\n}\n\n.sidebar Button:hover{\n    color: #ef4444;\n    text-decoration:none;\n    cursor:pointer;\n    transform:translateY(20%);\n    font-size:36px;\n}\n\n.headingDiv{\n    grid-area:1/5/1/1;\n    background-color: #C38D9E;\n    width:100%;\n}\n.heading{\n    color:rgb(243, 242, 242)\n}\n\n.modal{\n    display:none;\n    position:fixed;\n    z-index:1;\n    left: 0;\n    top:0;\n    width:100%;\n    height:100%;\n    overflow:auto;\n    background-color:rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n.modalCon{\n    background-color:#fefefe;\n    margin:15% atuo;\n    padding:20px;\n    border: 1px solid #888;\n    width:80%;\n}\n\n.close{\n    color: #aaa;\n    float:right;\n    font-size:28px;\n    font-weight:bold;\n}\n\n.close:hover,\n.close:focus{\n    color: #ef4444;\n    text-decoration:none;\n    cursor:pointer;\n}\n\n.listOfToDos{\n    grid-area:2/5/2/5;\n    display:flex;\n    flex-direction:column;\n    grid-row-start: 2;\n    grid-column-start:2;\n}\n\n.taskDiv{\n    display:flex;\n    flex-direction: row;\n\n}\n\n.editModal{\n    display:none;\n    position:fixed;\n    z-index:1;\n    left: 0;\n    top:0;\n    width:100%;\n    height:100%;\n    overflow:auto;\n    background-color:rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n.editCon{\n    background-color:#fefefe;\n    margin:15% atuo;\n    padding:20px;\n    border: 1px solid #888;\n    width:80%;\n}\n\n.closeEdit{\n    color: #aaa;\n    float:right;\n    font-size:28px;\n    font-weight:bold;\n}\n\n.closeEdit:hover,\n.closeEdit:focus{\n    color: #ef4444;\n    text-decoration:none;\n    cursor:pointer;\n}\n\n.trashCon{\n    display:flex;\n    border:none;\n}\n\n.editCon{\n    border:none;\n}\n\n.taskCard{\n    width:100px;;\n    height:300px\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/note-edit.png":
/*!**********************************!*\
  !*** ./src/assets/note-edit.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "note-edit.png";

/***/ }),

/***/ "./src/assets/trash.png":
/*!******************************!*\
  !*** ./src/assets/trash.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "trash.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _modules_heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/heading */ "./src/modules/heading.js");
/* harmony import */ var _modules_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sidebar */ "./src/modules/sidebar.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./src/modules/forms.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _modules_popUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/popUp */ "./src/modules/popUp.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/modal */ "./src/modules/modal.js");
/* harmony import */ var _src_modules_ToDoStorage_ToDo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/modules/ToDoStorage/ToDo */ "./src/modules/ToDoStorage/ToDo.js");
/* harmony import */ var _src_assets_trash_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/assets/trash.png */ "./src/assets/trash.png");
/* harmony import */ var _src_assets_note_edit_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/assets/note-edit.png */ "./src/assets/note-edit.png");
/* harmony import */ var _src_modules_editModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/modules/editModal */ "./src/modules/editModal.js");
/* harmony import */ var _modules_openEdit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/openEdit */ "./src/modules/openEdit.js");











 //import deleteEle from '../src/modules/ToDoStorage/deleteTask'

var taskCards = [];
var tasks = [];
(0,_modules_heading__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_modal__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_modules_popUp__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])();
var submitBtn = document.querySelector('.submit');
var listOfToDos = document.querySelector('.listOfToDos');
var card = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  "class": 'TaskCard'
});
var card1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  "class": 'TaskCard'
});
var card2 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  "class": 'TaskCard'
});
var taskP = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', {
  "class": 'taskP'
});
var taskD = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', {
  "class": 'taskD'
});
var taskDate = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', {
  "class": 'taskDate'
});
var taskPriority = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', {
  "class": 'taskPriority'
});
var edit = new Image();
edit.src = _src_assets_note_edit_png__WEBPACK_IMPORTED_MODULE_9__;
var del = new Image();
del.src = _src_assets_trash_png__WEBPACK_IMPORTED_MODULE_8__;

function events(e) {
  //append container to event tab, if container === today/week/project
  var Today = document.querySelector('.Today');
  var Week = document.querySelector('.Week');
  var Projects = document.querySelector('.Projects');
  var priority = document.querySelector('#priority');
  Today.addEventListener('click', function () {
    listOfToDos.replaceChildren();
    var TODAYDIV = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      "class": 'ToDoTasks',
      id: 'todayDiv'
    });
    listOfToDos.appendChild(TODAYDIV);
    TODAYDIV.appendChild(card);
  });
  Week.addEventListener('click', function () {
    listOfToDos.replaceChildren();
    var WEEKDIV = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      "class": 'ToDoTasks',
      id: 'weekDiv'
    });
    listOfToDos.appendChild(WEEKDIV);
    WEEKDIV.appendChild(card1);
  });
  Projects.addEventListener('click', function () {
    listOfToDos.replaceChildren();
    var PROJECTSDIV = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      "class": 'ToDoTasks',
      id: 'projectsDiv'
    });
    listOfToDos.appendChild(PROJECTSDIV);
    PROJECTSDIV.appendChild(card2);
  });
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    submitBtn.addEventListener('click', addToDo);
    submitBtn.addEventListener('click', displayToDo);
  });
}

function addToDo() {
  var Today = document.querySelector('.Today');
  var Week = document.querySelector('.Week');
  var Project = document.querySelector('.Projects');
  var ToDoVal = document.querySelector('.TODOinput');
  var ToDoDescVal = document.querySelector('.TODODesc');
  var dateVal = document.querySelector('.dateInput');
  var priorityVal = document.querySelector('.priInput');
  var task = (0,_src_modules_ToDoStorage_ToDo__WEBPACK_IMPORTED_MODULE_7__["default"])(ToDoVal.value, ToDoDescVal.value, dateVal.value, priorityVal.value);
  tasks.push(task);
  console.log(tasks);
  return task;
}

events();

function displayToDo(e) {
  //setup modal that pops up when edit img is clicked
  //setup different divs first than set up modal for less confusion
  //TodayDiv, WeekDiv, ProjectsDiv
  //append specific div and then append Home
  //if div.id === today, week, projects append that div
  var taskDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'taskDiv'
  });
  var TODAYDIV = document.querySelector('#todayDiv');
  var WEEKDIV = document.querySelector('#weekDiv');
  var PROJECTSDIV = document.querySelector('#projectsDiv');
  var CLONEDCARD = card.cloneNode(true);
  var CLONEDTASKP = taskP.cloneNode(true);
  var CLONEDTASKD = taskD.cloneNode(true);
  var CLONEDTASKDATE = taskDate.cloneNode(true);
  var CLONEDTASKPRIORITY = taskPriority.cloneNode(true);
  var TASKPCON = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div');
  var TASKDCON = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div');
  var TASKDATECON = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div');
  var TASKPRIORITYCON = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div');
  var TRASHCON = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'trashCon'
  });
  var EDITCON = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'editCon'
  });
  var TRASHimg = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('img', {
    "class": 'trash',
    id: 'Icon',
    src: "".concat(del.src)
  });
  var EDITimg = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('img', {
    "class": 'edit',
    id: 'Icon',
    src: "".concat(edit.src)
  });
  var EDITDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'edit1',
    id: 'editDiv',
    src: "".concat(edit.src)
  });

  for (var i = 0; i < tasks.length; i += 1) {
    //div for TASKSCARDDIV
    //NOTES IS GONNA HAVE DIFFERENT FUNCTIONALITY DIFFERENT FROM TODODIVS
    if (listOfToDos.firstChild.id === "todayDiv") {
      card.appendChild(taskDiv);
      taskCards.push(taskDiv);
      taskDiv.appendChild(TASKPCON);
      taskDiv.appendChild(TASKDCON);
      taskDiv.appendChild(TASKDATECON);
      taskDiv.appendChild(TASKPRIORITYCON);
      taskDiv.appendChild(TRASHCON);
      taskDiv.appendChild(EDITCON);
    } else if (listOfToDos.firstChild.id === "weekDiv") {
      card1.appendChild(taskDiv);
      taskCards.push(taskDiv);
      taskDiv.appendChild(TASKPCON);
      taskDiv.appendChild(TASKDCON);
      taskDiv.appendChild(TASKDATECON);
      taskDiv.appendChild(TASKPRIORITYCON);
      taskDiv.appendChild(TRASHCON);
      taskDiv.appendChild(EDITCON);
    } else if (listOfToDos.firstChild.id === "projectsDiv") {
      card2.appendChild(taskDiv);
      taskCards.push(taskDiv);
      taskDiv.appendChild(TASKPCON);
      taskDiv.appendChild(TASKDCON);
      taskDiv.appendChild(TASKDATECON);
      taskDiv.appendChild(TASKPRIORITYCON);
      taskDiv.appendChild(TRASHCON);
      taskDiv.appendChild(EDITCON);
    }

    (0,_src_modules_editModal__WEBPACK_IMPORTED_MODULE_10__["default"])();
    var priP = document.querySelector('.TODOPri');
    var dateP = document.querySelector('.dateP');
    var descP = document.querySelector('.TODODescrip');
    var TODOp = document.querySelector('.TODOp');
    TASKPCON.appendChild(CLONEDTASKP);
    TASKDCON.appendChild(CLONEDTASKD);
    TASKDATECON.appendChild(CLONEDTASKDATE);
    TASKPRIORITYCON.appendChild(CLONEDTASKPRIORITY);
    TRASHCON.appendChild(TRASHimg);
    TRASHCON.appendChild(EDITimg);
    CLONEDTASKP.textContent = "".concat(tasks[i].chore);
    descP.textContent = "".concat(tasks[i].description);
    dateP.textContent = "".concat(tasks[i].date);
    CLONEDTASKPRIORITY.textContent = "".concat(tasks[i].priority);
    taskDiv.setAttribute('id', "".concat(i));
    TRASHimg.setAttribute('id', "".concat(i));
  }

  TRASHimg.addEventListener('click', deleteEle);
  EDITimg.addEventListener('click', _modules_openEdit__WEBPACK_IMPORTED_MODULE_11__["default"]);
}

function deleteEle(e) {
  var TRASHIMG = document.querySelector('.trash');
  var removal = e.currentTarget.parentNode.parentNode;
  console.log(removal);
  tasks.splice(TRASHIMG.id, 1);
  removal.remove();
  console.log(tasks);
} //today div
//week div
//project div
//notes div
//home div appends all tasks!
//REMOVE EVENT LISTENER FOR MODAL NOTES FUNCTION
//HOME CARD FOR EACH BUTTON
//append radio button to TODO
//element.required = true
//document.getElementById('example').required = true
//setAttribute `${tasks.key}` for edit
})();

/******/ })()
;
//# sourceMappingURL=bundle42502669491be27516e2.js.map