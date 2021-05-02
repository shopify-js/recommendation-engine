module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/script-page.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/script-page.js":
/*!******************************!*\
  !*** ./pages/script-page.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst CREATE_SCRIPT_TAG = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\n    mutation scriptTagCreate($input: ScriptTagInput!) {\n        scriptTagCreate(input: $input) {\n            scriptTag {\n                id\n            }\n            userErrors {\n                field\n                message\n            }\n        }\n    }\n`;\nconst QUERY_SCRIPTTAGS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\n    query {\n        scriptTags(first: 5) {\n            edges {\n                node {\n                    id\n                    src\n                    displayScope\n                }\n            }\n        }\n    }\n`;\nconst DELETE_SCRIPTTAG = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\n    mutation scriptTagDelete($id: ID!) {\n        scriptTagDelete(id: $id) {\n            deletedScriptTagId\n            userErrors {\n                field\n                message\n            }\n        }\n    }\n`;\n\nfunction ScriptPage() {\n  const [createScripts] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"])(CREATE_SCRIPT_TAG);\n  const [deleteScripts] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"])(DELETE_SCRIPTTAG);\n  const {\n    loading,\n    error,\n    data\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(QUERY_SCRIPTTAGS);\n  if (loading) return __jsx(\"div\", null, \"Loading\\u2026\");\n  if (error) return __jsx(\"div\", null, error.message);\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Page\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n    title: \"These are the Script Tags:\",\n    sectioned: true\n  }, __jsx(\"p\", null, \"Create or Delete a Script Tag\"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, {\n    secondary: true\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n    title: \"Delete Tag\",\n    sectioned: true\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    primary: true,\n    size: \"slim\",\n    type: \"submit\",\n    onClick: () => {\n      createScripts({\n        variables: {\n          input: {\n            src: \"https://b950bee97bc9.ngrok.io/test-script.js\",\n            displayScope: \"ALL\"\n          }\n        },\n        refetchQueries: [{\n          query: QUERY_SCRIPTTAGS\n        }]\n      });\n    }\n  }, \"Create Script Tag\"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"ResourceList\"], {\n    showHeader: true,\n    resourceName: {\n      singular: 'Script',\n      plural: 'Scripts'\n    },\n    items: data.scriptTags.edges,\n    renderItem: item => {\n      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"ResourceList\"].Item, {\n        id: item.id\n      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"].Item, null, __jsx(\"p\", null, item.node.id)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n        type: \"submit\",\n        onClick: () => {\n          deleteScripts({\n            variables: {\n              id: item.node.id\n            },\n            refetchQueries: [{\n              query: QUERY_SCRIPTTAGS\n            }]\n          });\n        }\n      }, \"Delete Script Tag\"))));\n    }\n  })))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScriptPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zY3JpcHQtcGFnZS5qcz9jYzkwIl0sIm5hbWVzIjpbIkNSRUFURV9TQ1JJUFRfVEFHIiwiZ3FsIiwiUVVFUllfU0NSSVBUVEFHUyIsIkRFTEVURV9TQ1JJUFRUQUciLCJTY3JpcHRQYWdlIiwiY3JlYXRlU2NyaXB0cyIsInVzZU11dGF0aW9uIiwiZGVsZXRlU2NyaXB0cyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VRdWVyeSIsIm1lc3NhZ2UiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInNyYyIsImRpc3BsYXlTY29wZSIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJzaW5ndWxhciIsInBsdXJhbCIsInNjcmlwdFRhZ3MiLCJlZGdlcyIsIml0ZW0iLCJpZCIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsaUJBQWlCLEdBQUdDLGtEQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVpBO0FBY0EsTUFBTUMsZ0JBQWdCLEdBQUdELGtEQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVpBO0FBY0EsTUFBTUUsZ0JBQWdCLEdBQUdGLGtEQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVkE7O0FBWUEsU0FBU0csVUFBVCxHQUFzQjtBQUVwQixRQUFNLENBQUNDLGFBQUQsSUFBa0JDLHVFQUFXLENBQUNOLGlCQUFELENBQW5DO0FBQ0EsUUFBTSxDQUFDTyxhQUFELElBQWtCRCx1RUFBVyxDQUFDSCxnQkFBRCxDQUFuQztBQUNBLFFBQU07QUFBRUssV0FBRjtBQUFXQyxTQUFYO0FBQWtCQztBQUFsQixNQUEyQkMsb0VBQVEsQ0FBQ1QsZ0JBQUQsQ0FBekM7QUFHQSxNQUFJTSxPQUFKLEVBQWEsT0FBTyxtQ0FBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxPQUFPLG1CQUFNQSxLQUFLLENBQUNHLE9BQVosQ0FBUDtBQUVYLFNBQ0UsTUFBQyxxREFBRCxRQUNFLE1BQUMsdURBQUQsUUFDRSxNQUFDLHVEQUFELENBQVEsT0FBUixRQUNFLE1BQUMscURBQUQ7QUFBTSxTQUFLLEVBQUMsNEJBQVo7QUFBeUMsYUFBUztBQUFsRCxLQUNFLGlEQURGLENBREYsQ0FERixFQVFFLE1BQUMsdURBQUQsQ0FBUSxPQUFSO0FBQWdCLGFBQVM7QUFBekIsS0FDRSxNQUFDLHFEQUFEO0FBQU0sU0FBSyxFQUFDLFlBQVo7QUFBeUIsYUFBUztBQUFsQyxLQUNFLE1BQUMsdURBQUQ7QUFDRSxXQUFPLE1BRFQ7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFFBQUksRUFBQyxRQUhQO0FBR2dCLFdBQU8sRUFBRSxNQUFNO0FBQzNCUCxtQkFBYSxDQUFDO0FBQ1pRLGlCQUFTLEVBQUU7QUFDVEMsZUFBSyxFQUFFO0FBQ0xDLGVBQUcsRUFBRSw4Q0FEQTtBQUVMQyx3QkFBWSxFQUFFO0FBRlQ7QUFERSxTQURDO0FBT1pDLHNCQUFjLEVBQUUsQ0FBQztBQUFFQyxlQUFLLEVBQUVoQjtBQUFULFNBQUQ7QUFQSixPQUFELENBQWI7QUFTRDtBQWJILHlCQURGLENBREYsQ0FSRixFQTZCRSxNQUFDLHVEQUFELENBQVEsT0FBUixRQUNFLE1BQUMscURBQUQsUUFDRSxNQUFDLDZEQUFEO0FBQ0UsY0FBVSxNQURaO0FBRUUsZ0JBQVksRUFBRTtBQUFFaUIsY0FBUSxFQUFFLFFBQVo7QUFBc0JDLFlBQU0sRUFBRTtBQUE5QixLQUZoQjtBQUdFLFNBQUssRUFBRVYsSUFBSSxDQUFDVyxVQUFMLENBQWdCQyxLQUh6QjtBQUlFLGNBQVUsRUFBRUMsSUFBSSxJQUFJO0FBQ2xCLGFBQ0UsTUFBQyw2REFBRCxDQUFjLElBQWQ7QUFDRSxVQUFFLEVBQUVBLElBQUksQ0FBQ0M7QUFEWCxTQUdFLE1BQUMsc0RBQUQsUUFDRSxNQUFDLHNEQUFELENBQU8sSUFBUCxRQUNFLGlCQUNHRCxJQUFJLENBQUNFLElBQUwsQ0FBVUQsRUFEYixDQURGLENBREYsRUFNRSxNQUFDLHNEQUFELENBQU8sSUFBUCxRQUNFLE1BQUMsdURBQUQ7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUUsTUFBTTtBQUNuQ2pCLHVCQUFhLENBQUM7QUFDWk0scUJBQVMsRUFBRTtBQUNUVyxnQkFBRSxFQUFFRCxJQUFJLENBQUNFLElBQUwsQ0FBVUQ7QUFETCxhQURDO0FBSVpQLDBCQUFjLEVBQUUsQ0FBQztBQUFFQyxtQkFBSyxFQUFFaEI7QUFBVCxhQUFEO0FBSkosV0FBRCxDQUFiO0FBTUQ7QUFQRCw2QkFERixDQU5GLENBSEYsQ0FERjtBQXlCRDtBQTlCSCxJQURGLENBREYsQ0E3QkYsQ0FERixDQURGO0FBc0VEOztBQUVjRSx5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NjcmlwdC1wYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgTGF5b3V0LCBQYWdlLCBSZXNvdXJjZUxpc3QsIFN0YWNrIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5cbmNvbnN0IENSRUFURV9TQ1JJUFRfVEFHID0gZ3FsYFxuICAgIG11dGF0aW9uIHNjcmlwdFRhZ0NyZWF0ZSgkaW5wdXQ6IFNjcmlwdFRhZ0lucHV0ISkge1xuICAgICAgICBzY3JpcHRUYWdDcmVhdGUoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgICAgICAgc2NyaXB0VGFnIHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXNlckVycm9ycyB7XG4gICAgICAgICAgICAgICAgZmllbGRcbiAgICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5jb25zdCBRVUVSWV9TQ1JJUFRUQUdTID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgICAgc2NyaXB0VGFncyhmaXJzdDogNSkge1xuICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBzcmNcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNjb3BlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuY29uc3QgREVMRVRFX1NDUklQVFRBRyA9IGdxbGBcbiAgICBtdXRhdGlvbiBzY3JpcHRUYWdEZWxldGUoJGlkOiBJRCEpIHtcbiAgICAgICAgc2NyaXB0VGFnRGVsZXRlKGlkOiAkaWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZWRTY3JpcHRUYWdJZFxuICAgICAgICAgICAgdXNlckVycm9ycyB7XG4gICAgICAgICAgICAgICAgZmllbGRcbiAgICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5mdW5jdGlvbiBTY3JpcHRQYWdlKCkge1xuXG4gIGNvbnN0IFtjcmVhdGVTY3JpcHRzXSA9IHVzZU11dGF0aW9uKENSRUFURV9TQ1JJUFRfVEFHKTtcbiAgY29uc3QgW2RlbGV0ZVNjcmlwdHNdID0gdXNlTXV0YXRpb24oREVMRVRFX1NDUklQVFRBRyk7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KFFVRVJZX1NDUklQVFRBR1MpO1xuXG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmfigKY8L2Rpdj47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2U+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgPENhcmQgdGl0bGU9XCJUaGVzZSBhcmUgdGhlIFNjcmlwdCBUYWdzOlwiIHNlY3Rpb25lZD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBDcmVhdGUgb3IgRGVsZXRlIGEgU2NyaXB0IFRhZ1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgPExheW91dC5TZWN0aW9uIHNlY29uZGFyeT5cbiAgICAgICAgICA8Q2FyZCB0aXRsZT1cIkRlbGV0ZSBUYWdcIiBzZWN0aW9uZWQ+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgc2l6ZT1cInNsaW1cIlxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVNjcmlwdHMoe1xuICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vYjk1MGJlZTk3YmM5Lm5ncm9rLmlvL3Rlc3Qtc2NyaXB0LmpzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNjb3BlOiBcIkFMTFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogUVVFUllfU0NSSVBUVEFHUyB9XSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ3JlYXRlIFNjcmlwdCBUYWdcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgPExheW91dC5TZWN0aW9uPlxuICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgPFJlc291cmNlTGlzdFxuICAgICAgICAgICAgICBzaG93SGVhZGVyXG4gICAgICAgICAgICAgIHJlc291cmNlTmFtZT17eyBzaW5ndWxhcjogJ1NjcmlwdCcsIHBsdXJhbDogJ1NjcmlwdHMnIH19XG4gICAgICAgICAgICAgIGl0ZW1zPXtkYXRhLnNjcmlwdFRhZ3MuZWRnZXN9XG4gICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0Lkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5ub2RlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVNjcmlwdHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0ubm9kZS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBRVUVSWV9TQ1JJUFRUQUdTIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIFNjcmlwdCBUYWdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICA8L0xheW91dD5cbiAgICA8L1BhZ2U+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NyaXB0UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/script-page.js\n");

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });