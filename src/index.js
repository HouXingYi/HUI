import Button from './components/button';
import hInput from './components/input';
var HUI = {
    Button,
    hInput
};
var install = function(Vue, opts = {}) {
    Object.keys(HUI).forEach(key => {
        Vue.component(key, HUI[key]);
    });
};
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
HUI = Object.assign(HUI, {install});
export default HUI;

