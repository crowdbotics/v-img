(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['vue-img'] = factory());
}(this, (function () { 'use strict';

var __cov_0GTwwl$GMPTkkuRWFDyc4w = (Function('return this'))();
if (!__cov_0GTwwl$GMPTkkuRWFDyc4w.__coverage__) { __cov_0GTwwl$GMPTkkuRWFDyc4w.__coverage__ = {}; }
__cov_0GTwwl$GMPTkkuRWFDyc4w = __cov_0GTwwl$GMPTkkuRWFDyc4w.__coverage__;
if (!(__cov_0GTwwl$GMPTkkuRWFDyc4w['/home/fahrenq/code/v-img/lib/ImgScreen.vue'])) {
   __cov_0GTwwl$GMPTkkuRWFDyc4w['/home/fahrenq/code/v-img/lib/ImgScreen.vue'] = {"path":"/home/fahrenq/code/v-img/lib/ImgScreen.vue","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0],"25":[0,0],"26":[0,0],"27":[0,0],"28":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":1},"end":{"line":1,"column":13}}},"2":{"name":"render","line":13,"loc":{"start":{"line":13,"column":25},"end":{"line":13,"column":43}}},"3":{"name":"click","line":14,"loc":{"start":{"line":14,"column":225},"end":{"line":14,"column":248}}},"4":{"name":"data","line":20,"loc":{"start":{"line":20,"column":8},"end":{"line":20,"column":24}}},"5":{"name":"closed","line":33,"loc":{"start":{"line":33,"column":12},"end":{"line":33,"column":36}}},"6":{"name":"fireChangeEvent","line":47,"loc":{"start":{"line":47,"column":21},"end":{"line":47,"column":48}}},"7":{"name":"close","line":52,"loc":{"start":{"line":52,"column":11},"end":{"line":52,"column":28}}},"8":{"name":"next","line":60,"loc":{"start":{"line":60,"column":10},"end":{"line":60,"column":26}}},"9":{"name":"prev","line":71,"loc":{"start":{"line":71,"column":10},"end":{"line":71,"column":26}}},"10":{"name":"showUI","line":82,"loc":{"start":{"line":82,"column":12},"end":{"line":82,"column":30}}},"11":{"name":"(anonymous_11)","line":90,"loc":{"start":{"line":90,"column":36},"end":{"line":90,"column":48}}},"12":{"name":"created","line":96,"loc":{"start":{"line":96,"column":11},"end":{"line":96,"column":30}}},"13":{"name":"(anonymous_13)","line":99,"loc":{"start":{"line":99,"column":37},"end":{"line":99,"column":50}}},"14":{"name":"(anonymous_14)","line":107,"loc":{"start":{"line":107,"column":38},"end":{"line":107,"column":50}}},"15":{"name":"(anonymous_15)","line":110,"loc":{"start":{"line":110,"column":41},"end":{"line":110,"column":53}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":11,"column":5}},"2":{"start":{"line":2,"column":2},"end":{"line":10,"column":3}},"3":{"start":{"line":3,"column":4},"end":{"line":5,"column":2414}},"4":{"start":{"line":5,"column":2414},"end":{"line":5,"column":2438}},"5":{"start":{"line":5,"column":2438},"end":{"line":9,"column":5}},"6":{"start":{"line":6,"column":6},"end":{"line":6,"column":37}},"7":{"start":{"line":8,"column":6},"end":{"line":8,"column":54}},"8":{"start":{"line":9,"column":5},"end":{"line":9,"column":29}},"9":{"start":{"line":14,"column":4},"end":{"line":14,"column":19}},"10":{"start":{"line":14,"column":19},"end":{"line":14,"column":47}},"11":{"start":{"line":14,"column":47},"end":{"line":14,"column":75}},"12":{"start":{"line":14,"column":75},"end":{"line":18,"column":1800}},"13":{"start":{"line":15,"column":10},"end":{"line":17,"column":11}},"14":{"start":{"line":16,"column":12},"end":{"line":16,"column":24}},"15":{"start":{"line":17,"column":11},"end":{"line":17,"column":23}},"16":{"start":{"line":21,"column":4},"end":{"line":29,"column":6}},"17":{"start":{"line":34,"column":6},"end":{"line":36,"column":7}},"18":{"start":{"line":35,"column":8},"end":{"line":35,"column":31}},"19":{"start":{"line":37,"column":6},"end":{"line":39,"column":7}},"20":{"start":{"line":38,"column":8},"end":{"line":38,"column":31}},"21":{"start":{"line":48,"column":6},"end":{"line":50,"column":7}},"22":{"start":{"line":49,"column":8},"end":{"line":49,"column":54}},"23":{"start":{"line":53,"column":6},"end":{"line":58,"column":7}},"24":{"start":{"line":54,"column":8},"end":{"line":54,"column":73}},"25":{"start":{"line":55,"column":8},"end":{"line":55,"column":25}},"26":{"start":{"line":56,"column":8},"end":{"line":56,"column":35}},"27":{"start":{"line":57,"column":8},"end":{"line":57,"column":27}},"28":{"start":{"line":61,"column":6},"end":{"line":69,"column":7}},"29":{"start":{"line":63,"column":8},"end":{"line":67,"column":9}},"30":{"start":{"line":64,"column":10},"end":{"line":64,"column":35}},"31":{"start":{"line":66,"column":10},"end":{"line":66,"column":37}},"32":{"start":{"line":68,"column":8},"end":{"line":68,"column":31}},"33":{"start":{"line":72,"column":6},"end":{"line":80,"column":7}},"34":{"start":{"line":74,"column":8},"end":{"line":78,"column":9}},"35":{"start":{"line":75,"column":10},"end":{"line":75,"column":35}},"36":{"start":{"line":77,"column":10},"end":{"line":77,"column":58}},"37":{"start":{"line":79,"column":8},"end":{"line":79,"column":31}},"38":{"start":{"line":83,"column":6},"end":{"line":83,"column":23}},"39":{"start":{"line":85,"column":6},"end":{"line":93,"column":7}},"40":{"start":{"line":88,"column":8},"end":{"line":88,"column":37}},"41":{"start":{"line":89,"column":8},"end":{"line":89,"column":30}},"42":{"start":{"line":90,"column":8},"end":{"line":92,"column":17}},"43":{"start":{"line":91,"column":10},"end":{"line":91,"column":34}},"44":{"start":{"line":97,"column":4},"end":{"line":97,"column":22}},"45":{"start":{"line":99,"column":4},"end":{"line":106,"column":7}},"46":{"start":{"line":101,"column":6},"end":{"line":101,"column":63}},"47":{"start":{"line":101,"column":48},"end":{"line":101,"column":63}},"48":{"start":{"line":103,"column":6},"end":{"line":103,"column":62}},"49":{"start":{"line":103,"column":48},"end":{"line":103,"column":62}},"50":{"start":{"line":105,"column":6},"end":{"line":105,"column":62}},"51":{"start":{"line":105,"column":48},"end":{"line":105,"column":62}},"52":{"start":{"line":107,"column":4},"end":{"line":109,"column":7}},"53":{"start":{"line":108,"column":6},"end":{"line":108,"column":21}},"54":{"start":{"line":110,"column":4},"end":{"line":112,"column":7}},"55":{"start":{"line":111,"column":6},"end":{"line":111,"column":22}}},"branchMap":{"1":{"line":2,"type":"if","locations":[{"start":{"line":2,"column":2},"end":{"line":2,"column":2}},{"start":{"line":2,"column":2},"end":{"line":2,"column":2}}]},"2":{"line":3,"type":"binary-expr","locations":[{"start":{"line":3,"column":15},"end":{"line":3,"column":28}},{"start":{"line":3,"column":32},"end":{"line":3,"column":72}}]},"3":{"line":5,"type":"if","locations":[{"start":{"line":5,"column":2438},"end":{"line":5,"column":2438}},{"start":{"line":5,"column":2438},"end":{"line":5,"column":2438}}]},"4":{"line":14,"type":"binary-expr","locations":[{"start":{"line":14,"column":56},"end":{"line":14,"column":68}},{"start":{"line":14,"column":72},"end":{"line":14,"column":74}}]},"5":{"line":14,"type":"cond-expr","locations":[{"start":{"line":14,"column":165},"end":{"line":18,"column":1786}},{"start":{"line":18,"column":1789},"end":{"line":18,"column":1797}}]},"6":{"line":15,"type":"if","locations":[{"start":{"line":15,"column":10},"end":{"line":15,"column":10}},{"start":{"line":15,"column":10},"end":{"line":15,"column":10}}]},"7":{"line":18,"type":"cond-expr","locations":[{"start":{"line":18,"column":128},"end":{"line":18,"column":223}},{"start":{"line":18,"column":226},"end":{"line":18,"column":234}}]},"8":{"line":18,"type":"cond-expr","locations":[{"start":{"line":18,"column":542},"end":{"line":18,"column":1020}},{"start":{"line":18,"column":1023},"end":{"line":18,"column":1031}}]},"9":{"line":18,"type":"binary-expr","locations":[{"start":{"line":18,"column":499},"end":{"line":18,"column":512}},{"start":{"line":18,"column":516},"end":{"line":18,"column":539}}]},"10":{"line":18,"type":"cond-expr","locations":[{"start":{"line":18,"column":1147},"end":{"line":18,"column":1626}},{"start":{"line":18,"column":1629},"end":{"line":18,"column":1637}}]},"11":{"line":18,"type":"binary-expr","locations":[{"start":{"line":18,"column":1104},"end":{"line":18,"column":1117}},{"start":{"line":18,"column":1121},"end":{"line":18,"column":1144}}]},"12":{"line":34,"type":"if","locations":[{"start":{"line":34,"column":6},"end":{"line":34,"column":6}},{"start":{"line":34,"column":6},"end":{"line":34,"column":6}}]},"13":{"line":34,"type":"binary-expr","locations":[{"start":{"line":34,"column":10},"end":{"line":34,"column":16}},{"start":{"line":34,"column":20},"end":{"line":34,"column":40}}]},"14":{"line":37,"type":"if","locations":[{"start":{"line":37,"column":6},"end":{"line":37,"column":6}},{"start":{"line":37,"column":6},"end":{"line":37,"column":6}}]},"15":{"line":37,"type":"binary-expr","locations":[{"start":{"line":37,"column":10},"end":{"line":37,"column":17}},{"start":{"line":37,"column":21},"end":{"line":37,"column":41}}]},"16":{"line":48,"type":"if","locations":[{"start":{"line":48,"column":6},"end":{"line":48,"column":6}},{"start":{"line":48,"column":6},"end":{"line":48,"column":6}}]},"17":{"line":53,"type":"if","locations":[{"start":{"line":53,"column":6},"end":{"line":53,"column":6}},{"start":{"line":53,"column":6},"end":{"line":53,"column":6}}]},"18":{"line":61,"type":"if","locations":[{"start":{"line":61,"column":6},"end":{"line":61,"column":6}},{"start":{"line":61,"column":6},"end":{"line":61,"column":6}}]},"19":{"line":63,"type":"if","locations":[{"start":{"line":63,"column":8},"end":{"line":63,"column":8}},{"start":{"line":63,"column":8},"end":{"line":63,"column":8}}]},"20":{"line":72,"type":"if","locations":[{"start":{"line":72,"column":6},"end":{"line":72,"column":6}},{"start":{"line":72,"column":6},"end":{"line":72,"column":6}}]},"21":{"line":74,"type":"if","locations":[{"start":{"line":74,"column":8},"end":{"line":74,"column":8}},{"start":{"line":74,"column":8},"end":{"line":74,"column":8}}]},"22":{"line":85,"type":"if","locations":[{"start":{"line":85,"column":6},"end":{"line":85,"column":6}},{"start":{"line":85,"column":6},"end":{"line":85,"column":6}}]},"23":{"line":101,"type":"if","locations":[{"start":{"line":101,"column":6},"end":{"line":101,"column":6}},{"start":{"line":101,"column":6},"end":{"line":101,"column":6}}]},"24":{"line":101,"type":"binary-expr","locations":[{"start":{"line":101,"column":10},"end":{"line":101,"column":26}},{"start":{"line":101,"column":30},"end":{"line":101,"column":46}}]},"25":{"line":103,"type":"if","locations":[{"start":{"line":103,"column":6},"end":{"line":103,"column":6}},{"start":{"line":103,"column":6},"end":{"line":103,"column":6}}]},"26":{"line":103,"type":"binary-expr","locations":[{"start":{"line":103,"column":10},"end":{"line":103,"column":26}},{"start":{"line":103,"column":30},"end":{"line":103,"column":46}}]},"27":{"line":105,"type":"if","locations":[{"start":{"line":105,"column":6},"end":{"line":105,"column":6}},{"start":{"line":105,"column":6},"end":{"line":105,"column":6}}]},"28":{"line":105,"type":"binary-expr","locations":[{"start":{"line":105,"column":10},"end":{"line":105,"column":26}},{"start":{"line":105,"column":30},"end":{"line":105,"column":46}}]}}};
}
__cov_0GTwwl$GMPTkkuRWFDyc4w = __cov_0GTwwl$GMPTkkuRWFDyc4w['/home/fahrenq/code/v-img/lib/ImgScreen.vue'];
__cov_0GTwwl$GMPTkkuRWFDyc4w.s['1']++;(function(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['1']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['2']++;if(typeof document!=='undefined'){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['1'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['3']++;var head=(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['2'][0]++,document.head)||(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['2'][1]++,document.getElementsByTagName('head')[0]),style=document.createElement('style'),css=' *[data-v-5928e1c7] { -webkit-box-sizing: border-box; box-sizing: border-box; } .fullscreen-v-img[data-v-5928e1c7] { z-index: 9999; height: 100%; width: 100%; position: fixed; top: 0; left: 0; overflow: hidden; background-color: rgba(0, 0, 0, .7); -ms-touch-action: none; touch-action: none; } .content-v-img img[data-v-5928e1c7] { width: auto; height: auto; max-width: 100%; max-height: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .header-v-img[data-v-5928e1c7] { position: absolute; width: 100%; background-color: rgba(0, 0, 0, .3); height: 50px; z-index: 9999; display: flex; justify-content: space-between; align-items: center; } .title-v-img[data-v-5928e1c7] { font-family: \'Avenir\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; color: white; text-align: center; max-height: 100%; overflow: auto; } .count-v-img[data-v-5928e1c7], .close-v-img[data-v-5928e1c7] { width: 80px; font-family: \'Avenir\', Helvetica, Arial, sans-serif; line-height: 50px; } .count-v-img[data-v-5928e1c7] { font-size: 15px; color: white; margin-left: 10px; } .close-v-img[data-v-5928e1c7] { margin-right: 10px; color: #E5E6EB; font-size: 30px; cursor: pointer; -webkit-transition: color .4s ease-in-out; transition: color .4s ease-in-out; text-align: right; } .close-v-img[data-v-5928e1c7]:hover { color: white; } .prev-v-img svg[data-v-5928e1c7], .next-v-img svg[data-v-5928e1c7] { margin: 5px auto; } .prev-v-img[data-v-5928e1c7], .next-v-img[data-v-5928e1c7] { color: white; width: 35px; height: 35px; position: absolute; top: 50%; margin-top: -12.5px; font-size: 15px; font-family: \'Avenir\', Helvetica, Arial, sans-serif; text-align: center; background-color: rgba(0, 0, 0, .3); z-index: 1000; opacity: .3; -webkit-transition: opacity .3s ease-in-out; transition: opacity .3s ease-in-out; cursor: pointer; } .prev-v-img[data-v-5928e1c7]:hover, .next-v-img[data-v-5928e1c7]:hover { opacity: 1; } .prev-v-img[data-v-5928e1c7] { left: 10px; } .next-v-img[data-v-5928e1c7] { right: 10px; } .v-img-fade-enter[data-v-5928e1c7], .v-img-fade-leave-to[data-v-5928e1c7] { opacity: 0; } .v-img-fade-enter-active[data-v-5928e1c7], .v-img-fade-leave-active[data-v-5928e1c7] { -webkit-transition: opacity .3s ease-in-out; transition: opacity .3s ease-in-out; } .body-fs-v-img {} ';__cov_0GTwwl$GMPTkkuRWFDyc4w.s['4']++;style.type='text/css';__cov_0GTwwl$GMPTkkuRWFDyc4w.s['5']++;if(style.styleSheet){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['3'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['6']++;style.styleSheet.cssText=css;}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['3'][1]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['7']++;style.appendChild(document.createTextNode(css));}__cov_0GTwwl$GMPTkkuRWFDyc4w.s['8']++;head.appendChild(style);}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['1'][1]++;}}());var ImgScreen = {render:function render(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['2']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['9']++;var _vm=this;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['10']++;var _h=_vm.$createElement;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['11']++;var _c=(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['4'][0]++,_vm._self._c)||(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['4'][1]++,_h);__cov_0GTwwl$GMPTkkuRWFDyc4w.s['12']++;return _c('transition',{attrs:{'appear':'','name':'v-img-fade'}},[!_vm.closed?(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['5'][0]++,_c('div',{staticClass:'fullscreen-v-img',on:{'click':function click($event){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['3']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['13']++;if($event.target!==$event.currentTarget){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['6'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['14']++;return null;}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['6'][1]++;}__cov_0GTwwl$GMPTkkuRWFDyc4w.s['15']++;_vm.close();}}},[_c('div',{staticClass:'header-v-img'},[_c('span',{staticClass:'count-v-img'},[_vm.images.length>1?(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['7'][0]++,_c('span',[_vm._v(_vm._s(_vm.currentImageIndex+1)+'/'+_vm._s(_vm.images.length)+' ')])):(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['7'][1]++,_vm._e())]),_c('span',{staticClass:'title-v-img'},[_vm._v(_vm._s(_vm.titles[_vm.currentImageIndex])+' ')]),_c('span',{staticClass:'close-v-img',on:{'click':_vm.close}},[_vm._v('\xD7')])]),_c('transition',{attrs:{'appear':'','name':'v-img-fade'}},[(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['9'][0]++,_vm.visibleUI)&&(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['9'][1]++,_vm.images.length!==1)?(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['8'][0]++,_c('span',{staticClass:'prev-v-img',on:{'click':_vm.prev}},[_c('svg',{attrs:{'width':'25','height':'25','viewBox':'0 0 1792 1915','xmlns':'http://www.w3.org/2000/svg'}},[_c('path',{attrs:{'d':'M1664 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z','fill':'#fff'}})])])):(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['8'][1]++,_vm._e())]),_c('transition',{attrs:{'appear':'','name':'v-img-fade'}},[(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['11'][0]++,_vm.visibleUI)&&(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['11'][1]++,_vm.images.length!==1)?(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['10'][0]++,_c('span',{staticClass:'next-v-img',on:{'click':_vm.next}},[_c('svg',{attrs:{'width':'25','height':'25','viewBox':'0 0 1792 1915','xmlns':'http://www.w3.org/2000/svg'}},[_c('path',{attrs:{'d':'M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z','fill':'#fff'}})])])):(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['10'][1]++,_vm._e())]),_c('div',{staticClass:'content-v-img'},[_c('img',{attrs:{'src':_vm.images[_vm.currentImageIndex]},on:{'click':_vm.next}})])],1)):(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['5'][1]++,_vm._e())]);},staticRenderFns:[],_scopeId:'data-v-5928e1c7',data:function data(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['4']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['16']++;return{images:[],titles:[],visibleUI:true,currentImageIndex:0,closed:true,uiTimeout:null,handlers:{}};},watch:{closed:function closed(newVal){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['5']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['17']++;if((__cov_0GTwwl$GMPTkkuRWFDyc4w.b['13'][0]++,newVal)&&(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['13'][1]++,this.handlers.closed)){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['12'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['18']++;this.handlers.closed();}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['12'][1]++;}__cov_0GTwwl$GMPTkkuRWFDyc4w.s['19']++;if((__cov_0GTwwl$GMPTkkuRWFDyc4w.b['15'][0]++,!newVal)&&(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['15'][1]++,this.handlers.opened)){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['14'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['20']++;this.handlers.opened();}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['14'][1]++;}}},methods:{fireChangeEvent:function fireChangeEvent(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['6']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['21']++;if(this.handlers.changed){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['16'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['22']++;this.handlers.changed(this.currentImageIndex);}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['16'][1]++;}},close:function close(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['7']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['23']++;if(!this.closed){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['17'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['24']++;document.querySelector('body').classList.remove('body-fs-v-img');__cov_0GTwwl$GMPTkkuRWFDyc4w.s['25']++;this.images=[];__cov_0GTwwl$GMPTkkuRWFDyc4w.s['26']++;this.currentImageIndex=0;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['27']++;this.closed=true;}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['17'][1]++;}},next:function next(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['8']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['28']++;if(!this.closed){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['18'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['29']++;if(this.currentImageIndex+1<this.images.length){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['19'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['30']++;this.currentImageIndex++;}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['19'][1]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['31']++;this.currentImageIndex=0;}__cov_0GTwwl$GMPTkkuRWFDyc4w.s['32']++;this.fireChangeEvent();}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['18'][1]++;}},prev:function prev(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['9']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['33']++;if(!this.closed){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['20'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['34']++;if(this.currentImageIndex>0){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['21'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['35']++;this.currentImageIndex--;}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['21'][1]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['36']++;this.currentImageIndex=this.images.length-1;}__cov_0GTwwl$GMPTkkuRWFDyc4w.s['37']++;this.fireChangeEvent();}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['20'][1]++;}},showUI:function showUI(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['10']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['38']++;var _this=this;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['39']++;if(!this.closed){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['22'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['40']++;clearTimeout(this.uiTimeout);__cov_0GTwwl$GMPTkkuRWFDyc4w.s['41']++;this.visibleUI=true;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['42']++;this.uiTimeout=setTimeout(function(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['11']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['43']++;_this.visibleUI=false;},3500);}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['22'][1]++;}}},created:function created(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['12']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['44']++;var _this2=this;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['45']++;window.addEventListener('keyup',function(e){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['13']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['46']++;if((__cov_0GTwwl$GMPTkkuRWFDyc4w.b['24'][0]++,e.keyCode===27)||(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['24'][1]++,e.keyCode===81)){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['23'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['47']++;_this2.close();}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['23'][1]++;}__cov_0GTwwl$GMPTkkuRWFDyc4w.s['48']++;if((__cov_0GTwwl$GMPTkkuRWFDyc4w.b['26'][0]++,e.keyCode===39)||(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['26'][1]++,e.keyCode===76)){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['25'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['49']++;_this2.next();}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['25'][1]++;}__cov_0GTwwl$GMPTkkuRWFDyc4w.s['50']++;if((__cov_0GTwwl$GMPTkkuRWFDyc4w.b['28'][0]++,e.keyCode===37)||(__cov_0GTwwl$GMPTkkuRWFDyc4w.b['28'][1]++,e.keyCode===72)){__cov_0GTwwl$GMPTkkuRWFDyc4w.b['27'][0]++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['51']++;_this2.prev();}else{__cov_0GTwwl$GMPTkkuRWFDyc4w.b['27'][1]++;}});__cov_0GTwwl$GMPTkkuRWFDyc4w.s['52']++;window.addEventListener('scroll',function(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['14']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['53']++;_this2.close();});__cov_0GTwwl$GMPTkkuRWFDyc4w.s['54']++;window.addEventListener('mousemove',function(){__cov_0GTwwl$GMPTkkuRWFDyc4w.f['15']++;__cov_0GTwwl$GMPTkkuRWFDyc4w.s['55']++;_this2.showUI();});}};

var babelHelpers = {};




var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

















































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

babelHelpers;

var __cov_WuSw60ZQZcI1aW7neh6dWA = (Function('return this'))();
if (!__cov_WuSw60ZQZcI1aW7neh6dWA.__coverage__) { __cov_WuSw60ZQZcI1aW7neh6dWA.__coverage__ = {}; }
__cov_WuSw60ZQZcI1aW7neh6dWA = __cov_WuSw60ZQZcI1aW7neh6dWA.__coverage__;
if (!(__cov_WuSw60ZQZcI1aW7neh6dWA['/home/fahrenq/code/v-img/lib/index.js'])) {
   __cov_WuSw60ZQZcI1aW7neh6dWA['/home/fahrenq/code/v-img/lib/index.js'] = {"path":"/home/fahrenq/code/v-img/lib/index.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"install","line":6,"loc":{"start":{"line":6,"column":14},"end":{"line":6,"column":45}}},"2":{"name":"bind","line":17,"loc":{"start":{"line":17,"column":10},"end":{"line":17,"column":37}}},"3":{"name":"(anonymous_3)","line":60,"loc":{"start":{"line":60,"column":35},"end":{"line":60,"column":47}}},"4":{"name":"(anonymous_4)","line":68,"loc":{"start":{"line":68,"column":43},"end":{"line":68,"column":56}}},"5":{"name":"(anonymous_5)","line":71,"loc":{"start":{"line":71,"column":43},"end":{"line":71,"column":56}}}},"statementMap":{"1":{"start":{"line":6,"column":0},"end":{"line":81,"column":2}},"2":{"start":{"line":7,"column":2},"end":{"line":7,"column":37}},"3":{"start":{"line":9,"column":2},"end":{"line":11,"column":4}},"4":{"start":{"line":14,"column":2},"end":{"line":14,"column":51}},"5":{"start":{"line":16,"column":2},"end":{"line":80,"column":5}},"6":{"start":{"line":19,"column":6},"end":{"line":19,"column":29}},"7":{"start":{"line":20,"column":6},"end":{"line":20,"column":23}},"8":{"start":{"line":21,"column":6},"end":{"line":21,"column":38}},"9":{"start":{"line":22,"column":6},"end":{"line":22,"column":25}},"10":{"start":{"line":23,"column":6},"end":{"line":23,"column":22}},"11":{"start":{"line":25,"column":6},"end":{"line":25,"column":45}},"12":{"start":{"line":25,"column":30},"end":{"line":25,"column":45}},"13":{"start":{"line":28,"column":6},"end":{"line":36,"column":7}},"14":{"start":{"line":29,"column":8},"end":{"line":29,"column":48}},"15":{"start":{"line":30,"column":8},"end":{"line":30,"column":39}},"16":{"start":{"line":31,"column":8},"end":{"line":31,"column":45}},"17":{"start":{"line":32,"column":8},"end":{"line":32,"column":45}},"18":{"start":{"line":33,"column":8},"end":{"line":33,"column":45}},"19":{"start":{"line":34,"column":8},"end":{"line":34,"column":45}},"20":{"start":{"line":35,"column":8},"end":{"line":35,"column":47}},"21":{"start":{"line":39,"column":6},"end":{"line":39,"column":57}},"22":{"start":{"line":40,"column":6},"end":{"line":40,"column":47}},"23":{"start":{"line":41,"column":6},"end":{"line":41,"column":57}},"24":{"start":{"line":43,"column":6},"end":{"line":43,"column":70}},"25":{"start":{"line":43,"column":16},"end":{"line":43,"column":70}},"26":{"start":{"line":46,"column":6},"end":{"line":46,"column":31}},"27":{"start":{"line":49,"column":6},"end":{"line":49,"column":29}},"28":{"start":{"line":50,"column":6},"end":{"line":56,"column":7}},"29":{"start":{"line":51,"column":8},"end":{"line":51,"column":52}},"30":{"start":{"line":52,"column":8},"end":{"line":52,"column":50}},"31":{"start":{"line":53,"column":8},"end":{"line":53,"column":60}},"32":{"start":{"line":55,"column":8},"end":{"line":55,"column":65}},"33":{"start":{"line":60,"column":6},"end":{"line":78,"column":9}},"34":{"start":{"line":61,"column":8},"end":{"line":61,"column":70}},"35":{"start":{"line":63,"column":8},"end":{"line":63,"column":133}},"36":{"start":{"line":64,"column":8},"end":{"line":75,"column":9}},"37":{"start":{"line":65,"column":10},"end":{"line":65,"column":39}},"38":{"start":{"line":66,"column":10},"end":{"line":66,"column":41}},"39":{"start":{"line":68,"column":10},"end":{"line":70,"column":14}},"40":{"start":{"line":69,"column":12},"end":{"line":69,"column":39}},"41":{"start":{"line":71,"column":10},"end":{"line":73,"column":14}},"42":{"start":{"line":72,"column":12},"end":{"line":72,"column":41}},"43":{"start":{"line":74,"column":10},"end":{"line":74,"column":63}},"44":{"start":{"line":76,"column":8},"end":{"line":76,"column":40}},"45":{"start":{"line":77,"column":8},"end":{"line":77,"column":37}}},"branchMap":{"1":{"line":21,"type":"binary-expr","locations":[{"start":{"line":21,"column":18},"end":{"line":21,"column":29}},{"start":{"line":21,"column":33},"end":{"line":21,"column":37}}]},"2":{"line":25,"type":"if","locations":[{"start":{"line":25,"column":6},"end":{"line":25,"column":6}},{"start":{"line":25,"column":6},"end":{"line":25,"column":6}}]},"3":{"line":28,"type":"if","locations":[{"start":{"line":28,"column":6},"end":{"line":28,"column":6}},{"start":{"line":28,"column":6},"end":{"line":28,"column":6}}]},"4":{"line":29,"type":"binary-expr","locations":[{"start":{"line":29,"column":17},"end":{"line":29,"column":37}},{"start":{"line":29,"column":41},"end":{"line":29,"column":47}}]},"5":{"line":30,"type":"binary-expr","locations":[{"start":{"line":30,"column":14},"end":{"line":30,"column":31}},{"start":{"line":30,"column":35},"end":{"line":30,"column":38}}]},"6":{"line":31,"type":"binary-expr","locations":[{"start":{"line":31,"column":16},"end":{"line":31,"column":35}},{"start":{"line":31,"column":39},"end":{"line":31,"column":44}}]},"7":{"line":32,"type":"binary-expr","locations":[{"start":{"line":32,"column":16},"end":{"line":32,"column":35}},{"start":{"line":32,"column":39},"end":{"line":32,"column":44}}]},"8":{"line":39,"type":"binary-expr","locations":[{"start":{"line":39,"column":44},"end":{"line":39,"column":49}},{"start":{"line":39,"column":53},"end":{"line":39,"column":55}}]},"9":{"line":41,"type":"binary-expr","locations":[{"start":{"line":41,"column":44},"end":{"line":41,"column":49}},{"start":{"line":41,"column":53},"end":{"line":41,"column":55}}]},"10":{"line":43,"type":"if","locations":[{"start":{"line":43,"column":6},"end":{"line":43,"column":6}},{"start":{"line":43,"column":6},"end":{"line":43,"column":6}}]},"11":{"line":50,"type":"if","locations":[{"start":{"line":50,"column":6},"end":{"line":50,"column":6}},{"start":{"line":50,"column":6},"end":{"line":50,"column":6}}]},"12":{"line":64,"type":"if","locations":[{"start":{"line":64,"column":8},"end":{"line":64,"column":8}},{"start":{"line":64,"column":8},"end":{"line":64,"column":8}}]}}};
}
__cov_WuSw60ZQZcI1aW7neh6dWA = __cov_WuSw60ZQZcI1aW7neh6dWA['/home/fahrenq/code/v-img/lib/index.js'];
__cov_WuSw60ZQZcI1aW7neh6dWA.s['1']++;var install=function install(Vue,options){__cov_WuSw60ZQZcI1aW7neh6dWA.f['1']++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['2']++;var Screen=Vue.extend(ImgScreen);__cov_WuSw60ZQZcI1aW7neh6dWA.s['3']++;var defaultOptions={altAsTitle:false};__cov_WuSw60ZQZcI1aW7neh6dWA.s['4']++;options=Object.assign(defaultOptions,options);__cov_WuSw60ZQZcI1aW7neh6dWA.s['5']++;Vue.directive('img',{bind:function bind(el,binding){__cov_WuSw60ZQZcI1aW7neh6dWA.f['2']++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['6']++;var cursor='pointer';__cov_WuSw60ZQZcI1aW7neh6dWA.s['7']++;var src=el.src;__cov_WuSw60ZQZcI1aW7neh6dWA.s['8']++;var group=(__cov_WuSw60ZQZcI1aW7neh6dWA.b['1'][0]++,binding.arg)||(__cov_WuSw60ZQZcI1aW7neh6dWA.b['1'][1]++,null);__cov_WuSw60ZQZcI1aW7neh6dWA.s['9']++;var title=void 0;__cov_WuSw60ZQZcI1aW7neh6dWA.s['10']++;var events={};__cov_WuSw60ZQZcI1aW7neh6dWA.s['11']++;if(options.altAsTitle){__cov_WuSw60ZQZcI1aW7neh6dWA.b['2'][0]++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['12']++;title=el.alt;}else{__cov_WuSw60ZQZcI1aW7neh6dWA.b['2'][1]++;}__cov_WuSw60ZQZcI1aW7neh6dWA.s['13']++;if(typeof binding.value!=='undefined'){__cov_WuSw60ZQZcI1aW7neh6dWA.b['3'][0]++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['14']++;cursor=(__cov_WuSw60ZQZcI1aW7neh6dWA.b['4'][0]++,binding.value.cursor)||(__cov_WuSw60ZQZcI1aW7neh6dWA.b['4'][1]++,cursor);__cov_WuSw60ZQZcI1aW7neh6dWA.s['15']++;src=(__cov_WuSw60ZQZcI1aW7neh6dWA.b['5'][0]++,binding.value.src)||(__cov_WuSw60ZQZcI1aW7neh6dWA.b['5'][1]++,src);__cov_WuSw60ZQZcI1aW7neh6dWA.s['16']++;group=(__cov_WuSw60ZQZcI1aW7neh6dWA.b['6'][0]++,binding.value.group)||(__cov_WuSw60ZQZcI1aW7neh6dWA.b['6'][1]++,group);__cov_WuSw60ZQZcI1aW7neh6dWA.s['17']++;title=(__cov_WuSw60ZQZcI1aW7neh6dWA.b['7'][0]++,binding.value.title)||(__cov_WuSw60ZQZcI1aW7neh6dWA.b['7'][1]++,title);__cov_WuSw60ZQZcI1aW7neh6dWA.s['18']++;events.opened=binding.value.opened;__cov_WuSw60ZQZcI1aW7neh6dWA.s['19']++;events.closed=binding.value.closed;__cov_WuSw60ZQZcI1aW7neh6dWA.s['20']++;events.changed=binding.value.changed;}else{__cov_WuSw60ZQZcI1aW7neh6dWA.b['3'][1]++;}__cov_WuSw60ZQZcI1aW7neh6dWA.s['21']++;el.setAttribute('data-vue-img-group',(__cov_WuSw60ZQZcI1aW7neh6dWA.b['8'][0]++,group)||(__cov_WuSw60ZQZcI1aW7neh6dWA.b['8'][1]++,''));__cov_WuSw60ZQZcI1aW7neh6dWA.s['22']++;el.setAttribute('data-vue-img-src',src);__cov_WuSw60ZQZcI1aW7neh6dWA.s['23']++;el.setAttribute('data-vue-img-title',(__cov_WuSw60ZQZcI1aW7neh6dWA.b['9'][0]++,title)||(__cov_WuSw60ZQZcI1aW7neh6dWA.b['9'][1]++,''));__cov_WuSw60ZQZcI1aW7neh6dWA.s['24']++;if(!src){__cov_WuSw60ZQZcI1aW7neh6dWA.b['10'][0]++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['25']++;console.error('v-img element missing src parameter.');}else{__cov_WuSw60ZQZcI1aW7neh6dWA.b['10'][1]++;}__cov_WuSw60ZQZcI1aW7neh6dWA.s['26']++;el.style.cursor=cursor;__cov_WuSw60ZQZcI1aW7neh6dWA.s['27']++;var vm=window.vueImg;__cov_WuSw60ZQZcI1aW7neh6dWA.s['28']++;if(!vm){__cov_WuSw60ZQZcI1aW7neh6dWA.b['11'][0]++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['29']++;var element=document.createElement('div');__cov_WuSw60ZQZcI1aW7neh6dWA.s['30']++;element.setAttribute('id','imageScreen');__cov_WuSw60ZQZcI1aW7neh6dWA.s['31']++;document.querySelector('body').appendChild(element);__cov_WuSw60ZQZcI1aW7neh6dWA.s['32']++;vm=window.vueImg=new Screen().$mount('#imageScreen');}else{__cov_WuSw60ZQZcI1aW7neh6dWA.b['11'][1]++;}__cov_WuSw60ZQZcI1aW7neh6dWA.s['33']++;el.addEventListener('click',function(){__cov_WuSw60ZQZcI1aW7neh6dWA.f['3']++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['34']++;document.querySelector('body').classList.add('body-fs-v-img');__cov_WuSw60ZQZcI1aW7neh6dWA.s['35']++;var images=[].concat(toConsumableArray(document.querySelectorAll('img[data-vue-img-group="'+group+'"]')));__cov_WuSw60ZQZcI1aW7neh6dWA.s['36']++;if(images.length===0){__cov_WuSw60ZQZcI1aW7neh6dWA.b['12'][0]++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['37']++;Vue.set(vm,'images',[src]);__cov_WuSw60ZQZcI1aW7neh6dWA.s['38']++;Vue.set(vm,'titles',[title]);}else{__cov_WuSw60ZQZcI1aW7neh6dWA.b['12'][1]++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['39']++;Vue.set(vm,'images',images.map(function(e){__cov_WuSw60ZQZcI1aW7neh6dWA.f['4']++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['40']++;return e.dataset.vueImgSrc;}));__cov_WuSw60ZQZcI1aW7neh6dWA.s['41']++;Vue.set(vm,'titles',images.map(function(e){__cov_WuSw60ZQZcI1aW7neh6dWA.f['5']++;__cov_WuSw60ZQZcI1aW7neh6dWA.s['42']++;return e.dataset.vueImgTitle;}));__cov_WuSw60ZQZcI1aW7neh6dWA.s['43']++;Vue.set(vm,'currentImageIndex',images.indexOf(el));}__cov_WuSw60ZQZcI1aW7neh6dWA.s['44']++;Vue.set(vm,'handlers',events);__cov_WuSw60ZQZcI1aW7neh6dWA.s['45']++;Vue.set(vm,'closed',false);});}});};

return install;

})));
//# sourceMappingURL=v-img.js.map
