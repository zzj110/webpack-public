let str = require('./a.js')
document.getElementById('app').innerText = str;
import './index.css';


// 热更替
if (module.hot) {
    module.hot.accept();
}