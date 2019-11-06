#! /usr/bin/env node

let entry='./src/index.js';  //入口文件
let output='./dist/main.js'; //出口
let fs=require('fs');
let script=fs.readFileSync(entry,'utf8');

let ejs=require('ejs');


let template=` 
(function(modules) { 
    function require(moduleId) {
        var module = installedModules[moduleId] = {
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, require);
        return module.exports;
    }
    return require("<%-entry%>");
})
 ({
   "<%-entry%>":
   (function(module, exports) {
       eval(\`<%-script%>\`);
   })
 });
`

 let result=ejs.render(template,{
     entry,
     script
 })
 fs.writeFileSync(output,result);
 console.log("编译成功")