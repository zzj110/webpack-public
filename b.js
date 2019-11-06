let fs=require('fs')
// common.js
function req(moduleName){
    let content=fs.readFileSync(moduleName,'utf8');
    console.log(content);
    let fn=new Function('exports','module','require','__dirname','__filename',content+'\n return module.exports');
    console.log(fn)
    let module={
        exports:{}
    }
    return fn(module.exports,module,req,__dirname,__filename)
}


let str=req('./a.js');
console.log(str)
/*
   function(exports,module,require,__dirname,__filename){
       module.exports='欢迎参加珠峰架构公开课'
       return module.exports
   }

*/