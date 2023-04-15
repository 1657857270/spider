const fs = require("fs");
const escope = require('escope');
const esprima = require('esprima');
const iconv = require('iconv-lite');
const escodege = require('escodegen');
const estraverse = require('estraverse');

function Fix(ast){
    ast = estraverse.replace(ast,{
        enter: function(node,parent){
            if(node.type === "VariableDeclaration" && node.declarations.length>1){
                switch(parent.type){
                    case "BlockStatement":
                    case "Program":
                        for(var idx=0;idx<node.declarations.length;idx++){
                            parent.body.splice(parent.body.indexOf(node),0,{
                                type: esprima.Syntax.VariableDeclaration,
                                kind:node.kind,
                                declarations:[
                                    node.declarations[idx]
                                ]

                            })
                        }
                        parent.body.splice(parent.body.indexOf(node),1)    
                        break;

                }
            }
        }
    });
    return ast
}

module.exports = {
    Fix
}