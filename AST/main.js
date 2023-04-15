const fs = require("fs");
const escope = require('escope');
const esprima = require('esprima');
const iconv = require('iconv-lite');
const escodege = require('escodegen');
const estraverse = require('estraverse');

const ForStatementFix = require('./lib/ForStatemenFix')
const CommaExpressionVariable = require('./lib/CommaExpressionVariable.js')
//读入源代码
var content = fs.readFileSync('source/commaExpressionVariable.js',{encoding:'binary'});
var buf = new Buffer.from(content,'binary');
var code = iconv.decode(buf,'utf-8');
//将源代码解析成AST
var ast = esprima.parseModule(code);
ast = ForStatementFix.Fix(ast)
ast = CommaExpressionVariable.Fix(ast)
code = escodege.generate(ast)
console.log(code)

fs.writeFile('output/hpl.js',code,{flag:'w',encoding:'utf-8', mode:'0666'},function(err){
    if(err){
        console.log("文件写入失败")
    }else{
        console.log("文件写入成功");
    }
});
