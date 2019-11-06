// define 声明模块   通过require使用一个模块
let factories={}
/**
 * 
 * @param {*} moduleName    模块的名字
 * @param {*} dependencies  依赖
 * @param {*} factory       工厂函数
 */
function define(moduleName,dependencies,factory){
   factory.dependencies=dependencies //将依赖记到 factory上
   factories[moduleName]=factory
}

function require(mods,callback){
    let result=mods.map(function(mod){  //name, age
        let factory=factories[mod];
        let exports;
        let dependencies=factory.dependencies; //['name']
        require(dependencies,function(){
            exports=factory.apply(null,arguments)
        })
        return exports;
    })
    callback.apply(null,result)

}
 
define('name',[],function(){
    return '珠峰'

})
define('age',['name'],function(name){
    return name+9

})


require(['age'],function(age){
    console.log(age)
})