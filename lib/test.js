/*
 * @Author: your name
 * @Date: 2020-03-08 23:49:18
 * @LastEditTime: 2020-03-12 17:10:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simplepack\lib\test.js
 */
const { getAST, getDependencies, transform } = require("./parser");
const path = require("path");
const ast = getAST(path.join(__dirname, "../src/index.js"));
const source = transform(ast);
console.log(getDependencies(ast));
console.log(source);
