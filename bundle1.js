(function(modules) { 
    function require(moduleId) {
        var module = installedModules[moduleId] = {
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, require);
        return module.exports;
    }
    return require("./src/index.js");
})
 ({
   "./src/index.js":
   (function(module, exports) {
       eval("\r\n\r\nconsole.log(\"欢迎珠峰开课\")\n\n//# sourceURL=webpack:///./src/index.js?");
   })
 });