/*
 * @Author: your name
 * @Date: 2020-03-08 23:41:17
 * @LastEditTime: 2020-03-12 17:14:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simplepack\lib\parser.js
 */
const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const { transformFromAst } = require("@babel/core");
const Parser = {
  getAst: path => {
    
    const content = fs.readFileSync(path, "utf-8");
    console.log("content", content)
    return parser.parse(content, {
      sourceType: "module"
    });
  },
  getDependecies: (ast, filename) => {
    const dependecies = {};
    traverse(ast, {
      ImportDeclaration({ node }) {
        const dirname = path.dirname(filename);
        const filepath = "./" + path.join(dirname, node.source.value);
        dependecies[node.source.value] = filepath;
      }
    });
    return dependecies;
  },
  getCode: ast => {
    const { code } = transformFromAst(ast, null, {
      presets: ["@babel/preset-env"]
    });
    return code;
  }
};

module.exports = Parser;