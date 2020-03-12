(function(graph){
      function require(moduleId){ 
        function localRequire(relativePath){
          return require(graph[moduleId].dependecies[relativePath])
        }
        var exports = {};
        (function(require,exports,code){
          eval(code)
        })(localRequire,exports,graph[moduleId].code);
        return exports;
      }
      require('D:\WebstormProjects\simplepack\src\index.js')
    })({"D:\\WebstormProjects\\simplepack\\src\\index.js":{"dependecies":{"./greeting.js":"./D:\\WebstormProjects\\simplepack\\src\\greeting.js"},"code":"\"use strict\";\n\nvar _greeting = _interopRequireDefault(require(\"./greeting.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n/*\r\n * @Author: your name\r\n * @Date: 2020-03-08 23:39:07\r\n * @LastEditTime: 2020-03-12 17:23:03\r\n * @LastEditors: Please set LastEditors\r\n * @Description: In User Settings Edit\r\n * @FilePath: \\simplepack\\src\\index.js\r\n */\nconsole.log(\"greeting\", 111);\ndocument.write((0, _greeting[\"default\"])('Jane'));"},"D:\\WebstormProjects\\simplepack\\src\\greeting.js":{"dependecies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.greeting = greeting;\n\n/*\r\n * @Author: your name\r\n * @Date: 2020-03-08 23:39:17\r\n * @LastEditTime: 2020-03-12 17:11:20\r\n * @LastEditors: Please set LastEditors\r\n * @Description: In User Settings Edit\r\n * @FilePath: \\simplepack\\src\\greeting.js\r\n */\nfunction greeting(name) {\n  return \"hello\" + name;\n}"}})