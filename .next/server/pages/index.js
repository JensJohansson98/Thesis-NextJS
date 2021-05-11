(function() {
var exports = {};
exports.id = 405;
exports.ids = [405,755,472];
exports.modules = {

/***/ 474:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);



const Index = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_todos__WEBPACK_IMPORTED_MODULE_1__.default, {});
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 10:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Todo; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(704);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Todo extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      completed: this.props.todo.completed
    });

    _defineProperty(this, "markAsDone", () => {
      this.setState({
        completed: !this.props.todo.completed
      }, () => {
        this.props.handleUpdateTodo(this.props.todo.id, this.props.todo.taskName, this.state.completed);
      });
    });
  }

  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().todo),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
          children: this.props.todo.taskName
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          onClick: event => this.props.handleDeleteTodo(this.props.todo.id, event),
          children: "x"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
          type: "checkbox",
          defaultChecked: this.props.todo.completed,
          onClick: this.markAsDone
        })]
      })
    });
  }

}

/***/ }),

/***/ 45:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Todos; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./styles.module.css
var styles_module = __webpack_require__(704);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./pages/todo.js
var pages_todo = __webpack_require__(10);
;// CONCATENATED MODULE: external "uuid"
var external_uuid_namespaceObject = require("uuid");;
;// CONCATENATED MODULE: external "axios"
var external_axios_namespaceObject = require("axios");;
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./pages/todos.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Todos extends (external_react_default()).Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      todos: [],
      newTodo: {
        "id": '',
        "taskName": '',
        completed: false
      }
    });

    _defineProperty(this, "fetchTodos", async => {
      try {
        fetch(`${"https://nxas8q7gy1.execute-api.eu-north-1.amazonaws.com/dev"}/todos`).then(response => response.json()).then(fetchedtodos => {
          this.setState({
            todos: fetchedtodos
          });
        });
      } catch (err) {
        console.log(`An error has occured: ${err}`);
      }
    });

    _defineProperty(this, "componentDidMount", () => {
      this.fetchTodos();
    });

    _defineProperty(this, "handleAddTodo", async (id, event) => {
      event.preventDefault();

      try {
        const params = {
          "id": id,
          "taskName": this.state.newTodo.taskName,
          "completed": false
        };
        await external_axios_default().post(`${"https://nxas8q7gy1.execute-api.eu-north-1.amazonaws.com/dev"}/todos/${id}`, params);
        this.setState({
          todos: [...this.state.todos, this.state.newTodo]
        });
        this.setState({
          newTodo: {
            "taskName": "",
            "id": "",
            "completed": false
          }
        });
      } catch (err) {
        console.log(`Error when adding Todo: ${err}`);
      }
    });

    _defineProperty(this, "handleDeleteTodo", async (id, event) => {
      event.preventDefault();

      try {
        await external_axios_default().delete(`${"https://nxas8q7gy1.execute-api.eu-north-1.amazonaws.com/dev"}/todos/${id}`);
        const updatedTodos = [...this.state.todos].filter(todo => todo.id !== id);
        this.setState({
          todos: updatedTodos
        });
      } catch (err) {
        console.log(`Error when deleting Todo: ${err}`);
      }
    });

    _defineProperty(this, "handleUpdateTodo", async (id, taskName, completed) => {
      try {
        const params = {
          "id": id,
          "taskName": taskName,
          "completed": completed
        };
        await external_axios_default().patch(`${"https://nxas8q7gy1.execute-api.eu-north-1.amazonaws.com/dev"}/todos/${id}`, params);
        const todoUpdate = [...this.state.todos].find(todo => todo.id === id);
        todoUpdate.taskName = taskName;
        todoUpdate.completed = completed;
        const updatedTodos = [...this.state.todos];
        const todoUpdateIndex = this.state.todos.findIndex(todo => todo.id === id);
        updatedTodos.splice(todoUpdateIndex, 1, todoUpdate);
        this.setState({
          todos: updatedTodos
        });
      } catch (err) {
        console.log(`Error when updating todo: ${err}`);
      }
    });

    _defineProperty(this, "onAddTodoNameChange", event => this.setState({
      newTodo: _objectSpread(_objectSpread({}, this.state.newtodo), {}, {
        "taskName": event.target.value,
        "id": (0,external_uuid_namespaceObject.v4)()
      })
    }));
  }

  render() {
    const Todos = this.state.todos.map(todo => /*#__PURE__*/jsx_runtime_.jsx(pages_todo.default, {
      todo: todo,
      handleDeleteTodo: this.handleDeleteTodo,
      handleUpdateTodo: this.handleUpdateTodo
    }, todo.id));
    const Completed = this.state.todos.filter(todo => todo.completed === true);
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (styles_module_default()).todoTitle,
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "Your tasks"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (styles_module_default()).todoWrapper,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (styles_module_default()).todoForm,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            onSubmit: event => this.handleAddTodo(this.state.newTodo.id, event),
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "text",
              placeholder: "Enter task",
              value: this.state.newTodo.taskName,
              onChange: this.onAddTodoNameChange
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "submit",
              children: "Add new task"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (styles_module_default()).todos,
          children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
            children: Todos
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
            children: ["Completed: ", Completed.length]
          })]
        })]
      })]
    });
  }

}

/***/ }),

/***/ 704:
/***/ (function(module) {

// Exports
module.exports = {
	"todoWrapper": "styles_todoWrapper__ztwzE",
	"todoForm": "styles_todoForm__286N2",
	"todos": "styles_todos__2--kI",
	"todo": "styles_todo__1Jjr0",
	"todoTitle": "styles_todoTitle__3s3bB"
};


/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(474));
module.exports = __webpack_exports__;

})();