/*
 * @Author: your name
 * @Date: 2020-03-08 23:41:05
 * @LastEditTime: 2020-03-12 17:26:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simplepack\lib\index.js
 */
const Compiler = require("./Compiler");
const options = require("../simplepack.config");
console.log('entey')
new Compiler(options).run();
