const fs = require("fs");
const escope = require('escope');
const esprima = require('esprima');
const iconv = require('iconv-lite');
const escodege = require('escodegen');
const estraverse = require('estraverse');

function Fix(ast){
    ast = estraverse.replace(ast,{
        enter: function(node,parent){
            if(node.type === "ExpressionStatement" && 
                parent.type==="ForStatement" &&
                parent.body===node
            ){
                return{
                    type: esprima.Syntax.BlockStatement,
                    body: [
                        node,
                    ],
                }
            }
        }
    });
    return ast
}

module.exports = {
    Fix
}